# Dependabot 36 漏洞修補設計

> 日期：2026-04-30
> Owner：碼農大大
> Repo：fongcilin/ahead-official-website (main)

## Context

`fongcilin/ahead-official-website` push 後 GitHub 警告默認分支有 36 個 dependabot 漏洞（16 high / 18 moderate / 2 low）。專案已是 Next 16.0.7 + React 19 + pnpm@10 + Node ≥22 的最新主線，但 pnpm-lock 內仍卡著一批舊的 transitive 套件，加上 Next.js 自身有未升級的 CVE。沒有 CI、僅 Playwright `responsive.spec.ts` 一支 E2E、Docker + Caddy 手動部署。

目標：把 36 個漏洞清掉、確保 build / E2E / dev 視覺都過，並建立週期性 dependabot 機制避免再次累積。

## 漏洞分布

| Group | 套件 | Alerts | 來源 |
|-------|------|--------|------|
| A. Transitive | minimatch, picomatch, flatted, brace-expansion, ajv | 14 | pnpm-lock |
| B. Direct | next | 22 | package.json |

## 決策（已與碼農大大確認）

1. **拆兩個 PR** — PR1 只動 transitive + 加 dependabot.yml；PR2 升 Next.js
2. **PR1 走 `pnpm.overrides`** — 在 package.json 明確 pin 版本，避免 silent downgrade
3. **PR2 next@latest，遇 breaking 修到過為止**
4. **dependabot.yml 加在 PR1**，groups 設定 minor/patch 自動、major 手動

## PR1 範圍

### 修改檔案
- `package.json` — 新增 `pnpm.overrides` 區塊
- `pnpm-lock.yaml` — `pnpm install` 重生
- `.github/dependabot.yml` — 新增

### `pnpm.overrides` 目標版本
```jsonc
"pnpm": {
  "overrides": {
    "minimatch": "^9.0.5",
    "picomatch": "^4.0.3",
    "flatted": "^3.3.3",
    "brace-expansion": "^2.0.2",
    "ajv": "^8.17.1"
  }
}
```
（實際版本以 `pnpm view <pkg> versions` 確認的最新 patched 版為準。）

### `.github/dependabot.yml`
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
    groups:
      minor-and-patch:
        update-types: ["minor", "patch"]
```

### 驗證
1. `pnpm install --frozen-lockfile`（重生後再試 frozen，必須過）
2. `pnpm build` 綠燈
3. `pnpm test:e2e` 綠燈
4. PR merge 後 GitHub Security 的 `next` 之外 14 個 alert 應全部關閉

## PR2 範圍（後續）

### 修改檔案
- `package.json` — `next` 版本號
- `pnpm-lock.yaml`
- 視 release notes 修 app code

### 步驟
1. `pnpm view next versions --json | tail -n 5` 確認 latest 16.x
2. `pnpm add next@latest`
3. 讀 release notes（重點：image / route handlers / middleware / cache）
4. `pnpm build` → 修錯 → `pnpm test:e2e` → `pnpm dev` 翻 `/`、`/news`、`/partnership`
5. 必要時改 `next.config.*`、API route signature

### 驗證
- build / E2E / dev 翻頁綠燈
- merge 後 22 個 next alerts 應全部關閉（剩 0）

## 關鍵檔案路徑

- `/Users/fongci/AHEAD/ahead-official-website/package.json`
- `/Users/fongci/AHEAD/ahead-official-website/pnpm-lock.yaml`
- `/Users/fongci/AHEAD/ahead-official-website/.github/dependabot.yml`（新）
- `/Users/fongci/AHEAD/ahead-official-website/next.config.*`（PR2 視需要）
- `/Users/fongci/AHEAD/ahead-official-website/tests/e2e/responsive.spec.ts`（驗證腳本）

## 風險與回滾

- **PR1**：overrides 把 transitive 拉到新 major（如 minimatch 5→9）有極低機率某 build 工具相容性出問題。回滾 = `git revert`。
- **PR2**：Next.js 升級可能破 image / middleware。回滾 = `git revert` 該 PR 即可，pnpm-lock 跟著回。
