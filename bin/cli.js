#!/usr/bin/env node

/**
 * flycan-ppt-skill — npx 安装脚本
 *
 * 用法:
 *   npx flycan-ppt-skill
 *   或
 *   npx github:Flycan-Fanc/flycan-ppt-skill
 *
 * 功能:
 *   将 flycan-ppt-skill 安装到 ~/.claude/skills/flycan-ppt-skill/
 */

import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

const SKILL_DIR = join(
  process.env.HOME || process.env.USERPROFILE || '~',
  '.claude',
  'skills',
  'flycan-ppt-skill'
);

const COPY_WHITELIST = [
  'SKILL.md',
  'README.md',
  'package.json',
  'LICENSE',
  '.gitignore',
  'assets',
  'references',
  'examples',
  'bin',
];

function copyRecursive(src, dest) {
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src);
  for (const entry of entries) {
    if (entry === '.git' || entry === 'node_modules') continue;
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  console.log(`\n  🥑🎯  flycan-ppt-skill 安装中...\n`);

  if (!existsSync(PROJECT_ROOT)) {
    console.error(`  ❌ 错误: 找不到项目目录 ${PROJECT_ROOT}`);
    process.exit(1);
  }

  copyRecursive(PROJECT_ROOT, SKILL_DIR);

  console.log(`  ✅ 安装成功!`);
  console.log(`  📁  位置: ${SKILL_DIR}\n`);
  console.log(`  现在你可以对 Claude Code / Codex 说:`);
  console.log(`\n    "帮我做一份牛油果风 PPT"`);
  console.log(`    "帮我把这些笔记做成黑板手绘板书风的 PPT"\n`);
  console.log(`  或在当前目录再运行一次来更新:\n`);
  console.log(`    npx flycan-ppt-skill\n`);
}

main();
