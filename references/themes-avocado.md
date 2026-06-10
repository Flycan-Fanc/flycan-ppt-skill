# Avocado Nature · 主题色预设

4 套基于 Avocado Nature（清新牛油果自然风）的配色方案。遵循"绿色主调 + 莫兰迪辅助 + 大量留白"的原则。

## 使用方法

1. 打开 `assets/template-avocado.html` 的 `<style>` 块
2. 找到开头的 `:root{` 块
3. **整体替换**标有"主题色"注释的变量
4. 其他 CSS 都走 `var(--...)`,无需任何其他改动

---

## 🥑 牛油果（Avocado · 默认）

**适合**：通用、知识分享、观点表达、不知道选啥时的默认。
**调性**：牛油果绿主色 + 奶油白底，治愈、清新、有呼吸感。

```css
--primary:#A8C686;
--primary-rgb:168,198,134;
--primary-light:#DDE5B6;
--primary-light-rgb:221,229,182;
--primary-mid:#BBCF9A;
--primary-mid-rgb:187,207,154;
--paper:#FAF9F6;
--paper-rgb:250,249,246;
--paper-alt:#E8F3E8;
--paper-alt-rgb:232,243,232;
--ink:#2C3A2A;
--ink-rgb:44,58,42;
--ink-soft:#5A6B58;
--ink-light:#8A9E88;
```

---

## 🌿 晨露（Morning Dew）

**适合**：技术分享、编程、效率方法、独立开发。
**调性**：清冷绿色 + 极淡绿底，理性、专注、有专注力。

```css
--primary:#7EB68E;
--primary-rgb:126,182,142;
--primary-light:#C8DCC8;
--primary-light-rgb:200,220,200;
--primary-mid:#A3CCA8;
--primary-mid-rgb:163,204,168;
--paper:#F5F9F2;
--paper-rgb:245,249,242;
--paper-alt:#E4F0E4;
--paper-alt-rgb:228,240,228;
--ink:#1E3525;
--ink-rgb:30,53,37;
--ink-soft:#4A6B50;
--ink-light:#7EA07E;
```

---

## 🍃 原木（Timber）

**适合**：阅读感悟、人文思考、哲学、书评。
**调性**：暖棕绿 + 米黄底，温馨、自然、有图书馆的安静感。

```css
--primary:#B5A889;
--primary-rgb:181,168,137;
--primary-light:#DDD5BF;
--primary-light-rgb:221,213,191;
--primary-mid:#C8BCA0;
--primary-mid-rgb:200,188,160;
--paper:#F8F5EE;
--paper-rgb:248,245,238;
--paper-alt:#EEE8DC;
--paper-alt-rgb:238,232,220;
--ink:#2E281C;
--ink-rgb:46,40,28;
--ink-soft:#5E5848;
--ink-light:#8E8878;
```

---

## 🌱 春芽（Spring Sprout）

**适合**：成长思考、长期主义、独立开发故事、创业感悟。
**调性**：嫩芽绿色 + 极浅绿底，生机勃勃、充满希望。

```css
--primary:#8FC89D;
--primary-rgb:143,200,157;
--primary-light:#CDE4CD;
--primary-light-rgb:205,228,205;
--primary-mid:#AED6B0;
--primary-mid-rgb:174,214,176;
--paper:#F7FBF5;
--paper-rgb:247,251,245;
--paper-alt:#E6F2E6;
--paper-alt-rgb:230,242,230;
--ink:#1C3322;
--ink-rgb:28,51,34;
--ink-soft:#42634A;
--ink-light:#7A9C7E;
```

---

## 推荐选择参考

| 如果是... | 推荐主题 |
|---|---|
| 不知道选啥 / 第一次用 | 🥑 牛油果 |
| AI / 编程 / 效率技术分享 | 🌿 晨露 |
| 书评 / 阅读感悟 / 人文哲学 | 🍃 原木 |
| 成长故事 / 独立开发 / 长期主义 | 🌱 春芽 |

## 切换原则

- **一份 deck 只用一套主题**
- 所有 CSS 都走 `var(--...)`,改 :root 一处即可
- 不要混搭不同主题的颜色
- 不要接受用户给的任意 hex 值
