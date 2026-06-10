# 组件手册（Components）

通用组件和样式用法，适用于 Avocado Nature、Dark Green Magazine、Blackboard Sketch 和 Midnight Minimal 四种风格。

---

## Style 对照

| 组件/类名 | Avocado Nature | Dark Green Magazine | Blackboard Sketch | Midnight Minimal |
|-----------|----------------|---------------------|-------------------|------------------|
| 标题类 | `.h-hero` / `.h-xl` | `.h-hero` / `.h-xl` | `.chalk-title` / `.chalk-h1` | `.mm-hero` / `.mm-hero-strong` / `.mm-h1` |
| 正文类 | `.body-zh` / `.lead` | `.body-text` / `.lead` | `.chalk-body` / `.chalk-note` | `.mm-body` / `.mm-body-serif` |
| 元数据 | `.meta` / `.meta-row` | `.meta` / `.meta-row` | `.chalk-foot` / `.chalk-mono` | `.mm-foot` / `.mm-meta` / `.mm-num` |
| 强调容器 | `.callout` | `.callout` | `.chalk-box` / `.chalk-underline` | `.mm-card` / `.mm-card-accent` |
| 数字展示 | `.stat-card` / `.big-num` | `.stat-card` / `.big-num` | `.chalk-big-num` | `.mm-big-num` / `.mm-stat` |
| 流程 | `.pipeline` / `.step` | `.pipeline` / `.step` | `.flow-step` / `.chalk-arrow` | `.mm-timeline-item` |
| 对比 | `.split` | `.split` | `.split` / `.vs-badge` | `.split-6-6` / `.mm-card` |
| 图标 | Lucide `data-lucide="..."` | Lucide `data-lucide="..."` | SVG 手绘 / 火柴人 | 无（纯文字） |
| 动效 | cascade / hero / quote / directional / pipeline | 同上 | step-by-step 逐步揭示 | 慢速淡入（meditative） |

---

## 排版层级对照

| 层级 | Avocado | Dark Magazine | Blackboard | Midnight Minimal |
|------|---------|---------------|------------|------------------|
| 巨标题 | `h-hero` 10vw Noto Serif SC | `h-hero` 9vw Noto Serif SC | `chalk-title` 6.5vw ZCOOL XiaoWei（粗粉笔） | `.mm-hero-strong` 7vw Noto Serif SC 700 |
| 大标题 | `h-xl` 5.8vw | `h-xl` 5.2vw | `chalk-h1` 4.8vw ZCOOL XiaoWei（中粉笔） | `.mm-h1` 4.5vw Noto Serif SC 300 |
| 副标题 | `h-sub` 2.8vw | `h-sub` 2.5vw | `chalk-h2` 3.2vw Ma Shan Zheng（细粉笔） | `.mm-h2` 3vw Noto Serif SC 300 |
| 引语 | `lead` 1.65vw | `lead` 1.6vw | `chalk-note` 1.1vw Ma Shan Zheng（粉笔注释） | `.mm-quote` 3.2vw Noto Serif SC italic |
| 正文 | `body-zh` Noto Sans | `body-text` Noto Sans | `chalk-body` 1.2vw Noto Sans 300（极细粉笔） | `.mm-body-serif` 1.15vw Noto Serif SC |
| 元数据 | `meta` IBM Plex Mono | `meta` IBM Plex Mono | `chalk-mono` JetBrains Mono（刻印） | `.mm-meta` IBM Plex Mono |

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

### Midnight Minimal

```html
<span class="mm-focus">强调色文字</span>
<span style="color:var(--mm-text-soft)">次要文字</span>
<span style="color:var(--mm-text-dim)">弱化文字</span>
```
---


## 图标

### Avocado & Dark Magazine — Lucide

```html
<i data-lucide="book-open" class="ico-md"></i>
<i data-lucide="lightbulb" class="ico-md"></i>
```

### Blackboard Sketch — SVG 手绘元素

黑板风使用 `chalk-arrow` SVG 箭头、`stickman` SVG 火柴人、`chalk-lightbulb` SVG 灯泡、`chalk-check` SVG 勾选，以及各类手绘插画元素：`chalk-brain` 大脑、`chalk-magnifier` 放大镜、`chalk-robot` 机器人、`chalk-dialog` 对话框、`chalk-book` 书本、`chalk-rocket` 火箭、`chalk-star` 星星、`chalk-target` 靶心、`chalk-flag` 旗帜。

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

<!-- 手绘大脑（粉色思考） -->
<svg class="chalk-brain" viewBox="0 0 100 100">
  <path d="M50,10 C30,10 15,25 15,45 C15,60 22,72 35,78 L35,90 L45,82 C47,83 49,84 50,84 C51,84 53,83 55,82 L65,90 L65,78 C78,72 85,60 85,45 C85,25 70,10 50,10Z"/>
  <path d="M35,40 Q45,35 50,45"/><path d="M65,40 Q55,35 50,45"/><path d="M38,55 Q50,65 62,55"/>
</svg>

<!-- 手绘放大镜（蓝色分析） -->
<svg class="chalk-magnifier" viewBox="0 0 100 100">
  <circle cx="40" cy="40" r="28"/><line x1="62" y1="62" x2="88" y2="88"/>
</svg>

<!-- 手绘对话框（绿色沟通） -->
<svg class="chalk-dialog" viewBox="0 0 100 80">
  <path d="M10,8 Q10,5 15,5 H85 Q90,5 90,10 V55 Q90,60 85,60 H30 L15,75 L15,60 H15 Q10,60 10,55 Z"/>
</svg>

<!-- 手绘书本（白色知识） -->
<svg class="chalk-book" viewBox="0 0 100 100">
  <path d="M50,15 L50,85 M50,15 C45,10 35,8 25,10 C15,12 8,18 8,28 L8,78 C8,88 15,82 25,80 C35,78 45,82 50,85 M50,15 C55,10 65,8 75,10 C85,12 92,18 92,28 L92,78 C92,88 85,82 75,80 C65,78 55,82 50,85"/>
</svg>

<!-- 手绘星星（黄色亮点） -->
<svg class="chalk-star" viewBox="0 0 100 100">
  <polygon points="50,5 63,38 98,38 70,60 80,95 50,75 20,95 30,60 2,38 37,38"/>
</svg>
```

更多扩展 SVG 元素（`chalk-robot`、`chalk-rocket`、`chalk-target`、`chalk-flag`）见 `references/layouts-blackboard.md` 的 G 节。

---

## 动效系统

| recipe | Avocado / Dark Magazine | Blackboard | Midnight Minimal |
|--------|------------------------|------------|------------------|
| 默认 | cascade — 级联淡入 y:12→0 | step-by-step — 逐步揭示 | 慢速淡入（慢 20%） |
| hero | 更慢淡入 y:14→0, 800ms | 初始动画（封面） | 更慢, 更长位移 |
| quote | 逐行揭示 | 逐条显示 | `data-anim="line"` 逐行 |
| directional | 左列左入/右列右入 | 左右分入 | 左右分入 |
| pipeline | 手动逐步推进 (→ 键) | — | — |

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

<!-- Midnight Minimal -->
<div data-anim>慢速淡入上移</div>
<div data-anim="step">步进</div>
<div data-anim="line">逐行揭示</div>
```
