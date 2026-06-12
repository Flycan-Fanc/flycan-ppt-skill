# Avocado Nature · 页面布局库

10 种最常用的页面布局骨架。每种都是一个完整可粘贴的 `<section class="slide ...">` 代码块。

---

## 预检（Pre-flight）

### A. 类名必须来自 template-avocado.html

所有使用的类（`h-hero` / `h-xl` / `h-sub` / `h-md` / `lead` / `kicker` / `stat-card` / `stat-label` / `stat-nb` / `stat-unit` / `stat-note` / `frame` / `frame-img` / `callout` / `callout-src` / `grid-2-7-5` / `grid-2-6-6` / `grid-3` / `grid-4` 等）都在 `assets/template-avocado.html` 的 `<style>` 块里预定义。

**不要发明新类名**。如必须自定义，用 `style="..."` inline 写。

### B. 页面间距规范

Avocado 风以留白为特色，间距偏大：
- 标题与正文间距：推荐 `margin-top:4vh` 到 `6vh`
- 页面左右 padding：默认 `6vw`（模板已设）
- 页面上下 padding：默认 `5vh` 顶部 + `9vh` 底部（模板已设）
- 元素组间距：推荐 `gap:3vh`（flex/grid）

### C. 动画规范

所有动画必须**轻微、克制**：
- 默认：淡入 + 轻微上移（y: 12→0, 600ms）
- Hero 页：更慢的淡入（y: 14→0, 800ms）
- 金句页：逐行揭示
- 对比页：左右分入
- **禁止**：夸张缩放、炫酷转场、商业发布会动画

### D. 图片使用

- 图片建议用标准比例 16:10 / 4:3 / 3:2
- 图片风格建议：纪实感、自然光、不摆拍
- 避免：高饱和、滤镜过度、合成感强的图片

---

## Layout 1: 封面（Cover）

```html
<section class="slide hero light">
  <div class="chrome">
    <div>主题分享 · 分享</div>
    <div>Vol.01</div>
  </div>
  <div class="frame" style="display:grid; gap:5vh; align-content:center; min-height:78vh; text-align:center">
    <div class="kicker" data-anim>主题分享 · 独立思考</div>
    <h1 class="h-hero" data-anim style="font-size:9vw; white-space:nowrap">标题</h1>
    <h2 class="h-sub" data-anim>副标题 / 一句话概括</h2>
    <p class="lead" style="max-width:50vw; margin:0 auto" data-anim>
      一段引语，定调全场。
    </p>
    <div class="meta-row" style="justify-content:center" data-anim>
      <span>作者</span><span>·</span><span>2026</span>
    </div>
  </div>
  <div class="foot">
    <div>主题分享</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 2: 幕封（Act Divider）

```html
<section class="slide hero light">
  <div class="chrome">
    <div>章节名 · Chapter</div>
    <div>Act · 01 / NN</div>
  </div>
  <div class="frame" style="display:grid; gap:5vh; align-content:center; min-height:78vh">
    <div class="kicker" data-anim>Chapter N</div>
    <h1 class="h-xl" style="font-size:8vw" data-anim>章节标题</h1>
    <p class="lead" style="max-width:55vw" data-anim>
      一句话引语。
    </p>
  </div>
  <div class="foot">
    <div>章节副标题</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 3: 核心观点（Core Idea）

```html
<section class="slide light">
  <div class="chrome">
    <div>核心观点 · Core</div>
    <div>02 / NN</div>
  </div>
  <div class="frame" style="padding-top:4vh">
    <div class="kicker" data-anim>核心观点</div>
    <h2 class="h-xl" style="margin-bottom:3vh" data-anim>一个核心观点</h2>
    <p class="lead" style="margin-bottom:4vh; max-width:65ch" data-anim>
      一段 2-3 行的阐述，清晰表达核心观点。
    </p>

    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:3vw; margin-top:3vh">
      <div style="border-top:2px solid var(--primary); padding-top:2vh" data-anim>
        <h3 style="font-family:var(--serif-zh); font-weight:600; font-size:1.8vw; margin-bottom:1.5vh; color:var(--primary)">要点一</h3>
        <p style="font-family:var(--sans-zh); font-size:max(14px,1.05vw); line-height:1.6; opacity:.82">描述文字。</p>
      </div>
      <div style="border-top:2px solid var(--primary); padding-top:2vh" data-anim>
        <h3 style="font-family:var(--serif-zh); font-weight:600; font-size:1.8vw; margin-bottom:1.5vh; color:var(--primary)">要点二</h3>
        <p style="font-family:var(--sans-zh); font-size:max(14px,1.05vw); line-height:1.6; opacity:.82">描述文字。</p>
      </div>
      <div style="border-top:2px solid var(--primary); padding-top:2vh" data-anim>
        <h3 style="font-family:var(--serif-zh); font-weight:600; font-size:1.8vw; margin-bottom:1.5vh; color:var(--primary)">要点三</h3>
        <p style="font-family:var(--sans-zh); font-size:max(14px,1.05vw); line-height:1.6; opacity:.82">描述文字。</p>
      </div>
    </div>
  </div>
  <div class="foot">
    <div>Page · 核心观点</div>
    <div>02 / NN</div>
  </div>
</section>
```

---

## Layout 4: 金句页（Golden Quote）

```html
<section class="slide light" data-animate="quote">
  <div class="chrome">
    <div>金句 · Quote</div>
    <div>NN / NN</div>
  </div>
  <div class="frame" style="display:grid; gap:4vh; align-content:center; min-height:78vh; text-align:center">
    <div class="kicker" data-anim>Quote</div>
    <blockquote style="font-family:var(--serif-zh); font-weight:700; font-size:5.2vw; line-height:1.25; letter-spacing:-.01em; max-width:68vw; margin:0 auto">
      <span data-anim="line" style="display:block">"一句金句，</span>
      <span data-anim="line" style="display:block">值得停下来思考。"</span>
    </blockquote>
    <div class="meta-row" style="justify-content:center" data-anim>
      <span>— 作者</span><span>·</span><span>出处</span>
    </div>
  </div>
  <div class="foot">
    <div>金句</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 5: 左文右图（Text + Image）

```html
<section class="slide light">
  <div class="chrome">
    <div>图文 · Text & Image</div>
    <div>03 / NN</div>
  </div>
  <div class="frame grid-2-7-5" style="padding-top:5vh">
    <div style="display:flex; flex-direction:column; justify-content:center; gap:2.5vh">
      <div class="kicker" data-anim>观点标签</div>
      <h2 class="h-xl" style="font-size:5.5vw" data-anim>观点标题</h2>
      <p class="lead" data-anim>一段 2-3 行的展开说明，阐述观点。</p>
      <div class="callout" data-anim style="margin-top:1vh">
        "一段引用文字。"
        <div class="callout-src">— 出处</div>
      </div>
    </div>
    <figure class="frame-img r-16x10" data-anim>
      <img src="images/placeholder.jpg" alt="配图">
      <figcaption class="img-cap">图注说明</figcaption>
    </figure>
  </div>
  <div class="foot">
    <div>Page · 观点标题</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 6: 数字矩阵（Numbers Grid）

```html
<section class="slide light">
  <div class="chrome">
    <div>数据 · Data</div>
    <div>04 / NN</div>
  </div>
  <div class="frame" style="padding-top:4vh">
    <div class="kicker" data-anim>数据支撑</div>
    <h2 class="h-xl" data-anim style="margin-bottom:2vh">关键数字</h2>
    <p class="lead" data-anim style="margin-bottom:4vh">数据背后的故事。</p>

    <div class="grid-6" style="margin-top:3vh">
      <div class="stat-card" data-anim>
        <div class="stat-label">Label</div>
        <div class="stat-nb">NN <span class="stat-unit">单位</span></div>
        <div class="stat-note">说明文字</div>
      </div>
      <div class="stat-card" data-anim>
        <div class="stat-label">Label</div>
        <div class="stat-nb">NN</div>
        <div class="stat-note">说明文字</div>
      </div>
      <div class="stat-card" data-anim>
        <div class="stat-label">Label</div>
        <div class="stat-nb">NN%</div>
        <div class="stat-note">说明文字</div>
      </div>
      <div class="stat-card" data-anim>
        <div class="stat-label">Label</div>
        <div class="stat-nb">NN</div>
        <div class="stat-note">说明文字</div>
      </div>
      <div class="stat-card" data-anim>
        <div class="stat-label">Label</div>
        <div class="stat-nb">NN</div>
        <div class="stat-note">说明文字</div>
      </div>
      <div class="stat-card" data-anim>
        <div class="stat-label">Label</div>
        <div class="stat-nb">NN</div>
        <div class="stat-note">说明文字</div>
      </div>
    </div>
  </div>
  <div class="foot">
    <div>Page · 数据</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 7: 对比页（Before / After）

```html
<section class="slide light" data-animate="directional">
  <div class="chrome">
    <div>对比 · Contrast</div>
    <div>05 / NN</div>
  </div>
  <div class="frame" style="padding-top:4vh">
    <div class="kicker" data-anim>Before / After · 转变</div>
    <h2 class="h-xl" style="margin-bottom:3vh" data-anim>对比标题</h2>

    <div class="grid-2-6-6" style="gap:4vw">
      <div data-anim="left" style="padding:2.5vh 2vw; border-left:3px solid rgba(127,127,127,.3); opacity:.6">
        <div class="kicker" style="opacity:.9">Before · 旧模式</div>
        <h3 class="h-md" style="margin-top:2vh">旧方式</h3>
        <p style="font-family:var(--sans-zh); font-size:max(14px,1.05vw); line-height:1.6; opacity:.78; margin-top:2vh">描述旧模式的局限性。</p>
      </div>
      <div data-anim="right" style="padding:2.5vh 2vw; border-left:3px solid var(--primary)">
        <div class="kicker" style="opacity:.9">After · 新方式</div>
        <h3 class="h-md" style="margin-top:2vh">新方式</h3>
        <p style="font-family:var(--sans-zh); font-size:max(14px,1.05vw); line-height:1.6; opacity:.78; margin-top:2vh">描述新方式的优势。</p>
      </div>
    </div>
  </div>
  <div class="foot">
    <div>Page · 对比</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 8: 流程/Pipeline

```html
<section class="slide light" data-animate="pipeline">
  <div class="chrome">
    <div>流程 · Pipeline</div>
    <div>06 / NN</div>
  </div>
  <div class="frame">
    <div class="kicker" data-anim>流程拆解</div>
    <h2 class="h-xl" data-anim style="margin-bottom:2vh">步骤标题</h2>

    <div class="pipeline-section">
      <div class="pipeline-label">步骤组名</div>
      <div class="pipeline" data-cols="4">
        <div class="step" data-anim="step">
          <div class="step-nb">01</div>
          <div class="step-title">第一步</div>
          <div class="step-desc">简短说明</div>
        </div>
        <div class="step" data-anim="step">
          <div class="step-nb">02</div>
          <div class="step-title">第二步</div>
          <div class="step-desc">简短说明</div>
        </div>
        <div class="step" data-anim="step">
          <div class="step-nb">03</div>
          <div class="step-title">第三步</div>
          <div class="step-desc">简短说明</div>
        </div>
        <div class="step" data-anim="step">
          <div class="step-nb">04</div>
          <div class="step-title">第四步</div>
          <div class="step-desc">简短说明</div>
        </div>
      </div>
    </div>
  </div>
  <div class="foot">
    <div>Page · 流程</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 9: 总结页（Summary / 金句收束）

```html
<section class="slide hero light" data-animate="quote">
  <div class="chrome">
    <div>总结 · Summary</div>
    <div>NN / NN</div>
  </div>
  <div class="frame" style="display:grid; gap:5vh; align-content:center; min-height:78vh; text-align:center">
    <div class="kicker" data-anim>Takeaway</div>
    <blockquote style="font-family:var(--serif-zh); font-weight:700; font-size:5.5vw; line-height:1.2; max-width:65vw; margin:0 auto">
      <span data-anim="line" style="display:block">一句值得记住的金句。</span>
      <span data-anim="line" style="display:block">留白，思考。</span>
    </blockquote>
    <p class="lead" style="opacity:.6; margin-top:2vh" data-anim>
      简短的行动建议或后续思考方向。
    </p>
  </div>
  <div class="foot">
    <div>主题分享</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 10: 关于/结尾页（Closing）

```html
<section class="slide light">
  <div class="chrome">
    <div>关于 · About</div>
    <div>NN / NN</div>
  </div>
  <div class="frame" style="display:grid; gap:3vh; align-content:center; min-height:78vh; text-align:center">
    <div class="kicker" data-anim>主题分享</div>
    <h1 class="h-xl" style="font-size:4.5vw" data-anim>保持独立思考</h1>
    <p class="lead" style="max-width:45vw; margin:0 auto" data-anim>
      长期主义 · 第一性原理 · 理性克制
    </p>
    <div class="meta-row" style="justify-content:center" data-anim>
      <span>example.com</span><span>·</span><span>2026</span>
    </div>
  </div>
  <div class="foot">
    <div>谢谢 · Thank you</div>
    <div>— · —</div>
  </div>
</section>
```
