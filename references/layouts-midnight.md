# Midnight Minimal · 页面布局库

10 种午夜极简哲思风布局骨架。每种都是一个完整可粘贴的 `<div class="slide">` 代码块。

---

## 预检（Pre-flight）

### A. 类名必须来自 template-midnight.html

所有使用的类都在 `assets/template-midnight.html` 的 `<style>` 块里预定义。

**不要发明新类名**。

### B. Midnight Minimal 设计规则

- 所有页面使用深色底色（默认 `#0A0A0A`）
- 衬线字体（Noto Serif SC）塑造哲学感/书卷气
- 极致留白——内容页最多 3 个要点
- 动效克制缓慢——强调"思考"而非"炫技"
- 色调低调：主色白/灰，仅强调色 (`--mm-accent`) 有色彩
- 禁止：高饱和色、装饰性插画、emoji 图标、Lucide 图标

### C. 动画规范

- 默认 `data-anim`：缓慢淡入上移（比 Avocado 慢 20%）
- hero/封面：`data-anim="hero"` 更慢、更长的位移
- 引用/金句：`data-anim="line"` 逐行揭示

---

## Layout 1: 封面（Cover）

```html
<div class="slide" data-animate="hero">
  <div class="frame center" style="gap:2vh">
    <div class="mm-meta" data-anim style="letter-spacing:.35em">—— 午夜 · 哲思 ——</div>
    <div style="height:1px;width:4vw;background:var(--mm-accent);margin:1.5vh auto" data-anim></div>
    <h1 class="mm-hero-strong" data-anim style="margin-top:1.5vh">主标题</h1>
    <div class="mm-h2" data-anim style="margin-top:.8vh">副标题 / 主题</div>
    <div style="height:1px;width:30%;background:var(--mm-line);margin:3vh auto" data-anim></div>
    <div class="mm-body-serif" data-anim style="text-align:center;max-width:55%;line-height:1.6">一句引言或序语。</div>
  </div>
  <div class="mm-foot">
    <span>Flycan 进化论</span>
    <span>01 / NN</span>
  </div>
</div>
```

---

## Layout 2: 哲思（Core Thought）

```html
<div class="slide" data-animate="cascade">
  <div class="frame">
    <span class="mm-meta" data-anim>哲思 · THOUGHT</span>
    <div class="mm-line-accent" data-anim style="margin:1.5vh 0 2.5vh"></div>
    <h1 class="mm-h1" data-anim style="letter-spacing:.02em">核心思考标题</h1>
    <div class="mm-body-serif" data-anim style="margin-top:2vh;max-width:75%">一段关于这个思考的深入阐述。</div>
    <div class="mm-card-accent" data-anim style="margin-top:2.5vh;max-width:70%">
      <div class="mm-focus" style="font-size:max(14px,1.05vw);font-weight:400">「一句核心引语或关键洞见」</div>
    </div>
  </div>
  <div class="mm-foot">
    <span>哲思</span>
    <span>02 / NN</span>
  </div>
</div>
```

---

## Layout 3: 两段式思考（Two-fold Thought）

```html
<div class="slide" data-animate="cascade">
  <div class="frame">
    <span class="mm-meta" data-anim>思辨 · DIALECTIC</span>
    <div class="mm-line-accent" data-anim style="margin:1.5vh 0 2.5vh"></div>
    <h1 class="mm-h1" data-anim>标题</h1>
    <div class="split-6-6" style="flex:1;align-items:start;margin-top:2vh">
      <div class="col" data-anim="left" style="gap:1.2vh">
        <div class="mm-meta" style="color:var(--mm-accent)">THESIS · 正</div>
        <div class="mm-body-serif" style="max-width:90%">正方观点阐述。</div>
      </div>
      <div class="col" data-anim="right" style="gap:1.2vh">
        <div class="mm-meta" style="color:var(--mm-text-dim)">ANTITHESIS · 反</div>
        <div class="mm-body-serif" style="max-width:90%">反方观点阐述。</div>
      </div>
    </div>
    <div class="mm-card" data-anim style="margin-top:auto;text-align:center">
      <div class="mm-focus" style="font-weight:400">「合 · 超越对立的洞见」</div>
    </div>
  </div>
  <div class="mm-foot">
    <span>思辨</span>
    <span>03 / NN</span>
  </div>
</div>
```

---

## Layout 4: 时间线（Timeline）

```html
<div class="slide" data-animate="cascade">
  <div class="frame">
    <span class="mm-meta" data-anim>历程 · JOURNEY</span>
    <div class="mm-line-accent" data-anim style="margin:1.5vh 0 2.5vh"></div>
    <h1 class="mm-h1" data-anim>历程标题</h1>
    <div style="flex:1;display:flex;flex-direction:column;gap:0;margin-top:1.5vh">
      <div class="mm-timeline-item" data-anim="step">
        <div class="mm-timeline-num">01</div>
        <div style="width:1px;background:var(--mm-accent);opacity:.2;margin-right:1vw"></div>
        <div class="mm-timeline-content">
          <div class="mm-timeline-title">阶段一</div>
          <div class="mm-timeline-desc">描述文字。</div>
        </div>
      </div>
      <div class="mm-timeline-item" data-anim="step">
        <div class="mm-timeline-num">02</div>
        <div style="width:1px;background:var(--mm-accent);opacity:.2;margin-right:1vw"></div>
        <div class="mm-timeline-content">
          <div class="mm-timeline-title">阶段二</div>
          <div class="mm-timeline-desc">描述文字。</div>
        </div>
      </div>
      <div class="mm-timeline-item" data-anim="step">
        <div class="mm-timeline-num">03</div>
        <div style="width:1px;background:var(--mm-accent);opacity:.2;margin-right:1vw"></div>
        <div class="mm-timeline-content">
          <div class="mm-timeline-title">阶段三</div>
          <div class="mm-timeline-desc">描述文字。</div>
        </div>
      </div>
    </div>
  </div>
  <div class="mm-foot">
    <span>历程</span>
    <span>04 / NN</span>
  </div>
</div>
```

---

## Layout 5: 金句页（Quote）

```html
<div class="slide" data-animate="hero">
  <div class="frame center" style="gap:1.5vh">
    <div class="mm-line-short" data-anim></div>
    <div style="height:3vh"></div>
    <div class="mm-quote" data-anim style="max-width:70%;text-align:center">
      "一句值得反复品读的金句。"
    </div>
    <div class="mm-quote-source" data-anim>—— 出处 / 作者</div>
    <div style="height:3vh"></div>
    <div class="mm-line-short" data-anim></div>
  </div>
  <div class="mm-foot" style="opacity:.3">
    <span>金句</span>
    <span>05 / NN</span>
  </div>
</div>
```

---

## Layout 6: 数据/事实（Data）

```html
<div class="slide" data-animate="cascade">
  <div class="frame center" style="gap:2vh">
    <span class="mm-meta" data-anim>事实 · FACT</span>
    <div class="mm-big-num" data-anim>数据</div>
    <div class="mm-stat" data-anim style="max-width:50%;text-align:center">核心事实说明。</div>
    <div class="mm-line" data-anim style="margin:1vh auto;width:40%"></div>
    <div class="row" style="justify-content:center;gap:3vw;margin-top:1vh" data-anim>
      <div style="text-align:center">
        <div class="mm-big-num" style="font-size:max(32px,4vw)">数字 1</div>
        <div class="mm-stat">说明 1</div>
      </div>
      <div style="text-align:center">
        <div class="mm-big-num" style="font-size:max(32px,4vw)">数字 2</div>
        <div class="mm-stat">说明 2</div>
      </div>
    </div>
  </div>
  <div class="mm-foot">
    <span>事实</span>
    <span>06 / NN</span>
  </div>
</div>
```

---

## Layout 7: 对比（Compare）

```html
<div class="slide" data-animate="directional">
  <div class="frame">
    <span class="mm-meta" data-anim>对比 · COMPARE</span>
    <div class="mm-line-accent" data-anim style="margin:1.5vh 0 2.5vh"></div>
    <h1 class="mm-h1" data-anim>对比标题</h1>
    <div class="split-6-6" style="flex:1;align-items:stretch;margin-top:1.5vh">
      <div class="mm-card" data-anim="left" style="display:flex;flex-direction:column;gap:1.2vh;text-align:center">
        <div class="mm-meta" style="color:var(--mm-text-dim);margin-bottom:.5vh">旧认知</div>
        <div class="mm-body-serif" style="color:var(--mm-text-dim);font-size:max(13px,.95vw)">过去的理解。</div>
      </div>
      <div class="mm-card-accent" data-anim="right" style="display:flex;flex-direction:column;gap:1.2vh;text-align:center">
        <div class="mm-meta" style="color:var(--mm-accent);margin-bottom:.5vh">新认知</div>
        <div class="mm-body-serif" style="font-size:max(13px,.95vw)">现在的理解。</div>
      </div>
    </div>
  </div>
  <div class="mm-foot">
    <span>对比</span>
    <span>07 / NN</span>
  </div>
</div>
```

---

## Layout 8: 清单/原则（Principles）

```html
<div class="slide" data-animate="cascade">
  <div class="frame">
    <span class="mm-meta" data-anim>原则 · PRINCIPLES</span>
    <div class="mm-line-accent" data-anim style="margin:1.5vh 0 2.5vh"></div>
    <h1 class="mm-h1" data-anim>原则标题</h1>
    <div class="col" style="flex:1;justify-content:center;gap:1.5vh;margin-top:1vh">
      <div class="mm-card-accent" data-anim="step" style="padding:1.8vh 2vw">
        <span class="mm-focus" style="font-weight:500">01.</span>
        <span class="mm-body-serif" style="margin-left:.8vw">第一条原则。</span>
      </div>
      <div class="mm-card-accent" data-anim="step" style="padding:1.8vh 2vw">
        <span class="mm-focus" style="font-weight:500">02.</span>
        <span class="mm-body-serif" style="margin-left:.8vw">第二条原则。</span>
      </div>
      <div class="mm-card-accent" data-anim="step" style="padding:1.8vh 2vw">
        <span class="mm-focus" style="font-weight:500">03.</span>
        <span class="mm-body-serif" style="margin-left:.8vw">第三条原则。</span>
      </div>
    </div>
  </div>
  <div class="mm-foot">
    <span>原则</span>
    <span>08 / NN</span>
  </div>
</div>
```

---

## Layout 9: 幕封（Chapter Divider）

```html
<div class="slide" data-animate="hero">
  <div class="frame center">
    <div class="mm-meta" data-anim style="letter-spacing:.4em">CHAPTER</div>
    <div style="height:1px;width:3vw;background:var(--mm-accent);margin:2.5vh auto" data-anim></div>
    <h1 class="mm-hero" data-anim style="text-align:center">章节标题</h1>
    <div class="mm-num" data-anim style="margin-top:1.5vh">—— 卷 〇 一 ——</div>
  </div>
  <div class="mm-foot" style="opacity:.2">
    <span>Flycan 进化论</span>
    <span>09 / NN</span>
  </div>
</div>
```

---

## Layout 10: 总结收束（Summary）

```html
<div class="slide" data-animate="hero">
  <div class="frame center" style="gap:1.5vh">
    <div class="mm-line-short" data-anim></div>
    <div style="height:2vh"></div>
    <div class="mm-quote" data-anim style="max-width:65%;text-align:center;font-weight:300">总结金句。</div>
    <div style="height:2vh"></div>
    <div class="mm-line-short" data-anim></div>
    <div class="mm-body-serif" data-anim style="margin-top:2.5vh;text-align:center;max-width:55%;color:var(--mm-text-dim);font-size:max(13px,.9vw)">结语 / 行动建议。</div>
    <div class="mm-num" data-anim style="margin-top:2vh">FLYCAN · 2026</div>
  </div>
  <div class="mm-foot" style="opacity:.3">
    <span>结语</span>
    <span>10 / NN</span>
  </div>
</div>
```
