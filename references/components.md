# 组件手册（Components）

通用组件和样式用法，适用于 Avocado Nature、Dark Green Magazine 和 Blackboard Sketch 三种风格。

---

## Style 对照

| 组件/类名 | Avocado Nature | Dark Green Magazine | Blackboard Sketch |
|-----------|----------------|---------------------|-------------------|
| 标题类 | `.h-hero` / `.h-xl` | `.h-hero` / `.h-xl` | `.chalk-title` / `.chalk-h1` |
| 正文类 | `.body-zh` / `.lead` | `.body-text` / `.lead` | `.chalk-body` / `.chalk-note` |
| 元数据 | `.meta` / `.meta-row` | `.meta` / `.meta-row` | `.chalk-label` / `.chalk-foot` |
| 强调容器 | `.callout` | `.callout` | `.chalk-box` / `.chalk-underline` |
| 数字展示 | `.stat-card` / `.big-num` | `.stat-card` / `.big-num` | —（手写体） |
| 流程 | `.pipeline` / `.step` | `.pipeline` / `.step` | `.flow-step` / `.chalk-arrow` |
| 对比 | `.split` | `.split` | `.split` / `.vs-badge` |
| 图标 | Lucide `data-lucide="..."` | Lucide `data-lucide="..."` | SVG 手绘 / 火柴人 |
| 动效 | cascade / hero / quote / directional / pipeline | 同上 | step-by-step 逐步揭示 |

---

## 排版层级对照

| 层级 | Avocado | Dark Magazine | Blackboard |
|------|---------|---------------|------------|
| 巨标题 | `h-hero` 10vw Noto Serif SC | `h-hero` 9vw Noto Serif SC | `chalk-title` 7vw ZCOOL XiaoWei |
| 大标题 | `h-xl` 5.8vw | `h-xl` 5.2vw | `chalk-h1` 5.5vw |
| 副标题 | `h-sub` 2.8vw | `h-sub` 2.5vw | `chalk-h2` 3.6vw |
| 引语 | `lead` 1.65vw | `lead` 1.6vw | `chalk-note` 1.1vw |
| 正文 | `body-zh` Noto Sans | `body-text` Noto Sans | `chalk-body` Noto Sans |
| 元数据 | `meta` IBM Plex Mono | `meta` IBM Plex Mono | `chalk-label` JetBrains Mono |

---

## 颜色用法

### Avocado Nature

```html
<span style="color:var(--primary)">主色文字</span>
<span style="color:var(--primary-light)">辅助色文字</span>
```

### Dark Green Magazine

```html
<span style="color:var(--accent)">强调色文字</span>
<span style="color:var(--text-soft)">次要文字</span>
```

### Blackboard Sketch

```html
<span class="chalk-yellow">黄色重点</span>
<span class="chalk-blue">蓝色流程</span>
<span class="chalk-pink">粉色强调</span>
<span class="chalk-green">绿色正向</span>
<span class="chalk-orange">橙色行动</span>
<span class="chalk-red">红色风险</span>
```

---

## 图标

### Avocado & Dark Magazine — Lucide

```html
<i data-lucide="book-open" class="ico-md"></i>
<i data-lucide="lightbulb" class="ico-md"></i>
```

### Blackboard Sketch — SVG 手绘元素

黑板风使用 `chalk-arrow` SVG 箭头和 `stickman` SVG 火柴人：

```html
<!-- 手绘箭头 -->
<svg class="chalk-arrow" viewBox="0 0 60 20"><path d="M5,10 H50 M45,4 L52,10 L45,16"/></svg>
<svg class="chalk-arrow yellow" viewBox="0 0 60 20">...</svg>

<!-- 火柴人 -->
<svg class="stickman" viewBox="0 0 100 180">
  <circle cx="50" cy="20" r="14"/>
  <line x1="50" y1="34" x2="50" y2="120"/>
  <line x1="50" y1="55" x2="25" y2="85"/>
  <line x1="50" y1="55" x2="75" y2="85"/>
  <line x1="50" y1="120" x2="30" y2="170"/>
  <line x1="50" y1="120" x2="70" y2="170"/>
</svg>
```

---

## 动效系统

| recipe | Avocado / Dark Magazine | Blackboard |
|--------|------------------------|------------|
| 默认 | cascade — 级联淡入 y:12→0 | step-by-step — 逐步揭示 |
| hero | 更慢淡入 y:14→0, 800ms | 播放初始动画 |
| quote | 逐行揭示 | 逐条显示 |
| directional | 左列左入/右列右入 | 左右分入 |
| pipeline | 手动逐步推进 (→ 键) | — |

### 动画标签

```html
<!-- Avocado / Dark Magazine -->
<div data-anim>级联淡入</div>
<div data-anim="left">从左滑入</div>
<div data-anim="right">从右滑入</div>
<div data-anim="line">逐行揭示</div>

<!-- Blackboard Sketch -->
<div data-anim>淡入上移</div>
<div data-anim="fade">仅淡入</div>
<div data-anim="step">步进（等用户推进）</div>
```
