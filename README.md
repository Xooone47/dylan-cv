# Dylan's CV

- 网页版: https://xooone47.github.io/dylan-cv/
- 支持导出为PDF文件

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

## GitHub Pages

项目按 GitHub Project Pages 配置，Vite `base` 为 `/dylan-cv/`。

1. 源码推送到 `Xooone47/dylan-cv` 的 `main` 分支。
2. 执行 `pnpm build` 生成 `dist`。
3. 将 `dist` 推送到 `gh-pages` 分支，仓库 Settings > Pages 选择 `gh-pages /`。

如果仓库名变化，需要同步修改 `vite.config.ts` 里的 `base`。
