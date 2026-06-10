# 组件手册（Components）

通用组件和样式用法，适用于 Avocado Nature 和 Blackboard Sketch 两种风格。

---

## 通用排版层级

| 层级 | 类名 | 字体 | 用途 |
|------|------|------|------|
| 巨标题 | `h-hero` | Noto Serif SC（衬线） | 封面主标题 |
| 大标题 | `h-xl` | Noto Serif SC（衬线） | 章节/内容标题 |
| 副标题 | `h-sub` | Noto Serif SC（衬线） | 副标题/引语 |
| 中等标题 | `h-md` | Noto Serif SC（衬线） | 小标题 |
| 引语 | `lead` | Noto Serif SC（衬线） | 重要引语 |
| 正文 | `.body-zh` | Noto Sans SC（非衬线） | 大段正文 |
| 元数据 | `.meta` / `.mono` | IBM Plex Mono（等宽） | 标签/页码 |

---

## 颜色用法

### Avocado Nature

使用 CSS 变量引用颜色：

```html
<!-- 主色文字 -->
<span style="color:var(--primary)">重要文字</span>
<!-- 辅助色 -->
<span style="color:var(--primary-light)">次要文字</span>
<!-- 强调色背景 -->
<div style="background:var(--primary); color:var(--paper); padding:2vh 2vw;">
```

### Blackboard Sketch

使用预设 chalk 类：

```html
<span class="chalk-yellow">黄色重点</span>
<span class="chalk-blue">蓝色副标题</span>
<span class="chalk-red">红色强调</span>
```

---

## 图标

使用 Lucide 图标库，CDN 方式引用：

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="book-open" class="ico-md"></i>
<i data-lucide="lightbulb" class="ico-md"></i>
<i data-lucide="target" class="ico-md"></i>
<i data-lucide="trending-up" class="ico-md"></i>
<script>lucide.createIcons();</script>
```

Avocado 推荐图标：`book-open` / `leaf` / `sparkles` / `lightbulb` / `target` / `trending-up` / `compass` / `feather`

Blackboard 推荐图标：`graduation-cap` / `pencil` / `pen-tool` / `book-open` / `brain` / `circle-dot` / `arrow-right` / `list`

---

## 动效系统

### 动效 Recipe

| recipe | 用法 | 效果 |
|---|---|---|
| 默认(cascade) | 不加 data-animate | 级联淡入（y:12→0） |
| `hero` | hero 页自动 | 更慢淡入（y:14→0, 800ms） |
| `quote` | 金句页 | 逐行揭示 |
| `directional` | 对比页 | 左列左入/右列右入 |
| `pipeline` | 流程页 | 手动逐步推进 |

### 实例

```html
<section class="slide light" data-animate="hero">
  <h1 class="h-hero" data-anim>标题</h1>
  <p class="lead" data-anim>正文</p>
</section>
```
