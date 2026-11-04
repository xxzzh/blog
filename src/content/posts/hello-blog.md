---
title: 博客开张：用 Astro 搭建个人博客
pubDatetime: 2026-11-04T10:00:00+08:00
featured: true
draft: false
tags:
  - 建站
  - Astro
description: 第一篇文章，聊聊为什么要写博客，以及这个博客是怎样基于开源主题 AstroPaper 快速搭建起来的。
---

终于有了自己的博客 🎉。这是第一篇文章，简单记录一下建站的过程和选型思路。

## 目录

## 为什么写博客

- **整理知识**：把学到的东西写下来，是检验自己是否真正理解的最好方式。
- **留下记录**：过一段时间回头看，能清楚地看到自己的成长轨迹。
- **与人交流**：好的内容会被搜索引擎收录，也许能帮到遇到同样问题的人。

## 技术选型

在 GitHub 上对比了几个成熟的开源博客方案：

| 方案                                     | 技术栈     | 特点                               |
| ---------------------------------------- | ---------- | ---------------------------------- |
| Hexo + Butterfly                         | Node.js    | 中文社区非常活跃，主题花哨、功能多 |
| Hugo + PaperMod                          | Go         | 构建速度极快，需要单独安装 Hugo    |
| Astro + Fuwari                           | Astro      | 颜值高，二次元风格                 |
| **Astro + [AstroPaper][astro-paper]** ✅ | Astro + TS | 极简、快速、SEO 友好、维护活跃     |

最终选择了 **AstroPaper**，原因是：

1. 本机已经有 Node.js，无需额外安装工具；
2. 文章就是普通的 Markdown 文件，写作体验简单；
3. 自带**全文搜索**、**标签**、**归档**、**RSS**、**暗色模式**、**代码高亮**；
4. 生成纯静态页面，可以免费部署到 GitHub Pages / Vercel / Cloudflare Pages。

[astro-paper]: https://github.com/satnaing/astro-paper

## 目录结构

```text
boke/
├── astro-paper.config.ts   # 站点标题、作者、社交链接等配置
├── public/                 # 静态资源（favicon、默认分享图）
└── src/
    ├── content/
    │   ├── posts/          # ✍️ 所有博客文章都放在这里
    │   └── pages/about.md  # “关于”页面
    └── i18n/lang/zh-cn.ts  # 界面中文文案
```

## 接下来

接下来会陆续写一些技术笔记和学习心得，欢迎通过 RSS 订阅 👋。
