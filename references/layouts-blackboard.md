# 黑板手绘板报风 · 页面布局库

8 种黑板板报风布局骨架。每种都是一个完整可粘贴的 `<div class="slide dark">` 代码块。

---

## 预检（Pre-flight）

### A. 类名必须来自 template-blackboard.html

所有使用的类都在 `assets/template-blackboard.html` 的 `<style>` 块里预定义。

**不要发明新类名**。

### B. 黑板风设计规则

- 所有页面使用纯黑底色 `#0B0B0B`
- 标题/正文：白色粉笔（默认色 `#F5F5F5`）
- 关键词/重点：黄色粉笔 `.chalk-yellow`
- 流程/逻辑：蓝色粉笔 `.chalk-blue`
- 强调：粉色 `.chalk-pink` / 红色 `.chalk-red`
- 正向：绿色 `.chalk-green`
- 行动：橙色 `.chalk-orange`
- 优先用 `chalk-box` / `chalk-underline` / `chalk-arrow` 做手绘效果
- 如需人物示意，用 `<svg class="stickman">` 火柴人

### C. 动画规范

- 逐步揭示，像老师在黑板上边讲边写
- 用 `data-anim="step"` 标注重步进元素
- 禁止：飞入、弹跳、旋转、炫酷转场

### D. 禁止

- ❌ 真实照片、3D 图标
- ❌ 渐变背景、毛玻璃
- ❌ 商务/企业/杂志排版
- ❌ 极细字体、无衬线商业感
- ❌ Magzine-like chrome/foot

---

## Layout 1: 封面（Cover）

```html
<div class="slide dark" data-animate="hero">
  <div class="frame center" style="gap:1.5vh">
    <div style="font-family:var(--mono);font-size:9px;letter-spacing:.28em;text-transform:uppercase;color:var(--chalk-dim);opacity:.6;margin-bottom:1vh" data-anim>—— 黑板 · 手绘 ——</div>
    <h1 class="chalk-title" data-anim>主标题</h1>
    <div class="chalk-h2 chalk-blue" data-anim style="margin-top:1vh">副标题 / 问题</div>
    <div style="width:40%;height:2px;background:rgba(245,245,245,.15);margin:2vh auto" data-anim></div>
    <div class="chalk-note" data-anim style="text-align:center;max-width:50vw">一句话说明 / 引言</div>
  </div>
  <div class="chalk-foot">
    <span>Flycan 进化论</span>
    <span>01 / NN</span>
  </div>
</div>
```

---

## Layout 2: 核心问题（Core Question）

```html
<div class="slide dark" data-animate="cascade">
  <div class="frame center">
    <span class="chalk-label" data-anim style="color:var(--chalk-yellow)">Q · 核心问题</span>
    <h1 class="chalk-h1 chalk-yellow" data-anim style="margin-top:1.5vh;text-align:center;max-width:80%">一个需要被回答的问题？</h1>
    <div style="width:30%;height:2px;background:rgba(245,245,245,.1);margin:2.5vh auto" data-anim></div>
    <div class="chalk-box" data-anim style="max-width:60%;text-align:center;margin:0 auto">
      <div class="chalk-body" style="text-align:left">
        背景说明问题由来的文字。<br><br>
        • 要点 1<br>
        • 要点 2<br>
        • 要点 3
      </div>
    </div>
    <div class="chalk-body chalk-yellow" data-anim style="margin-top:2vh;text-align:center">
      → 让我们来推导
    </div>
  </div>
  <div class="chalk-foot">
    <span>核心问题</span>
    <span>02 / NN</span>
  </div>
</div>
```

---

## Layout 3: 推导过程（Deduction）

```html
<div class="slide dark" data-animate="cascade">
  <div class="frame">
    <span class="chalk-label" data-anim>推导 · DEDUCTION</span>
    <div class="chalk-h2" data-anim style="margin:1.5vh 0 2.5vh">推导标题</div>
    <div class="flow-step" data-anim>
      <div class="step-label">步骤 01</div>
      <div class="step-body">第一步推导文字<br><span class="chalk-yellow">→ 关键推论</span></div>
    </div>
    <svg class="chalk-arrow" viewBox="0 0 60 20" data-anim="fade"><path d="M5,10 H50 M45,4 L52,10 L45,16" stroke="currentColor"/></svg>
    <div class="flow-step blue" data-anim>
      <div class="step-label">步骤 02</div>
      <div class="step-body">第二步推导<br><span class="chalk-yellow">→ 另一个推论</span></div>
    </div>
    <svg class="chalk-arrow" viewBox="0 0 60 20" data-anim="fade"><path d="M5,10 H50 M45,4 L52,10 L45,16" stroke="currentColor"/></svg>
    <div class="flow-step pink" data-anim>
      <div class="step-label">结论</div>
      <div class="step-body chalk-pink">最终结论</div>
    </div>
  </div>
  <div class="chalk-foot">
    <span>推导过程</span>
    <span>03 / NN</span>
  </div>
</div>
```

---

## Layout 4: 对比分析（Compare & Contrast）

```html
<div class="slide dark" data-animate="directional">
  <div class="frame">
    <span class="chalk-label" data-anim style="color:var(--chalk-blue)">对比 · COMPARE</span>
    <div class="chalk-h2" data-anim style="margin:1.5vh 0 2.5vh">对比标题</div>
    <div class="split" style="flex:1;align-items:stretch">
      <div class="chalk-box dashed" data-anim="left" style="display:flex;flex-direction:column;gap:1.2vh">
        <div class="chalk-label" style="color:var(--chalk-dim);margin-bottom:.5vh">A · 旧方式</div>
        <div class="chalk-body" style="color:var(--chalk-dim)">× 局限性描述</div>
        <div class="chalk-body" style="color:var(--chalk-dim)">× 局限性描述</div>
      </div>
      <div class="chalk-box yellow" data-anim="right" style="display:flex;flex-direction:column;gap:1.2vh">
        <div class="chalk-label chalk-yellow" style="margin-bottom:.5vh">B · 新方式 ✓</div>
        <div class="chalk-body">→ 优势描述</div>
        <div class="chalk-body">→ 优势描述</div>
      </div>
    </div>
    <div class="chalk-box chalk-blue" data-anim style="margin-top:auto;text-align:center;border-style:dotted">
      <span style="color:var(--chalk);font-size:max(12px,.95vw)">结论总结</span>
    </div>
  </div>
  <div class="chalk-foot">
    <span>对比分析</span>
    <span>04 / NN</span>
  </div>
</div>
```

---

## Layout 5: 思维导图（Mind Map）

```html
<div class="slide dark" data-animate="cascade">
  <div class="frame">
    <span class="chalk-label" data-anim>思维导图 · MIND MAP</span>
    <div class="mind-map-center" data-anim>中心主题</div>
    <div class="mind-map-branches" data-anim>
      <div class="mind-map-branch">
        <div class="branch-label chalk-yellow">分支 01</div>
        <div class="branch-desc">说明文字</div>
      </div>
      <div class="mind-map-branch">
        <div class="branch-label chalk-blue">分支 02</div>
        <div class="branch-desc">说明文字</div>
      </div>
      <div class="mind-map-branch">
        <div class="branch-label chalk-green">分支 03</div>
        <div class="branch-desc">说明文字</div>
      </div>
      <div class="mind-map-branch">
        <div class="branch-label chalk-pink">分支 04</div>
        <div class="branch-desc">说明文字</div>
      </div>
    </div>
  </div>
  <div class="chalk-foot">
    <span>思维导图</span>
    <span>05 / NN</span>
  </div>
</div>
```

---

## Layout 6: 重点清单（Checklist）

```html
<div class="slide dark" data-animate="cascade">
  <div class="frame">
    <span class="chalk-label" data-anim>清单 · CHECKLIST</span>
    <div class="chalk-h2" data-anim style="margin:1.5vh 0 2.5vh">标题</div>
    <ul class="chalk-list" data-anim>
      <li class="done" data-anim="step">已完成事项</li>
      <li data-anim="step">待办事项 1</li>
      <li data-anim="step">待办事项 2</li>
      <li data-anim="step" class="chalk-yellow">重要待办</li>
    </ul>
    <div class="chalk-box yellow" data-anim style="margin-top:auto;text-align:center">
      <span class="chalk-yellow">所有要点总结</span>
    </div>
  </div>
  <div class="chalk-foot">
    <span>要点清单</span>
    <span>06 / NN</span>
  </div>
</div>
```

---

## Layout 7: 结论页（Conclusion）

```html
<div class="slide dark" data-animate="hero">
  <div class="frame center">
    <div style="width:30%;height:2px;background:rgba(245,245,245,.15);margin-bottom:3vh" data-anim></div>
    <svg class="stickman lg" viewBox="0 0 100 180" data-anim="fade">
      <circle cx="50" cy="20" r="14"/>
      <line x1="50" y1="34" x2="50" y2="120"/>
      <line x1="50" y1="55" x2="25" y2="85"/>
      <line x1="50" y1="55" x2="75" y2="85"/>
      <line x1="50" y1="120" x2="30" y2="170"/>
      <line x1="50" y1="120" x2="70" y2="170"/>
    </svg>
    <h1 class="chalk-h1 chalk-yellow" data-anim style="margin-top:1.5vh;text-align:center">结论</h1>
    <div class="chalk-note" data-anim style="margin-top:1.5vh;text-align:center;max-width:60%">一句话总结核心结论。</div>
  </div>
  <div class="chalk-foot">
    <span>结论</span>
    <span>NN / NN</span>
  </div>
</div>
```

---

## Layout 8: 金句收束（Quote）

```html
<div class="slide dark" data-animate="cascade">
  <div class="frame center">
    <span class="chalk-label" data-anim style="color:var(--chalk-yellow)">金句 · QUOTE</span>
    <div class="chalk-h1" data-anim style="margin-top:2vh;text-align:center;max-width:70%;line-height:1.35">
      "一句话金句。"
    </div>
    <div style="width:15%;height:2px;background:rgba(245,245,245,.12);margin:2.5vh auto" data-anim></div>
    <div class="chalk-note" data-anim style="text-align:center;max-width:55%">解释金句的文字。</div>
    <div style="margin-top:3vh;display:flex;gap:1.5vw;justify-content:center" data-anim>
      <span class="chalk-dim" style="font-family:var(--mono);font-size:9px;letter-spacing:.25em">FLYCAN · 2026</span>
    </div>
  </div>
  <div class="chalk-foot">
    <span>金句</span>
    <span>NN / NN</span>
  </div>
</div>
```
