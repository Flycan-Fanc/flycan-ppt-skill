# 深绿极简杂志风 · 页面布局库

10 种布局骨架。每种都是一个完整可粘贴的 `<section class="slide ...">` 代码块。

---

## 预检（Pre-flight）

### A. 类名必须来自 template-dark-magazine.html

所有使用的类都在 `assets/template-dark-magazine.html` 的 `<style>` 块里预定义。

**不要发明新类名**。

### B. 深绿杂志风设计规则

- 所有页面使用暗绿色背景（`#1B2F1D`）
- 强调色（`var(--accent)`）控制整体杂志调性
- `chrome` + `foot` 做杂志页眉/页码
- 排版用衬线字体（Noto Serif SC）做标题，非衬线（Noto Sans SC）做正文
- 元素间用 `rgba(var(--text-rgb), .1)` 做极淡分割线
- Lucide 图标做辅助视觉元素

### C. 动画规范

- 默认：级联淡入（cascade）
- Hero 页：更慢的淡入（hero）
- 金句页：逐行揭示（quote）
- 对比页：左右分入（directional）
- 流程页：手动逐步推进（pipeline）

---

## Layout 1: 封面（Cover）

```html
<section class="slide hero" data-animate="hero">
  <div class="chrome">
    <span class="meta">Flycan 进化论</span>
    <span class="meta">01 / NN</span>
  </div>
  <div class="frame center">
    <div class="kicker" data-anim>引导语 · TAGLINE</div>
    <h1 class="h-hero" data-anim style="color:var(--text)">主标题</h1>
    <div class="h-sub" data-anim style="margin-top:2vh">副标题 / 一句话介绍</div>
    <div class="meta-row" data-anim style="margin-top:4vh">
      <span>Flycan 进化论</span>
      <span>·</span>
      <span>标签1</span>
      <span>·</span>
      <span>标签2</span>
    </div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 1</span>
  </div>
</section>
```

---

## Layout 2: 核心观点（Core Idea）

```html
<section class="slide" data-animate="cascade">
  <div class="chrome">
    <span class="meta">核心观点</span>
    <span class="meta">02 / NN</span>
  </div>
  <div class="frame">
    <div class="kicker" data-anim>核心观点 · KEY IDEA</div>
    <h2 class="h-xl" data-anim>观点标题</h2>
    <div class="rule" data-anim></div>
    <div class="grid-3" style="margin-top:1vh" data-anim>
      <div class="stat-card">
        <div class="stat-label">要点一</div>
        <div class="h-md" style="color:var(--accent);font-size:1.6vw">子标题</div>
        <div class="body-text" style="font-size:max(12px,.92vw);margin-top:0.6vh">说明文字。</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">要点二</div>
        <div class="h-md" style="color:var(--accent);font-size:1.6vw">子标题</div>
        <div class="body-text" style="font-size:max(12px,.92vw);margin-top:0.6vh">说明文字。</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">要点三</div>
        <div class="h-md" style="color:var(--accent);font-size:1.6vw">子标题</div>
        <div class="body-text" style="font-size:max(12px,.92vw);margin-top:0.6vh">说明文字。</div>
      </div>
    </div>
    <div class="callout" data-anim style="margin-top:auto">
      引语文字。
      <span class="cite">—— Flycan 进化论</span>
    </div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 2</span>
  </div>
</section>
```

---

## Layout 3: 左文右图（Text + Image）

```html
<section class="slide" data-animate="directional">
  <div class="chrome">
    <span class="meta">Flycan 进化论</span>
    <span class="meta">03 / NN</span>
  </div>
  <div class="frame">
    <div class="grid-2-7-5" style="align-items:center;flex:1">
      <div class="col" style="gap:2.2vh">
        <div class="kicker" data-anim>标题标签</div>
        <h2 class="h-xl" data-anim style="font-size:4.2vw">内容标题</h2>
        <div class="body-text" data-anim>正文说明文字。</div>
        <div class="lead" data-anim style="font-size:max(20px,1.8vw);margin-top:1vh">
          <span class="big-num">数字</span>
          <span style="font-family:var(--sans-zh);font-weight:400;opacity:.7;margin-left:0.3vw">单位</span>
        </div>
      </div>
      <div class="frame-img r-4x3" data-anim="right">
        <img src="images/your-image.png" alt="描述">
      </div>
    </div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 3</span>
  </div>
</section>
```

---

## Layout 4: 对比分析（Compare）

```html
<section class="slide" data-animate="directional">
  <div class="chrome">
    <span class="meta">对比分析</span>
    <span class="meta">04 / NN</span>
  </div>
  <div class="frame">
    <div class="kicker" data-anim>对比 · COMPARE</div>
    <h2 class="h-xl" data-anim style="font-size:4vw">对比标题</h2>
    <div class="split" style="margin-top:2vh;flex:1">
      <div class="col" data-anim="left" style="gap:1.6vh;padding:2vh;border-left:3px solid rgba(var(--text-rgb),.3)">
        <div class="h-md" style="color:var(--text-soft);font-size:1.4vw">选项 A</div>
        <div class="body-text">特点描述</div>
      </div>
      <div class="col" data-anim="right" style="gap:1.6vh;padding:2vh;border-left:3px solid var(--accent)">
        <div class="h-md" style="color:var(--accent);font-size:1.4vw">选项 B</div>
        <div class="body-text">特点描述</div>
      </div>
    </div>
    <div class="callout" data-anim>总结引语。</div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 4</span>
  </div>
</section>
```

---

## Layout 5: 数字矩阵（Numbers Grid）

```html
<section class="slide" data-animate="cascade">
  <div class="chrome">
    <span class="meta">关键数据</span>
    <span class="meta">05 / NN</span>
  </div>
  <div class="frame">
    <div class="kicker" data-anim>数据 · METRICS</div>
    <h2 class="h-xl" data-anim>数据标题</h2>
    <div class="rule" data-anim></div>
    <div class="grid-4" style="margin-top:1vh" data-anim>
      <div class="stat-card">
        <div class="stat-val">数字 <span class="stat-label" style="display:inline;margin-left:.5vw">单位</span></div>
        <div class="stat-note">说明</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">数字 <span class="stat-label" style="display:inline;margin-left:.5vw">单位</span></div>
        <div class="stat-note">说明</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">数字 <span class="stat-label" style="display:inline;margin-left:.5vw">单位</span></div>
        <div class="stat-note">说明</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">数字 <span class="stat-label" style="display:inline;margin-left:.5vw">单位</span></div>
        <div class="stat-note">说明</div>
      </div>
    </div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 5</span>
  </div>
</section>
```

---

## Layout 6: 流程/Pipeline

```html
<section class="slide" data-animate="pipeline">
  <div class="chrome">
    <span class="meta">流程</span>
    <span class="meta">06 / NN</span>
  </div>
  <div class="frame">
    <div class="kicker" data-anim style="color:var(--accent)">流程 · PIPELINE</div>
    <h2 class="h-xl" data-anim>流程标题</h2>
    <div class="pipeline-section">
      <div class="pipeline-label">步骤 (按 → 手动推进)</div>
      <div class="pipeline" data-cols="4" data-anim>
        <div class="step" data-anim="step">
          <div class="step-nb">01</div>
          <div class="step-title">步骤一</div>
          <div class="step-desc">描述</div>
        </div>
        <div class="step" data-anim="step">
          <div class="step-nb">02</div>
          <div class="step-title">步骤二</div>
          <div class="step-desc">描述</div>
        </div>
        <div class="step" data-anim="step">
          <div class="step-nb">03</div>
          <div class="step-title">步骤三</div>
          <div class="step-desc">描述</div>
        </div>
        <div class="step" data-anim="step">
          <div class="step-nb">04</div>
          <div class="step-title">步骤四</div>
          <div class="step-desc">描述</div>
        </div>
      </div>
    </div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 6</span>
  </div>
</section>
```

---

## Layout 7: 金句页（Quote）

```html
<section class="slide hero" data-animate="quote">
  <div class="chrome">
    <span class="meta">金句</span>
    <span class="meta">07 / NN</span>
  </div>
  <div class="frame center">
    <div class="kicker" data-anim>金句 · QUOTE</div>
    <div class="lead" data-anim style="font-size:max(28px,2.8vw);line-height:1.6;max-width:70%;text-align:center;opacity:.9" data-anim>
      "金句内容。"
    </div>
    <div class="rule" data-anim style="width:15%;margin:3vh auto"></div>
    <div class="body-text" data-anim style="font-size:max(16px,1.2vw);opacity:.65;text-align:center;max-width:55%">
      解释说明文字。
    </div>
    <div class="meta-row" data-anim style="margin-top:4vh;justify-content:center">
      <span>Flycan 进化论</span>
      <span>·</span>
      <span>标签</span>
    </div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 7</span>
  </div>
</section>
```

---

## Layout 8: 幕封（Act Divider）

```html
<section class="slide hero center" data-animate="hero">
  <div class="chrome">
    <span class="meta">章节</span>
    <span class="meta">08 / NN</span>
  </div>
  <div class="frame center">
    <div class="kicker" data-anim>PART 01</div>
    <h2 class="h-xl" data-anim>章节标题</h2>
    <div class="rule" data-anim style="width:30%"></div>
    <div class="body-text" data-anim style="max-width:50%;text-align:center">章节说明。</div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 8</span>
  </div>
</section>
```

---

## Layout 9: 纯文字内容（Content）

```html
<section class="slide" data-animate="cascade">
  <div class="chrome">
    <span class="meta">Flycan 进化论</span>
    <span class="meta">09 / NN</span>
  </div>
  <div class="frame">
    <div class="kicker" data-anim>标签</div>
    <h2 class="h-xl" data-anim>内容标题</h2>
    <div class="body-text" data-anim style="margin-top:2.5vh;max-width:75%">
      正文段落。这是主要的说明文字。
    </div>
    <div class="body-text" data-anim style="margin-top:1.5vh;max-width:75%;opacity:.68">
      副段落，可以补充说明或延伸思考。
    </div>
    <div class="callout" data-anim style="margin-top:auto;max-width:55%">
      引语。
      <span class="cite">—— Flycan 进化论</span>
    </div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 9</span>
  </div>
</section>
```

---

## Layout 10: 总结收束（Summary）

```html
<section class="slide hero" data-animate="quote">
  <div class="chrome">
    <span class="meta">总结</span>
    <span class="meta">10 / NN</span>
  </div>
  <div class="frame center">
    <div class="kicker" data-anim>总结 · SUMMARY</div>
    <div class="lead" data-anim style="font-size:max(24px,2.4vw);line-height:1.6;max-width:65%;text-align:center;opacity:.9">
      "总结金句。"
    </div>
    <div class="rule" data-anim style="width:12%;margin:3vh auto"></div>
    <div class="body-text" data-anim style="font-size:max(15px,1.15vw);opacity:.65;text-align:center;max-width:55%">
      最后的话。
    </div>
    <div class="meta-row" data-anim style="margin-top:4vh;justify-content:center">
      <span>Flycan 进化论</span>
      <span>·</span>
      <span>长期主义</span>
    </div>
  </div>
  <div class="foot">
    <span class="title">PPT 标题</span>
    <span class="meta">Flycan 进化论 · 10</span>
  </div>
</section>
```
