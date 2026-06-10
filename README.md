# Flycan PPT Skill · 网页 PPT

一个适配 Claude Code / Codex 等 Agent 环境的网页 PPT 技能，用于生成**单文件 HTML 横向翻页 PPT**。

内置两套视觉系统：

- **Style Avocado: 清新牛油果自然风**。像一本正在阅读的书，适合知识传播、观点表达、阅读感悟。
- **Style Blackboard: 黑板手绘板书风**。像老师在黑板前推导，适合 AI、编程、方法论讲解。

由 Flycan 基于 guizang-ppt-skill 的设计理念创建，专注于知识传播和独立思考的内容呈现。

## 30 秒开始

直接把这段话发给有 shell 权限的 AI Agent:

```text
帮我安装 flycan-ppt-skill。请把项目克隆到 ~/.claude/skills/flycan-ppt-skill，安装完成后检查 SKILL.md、assets/、references/ 是否存在。
```

安装后直接对 Agent 说：

```text
帮我基于这篇文章做一份牛油果风 PPT，控制在 6 页左右。
```

也可以试这些请求:

```text
帮我把这些读书笔记做成黑板手绘板书风的 PPT。
基于这个观点生成一份知识分享用的横向翻页 PPT。
```

## 效果

- 🥑 **Avocado Nature**: 牛油果绿主色、莫兰迪绿辅助、原木风、大量留白、治愈感
- 🎯 **Blackboard Sketch**: 深绿黑板、粉笔白/黄/蓝/红、手绘线条、板书推导
- 📐 **横向左右翻页**: 键盘 ← → / 滚轮 / 触屏滑动 / 底部圆点 / ESC 索引
- 🧩 **两种风格各自布局**: Avocado 10 种 / Blackboard 8 种
- 🎨 **主题色预设**: Avocado 4 套 / Blackboard 固定配色
- 📄 **单文件 HTML**: 不需要构建、不需要服务器，浏览器直接打开

## 适合 / 不适合

**✅ 合适**: 知识分享 / 观点表达 / 视频制作 / 公众号改编 / 技术分享 / 阅读感悟 / 独立开发故事

**❌ 不合适**: 商业汇报 / 大段数据表格 / 需要多人协作编辑（静态 HTML）

## 为什么是 HTML PPT

- **更适合 Agent 生成和修改**: HTML / CSS 是文本，Agent 能直接读、改、验证
- **表现力比 Markdown 更高**: 可以做精细排版、空间定位、动画和交互
- **交付更轻**: 单文件 HTML 可以直接打开、演示、发送、截图

## 平台支持

| 平台 | 状态 | 说明 |
|------|------|------|
| Claude Code | 支持 | 原生 Skill 工作流 |
| Codex | 支持 | 适合生成 PPT 和浏览器视觉检查 |
| Cursor / 其他本地 Agent | 可用 | 需要能读写文件并执行 shell 命令 |

## 安装

### 方式一: 把下面这段话直接发给 AI

> 帮我安装 `flycan-ppt-skill` 这个 Claude Code skill。请按下面步骤做:
>
> 1. 确保 `~/.claude/skills/` 目录存在
> 2. 执行 `git clone git@github.com:flycan/flycan-ppt-skill.git ~/.claude/skills/flycan-ppt-skill`
> 3. 验证: `ls ~/.claude/skills/flycan-ppt-skill/` 应该看到 `SKILL.md`、`assets/`、`references/` 三项
> 4. 告诉我安装好了

### 触发方式

装好后，Claude Code 会在对话里自动发现并调用这个 skill。触发关键词:

- "帮我做一份牛油果风 PPT"
- "帮我做一份黑板手绘风 PPT"
- "生成一个知识分享型的 horizontal swipe deck"
- "帮我做一份 Flycan 进化论的分享 PPT"

## 使用流程

1. **选择风格** — Avocado Nature（牛油果自然风）或 Blackboard Sketch（黑板手绘板书风）
2. **需求澄清** — 风格、受众、内容类型、素材、配图需求、主题色、硬约束
3. **拷贝模板** — Avocado 用 `assets/template-avocado.html`，Blackboard 用 `assets/template-blackboard.html`
4. **填充内容** — 从对应 layout 骨架里挑、粘、改文案
5. **自检** — 对照 `references/checklist.md` 检查
6. **预览** — 浏览器直接打开
7. **迭代** — inline style 改字号/高度/间距

详细说明见 [`SKILL.md`](./SKILL.md)。

## 目录结构

```
flycan-ppt-skill/
├── SKILL.md                    ← Skill 主文件: 工作流、原则
├── README.md                   ← 本文件
├── assets/
│   ├── template-avocado.html   ← 风格一: 牛油果自然风模板
│   ├── template-blackboard.html ← 风格二: 黑板手绘板书风模板
│   └── motion.min.js           ← Motion One 本地副本
├── references/
│   ├── themes-avocado.md       ← 风格一: 4 套主题色预设
│   ├── themes-blackboard.md    ← 风格二: 黑板配色预设
│   ├── layouts-avocado.md      ← 风格一: 页面布局骨架
│   ├── layouts-blackboard.md   ← 风格二: 页面布局骨架
│   ├── components.md           ← 组件手册
│   └── checklist.md            ← 质量检查清单
```

## 主题色预设

### Avocado Nature

从 `references/themes-avocado.md` 里选一套：

| 主题 | 核心色 | 适合场景 |
|------|--------|----------|
| 🥑 **牛油果** | `#A8C686` / `#FAF9F6` | 默认通用、知识分享 |
| 🌿 **晨露** | `#7EB68E` / `#F5F9F2` | 技术/编程/效率 |
| 🍃 **原木** | `#B5A889` / `#F8F5EE` | 阅读/人文/哲学 |
| 🌱 **春芽** | `#8FC89D` / `#F7FBF5` | 成长/独立开发/长期主义 |

### Blackboard Sketch

固定配色（在模板中已预设）：

| 颜色 | 色值 | 用途 |
|------|------|------|
| 黑板底色 | `#1B2F1D` | 背景 |
| 粉笔白 | `#F5F0E8` | 正文/标题 |
| 粉笔黄 | `#E8D56E` | 高亮/重点 |
| 粉笔蓝 | `#7AADD9` | 副标题/链接 |
| 粉笔红 | `#D9756B` | 强调/标注 |

## 内容原则

本 skill 的内容遵循 Flycan 进化论的核心价值观：

- **第一性原理**：回归事物本质思考
- **长期主义**：关注复利和积累
- **独立思考**：不盲从、不跟风
- **理性克制**：不贩卖焦虑、不营销、不震惊体
- **朴素真诚**：用朴实的语言讲深刻的道理

## License

MIT © 2026 Flycan
