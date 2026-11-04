---
title: Markdown 写作速查表
pubDatetime: 2026-11-04T12:00:00+08:00
featured: false
draft: false
tags:
  - Markdown
  - 指南
description: 常用 Markdown 语法与本博客支持的扩展写法（代码高亮、提示块、表格等）一览。
---

本文列出写博客时最常用的 Markdown 语法，同时也是本站排版效果的展示页。

## 目录

## 文本样式

**粗体**、_斜体_、~~删除线~~、`行内代码`、[链接](https://astro.build)。

> 引用：纸上得来终觉浅，绝知此事要躬行。

## 列表

- 无序列表项
- 另一项
  - 嵌套项

1. 有序列表
2. 第二步
3. 第三步

- [x] 已完成的任务
- [ ] 待办任务

## 代码高亮

```ts title="greet.ts"
function greet(name: string): string {
  return `你好，${name}！`; // [!code highlight]
}

console.log(greet("世界"));
```

```diff lang="js"
- const answer = 41;
+ const answer = 42;
```

```python
def fib(n: int) -> int:
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

## 提示块（Callouts）

> [!NOTE]
> 这是一条普通说明。

> [!TIP]
> 这是一个小技巧。

> [!WARNING]
> 这是一条警告信息。

## 表格

| 快捷键   | 作用     |
| -------- | -------- |
| `Ctrl+K` | 打开搜索 |
| `Ctrl+S` | 保存文件 |
| `Ctrl+/` | 切换注释 |

## 折叠目录

文章中只要写一个名为 `目录` 或 `Table of contents` 的二级标题，就会自动生成目录。
