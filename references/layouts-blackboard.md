# Blackboard Sketch · 页面布局库

8 种黑板手绘板书风布局骨架。每种都是一个完整可粘贴的 `<section class="slide ...">` 代码块。

---

## 预检（Pre-flight）

### A. 类名必须来自 template-blackboard.html

所有使用的类都在 `assets/template-blackboard.html` 的 `<style>` 块里预定义。

**不要发明新类名**。

### B. 黑板风设计规则

- 所有页面使用 `dark` 主题（黑板底色）
- 粉笔白为正文色
- 粉笔黄为高亮色（重点内容）
- 粉笔蓝为辅助色（副标题、分类）
- 粉笔红为强调色（圈注、标注）
- 使用 `<span class="chalk-yellow">` / `<span class="chalk-blue">` / `<span class="chalk-red">` 标色
- 元素间用 `border-color:rgba(245,240,232,0.15)` 做极淡分割线

### C. 动画规范

- 默认：内容逐步出现，像老师写板书
- 每行/每块依次揭示
- 重点内容用黄/红色高亮时，高亮色在动画最后一步出现
- **禁止**：横向滑动、缩放翻转等商业动画

### D. 图片使用

- 黑板风以板书为主，图片少用
- 如需图片，用白色描边边框 `style="border:2px solid rgba(245,240,232,0.3);"`
- 流程图用 HTML/SVG 画，不要用图片

---

## Layout 1: 封面（Cover）

```html
<section class="slide hero dark">
  <div class="chrome">
    <div>Flycan 进化论 · 板书</div>
    <div>Vol.01</div>
  </div>
  <div class="frame" style="display:grid; gap:4vh; align-content:center; min-height:78vh; text-align:center">
    <div class="chalk-marker" style="margin-bottom:1vh" data-anim>—— 黑板 ——</div>
    <h1 class="board-title" data-anim>标题</h1>
    <h2 class="h-sub" style="color:#7AADD9" data-anim>副标题 / 问题</h2>
    <div style="margin-top:3vh; width:60%; height:2px; background:rgba(245,240,232,0.2); margin-inline:auto" data-anim></div>
    <p class="lead" style="max-width:50vw; margin:0 auto; margin-top:2vh" data-anim>
      Flycan 进化论
    </p>
  </div>
  <div class="foot" style="border-top-color:rgba(245,240,232,0.15)">
    <div>Flycan 进化论 · 板书</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 2: 核心问题（Core Question）

```html
<section class="slide dark">
  <div class="chrome">
    <div>核心问题 · Question</div>
    <div>01 / NN</div>
  </div>
  <div class="frame" style="display:grid; gap:3vh; align-content:center; min-height:78vh">
    <span class="chalk-blue" style="font-family:var(--mono); font-size:14px; letter-spacing:.3em; text-transform:uppercase" data-anim>QUESTION · 核心问题</span>
    <h1 style="font-family:var(--serif-zh); font-weight:700; font-size:6.5vw; line-height:1.15; letter-spacing:-.01em; color:#F5F0E8" data-anim>
      一个需要被回答的问题？
    </h1>
    <div style="margin-top:2vh; display:flex; gap:1vw; align-items:center" data-anim>
      <span style="color:#E8D56E; font-size:2vw">✎</span>
      <span style="font-family:var(--sans-zh); font-size:max(15px,1.1vw); color:rgba(245,240,232,0.7)">—— 让我们来推导</span>
    </div>
  </div>
  <div class="foot" style="border-top-color:rgba(245,240,232,0.15)">
    <div>Page · 问题</div>
    <div>01 / NN</div>
  </div>
</section>
```

---

## Layout 3: 推导过程（Deduction Process）

```html
<section class="slide dark">
  <div class="chrome">
    <div>推导 · Deduction</div>
    <div>02 / NN</div>
  </div>
  <div class="frame" style="padding-top:3vh">
    <span class="chalk-blue" style="font-family:var(--mono); font-size:14px; letter-spacing:.2em;" data-anim>推导过程 · DEDUCTION</span>
    <h2 style="font-family:var(--serif-zh); font-weight:600; font-size:3.2vw; margin:2vh 0 3vh; color:#F5F0E8" data-anim>推导标题</h2>

    <div style="display:flex; flex-direction:column; gap:2.5vh">
      <div style="display:grid; grid-template-columns:auto 1fr; gap:1.5vw 2vw; align-items:start" data-anim>
        <span style="font-family:var(--mono); color:#E8D56E; font-weight:600; font-size:1.3vw">01</span>
        <div>
          <p style="font-family:var(--sans-zh); font-size:max(15px,1.25vw); line-height:1.65; color:#F5F0E8">第一步推导，用粉笔白写清晰。</p>
          <span class="chalk-yellow" style="font-size:max(13px,1vw)">→ 关键推论</span>
        </div>
      </div>
      <div style="height:1px; background:rgba(245,240,232,0.12); width:100%" data-anim></div>
      <div style="display:grid; grid-template-columns:auto 1fr; gap:1.5vw 2vw; align-items:start" data-anim>
        <span style="font-family:var(--mono); color:#E8D56E; font-weight:600; font-size:1.3vw">02</span>
        <div>
          <p style="font-family:var(--sans-zh); font-size:max(15px,1.25vw); line-height:1.65; color:#F5F0E8">第二步推导。</p>
          <span class="chalk-yellow" style="font-size:max(13px,1vw)">→ 另一个推论</span>
        </div>
      </div>
      <div style="height:1px; background:rgba(245,240,232,0.12); width:100%" data-anim></div>
      <div style="display:grid; grid-template-columns:auto 1fr; gap:1.5vw 2vw; align-items:start" data-anim>
        <span style="font-family:var(--mono); color:#D9756B; font-weight:600; font-size:1.3vw">03</span>
        <div>
          <p style="font-family:var(--sans-zh); font-size:max(15px,1.25vw); line-height:1.65; color:#F5F0E8">第三步，得出 <span class="chalk-red">关键结论</span>。</p>
          <span style="font-family:var(--sans-zh); font-size:max(13px,1.05vw); color:rgba(245,240,232,0.6)">← 推导完成</span>
        </div>
      </div>
    </div>
  </div>
  <div class="foot" style="border-top-color:rgba(245,240,232,0.15)">
    <div>Page · 推导</div>
    <div>02 / NN</div>
  </div>
</section>
```

---

## Layout 4: 流程图（Flowchart）

```html
<section class="slide dark">
  <div class="chrome">
    <div>流程 · Flow</div>
    <div>03 / NN</div>
  </div>
  <div class="frame" style="padding-top:3vh">
    <span class="chalk-blue" style="font-family:var(--mono); font-size:14px; letter-spacing:.2em" data-anim>流程图 · FLOW</span>
    <h2 style="font-family:var(--serif-zh); font-weight:600; font-size:3.2vw; margin:2vh 0 3vh; color:#F5F0E8" data-anim>流程标题</h2>

    <div style="display:flex; align-items:center; justify-content:center; gap:1vw; flex:1; padding:2vh 0" data-anim>
      <!-- Step 1 -->
      <div style="border:2px solid rgba(245,240,232,0.4); padding:2vh 2vw; text-align:center; min-width:12vw">
        <div style="font-family:var(--sans-zh); font-weight:600; font-size:1.2vw; color:#E8D56E; margin-bottom:1vh" class="chalk-yellow">步骤一</div>
        <div style="font-family:var(--sans-zh); font-size:max(13px,.95vw); color:rgba(245,240,232,0.8)">描述</div>
      </div>
      <!-- Arrow -->
      <div style="font-size:2vw; color:rgba(245,240,232,0.4)">→</div>
      <!-- Step 2 -->
      <div style="border:2px solid rgba(245,240,232,0.4); padding:2vh 2vw; text-align:center; min-width:12vw">
        <div style="font-family:var(--sans-zh); font-weight:600; font-size:1.2vw; color:#E8D56E; margin-bottom:1vh" class="chalk-yellow">步骤二</div>
        <div style="font-family:var(--sans-zh); font-size:max(13px,.95vw); color:rgba(245,240,232,0.8)">描述</div>
      </div>
      <!-- Arrow -->
      <div style="font-size:2vw; color:rgba(245,240,232,0.4)">→</div>
      <!-- Step 3 -->
      <div style="border:2px solid var(--accent); padding:2vh 2vw; text-align:center; min-width:12vw">
        <div style="font-family:var(--sans-zh); font-weight:600; font-size:1.2vw; color:#D9756B; margin-bottom:1vh">结论</div>
        <div style="font-family:var(--sans-zh); font-size:max(13px,.95vw); color:rgba(245,240,232,0.8)">结果</div>
      </div>
    </div>
  </div>
  <div class="foot" style="border-top-color:rgba(245,240,232,0.15)">
    <div>Page · 流程</div>
    <div>03 / NN</div>
  </div>
</section>
```

---

## Layout 5: 对比分析（Compare & Contrast）

```html
<section class="slide dark">
  <div class="chrome">
    <div>对比 · Compare</div>
    <div>04 / NN</div>
  </div>
  <div class="frame" style="padding-top:3vh">
    <span class="chalk-blue" style="font-family:var(--mono); font-size:14px; letter-spacing:.2em" data-anim>对比分析 · COMPARE</span>
    <h2 style="font-family:var(--serif-zh); font-weight:600; font-size:3.2vw; margin:2vh 0 3vh; color:#F5F0E8" data-anim>对比标题</h2>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:3vw; flex:1; align-items:start">
      <!-- 左列 -->
      <div style="border:2px dashed rgba(245,240,232,0.25); padding:2.5vh 2vw" data-anim>
        <div style="font-family:var(--mono); font-size:12px; letter-spacing:.2em; text-transform:uppercase; color:rgba(245,240,232,0.5); margin-bottom:1.5vh">A · 旧方式</div>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:1.2vh">
          <li style="font-family:var(--sans-zh); font-size:max(14px,1.1vw); color:rgba(245,240,232,0.7); padding-left:1.2em; position:relative">× 局限性描述</li>
          <li style="font-family:var(--sans-zh); font-size:max(14px,1.1vw); color:rgba(245,240,232,0.7); padding-left:1.2em; position:relative">× 局限性描述</li>
        </ul>
      </div>
      <!-- 右列 -->
      <div style="border:2px solid var(--accent); padding:2.5vh 2vw; position:relative" data-anim>
        <div style="font-family:var(--mono); font-size:12px; letter-spacing:.2em; text-transform:uppercase; color:#E8D56E; margin-bottom:1.5vh">B · 新方式 ✓</div>
        <ul style="list-style:none; display:flex; flex-direction:column; gap:1.2vh">
          <li style="font-family:var(--sans-zh); font-size:max(14px,1.1vw); color:#F5F0E8; padding-left:1.2em; position:relative"><span class="chalk-yellow">→</span> 优势描述</li>
          <li style="font-family:var(--sans-zh); font-size:max(14px,1.1vw); color:#F5F0E8; padding-left:1.2em; position:relative"><span class="chalk-yellow">→</span> 优势描述</li>
        </ul>
        <div style="position:absolute; top:-1.2vh; right:1vw; font-size:1.2vw; color:#E8D56E" class="chalk-yellow">★ 推荐</div>
      </div>
    </div>
  </div>
  <div class="foot" style="border-top-color:rgba(245,240,232,0.15)">
    <div>Page · 对比</div>
    <div>04 / NN</div>
  </div>
</section>
```

---

## Layout 6: 重点圈注（Highlight & Annotate）

```html
<section class="slide dark">
  <div class="chrome">
    <div>重点 · Highlight</div>
    <div>05 / NN</div>
  </div>
  <div class="frame" style="padding-top:3vh">
    <span class="chalk-blue" style="font-family:var(--mono); font-size:14px; letter-spacing:.2em" data-anim>重点圈注 · KEY POINTS</span>

    <div style="display:flex; flex-direction:column; gap:3vh; flex:1; justify-content:center; padding:2vh 0">
      <div style="display:flex; align-items:center; gap:1.5vw" data-anim>
        <span style="font-family:var(--serif-zh); font-size:2.5vw; color:#E8D56E; font-weight:700" class="chalk-yellow">01</span>
        <span style="font-family:var(--serif-zh); font-size:2.8vw; color:#F5F0E8; line-height:1.2">第一个重点</span>
        <span style="font-family:var(--sans-zh); font-size:max(13px,1.05vw); color:#D9756B; margin-left:1vw" class="chalk-red">← 核心</span>
      </div>
      <div style="height:1px; background:rgba(245,240,232,0.1)" data-anim></div>
      <div style="display:flex; align-items:center; gap:1.5vw" data-anim>
        <span style="font-family:var(--serif-zh); font-size:2.5vw; color:#E8D56E; font-weight:700" class="chalk-yellow">02</span>
        <span style="font-family:var(--serif-zh); font-size:2.8vw; color:#F5F0E8; line-height:1.2">第二个重点</span>
        <span style="font-family:var(--mono); font-size:max(12px,.9vw); color:#7AADD9; margin-left:1vw">detail</span>
      </div>
      <div style="height:1px; background:rgba(245,240,232,0.1)" data-anim></div>
      <div style="display:flex; align-items:center; gap:1.5vw" data-anim>
        <span style="font-family:var(--serif-zh); font-size:2.5vw; color:#D9756B; font-weight:700" class="chalk-red">03</span>
        <span style="font-family:var(--serif-zh); font-size:2.8vw; color:#F5F0E8; line-height:1.2"><span class="chalk-red">最重要</span>的一个</span>
        <span style="font-family:var(--sans-zh); font-size:max(13px,1.05vw); color:#E8D56E; margin-left:1vw" class="chalk-yellow">!! 牢记</span>
      </div>
    </div>
  </div>
  <div class="foot" style="border-top-color:rgba(245,240,232,0.15)">
    <div>Page · 重点</div>
    <div>05 / NN</div>
  </div>
</section>
```

---

## Layout 7: 结论页（Conclusion）

```html
<section class="slide hero dark">
  <div class="chrome">
    <div>结论 · Conclusion</div>
    <div>NN / NN</div>
  </div>
  <div class="frame" style="display:grid; gap:4vh; align-content:center; min-height:78vh; text-align:center">
    <div style="width:40%; height:3px; background:rgba(245,240,232,0.2); margin:0 auto" data-anim></div>
    <h1 style="font-family:var(--serif-zh); font-weight:700; font-size:6vw; line-height:1.2; color:#E8D56E" data-anim class="chalk-yellow">
      结论
    </h1>
    <p style="font-family:var(--sans-zh); font-size:max(16px,1.3vw); line-height:1.7; max-width:60vw; margin:0 auto; color:#F5F0E8" data-anim>
      一句话总结核心结论。
    </p>
    <div style="margin-top:3vh; display:flex; justify-content:center; gap:2vw" data-anim>
      <span style="font-family:var(--mono); font-size:13px; letter-spacing:.2em; color:#7AADD9">FLYCAN · 2026</span>
    </div>
  </div>
  <div class="foot" style="border-top-color:rgba(245,240,232,0.15)">
    <div>结论 · 下课</div>
    <div>— · —</div>
  </div>
</section>
```

---

## Layout 8: 列表展开（Bullet Points）

```html
<section class="slide dark">
  <div class="chrome">
    <div>要点 · Points</div>
    <div>06 / NN</div>
  </div>
  <div class="frame" style="padding-top:3vh">
    <span class="chalk-blue" style="font-family:var(--mono); font-size:14px; letter-spacing:.2em" data-anim>要点总结 · KEY POINTS</span>

    <div style="display:flex; flex-direction:column; gap:2.5vh; flex:1; justify-content:center; padding:3vh 2vw; margin-top:2vh">
      <div style="display:grid; grid-template-columns:auto 1fr; gap:1.5vw; align-items:start" data-anim>
        <span style="color:#E8D56E; font-size:1.5vw; margin-top:0.1em">✦</span>
        <div>
          <div style="font-family:var(--serif-zh); font-weight:600; font-size:2.2vw; color:#F5F0E8; margin-bottom:0.8vh">要点标题一</div>
          <p style="font-family:var(--sans-zh); font-size:max(14px,1.05vw); line-height:1.6; color:rgba(245,240,232,0.75)">展开说明文字。</p>
        </div>
      </div>
      <div style="height:1px; background:rgba(245,240,232,0.1)" data-anim></div>
      <div style="display:grid; grid-template-columns:auto 1fr; gap:1.5vw; align-items:start" data-anim>
        <span style="color:#7AADD9; font-size:1.5vw; margin-top:0.1em">✦</span>
        <div>
          <div style="font-family:var(--serif-zh); font-weight:600; font-size:2.2vw; color:#F5F0E8; margin-bottom:0.8vh">要点标题二</div>
          <p style="font-family:var(--sans-zh); font-size:max(14px,1.05vw); line-height:1.6; color:rgba(245,240,232,0.75)">展开说明文字。</p>
        </div>
      </div>
      <div style="height:1px; background:rgba(245,240,232,0.1)" data-anim></div>
      <div style="display:grid; grid-template-columns:auto 1fr; gap:1.5vw; align-items:start" data-anim>
        <span style="color:#D9756B; font-size:1.5vw; margin-top:0.1em">✦</span>
        <div>
          <div style="font-family:var(--serif-zh); font-weight:600; font-size:2.2vw; color:#F5F0E8; margin-bottom:0.8vh"><span class="chalk-red">要点标题三</span></div>
          <p style="font-family:var(--sans-zh); font-size:max(14px,1.05vw); line-height:1.6; color:rgba(245,240,232,0.75)">展开说明文字。</p>
        </div>
      </div>
    </div>
  </div>
  <div class="foot" style="border-top-color:rgba(245,240,232,0.15)">
    <div>Page · 要点</div>
    <div>06 / NN</div>
  </div>
</section>
```
