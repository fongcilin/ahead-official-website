# 如何新增一則 News

根據專案的數據驅動內容模式，以下是添加新聞的詳細步驟。

## 快速步驟

1. **打開數據文件**
   - 編輯 `app/api/news/[tag]/data.ts`

2. **在 `newsList` 陣列中追加新聞物件**

3. **準備圖片**
   - 將圖片放在 `public/images/news/` 目錄下

4. **發佈**
   - 新聞會自動出現在相應分類頁面

## 詳細說明

### 新聞物件結構

```typescript
{
  id: "unique-url-slug",
  url: "https://external-link-to-news.com",
  image: "/images/news/your-image-filename.png",
  tag: "press_chinese" | "press_english" | "conference",
  title: "新聞標題",
  is_highlight: false,
  footer: [
    { variant: "border", text: "新聞標籤" },
    { variant: "normal", text: "2026-03-05" }
  ]
}
```

### 字段說明

| 字段 | 類型 | 說明 | 範例 |
|------|------|------|------|
| `id` | `string` | 唯一標識符，使用 URL slug 格式 | `"cnyes-ahead-biotech-2025"` |
| `url` | `string` | 外鏈地址，指向新聞來源 | `"https://news.cnyes.com/news/id/6362793"` |
| `image` | `string` | 新聞圖片路徑（必須放在 `public/images/news/` 下） | `"/images/news/cnyes-ahead-biotech.png"` |
| `tag` | `string` | 新聞分類標籤 | `"press_chinese"` |
| `title` | `string` | 新聞標題 | `"AHEAD Medicine 推動生物醫藥創新"` |
| `is_highlight` | `boolean` | 是否在首頁轮播展示 | `false` 或 `true` |
| `footer` | `array` | 頁腳信息陣列，可包含多個標籤 | 見下說明 |

### footer 字段詳解

`footer` 是物件陣列，每個物件包含：
- `variant`: `"border"` (邊框樣式) 或 `"normal"` (普通文字)
- `text`: 顯示的文字內容

**推薦組合**：
```typescript
footer: [
  { variant: "border", text: "新聞來源" },      // 第一個通常是來源
  { variant: "normal", text: "2026-03-05" }    // 第二個通常是日期
]
```

### tag 分類說明

| 標籤 | 用途 | 頁面位置 |
|------|------|--------|
| `press_chinese` | 中文新聞稿 | `/news/press_chinese` |
| `press_english` | 英文新聞稿 | `/news/press_english` |
| `conference` | 會議相關新聞 | `/news/conference` |

## 完整示例

以鉅亨網文章為例：

```typescript
{
  id: "cnyes-ahead-biotech-2025",
  url: "https://news.cnyes.com/news/id/6362793",
  image: "/images/news/cnyes-ahead-biotech.png",
  tag: "press_chinese",
  title: "AHEAD Medicine 推動生物醫藥創新",
  is_highlight: false,
  footer: [
    { variant: "border", text: "鉅亨網" },
    { variant: "normal", text: "2025-12-11" }
  ]
}
```

## 操作檢查清單

- [ ] 準備新聞圖片（建議 16:9 比例，最少 600x337px）
- [ ] 將圖片保存到 `public/images/news/` 目錄
- [ ] 打開 `app/api/news/[tag]/data.ts`
- [ ] 在 `newsList` 陣列末尾追加新聞物件
- [ ] 確認所有必要字段已填寫
- [ ] 本地測試驗證 (`npm run dev`)
- [ ] 檢查新聞是否正確出現在相應分類頁面

## 新聞在網站中的位置

- **分類頁面**: `/news/[tag]` 會顯示該分類的所有新聞
  - 例：`/news/press_chinese` 顯示所有中文新聞
- **首頁輪播**: 如果 `is_highlight: true`，該新聞會出現在首頁的新聞輪播中
- **詳細頁面**: 點擊新聞卡片會跳轉到 `url` 指定的外部連結

## 注意事項

✅ **圖片必須分別準備**：自動生成或從新聞來源下載，放入 `public/images/news/`  
✅ **ID 必須唯一**：避免重複，建議使用 `來源-主題-年份` 格式  
✅ **日期格式**：使用 `YYYY-MM-DD` 格式 (例：`2026-03-05`)  
✅ **高亮設置**：首頁輪播最多顯示最新的幾則高亮新聞  
✅ **外鏈驗證**：確保 `url` 指向的連結有效可訪問  

## 故障排除

| 問題 | 解決方案 |
|------|--------|
| 新聞沒有顯示 | 檢查 `tag` 是否正確，確認列表語法無誤 |
| 圖片不顯示 | 檢查 `image` 路徑是否正確，圖片是否存在於 `public/images/news/` |
| 輪播未顯示該新聞 | 確認 `is_highlight: true`，檢查首頁輪播條件 |
| 樣式異常 | 清除浏覽器緩存，重新運行 `npm run dev` |
