# 深绿极简杂志风 · 主题色预设

从以下 4 套中选一套，将对应的 `:root` 块**整体替换**到模板 `template-dark-magazine.html` 的 `:root` 块。

---

## 🌀 深海蓝（默认 · 技术/AI/编程）

通用稳定，适合技术分享、AI、编程讲解。

```css
    --accent:#7AADD9;
    --accent-rgb:122,173,217;
    --accent-light:#9DC3E8;
    --accent-mid:#5B8DB8;
    --bg:#1B2F1D;
    --bg-rgb:27,47,29;
    --surface:#233A25;
    --surface-rgb:35,58,37;
    --text:#F5F0E8;
    --text-rgb:245,240,232;
    --text-soft:#B8B0A0;
    --text-dim:#7A7568;
```

---

## 🏛️ 古典金（知识/哲学/阅读）

暖金色点缀，适合读书分享、哲学思考、人文内容。

```css
    --accent:#D4A84B;
    --accent-rgb:212,168,75;
    --accent-light:#E0C078;
    --accent-mid:#B89030;
    --bg:#1B2F1D;
    --bg-rgb:27,47,29;
    --surface:#233A25;
    --surface-rgb:35,58,37;
    --text:#F5F0E8;
    --text-rgb:245,240,232;
    --text-soft:#C8C0B0;
    --text-dim:#8A8070;
```

---

## 🌸 玫瑰粉（成长/创意/独立开发）

温柔粉色点缀，适合成长故事、独立开发、个人品牌。

```css
    --accent:#D97A8A;
    --accent-rgb:217,122,138;
    --accent-light:#E89AA8;
    --accent-mid:#C06070;
    --bg:#1B2F1D;
    --bg-rgb:27,47,29;
    --surface:#233A25;
    --surface-rgb:35,58,37;
    --text:#F5F0E8;
    --text-rgb:245,240,232;
    --text-soft:#C0B8B0;
    --text-dim:#8A8078;
```

---

## 🌿 冷杉绿（长期主义/自然/产品）

深绿同色系，适合长期主义、产品设计、效率系统。

```css
    --accent:#6BA87E;
    --accent-rgb:107,168,126;
    --accent-light:#88C498;
    --accent-mid:#508C64;
    --bg:#1B2F1D;
    --bg-rgb:27,47,29;
    --surface:#233A25;
    --surface-rgb:35,58,37;
    --text:#F5F0E8;
    --text-rgb:245,240,232;
    --text-soft:#B8C0B0;
    --text-dim:#788078;
```

---

## 使用规则

- 替换时整体复制粘贴 `:root` 块即可
- 不要只替换单行变量——所有变量是配对的
- 模板内容的颜色通过 `var(--accent)` / `var(--text)` 等引用
