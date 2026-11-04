---
title: 如何在这个博客里发布一篇新文章
published: 2026-11-04T11:00:00+08:00
description: 写给自己的备忘：新建文章、填写 frontmatter、本地预览、发布上线的完整流程。
tags: [建站, 指南]
category: 建站笔记
---

这是一份写给未来的自己的备忘录，记录发布一篇新文章的完整流程。

## 1. 新建文件

在 `src/content/posts/` 目录下新建一个 `.md`（或 `.mdx`）文件，**文件名就是文章的网址**：

```text
src/content/posts/my-first-note.md  →  /blog/posts/my-first-note/
```

也可以用命令自动生成模板：

```bash
pnpm new-post my-first-note
```

> [!TIP]
> 文件名建议使用英文小写加短横线，例如 `learn-rust-day-1.md`，网址会更干净。

## 2. 填写 frontmatter

每篇文章开头都需要一段 YAML 格式的元信息：

```yaml
---
title: 文章标题
published: 2026-11-04 # 发布日期（必填）
updated: 2026-11-05 # 更新日期（可选）
description: 一句话摘要，显示在文章列表和搜索引擎结果中
image: ./cover.webp # 封面图（可选，图片放在文章旁边）
tags: [标签一, 标签二]
category: 分类名
pinned: false # 是否置顶
draft: false # true 表示草稿，不会被发布
---
```

## 3. 本地预览

```bash
pnpm dev
```

打开 <http://localhost:4321/blog/> 即可实时预览，保存文件后页面会自动刷新。

## 4. 发布上线

```bash
git add .
git commit -m "post: 新文章标题"
git push
```

推送到 GitHub 的 `master` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages，几分钟后就能在线上看到新文章。

## 5. 插入图片

建议给每篇带图的文章建一个文件夹，把图片和文章放在一起，用相对路径引用，Astro 会自动压缩优化：

```text
src/content/posts/my-trip/
├── index.md
└── photo.webp
```

```md
![图片说明](./photo.webp)
```
