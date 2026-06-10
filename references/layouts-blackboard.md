# 黑板手绘板报风 · 页面布局库

8 种课堂板书风布局。每个都是 `<div class="slide">` 代码块。

---

## 预检

### A. 类名来自 template-blackboard.html

所有类在 `assets/template-blackboard.html` 的 `<style>` 里预定义了。**不要发明新类名**。

### B. 核心设计——像课堂黑板

- 底色 `#0B0B0B`——真正的深黑石板黑板
- 黑板纹理：粉笔灰痕迹 + 板擦纹 + 木纹
- 粉笔字要有**纹理感**（通过 text-shadow 模拟粉笔边缘毛糙感）
- **不同层级文字粗细不同**：
  - `.chalk-title`（巨标题 6.5vw）—— **粗粉笔**，ZCOOL XiaoWei + 重阴影
  - `.chalk-h1`（大标题 4.8vw）—— **中粉笔**，ZCOOL XiaoWei + 中阴影
  - `.chalk-h2`（副标题 3.2vw）—— **细粉笔手写**，Ma Shan Zheng 行书
  - `.chalk-body`（正文 1.25vw）—— **普通粉笔**，Noto Sans SC 400（略粗）
  - `.chalk-note`（注释 1.1vw）—— **粉笔注释**，Ma Shan Zheng 手写体
  - `.chalk-mono`（标签 0.75vw）—— **刻印**，JetBrains Mono 等宽

### C. 粉笔配色

| 类名 | 色值 | 用途 |
|------|------|------|
| `chalk-yellow` | `#FFD54F` 黄粉笔 | 关键词/重点/核心问题 |
| `chalk-blue` | `#64B5F6` 蓝粉笔 | 流程/逻辑/分析 |
| `chalk-pink` | `#F48FB1` 粉粉笔 | 强调/警示/有趣的观点 |
| `chalk-green` | `#81C784` 绿粉笔 | 成长/确认/正向 |
| `chalk-orange` | `#FFB74D` 橙粉笔 | 行动/建议/注意 |
| `chalk-red` | `#EF5350` 红粉笔 | 风险/错误/否定（少用） |

### D. 推导结构

每一份 Blackboard Sketch PPT 应当体现**推导过程**：

```
问题 → 分析 → 推导 → 结论
```

### E. 海报/封面规则

- **封面不要像 magazine/海报**——更像老师在黑板上写下今日主题
- 允许使用火柴人、手绘框线、粉笔箭头
- 禁止：干净整洁的杂志封面感
- 要有"开始上课啦"的感觉

### G. 扩展手绘 SVG 元素

除了 `stickman`（火柴人）、`chalk-arrow`（箭头）、`chalk-lightbulb`（灯泡）、`chalk-check`（勾选），模板新增了更多手绘插画元素：

| 元素 | 类名 | 默认颜色 | 用途 |
|------|------|----------|------|
| 大脑 | `chalk-brain` | 粉色 | 思考/智力/理解 |
| 放大镜 | `chalk-magnifier` | 蓝色 | 分析/检查/调试 |
| 对话框 | `chalk-dialog` | 绿色 | 沟通/对话/提示 |
| 书本 | `chalk-book` | 白色 | 阅读/学习/知识 |
| 星星 | `chalk-star` | 黄色 | 亮点/成就/评级 |
| 火箭 | `chalk-rocket` | 黄色 | 成长/快速/突破 |
| 机器人 | `chalk-robot` | 黄色 | AI/自动化/编程 |
| 靶心 | `chalk-target` | 粉色 | 目标/精准/定位 |
| 旗帜 | `chalk-flag` | 绿色 | 里程碑/完成/目标 |

```html
<!-- 使用方式示例 -->
<svg class="chalk-brain" viewBox="0 0 100 100"><!-- SVG path --></svg>
<svg class="chalk-magnifier" viewBox="0 0 100 100"><!-- SVG path --></svg>
<svg class="chalk-star" viewBox="0 0 100 100"><polygon points="50,5 63,38 ..."/></svg>
```

### H. SVG 粉笔滤镜

模板内置 `#chalk-texture` SVG 滤镜，可通过 CSS `filter: url(#chalk-texture)` 为任意元素添加粉笔毛糙纹理效果：

```html
<svg class="chalk-filter" aria-hidden="true">
  <filter id="chalk-texture">
    <feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8"/>
    <feComposite in="displaced" in2="SourceGraphic" operator="in"/>
  </filter>
</svg>
```

### I. 禁止

- ❌ 真实照片、3D 图标、emoji
- ❌ 渐变背景、毛玻璃、圆角卡片
- ❌ 杂志排版、极简海报风
- ❌ 极细无衬线字体作为标题
- ❌ `chrome`/`foot` 杂志式页眉

---

## Layout 1: 黑板开场（Cover）

老师敲敲黑板："今天我们来聊……"

```html
<div class="slide" data-animate="hero">
  <div class="frame center" style="gap:1.5vh">
    <div class="chalk-mono" data-anim style="color:var(--chalk-dim)">—— 黑板 · 手绘 ——</div>
    <div style="width:3vw;height:2.5px;background:var(--chalk-yellow);opacity:.5;margin:1vh auto" data-anim></div>
    <h1 class="chalk-title" data-anim>今日主题</h1>
    <div class="chalk-h2 chalk-yellow" data-anim style="margin-top:.5vh">一句话副标题</div>
    <div style="width:40%;height:1.5px;background:rgba(245,245,245,.1);margin:2vh auto" data-anim></div>
    <div class="chalk-note" data-anim style="text-align:center;max-width:55%">开场引入语，像老师上课的开场白。</div>
    <div class="row" style="justify-content:center;margin-top:1.5vh;gap:1vw" data-anim="fade">
      <svg class="stickman" viewBox="0 0 100 180" style="width:3vw;height:5.4vw">
        <circle cx="50" cy="20" r="14"/>
        <line x1="50" y1="34" x2="50" y2="120"/>
        <line x1="50" y1="55" x2="25" y2="85"/><line x1="50" y1="55" x2="75" y2="85"/>
        <line x1="50" y1="120" x2="30" y2="170"/><line x1="50" y1="120" x2="70" y2="170"/>
      </svg>
    </div>
  </div>
  <div class="chalk-foot">
    <span>Flycan 进化论</span>
    <span>01 / NN</span>
  </div>
</div>
```

---

## Layout 2: 核心问题（Question）

在黑板中央写下一个大大的问题。

```html
<div class="slide" data-animate="cascade">
  <div class="frame center">
    <div class="chalk-mono" data-anim style="color:var(--chalk-yellow)">Q · 核心问题</div>
    <div style="width:2vw;height:2px;background:var(--chalk-yellow);margin:1.5vh auto" data-anim></div>
    <h1 class="chalk-h1 chalk-yellow" data-anim style="margin-top:1vh;text-align:center;max-width:80%;line-height:1.2">一个必须被回答的问题？</h1>
    <div class="chalk-box dashed" data-anim style="max-width:55%;text-align:left;margin:2vh auto 0">
      <div class="chalk-body" style="text-align:left">
        问题背景说明——为什么这个问题重要。<br>
        <span class="chalk-yellow">→ </span>要点 1<br>
        <span class="chalk-blue">→ </span>要点 2
      </div>
    </div>
    <div class="chalk-note chalk-yellow" data-anim style="margin-top:2vh;text-align:center">
      —— 让我们在黑板上推导 ——
    </div>
  </div>
  <div class="chalk-foot">
    <span>核心问题</span>
    <span>02 / NN</span>
  </div>
</div>
```

---

## Layout 3: 推导流程（Deduction Flow）

老师在黑板上一行一行写推导过程，每一步用彩色粉笔标注。

```html
<div class="slide" data-animate="cascade">
  <div class="frame">
    <div class="chalk-mono" data-anim>推导 · DEDUCTION</div>
    <div class="chalk-h2" data-anim style="margin:1vh 0 2vh">推导标题</div>
    <div style="flex:1;display:flex;flex-direction:column;gap:.8vh">
      <div class="flow-step" data-anim="step">
        <div class="step-label">STEP 01 · 已知</div>
        <div class="step-body">已知条件/前提</div>
      </div>
      <div style="text-align:center;padding:.3vh 0" data-anim="step">
        <svg class="chalk-arrow yellow" viewBox="0 0 60 24" style="width:3.5vw"><path d="M5,12 H50 M45,6 L52,12 L45,18"/></svg>
      </div>
      <div class="flow-step blue" data-anim="step">
        <div class="step-label">STEP 02 · 推理</div>
        <div class="step-body"><span class="highlight blue">→</span> 推导过程</div>
      </div>
      <div style="text-align:center;padding:.3vh 0" data-anim="step">
        <svg class="chalk-arrow yellow" viewBox="0 0 60 24" style="width:3.5vw"><path d="M5,12 H50 M45,6 L52,12 L45,18"/></svg>
      </div>
      <div class="flow-step green" data-anim="step">
        <div class="step-label">STEP 03 · 推论</div>
        <div class="step-body"><span class="highlight green">→</span> 关键推论</div>
      </div>
      <div style="text-align:center;padding:.3vh 0" data-anim="step">
        <svg class="chalk-arrow yellow" viewBox="0 0 60 24" style="width:3.5vw"><path d="M5,12 H50 M45,6 L52,12 L45,18"/></svg>
      </div>
      <div class="flow-step pink" data-anim="step">
        <div class="step-label">结论</div>
        <div class="step-body"><span class="highlight pink">✦</span> 最终结论</div>
      </div>
    </div>
  </div>
  <div class="chalk-foot">
    <span>推导过程</span>
    <span>03 / NN</span>
  </div>
</div>
```

---

## Layout 4: 双栏对比（Compare）

黑板上画一条竖线，左右对比。

```html
<div class="slide" data-animate="directional">
  <div class="frame">
    <div class="chalk-mono" data-anim style="color:var(--chalk-blue)">对比 · COMPARE</div>
    <div class="chalk-h2" data-anim style="margin:1vh 0 2vh">对比什么？</div>
    <div class="split-6-6" style="flex:1;align-items:stretch">
      <div class="chalk-box dashed" data-anim="left" style="display:flex;flex-direction:column;gap:1vh;text-align:center">
        <div class="chalk-mono" style="color:var(--chalk-dim);margin-bottom:.5vh">BEFORE</div>
        <div class="chalk-body" style="color:var(--chalk-dim);text-align:left">× 旧的认知/方式</div>
        <div class="chalk-body" style="color:var(--chalk-dim);text-align:left">× 局限性</div>
      </div>
      <div class="chalk-box yellow thick" data-anim="right" style="display:flex;flex-direction:column;gap:1vh;text-align:center">
        <div class="chalk-mono chalk-yellow" style="margin-bottom:.5vh">AFTER</div>
        <div class="chalk-body" style="text-align:left"><span class="chalk-green">✓</span> 新的认知/方式</div>
        <div class="chalk-body" style="text-align:left"><span class="chalk-green">✓</span> 优势</div>
      </div>
    </div>
    <div class="vs-badge" data-anim>VS</div>
  </div>
  <div class="chalk-foot">
    <span>对比分析</span>
    <span>04 / NN</span>
  </div>
</div>
```

---

## Layout 5: 思维导图（Mind Map）

黑板中央写主题，向四周发散分支。

```html
<div class="slide" data-animate="cascade">
  <div class="frame">
    <div class="chalk-mono" data-anim>思维导图 · MIND MAP</div>
    <div class="mind-map-center" data-anim>中心主题</div>
    <div class="mind-map-branches" data-anim style="margin-top:1.5vh">
      <div class="mind-map-branch">
        <div class="branch-line" style="background:var(--chalk-yellow);opacity:.3"></div>
        <div class="branch-label">分支 01</div>
        <div class="branch-desc">说明文字</div>
      </div>
      <div class="mind-map-branch">
        <div class="branch-line" style="background:var(--chalk-blue);opacity:.3"></div>
        <div class="branch-label chalk-blue">分支 02</div>
        <div class="branch-desc">说明文字</div>
      </div>
      <div class="mind-map-branch">
        <div class="branch-line" style="background:var(--chalk-green);opacity:.3"></div>
        <div class="branch-label chalk-green">分支 03</div>
        <div class="branch-desc">说明文字</div>
      </div>
      <div class="mind-map-branch">
        <div class="branch-line" style="background:var(--chalk-pink);opacity:.3"></div>
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

## Layout 6: 要点清单（Checklist）

老师在黑板上一项一项列出。

```html
<div class="slide" data-animate="cascade">
  <div class="frame">
    <div class="chalk-mono" data-anim>清单 · CHECKLIST</div>
    <div class="chalk-h2" data-anim style="margin:1vh 0 2vh">标题</div>
    <ul class="chalk-list" style="flex:1;justify-content:center">
      <li class="done" data-anim="step">已完成事项</li>
      <li data-anim="step">待办事项 1</li>
      <li data-anim="step" class="chalk-yellow">重要待办</li>
      <li data-anim="step">待办事项 2</li>
    </ul>
    <div class="chalk-box yellow" data-anim style="text-align:center;margin-top:auto">
      <span class="chalk-yellow chalk-body-strong">总结要点</span>
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

老师放下粉笔，总结本节课结论。火柴人举手庆祝。

```html
<div class="slide" data-animate="hero">
  <div class="frame center">
    <div class="chalk-mono" data-anim style="color:var(--chalk-yellow)">结论 · CONCLUSION</div>
    <div style="width:3vw;height:2.5px;background:var(--chalk-yellow);opacity:.4;margin:1.5vh auto" data-anim></div>
    <div class="chalk-h1 chalk-yellow" data-anim style="margin-top:1vh;text-align:center;max-width:70%">核心结论</div>
    <div class="chalk-note" data-anim style="margin-top:1.5vh;text-align:center;max-width:55%">结论的展开说明。</div>
    <div class="row" style="justify-content:center;margin-top:2vh;gap:1.5vw" data-anim="fade">
      <svg class="stickman" viewBox="0 0 100 180" style="width:3.5vw;height:6.3vw">
        <circle cx="50" cy="20" r="14"/>
        <line x1="50" y1="34" x2="50" y2="120"/>
        <line x1="50" y1="55" x2="20" y2="85"/><line x1="50" y1="55" x2="80" y2="85"/>
        <line x1="50" y1="120" x2="30" y2="170"/><line x1="50" y1="120" x2="70" y2="170"/>
        <path d="M72,25 Q85,10 95,20" stroke-width="2.5" fill="none"/>
      </svg>
    </div>
    <div class="chalk-mono" data-anim style="margin-top:1.5vh;color:var(--chalk-dim)">—— 今天就讲到这里 ——</div>
  </div>
  <div class="chalk-foot">
    <span>结论</span>
    <span>07 / NN</span>
  </div>
</div>
```

---

## Layout 8: 金句收束（Quote）

老师在黑板角落写下金句。

```html
<div class="slide" data-animate="cascade">
  <div class="frame center">
    <div class="chalk-mono" data-anim style="color:var(--chalk-yellow)">金句 · QUOTE</div>
    <div style="width:2vw;height:2px;background:var(--chalk-yellow);opacity:.4;margin:1.5vh auto" data-anim></div>
    <div class="chalk-h1" data-anim style="margin-top:1vh;text-align:center;max-width:68%;line-height:1.35">
      "一句话金句。"
    </div>
    <div style="width:20%;height:1.5px;background:rgba(245,245,245,.1);margin:2vh auto" data-anim></div>
    <div class="chalk-note" data-anim style="text-align:center;max-width:50%">金句的出处或注解。</div>
    <div class="chalk-mono" data-anim style="margin-top:2.5vh;color:var(--chalk-dim)">FLYCAN · 2026</div>
  </div>
  <div class="chalk-foot">
    <span>金句</span>
    <span>08 / NN</span>
  </div>
</div>
```
