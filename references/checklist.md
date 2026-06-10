# 质量检查清单（Checklist）

生成 PPT 前，先通读一遍；生成后，逐项自检。

---

## 🔴 P0 · 一定不能犯的错

### 1. 预检：类名必须存在

**做法**：
- 生成 PPT 前，先 Read 当前模板的 `<style>` 块
- 确认 layouts 里用到的类都已定义
- 如果某个类缺失，在模板 `<style>` 里补上

### 2. 不要用 emoji 作图标

Avocado / Dark Magazine 用 Lucide 图标库。Blackboard 用 SVG 手绘元素。

### 3. 页面主题节奏

- Avocado：hero 页与 light 页交替，不要连续 3 页以上同主题
- Dark Magazine：所有页使用 dark 背景（深绿色），hero 页和非 hero 页通过内容密度制造节奏
- Blackboard：所有页纯黑背景，通过布局变化（流程图/思维导图/对比/列表）制造节奏

### 4. 标题字号不能超过屏宽

- `h-hero` 最大 10vw / `chalk-title` 最大 7vw
- 长标题用 `<br>` 手工断行

### 5. 字体分工

| 角色 | Avocado | Dark Magazine | Blackboard |
|------|---------|---------------|------------|
| 标题 | Noto Serif SC（衬线） | Noto Serif SC（衬线） | ZCOOL XiaoWei（手写） |
| 正文 | Noto Sans SC（非衬线） | Noto Sans SC（非衬线） | Noto Sans SC |
| 元数据 | IBM Plex Mono（等宽） | IBM Plex Mono（等宽） | JetBrains Mono |

### 6. 图片比例

用标准比例 16:10 / 4:3 / 3:2 / 16:9，`object-fit:cover` 做裁切。  
Blackboard 风禁止使用真实照片。

### 7. chrome 和 kicker 不要写同一句话

- `chrome` = 杂志页眉 / 导航标签（可跨页重复）
- `kicker` = 本页独一份的引导句（每页不同）

### 8. 动效标注

- Avocado / Dark Magazine：所有页至少给标题/正文/主要元素加 `data-anim`
- Blackboard：使用 `data-anim` + `data-anim="step"` 做逐步揭示

---

## 🟡 P1 · 排版节奏

### 9. Hero 页要和内容页交替（仅 Avocado）

推荐节奏：封面(hero) → 内容页 × 3-4 → 幕封(hero) → 内容页 × 3-4 → 金句页 → 总结

### 10. 留白要充足

Avocado 风以留白为特色，不要塞满内容。内容页最多 3 个要点。  
Dark Magazine 适当留白，可用分割线组织信息。  
Blackboard 风信息密度可稍高（像课堂笔记），但仍需清晰层次。

### 11. 术语统一

全篇统一用词，不要中英混译。

### 12. 每页一个核心观点

避免一页塞多个观点。如果信息太多，拆成多页。

---

## 🟢 P2 · 视觉打磨

### 13. Avocado 风：清新自然

- 主色不出 #A8C686 和辅助色范围
- 配图用纪实感、自然光风格
- 动画克制：淡入 + 轻微位移

### 14. Dark Magazine 风：深绿质感

- 暗绿色背景 `#1B2F1D` 统一
- 强调色（accent）控制杂志调性
- 衬线标题 + 非衬线正文
- 禁止：毛玻璃、高饱和荧光色、渐变背景

### 15. Blackboard 风：黑板手绘

- 纯黑背景 `#0B0B0B`
- 彩色粉笔颜色正确使用（白/黄/蓝/粉/绿/橙/红）
- 用手绘框线（`chalk-box`）代替圆角卡片
- 用 SVG 箭头/火柴人代替图标
- 像板书，不要像 PPT
- 禁止：真实照片、3D 图标、杂志排版

---

## 🔵 P3 · 操作细节

### 16. 图片路径用相对路径

`images/xxx.png`，不要用绝对路径。  
Blackboard 风一般不使用图片。

### 17. 页码写死

JS 动态算总页数，但 `.chrome` / `.chalk-foot` 里的 `XX / NN` 是写死的。

### 18. 翻页导航要保留

模板默认支持：← → / 滚轮 / 触屏滑动 / 底部圆点 / ESC 索引。不要删 JS 里的导航逻辑。

### 19. `<title>` 要改为实际标题

grep "\[必填\]" 应无结果。

---

## 最终自检清单

```
预检
  □ 已读过 template 的 <style>,确认所需类都存在
  □ 已决定每页用哪个 Layout
  □ 已画出页面节奏表
  □ <title> 已改为实际 deck 标题

内容
  □ 每页一个核心观点
  □ 最多三个要点
  □ 避免大段文字
  □ 没有使用 emoji 作图标

排版(仅 Avocado)
  □ 标题 vs 正文间距 ≥ 4vh
  □ hero 页和 non-hero 页交替
  □ 留白充足

排版(仅 Dark Magazine)
  □ 所有页使用深绿背景
  □ 强调色统一
  □ 衬线标题 + 非衬线正文

排版(仅 Blackboard)
  □ 所有页使用纯黑背景
  □ 粉笔配色正确（白/黄/蓝/粉/绿/橙/红）
  □ 使用手绘框线代替圆角卡片
  □ 无真实照片 / 3D 图标

动效
  □ 翻页时内容逐个淡入
  □ 金句页有逐行揭示效果
  □ 流程页支持手动逐步推进(Avocado/Dark Magazine)
  □ data-anim 数量 ≥ 页数 × 3

交互
  □ ← → 翻页正常
  □ 底部圆点数量与总页数匹配
  □ chrome / chalk-foot 页码和实际页号一致
```
