# 组件手册（Components）

通用组件和样式用法，适用于 Avocado Nature、Dark Green Magazine、Blackboard Sketch 和 Midnight Minimal 四种风格。

---

## Style 对照

| 组件/类名 | Avocado Nature | Dark Green Magazine | Blackboard Sketch | Midnight Minimal |
|-----------|----------------|---------------------|-------------------|------------------|
| 标题类 | `.h-hero` / `.h-xl` | `.h-hero` / `.h-xl` | Canvas `chalkText` | `.mm-hero` / `.mm-hero-strong` / `.mm-h1` |
| 正文类 | `.body-zh` / `.lead` | `.body-text` / `.lead` | Canvas `chalkText`（高覆盖参数） | `.mm-body` / `.mm-body-serif` |
| 元数据 | `.meta` / `.meta-row` | `.meta` / `.meta-row` | `.chalk-foot` / `.chalk-mono` | `.mm-foot` / `.mm-meta` / `.mm-num` |
| 强调容器 | `.callout` | `.callout` | `curve` / `smoothClosed` 圈注 | `.mm-card` / `.mm-card-accent` |
| 数字展示 | `.stat-card` / `.big-num` | `.stat-card` / `.big-num` | `.chalk-big-num` | `.mm-big-num` / `.mm-stat` |
| 流程 | `.pipeline` / `.step` | `.pipeline` / `.step` | Canvas 图形 + `chalkPath` / `curve` | `.mm-timeline-item` |
| 对比 | `.split` | `.split` | 天平、分叉、箭头、圈注等手绘关系 | `.split-6-6` / `.mm-card` |
| 图标 | Lucide `data-lucide="..."` | Lucide `data-lucide="..."` | Canvas 手绘插画 | 无（纯文字） |
| 动效 | cascade / hero / quote / directional / pipeline | 同上 | step-by-step 逐步揭示 | 慢速淡入（meditative） |

---

## 排版层级对照

| 层级 | Avocado | Dark Magazine | Blackboard | Midnight Minimal |
|------|---------|---------------|------------|------------------|
| 巨标题 | `h-hero` 10vw Noto Serif SC | `h-hero` 9vw Noto Serif SC | `chalkText` 64px 以上，逐字扰动与标题覆盖参数 | `.mm-hero-strong` 7vw Noto Serif SC 700 |
| 大标题 | `h-xl` 5.8vw | `h-xl` 5.2vw | `chalkText` 42-64px，保持强视觉重心 | `.mm-h1` 4.5vw Noto Serif SC 300 |
| 副标题 | `h-sub` 2.8vw | `h-sub` 2.5vw | `chalkText` 28-42px，中等扰动 | `.mm-h2` 3vw Noto Serif SC 300 |
| 引语 | `lead` 1.65vw | `lead` 1.6vw | `chalkText` 24-36px，短句手写 | `.mm-quote` 3.2vw Noto Serif SC italic |
| 正文 | `body-zh` Noto Sans | `body-text` Noto Sans | `chalkText` 22-36px，高连续覆盖 | `.mm-body-serif` 1.15vw Noto Serif SC |
| 元数据 | `meta` IBM Plex Mono | `meta` IBM Plex Mono | `chalkText` 20-28px，小字号高覆盖 | `.mm-meta` IBM Plex Mono |

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

### Blackboard Sketch — Canvas 手绘元素

黑板风不使用标准图标式 SVG。使用 `chalkPath`、`curve`、`smoothClosed` 直接绘制灯泡、问号、放大镜、天平、靶心、大脑、人物、箭头、云朵和星星。

```js
chalkPath(points, C.white, 5, 101);
curve([[x1,y1],[cx1,cy1],[cx2,cy2],[x2,y2]], C.pink, 6, 102);
smoothClosed(cloudPoints, C.blue, 5, 103);
chalkText("形成判断", 520, 590, 28, C.yellow, 104, {
  rotate: .035,
  baseline: 3
});
```

完整算法和参数边界见 `references/chalk-rendering-blackboard.md`。

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
