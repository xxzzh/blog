---
title: 如何在这个博客里发布一篇新文章
pubDatetime: 2026-11-04T11:00:00+08:00
featured: false
draft: false
tags:
  - 建站
  - 指南
description: 写给自己的备忘：新建文章、填写 frontmatter、本地预览、发布上线的完整流程。
---

这是一份写给未来的自己的备忘录，记录发布一篇新文章的完整流程。

## 目录

## 1. 新建文件

在 `src/content/posts/` 目录下新建一个 `.md`（或 `.mdx`）文件，**文件名就是文章的网址**：

```text
src/content/posts/my-first-note.md  →  /posts/my-first-note/
```

> [!TIP]
> 文件名建议使用英文小写加短横线，例如 `learn-rust-day-1.md`，网址会更干净。
> 以下划线 `_` 开头的文件或目录不会被发布，可以用来放草稿素材。

## 2. 填写 frontmatter

每篇文章开头都需要一段 YAML 格式的元信息：

```yaml
---
title: 文章标题
pubDatetime: 2026-11-04T10:00:00+08:00 # 发布时间（必填）
modDatetime: # 修改时间（可选）
featured: false # 是否在首页“精选文章”中展示
draft: false # true 表示草稿，不会被发布
tags:
  - 标签一
  - 标签二
description: 一句话摘要，会显示在文章列表和搜索引擎结果中（必填）
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

推送到 GitHub 的 `master` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages，一两分钟后就能在线上看到新文章。

## 5. 插入图片

把图片放在文章旁边，用相对路径引用，Astro 会自动压缩优化：

```md
![图片说明](./assets/screenshot.png)
```
