---
name: add-news
description: Add a news article to the AHEAD official website's news list. Use whenever the user says they want to add / 新增 / 加一則 news / 新聞 / 新聞文章 / press item to this project, mentions wanting to publish a news entry, hands you a news URL + image + date combination, asks to update the news page, or wants something to appear on the /news page or homepage news carousel. Trigger even when the user only provides a partial set of inputs (e.g. only image filename and URL) — this skill knows how to interview for the rest. Do NOT trigger for editing existing news items (just edit the file directly) or for non-news content like partner/team additions.
---

# Adding a News Item

This skill automates the full workflow for adding a news entry to `app/api/news/[tag]/data.ts` — including type-safety, the awkward case where the external URL doesn't actually mention AHEAD, the commit, and the push (this repo has a special credential setup, see below).

## What you need from the user (collect as you go — don't batch-ask)

The user typically gives you a subset of these. Fill the rest by asking, by fetching, or by inferring from existing data:

| Field | Required | How to get if missing |
|-------|----------|-----------------------|
| Image file | Yes | Ask user to drop it in `public/images/news/` first. Verify with `ls`. |
| External URL | Yes | Ask user. |
| Date | Yes | Ask user (format `YYYY-MM-DD`). |
| Source label | Yes | Must be one of the `NewsTitle` enum values — see "Type constraints" below. |
| Title | Yes | If external URL clearly states an AHEAD-related title, use it. If not (see "URL doesn't mention AHEAD" below), draft 4–6 candidate titles and let the user pick. |
| `id` slug | You generate | Pattern: `<source>-<topic>-<year>`, e.g. `ey-startup-alliance-premier-award-2026`. Must be unique across `newsList`. |
| `is_highlight` | You suggest | Default to `true` for award wins / major MOUs / international press; `false` for routine coverage. Confirm with user. |

## The workflow

### 1. Verify the image exists

```bash
ls -la public/images/news/<filename>
```

If missing, stop and tell the user where to put it. Don't fabricate a path.

### 2. Fetch the external URL with WebFetch

Confirm the URL is live and read enough of the page to know:
- The actual page title
- Whether the page mentions AHEAD / 先勁智能 anywhere in the visible content

This matters because the news list links readers to this URL — if the page doesn't mention AHEAD, a reader clicking the card will be confused. **Always check.**

### 3. If the external page doesn't mention AHEAD

Tell the user explicitly. Then offer multiple title strategies for them to pick from. Generate **at least 4 variants** spanning these angles:

- **Original-style** — use the external page's actual headline (warns the user "reader won't see AHEAD when they click")
- **AHEAD-subject** — rewrite to put 先勁智能 as the subject (needs user to confirm the award/topic specifics)
- **Concise** — short, matches the existing data.ts house style: "主詞＋動作＋重點"
- **Media-style** — longer, with framing context (e.g. "AI 醫療新創獲國家級肯定　先勁智能...")
- **News-impact** — leads with the action (e.g. "XX 院長親頒...")

Then **recommend one** based on similarity to existing entries in `data.ts` (typically the concise house-style variant). Don't pick for them — present and recommend.

If the external page **does** mention AHEAD clearly, you can usually just adapt its headline directly and skip this step.

### 4. Construct the news object

```ts
{
  id: "<source>-<topic>-<year>",
  url: "<external URL>",
  image: "/images/news/<filename>",
  tag: "press_chinese",  // see Type constraints
  title: "<chosen title>",
  is_highlight: true,    // or false
  footer: [
    { variant: "border", text: "Press (Chinese)" },  // must be NewsTitle enum
    { variant: "normal", text: "2026-05-27" }        // YYYY-MM-DD
  ]
}
```

### 5. Insert at the TOP of `newsList`

The list is ordered newest-first. New entries go at index 0 in `app/api/news/[tag]/data.ts`. Use the Edit tool — match against the first item's opening `{` to insert above it.

### 6. Type-check

```bash
pnpm exec tsc --noEmit
```

Must pass before committing. If it fails, the most common culprit is `footer[0].text` not matching the `NewsTitle` enum.

### 7. Show the result and ask about commit

Don't auto-commit. Ask the user. If yes, use this commit message format (matches existing history — see `eb6a743`, `eb0e3b3`):

```
feat: add <descriptive-slug> news item
```

Stage only the two changed files (the data.ts edit + the image):

```bash
git add "app/api/news/[tag]/data.ts" public/images/news/<filename>
```

### 8. If the user wants to push

This repo has a **special credential setup** — see memory `git-push-account` for full context. TL;DR: this repo's local git config routes credentials through `gh auth token --user fongcilin` because the global gh active account is `tonebeta` but `tonebeta` has no write access here. **Just run `git push`** — the helper handles auth. If you see "Permission denied to tonebeta", the local credential helper is missing and needs to be re-applied (see memory).

## Type constraints (critical — type-safety violations here are silent landmines)

From `app/api/news/[tag]/types.ts`:

**`tag`** — one of: `'all' | 'press_chinese' | 'press_english' | 'social_media' | 'publication' | 'conference'`

But there's a gotcha in `app/api/news/[tag]/server-fetches.ts:5-7`: entries with tag `publication` or `conference` are **filtered out** of the `/news` page. So in practice, if the user wants the item to show up on the public news page, only `press_chinese` / `press_english` / `social_media` work. If they want a conference/publication entry, tell them it won't appear on `/news` and ask them to confirm.

**`footer[0].text`** when `variant: "border"` — must be one of the `NewsTitle` enum:
- `'All'`
- `'Press (Chinese)'`
- `'Press (English)'`
- `'Social Media'`
- `'Publication'`
- `'Conference'`

⚠️ `docs/add_news.md` has an outdated example using `{ variant: "border", text: "鉅亨網" }` — **that will fail TypeScript**. Always use the enum value matching the `tag`. The "source/outlet name" doesn't live in the footer; it's implied by the URL and the image.

**`is_highlight`** is a `HighlightNews`-only field. The skill should always include it (the type union accepts both `News` and `HighlightNews`).

## Common pitfalls

- **Inserting at the wrong end of the array** — newest goes at the TOP (index 0), not the bottom. The page renders in array order.
- **Forgetting to verify the image path** — typos here produce a broken image card with no TypeScript warning.
- **Using full-width vs half-width spaces in titles** — match the user's input exactly. Existing titles use `　` (full-width space) as a separator between two clauses; don't silently convert to half-width.
- **Auto-committing** — never. Always show the user the change first.
- **Trying to push without the credential helper** — will fail with 403. See memory `git-push-account`.

## Reference

Background documentation for this feature lives at `docs/add_news.md`. That doc is older and has one inaccurate example (the `text: "鉅亨網"` thing mentioned above) but the rest of it is correct context — image placement, field meanings, where things appear on the site.
