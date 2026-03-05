# 新增 Taiwan 合作夥伴 Logo 教學

本文档説明如何在官方网站上添加新的Taiwan合作夥伴Logo。

## 准备 Icon 文件

### 推荐尺寸
- **最小建议**：300px × 300px（2倍像素密度）
- **推荐**：600px × 600px（4倍像素密度，支持Retina屏幕）
- **格式**：
  - SVG（推荐）- 如果是矢量Logo，使用SVG格式最优
  - PNG - 如果是栅格图像，确保背景透明

### 尺寸说明
在网站上展示时，合作夥伴Logo会显示为 **150px × 150px** 的正方形。

## 步骤

### 1. 上传 Icon 文件
将准备好的logo文件放入项目目录：
```
public/images/partnership/
```

文件名规范（使用小写 + 连字符）：
- ✅ `company-name.png`
- ✅ `company-name.svg`
- ❌ `CompanyName.png`
- ❌ `company_name.png`

### 2. 编辑 Partnership 配置文件
打开 `app/partnership.tsx`，在 `taiwan` 数组中添加新记录。

**位置说明**：
- 在该合作夥伴在列表中的适当位置添加（通常按字母顺序或战略重要性）

**代码示例**：
```typescript
const taiwan: Partner[] = [
  // ... 其他合作夥伴 ...
  {
    id: 'company-id',           // 小写 + 连字符格式的唯一ID
    image: '/images/partnership/company-logo.png',  // 对应文件路径
    href: 'https://www.company.com.tw/',  // 合作夥伴官网URL
  },
  // ... 其他合作夥伴 ...
];
```

## 实际例子：添加 MeriBank

### 1️⃣ 上传文件
将 `meribank.png` (600×600px) 放入 `public/images/partnership/`

### 2️⃣ 编辑 `app/partnership.tsx`
在秀傳醫療體系（show-chwan）之後添加：

```typescript
{
  id: 'show-chwan',
  image: '/images/partnership/show-chawn.png',
  href: 'https://www.scmh.org.tw/',
},
{
  id: 'meribank',
  image: '/images/partnership/meribank.png',
  href: 'https://www.meribank.com.tw/',
},
{
  id: 'appworks',
  image: '/images/partnership/appworks.svg',
  href: 'https://appworks.tw/',
},
```

### 3️⃣ 验证
运行本地开发服务器检查效果：
```bash
npm run dev
```
访问 http://localhost:3000 → Partnership 章节 → 查看新增的 Taiwan 合作夥伴

## 需要注意的事项

✅ **最佳实践**：
- 使用高质量的logo（推荐 600×600px）
- 确保logo背景透明（如果是PNG）
- 与合作夥伴确认logo使用权限
- Logo应该在150×150px显示下仍然清晰可辨

❌ **常见错误**：
- Logo太小导致显示不清（< 300px）
- 文件路径写错（如大小写不符、文件不存在）
- 忘记在`list_dir`后提交文件
- href URL不正确或链接失效

## 故障排除

**Logo显示为空或破裂图标**：
- 检查文件是否确实在 `public/images/partnership/` 目录
- 检查 `image` 路径是否正确（路径应该与实际文件名完全匹配）
- 检查浏览器缓存（尝试硬刷新 Cmd+Shift+R）

**Logo显示不清晰**：
- 确保原始文件至少 300px × 300px
- 优先使用 600px × 600px 的高质量版本

## 参考资源

- 项目结构：见 `README.md`
- 现有Taiwan合作夥伴：`app/partnership.tsx` 中的 `taiwan` 数组
- 国际合作夥伴配置：同样在 `app/partnership.tsx` 中的 `international` 数组
