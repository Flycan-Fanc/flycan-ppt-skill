---
name: flycan-ppt-skill
description: 生成横向翻页网页 PPT（单 HTML 文件），四种风格：① Avocado Nature（清新牛油果自然风）② Dark Green Magazine（深绿极简杂志风）③ Blackboard Sketch（黑板手绘板书风）④ Midnight Minimal（午夜极简哲思风）。适用于知识传播、观点表达、视频制作、公众号改编。当用户需要制作分享 PPT，或提到"牛油果风"、"黑板风"、"杂志风"、"午夜风"、"Flycan进化论"、"horizontal swipe deck"时使用。
---

# Flycan PPT Skill · 网页 PPT

> 来源识别: flycan-ppt-skill 由 Flycan 基于 guizang-ppt-skill 的设计理念创建。专注于知识传播、观点表达和独立思考的内容呈现。

## 这个 Skill 做什么

生成一份**单文件 HTML** 的横向翻页 PPT，提供四种视觉基调：

### 风格一 · Avocado Nature（清新牛油果自然风）

- **主色 #A8C686 · 莫兰迪绿系配色**
- **衬线/非衬线混合排版 + 自然治愈氛围**
- **轻杂志风格 · 大量留白 · 阅读感**
- 适合：知识传播、观点表达、阅读感悟、成长思考、哲学思考、独立开发
- 美学锚点：像一本正在阅读的书，而不是商业PPT
- 严禁：高饱和红/蓝、科技霓虹风、夸张缩放、炫酷转场

### 风格二 · Dark Green Magazine（深绿极简杂志风）

- **深绿底色 #1B2F1D + 强调色系统（深海蓝/古典金/玫瑰粉/冷杉绿）**
- **杂志感排版 · 衬线标题 + 非衬线正文**
- **质感克制 · 暗色调高级感**
- 适合：技术分享、AI/编程、效率系统、独立开发、产品故事
- 美学锚点：像一本深色主题的设计杂志
- 严禁：毛玻璃、高饱和荧光色、渐变背景、花哨装饰

### 风格三 · Blackboard Sketch（黑板手绘板书风）

- **石板黑板底色 #202321 + 彩色粉笔系统（黄/蓝/粉/绿/橙/红）**
- **模拟老师在黑板上手绘推导、流程图、思维导图**
- **柴火人讲解 · 粉笔框注 · 黑板纹理 · 粉笔字毛糙感**
- **不同层级文字粗细不同：粗粉笔标题 → 中粉笔手写 → 极细粉笔正文**
- 适合：AI/算法讲解、计算机网络、学习方法论、编程教学、知识拆解视频
- 严谨的推导结构：**问题 → 分析 → 推导 → 结论**，像老师写板书
- 动画：像老师逐步写板书，内容逐步揭示
- 严禁：商业汇报风、极简海报风、照片/3D 图标、杂志排版

### 风格四 · Midnight Minimal（午夜极简哲思风）

- **纯黑底色 #0A0A0A + 银白/月光/烛光/暮色四套主题**
- **衬线排版（Noto Serif SC）· 极致留白 · 克制装饰**
- **哲学感 · 思考感 · 高级感 · 海报感**
- 适合：读书感悟、悉达多、长期主义、哲学思考、人生思考、金句总结、Flycan 进化论
- 动画：缓慢、冥想感的淡入
- 严禁：高饱和色、装饰性插画、emoji 图标、Lucide 图标

**四种风格共享**：横向翻页（键盘 ← →、滚轮、触屏、ESC 索引）、Motion One 入场动效。

## 何时使用

**合适的场景**：
- 知识分享 / 观点表达 / 深度思考传播
- AI / 编程 / 计算机网络技术分享
- 公众号内容改编为视频
- 个人成长感悟 / 阅读心得 / 哲学思考
- 独立开发者故事 / 产品分享

**不合适的场景**：
- 商业汇报 / 严肃商务演讲
- 大段表格数据、图表叠加
- 需要多人协作编辑（静态 HTML）

## 工作流

### Step 1 · 需求澄清

如果用户已经给了完整大纲，可以跳过直接进 Step 2。

如果用户只给了主题或模糊想法，用以下问题对齐：

| # | 问题 | 为什么要问 |
|---|------|-----------|
| 1 | **要哪种风格？**（Avocado / Dark Magazine / Blackboard / Midnight） | 决定用哪个模板 |
| 2 | **受众是谁？分享场景？** | 决定语言风格和深度 |
| 3 | **内容类型？**（知识/观点/技术/感悟） | 决定排版密度 |
| 4 | **有没有原始素材？**（文章/大纲/笔记） | 有素材就基于素材 |
| 5 | **需要配图吗？** | 决定图文版式 |
| 6 | **想用哪套主题色？**（Avocado/Midnight 从 themes 文件选） | 决定配色 |
| 7 | **有什么硬约束？**（字数/时长/风格偏好） | 避免返工 |

#### 风格选择参考

| 如果用户说... | 推荐风格 |
|---|---|
| "牛油果" / "清新" / "自然" / "治愈" / "读书" / "杂志感" | **Avocado Nature** |
| "深绿" / "杂志" / "质感" / "暗色" / "设计感" / "技术" | **Dark Green Magazine** |
| "黑板" / "板书" / "手绘" / "教学" / "推导" / "老师" / "火柴人" | **Blackboard Sketch** |
| "午夜" / "哲思" / "极简" / "思考" / "金句" / "长期主义" / "悉达多" | **Midnight Minimal** |
| 内容是 AI / 编程 / 计算机网络 / 算法 | Dark Magazine 更合适（技术质感） |
| 内容是阅读感悟 / 成长思考 / 哲学 / 长期主义 | Midnight Minimal 更合适（哲思感） |
| 内容是知识传播 / 观点表达 / 阅读感悟 | Avocado 更合适（留白+阅读感） |
| 内容是教学 / 知识拆解 / 学习笔记 | Blackboard 更合适（推导+板书） |

#### 大纲协助

如果用户没有大纲，用"叙事弧"模板搭骨架：

```
锚点(Anchor)       → 1 页   : 抛出一个问题/反差/感受
展开(Context)      → 1-2 页 : 背景 / 为什么重要
核心(Core)         → 3-4 页 : 核心观点，1-2 个要点/页
沉淀(Reflection)   → 1 页   : 金句/总结/行动建议
```

### Step 0 · 安装 skill

如果你还没有安装 flycan-ppt-skill，可以通过 npx 安装：

```bash
npx github:Flycan-Fanc/flycan-ppt-skill
```

或让 AI 帮你安装（把这段话发给 AI Agent）：

> 帮我安装 flycan-ppt-skill。请把项目克隆到 ~/.claude/skills/flycan-ppt-skill，安装完成后检查 SKILL.md、assets/、references/ 是否存在。

### Step 2 · 拷贝模板

根据 Step 1 选定的风格，拷贝对应模板到目标位置：

```bash
# 风格一 · Avocado
cp "<SKILL_ROOT>/assets/template-avocado.html" "项目/XXX/index.html"

# 风格二 · Dark Magazine
cp "<SKILL_ROOT>/assets/template-dark-magazine.html" "项目/XXX/index.html"

# 风格三 · Blackboard
cp "<SKILL_ROOT>/assets/template-blackboard.html" "项目/XXX/index.html"

# 风格四 · Midnight
cp "<SKILL_ROOT>/assets/template-midnight.html" "项目/XXX/index.html"
```

所有 template 都是**完整可运行**的文件——CSS、翻页 JS、字体 CDN 全已预设好，只有 `<!-- SLIDES_HERE -->` 占位符等待填充。

#### 选定主题色

**Avocado Nature** 从 `references/themes-avocado.md` 选一套：

| # | 主题 | 适合 |
|---|------|------|
| 1 | 🥑 牛油果 | 默认/通用/知识分享 |
| 2 | 🌿 晨露 | 技术/编程/效率 |
| 3 | 🍃 原木 | 阅读/人文/哲学 |
| 4 | 🌱 春芽 | 成长/独立开发/长期主义 |

**Dark Green Magazine** 从 `references/themes-dark-magazine.md` 选一套：

| # | 主题 | 适合 |
|---|------|------|
| 1 | 🌀 深海蓝 | 默认/通用/技术/AI |
| 2 | 🏛️ 古典金 | 知识/哲学/阅读 |
| 3 | 🌸 玫瑰粉 | 成长/创意/独立开发 |
| 4 | 🌿 冷杉绿 | 长期主义/产品/效率 |

**Blackboard Sketch** 使用固定黑板配色（在模板中已预设）。

**Midnight Minimal** 从 `references/themes-midnight.md` 选一套：

| # | 主题 | 适合 |
|---|------|------|
| 1 | 🌌 星尘 | 默认/通用/长期主义/哲学 |
| 2 | 🌙 月光 | 悉达多/修行/诗意哲思 |
| 3 | 🕯️ 烛光 | 读书感悟/金句/温暖叙事 |
| 4 | 🌫️ 暮色 | 抽象概念/感性表达/Flycan 进化论 |

### Step 3 · 填充内容

#### 预检：类名必须在模板的 `<style>` 里有定义

在写任何 slide 代码之前：
1. 先 Read 当前用的模板
2. 确认你要用的每个类都在 `<style>` 里存在
3. 如果某个类缺失：在模板的 `<style>` 里补上
4. **模板是唯一的类名来源**

#### 页面规范

**封面页**：
- 标题 + 副标题 + "Flycan进化论"

**内容页**：
- 一个核心观点
- 最多三个要点
- 避免大段文字

**总结页**：
- 一句金句
- 留白
- 突出思考感

#### Avocado Nature 布局

| 布局 | 用途 |
|---|---|
| 1. 封面 | 开场页，副标 + Flycan进化论 |
| 2. 幕封 | 章节开场，极简 |
| 3. 核心观点 | 一个核心 + 最多三个要点 |
| 4. 金句页 | 一句金句 + 留白 |
| 5. 左文右图 | 观点 + 配图 |
| 6. 数字矩阵 | 数据支撑/Key Metrics |
| 7. 引用页 | Big Quote，留白 |
| 8. 对比页 | Before/After |
| 9. 流程/Pipeline | 步骤拆解 |
| 10. 总结收束 | 金句收尾 + 留白 |

#### Dark Green Magazine 布局

| 布局 | 用途 |
|---|---|
| 1. 封面 | 杂志封面感，标题 + 副标题 |
| 2. 核心观点 | 一个核心 + 要点 |
| 3. 图文混排 | 文字 + 配图 |
| 4. 对比页 | 左右对比 |
| 5. 数字矩阵 | 数据展示 |
| 6. 流程/Pipeline | 步骤拆解 |
| 7. 引用/金句 | 大引语 + 留白 |
| 8. 章节幕封 | 过渡页 |
| 9. 内容页 | 多信息排版 |
| 10. 总结 | 收尾金句 |

#### Blackboard Sketch 布局

| 布局 | 用途 |
|---|---|
| 1. 黑板开场 | 老师敲黑板开场，火柴人 + 粉笔标题 |
| 2. 核心问题 | 在黑板中央写下一个大问题 |
| 3. 推导流程 | 逐步板书，彩色粉笔 + 手绘箭头 |
| 4. 对比分析 | 黑板上画竖线，左右对照 |
| 5. 思维导图 | 中心主题 + 彩色分支 |
| 6. 要点清单 | 粉笔逐项列出 |
| 7. 结论页 | 火柴人举手庆祝，总结结论 |
| 8. 金句收束 | 黑板角落的金句 |

#### Midnight Minimal 布局

| 布局 | 用途 |
|---|---|
| 1. 封面 | 极简封面，标题 + 副标题 |
| 2. 哲思 | 一个核心思考 + 引语卡片 |
| 3. 两段式思辨 | 正/反对照 |
| 4. 时间线 | 历程/阶段拆解 |
| 5. 金句页 | 一句金句 + 留白 |
| 6. 数据/事实 | 关键数据 + 说明 |
| 7. 对比 | 旧认知 vs 新认知 |
| 8. 清单/原则 | 3-5 条原则 |
| 9. 幕封 | 章节分隔 |
| 10. 总结收束 | 金句收尾 + Flycan

### Step 4 · 自检

生成后打开浏览器逐页看：
1. 内容层级是否清晰
2. 文字可读性是否 OK
3. 动画是否流畅
4. 翻页是否正常

### Step 5 · 本地预览

```bash
open "项目/XXX/index.html"
```

不需要本地服务器。

### Step 6 · 迭代

根据反馈修改——模板的 CSS 已经参数化，90% 的调整都是改 inline style。

---

## 资源文件导览

```
flycan-ppt-skill/
├── SKILL.md                      ← 你正在读
├── package.json                  ← npm 包配置
├── bin/
│   └── cli.js                    ← npx 安装脚本
├── assets/
│   ├── template-avocado.html       ← 风格一 · 牛油果自然风
│   ├── template-dark-magazine.html ← 风格二 · 深绿极简杂志风
│   ├── template-blackboard.html    ← 风格三 · 黑板手绘板书风
│   ├── template-midnight.html      ← 风格四 · 午夜极简哲思风
│   └── motion.min.js               ← Motion One 本地副本
├── examples/
│   ├── example-avocado.html        ← 牛油果风完整示例
│   ├── example-dark-magazine.html  ← 深绿杂志风完整示例
│   ├── example-blackboard.html     ← 黑板风完整示例
│   └── example-midnight.html       ← 午夜风完整示例
└── references/
    ├── themes-avocado.md           ← 风格一 · 4 套主题色预设
    ├── themes-dark-magazine.md     ← 风格二 · 4 套主题色预设
    ├── themes-blackboard.md        ← 风格三 · 黑板配色预设
    ├── themes-midnight.md          ← 风格四 · 4 套主题色预设
    ├── layouts-avocado.md          ← 风格一 · 页面布局骨架
    ├── layouts-dark-magazine.md    ← 风格二 · 页面布局骨架
    ├── layouts-blackboard.md       ← 风格三 · 页面布局骨架
    ├── layouts-midnight.md         ← 风格四 · 页面布局骨架
    ├── components.md               ← 组件手册
    └── checklist.md                ← 质量检查清单
```

---

## 内容原则

本 skill 的内容遵循 Flycan 进化论的核心价值观：

- **第一性原理**：回归事物本质思考
- **长期主义**：关注复利和积累
- **独立思考**：不盲从、不跟风
- **理性克制**：不贩卖焦虑、不营销、不震惊体
- **朴素真诚**：用朴实的语言讲深刻的道理
