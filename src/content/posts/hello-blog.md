---
title: 博客开张：用 Astro + Firefly 搭建个人博客
published: 2026-11-04T10:00:00+08:00
pinned: true
description: 第一篇文章，聊聊为什么要写博客，以及这个博客是怎样基于开源主题 Firefly 快速搭建起来的。
tags: [建站, Astro, Firefly]
category: 建站笔记
---

终于有了自己的博客 🎉。这是第一篇文章，简单记录一下建站的过程和选型思路。

## 为什么写博客

- **整理知识**：把学到的东西写下来，是检验自己是否真正理解的最好方式。
- **留下记录**：过一段时间回头看，能清楚地看到自己的成长轨迹。
- **与人交流**：好的内容会被搜索引擎收录，也许能帮到遇到同样问题的人。

## 技术选型

在 GitHub 上对比了十几个成熟的开源博客方案：

| 方案                 | 技术栈  | 特点                               |
| -------------------- | ------- | ---------------------------------- |
| Hexo + Butterfly     | Node.js | 中文社区非常活跃，主题花哨、功能多 |
| Hugo + Stack         | Go      | 三栏卡片，构建极快，需要安装 Hugo  |
| Astro + AstroPaper   | Astro   | 极简、等宽字体、纯文字             |
| **Astro + Firefly** ✅ | Astro   | 清新美观、功能丰富、中文友好       |

最终选择了 **[Firefly](https://github.com/CuteLeaf/Firefly)**（基于 [Fuwari](https://github.com/saicaca/fuwari) 二次开发），原因是：

1. 颜值高：横幅大图、圆角卡片、主题色可调、明暗模式；
2. 功能全：全文搜索、分类、标签、归档、目录、代码高亮、数学公式、Mermaid 图表；
3. 文章就是普通的 Markdown 文件，写作体验简单；
4. 生成纯静态页面，可以免费部署到 GitHub Pages。

## 目录结构

```text
boke/
├── astro.config.mjs        # Astro 配置（部署子路径 base 在这里）
├── public/                 # 静态资源（favicon 等）
└── src/
    ├── config/             # ⚙️ 所有主题配置：站点、个人资料、侧边栏、横幅……
    └── content/
        ├── posts/          # ✍️ 所有博客文章都放在这里
        └── spec/about.md   # “关于”页面
```

## 接下来

接下来会陆续写一些技术笔记和学习心得，欢迎通过 RSS 订阅 👋。
