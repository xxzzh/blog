# Xiong Zheng 的博客

基于 [Astro](https://astro.build/) + 开源主题 [AstroPaper](https://github.com/satnaing/astro-paper)（MIT 协议）搭建的个人博客。

功能：中文界面 · 全文搜索（Pagefind，支持中文）· 标签 / 归档 · RSS · 暗色模式 · 代码高亮 · 提示块 · 自动目录 · SEO / sitemap

## 常用命令

| 命令           | 作用                                           |
| -------------- | ---------------------------------------------- |
| `pnpm install` | 安装依赖                                       |
| `pnpm dev`     | 本地开发预览：<http://localhost:4321/blog/>    |
| `pnpm build`   | 构建静态站点到 `dist/`（含类型检查和搜索索引） |
| `pnpm preview` | 预览构建后的站点                               |

## 写文章

在 `src/content/posts/` 下新建 `xxx.md`，开头填写：

```yaml
---
title: 文章标题
pubDatetime: 2026-11-04T10:00:00+08:00
tags: [标签]
description: 一句话摘要
draft: false
featured: false
---
```

详细说明见站内文章《如何在这个博客里发布一篇新文章》。

## 需要修改的地方

- `astro-paper.config.ts`：站点标题、描述、作者、网址、社交链接
- `src/content/pages/about.md`：关于页面
- `src/pages/index.astro`：首页欢迎语
- `src/i18n/lang/zh-cn.ts`：界面文案
- `public/default-og.jpg`：社交分享图（1200×630）
- `public/favicon.svg`：网站图标

## 部署到 GitHub Pages

- 仓库：<https://github.com/xxzzh/blog>
- 线上地址：<https://xxzzh.github.io/blog/>

每次 push 到 `master` 分支，`.github/workflows/deploy.yml` 会自动构建并发布
（仓库 **Settings → Pages → Source** 需为 **GitHub Actions**）。

> 由于站点部署在子路径 `/blog/` 下，`astro.config.ts` 中设置了 `base: "/blog"`。
> 在文章中引用 `public/` 下的文件时请使用相对路径，或带上 `/blog/` 前缀。

也可以直接把仓库导入 [Vercel](https://vercel.com) 或 [Cloudflare Pages](https://pages.cloudflare.com)，构建命令 `pnpm build`，输出目录 `dist`。
