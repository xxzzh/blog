# Xiong Zheng 的博客

基于 [Astro](https://astro.build/) + 开源主题 [Firefly](https://github.com/CuteLeaf/Firefly)（MIT 协议，基于 [Fuwari](https://github.com/saicaca/fuwari) 二次开发）搭建的个人博客。

- 线上地址：<https://xxzzh.github.io/blog/>
- 仓库：<https://github.com/xxzzh/blog>

## 常用命令

| 命令                   | 作用                                        |
| ---------------------- | ------------------------------------------- |
| `pnpm install`         | 安装依赖                                    |
| `pnpm dev`             | 本地开发预览：<http://localhost:4321/blog/> |
| `pnpm build`           | 构建静态站点到 `dist/`                      |
| `pnpm preview`         | 预览构建后的站点                            |
| `pnpm new-post <名字>` | 新建一篇文章                                |

## 网页后台（在线编辑）

地址：<https://xxzzh.github.io/blog/admin/>（基于开源的 [Sveltia CMS](https://sveltiacms.app)）

可以在网页上：写/改/删文章、上传图片，修改个人资料（名字、签名、头像）、首页横幅文字、公告、站点标题和「关于我」页面。
保存后会自动提交到本仓库并触发部署，约 3 分钟后线上生效。

**首次登录：**

1. 打开后台，点 **使用访问令牌登录**，对话框里有一个生成令牌的链接（GitHub 页面，已预选好权限）；
2. 在 GitHub 上生成令牌（Fine-grained token：仓库选 `xxzzh/blog`，权限 **Contents: Read and write**），复制；
3. 粘贴到对话框即可。令牌只保存在当前浏览器里，换电脑需重新登录。令牌请勿分享给他人。

> 个人信息、横幅文字、公告等保存在 `src/data/site.json`，主题配置文件会读取它；后台配置在 `public/admin/config.yml`。
> 后台里新建文章时，可在右侧「Slug」面板把网址改成英文（如 `my-first-note`），默认是「日期-随机串」。

## 写文章

在 `src/content/posts/` 下新建 `xxx.md`，开头填写：

```yaml
---
title: 文章标题
published: 2026-11-04
description: 一句话摘要
image: ./cover.webp # 可选，封面图
tags: [标签]
category: 分类
draft: false
---
```

详细说明见站内文章《如何在这个博客里发布一篇新文章》。

## 主要配置文件（`src/config/`）

| 文件                     | 内容                                           |
| ------------------------ | ---------------------------------------------- |
| `siteConfig.ts`          | 站点标题、描述、主题色、页面开关、文章列表布局 |
| `profileConfig.ts`       | 头像、名字、签名、社交链接                     |
| `backgroundWallpaper.ts` | 首页横幅图片、标题与打字机副标题               |
| `sidebarConfig.ts`       | 左右侧边栏组件（公告、分类、标签、日历等）     |
| `announcementConfig.ts`  | 公告内容                                       |
| `navBarConfig.ts`        | 顶部导航菜单                                   |
| `musicConfig.ts`         | 音乐播放器（目前关闭）                         |
| `commentConfig.ts`       | 评论系统（目前关闭，可选 Giscus/Twikoo 等）    |

完整配置说明见 [Firefly 文档](https://docs-firefly.cuteleaf.cn)。

> [!IMPORTANT]
> 站点部署在子路径 `/blog/` 下（`astro.config.mjs` 中 `base: "/blog/"`）。
> 在配置文件里填写**站内链接**时需要带上 `/blog/` 前缀，例如 `"/blog/about/"`。

## 部署

每次 push 到 `master` 分支，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages
（仓库 **Settings → Pages → Source** 为 **GitHub Actions**）。
