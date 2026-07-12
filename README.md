# CV 2026

黎思奇的 2026 Web 简历，基于 `/Users/dylan/Documents/Projects/doc-repo/40 - Archive/Personal/CV/CV - 2026.md` 制作。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建预览

```bash
pnpm build
pnpm preview
```

## 导出 PDF

在浏览器打开页面后点击顶部的“导出 PDF”。页面会按 A4 版式输出，并隐藏顶部操作栏。
导出时请在浏览器打印设置中关闭“页眉和页脚”；页面会自行在右下角生成页码。

## GitHub Pages

项目默认按 GitHub Project Pages 配置，Vite `base` 为 `/cv-2026/`。

1. 将项目推送到名为 `cv-2026` 的 GitHub 仓库。
2. 在仓库 Settings > Pages 中选择 GitHub Actions 作为构建来源。
3. 推送到 `main` 分支后，`.github/workflows/deploy.yml` 会构建并部署 `dist`。

如果仓库名不是 `cv-2026`，需要同步修改 `vite.config.ts` 里的 `base`。
