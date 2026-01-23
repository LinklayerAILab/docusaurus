# Docusaurus 2 网站

---

## 页面配置指南

### 概述

Docusaurus 中的每个页面都可以通过 **Front Matter**（元数据）来配置其行为和显示方式。Front Matter 是位于 Markdown 文件顶部的 YAML 格式配置块，用 `---` 包围。

### Front Matter 基本结构

```markdown
---
id: document # 页面唯一标识符
title: 页面标题 # 页面显示标题
sidebar_label: 简短标题 # 侧边栏显示标签（可选）
sidebar_position: 1 # 在侧边栏中的位置（可选）
slug: /custom-url # 自定义 URL 路径（可选）
description: 页面描述 # SEO 描述（可选）
image: img/preview.png # 社交媒体分享图片（可选）
keywords:
  - 关键词1
  - 关键词2 # SEO 关键词（可选）
---

# 页面内容开始
```

### 常用 Front Matter 属性

| 属性 | 类型 | 说明 | 示例 |
| --- | --- | --- | --- |
| `id` | `string` | 页面唯一标识符 | `document` 或 `what-is-linklayer` |
| `title` | `string` | 页面标题 | `什么是 LinkLayer AI` |
| `sidebar_label` | `string` | 侧边栏显示标签 | `开始` |
| `sidebar_position` | `number` | 侧边栏排序位置 | `1`（数字越小越靠前） |
| `slug` | `string` | 自定义 URL 路径 | `/getting-started` |
| `description` | `string` | 页面描述（SEO） | `学习 LinkLayer AI 的基础知识` |
| `image` | `string` | 分享图片路径 | `img/share.png` |
| `keywords` | `array` | SEO 关键词 | `['crypto', 'trading']` |
| `hide_table_of_contents` | `boolean` | 是否隐藏目录 | `false` |
| `custom_edit_url` | `string` | 自定义编辑链接 | `null`（禁用编辑按钮） |

### 示例 1：基本页面配置

**文件：** `docs/document.md`

```markdown
---
id: document
sidebar_position: 0
slug: /
---

# LinkLayerAI Documentation

Welcome to the LinkLayerAI documentation.
```

**说明：**

- `id: document` - 定义页面 ID 为 `document`
- `sidebar_position: 0` - 放在侧边栏最前面（位置 0）
- `slug: /` - 设置为网站根路径

### 示例 2：带 SEO 优化的页面

```markdown
---
id: what-is-linklayer
title: 什么是 LinkLayer AI
sidebar_label: 简介
sidebar_position: 1
description: LinkLayerAI 是一个 Agent 原生协议，围绕个人的多维实时交易数据构建
keywords:
  - LinkLayerAI
  - Agent 原生
  - 交易数据
  - Web3
image: img/og-image.png
---

# 什么是 LinkLayer AI

LinkLayerAI 是一个...
```

### 示例 3：无 Front Matter 的页面

**文件：** `docs/document/startHere/WhatIsLinkLayerAI.md`

```markdown
# What Is LinkLayerAI

LinkLayerAI is an Agent-native protocol...
```

**说明：** 没有 Front Matter 的页面会使用以下默认值：

- `id`：从文件路径自动生成（`startHere/WhatIsLinkLayerAI`）
- `title`：使用第一个 `#` 标题
- `slug`：基于文件路径生成 URL

### 如何添加新页面

#### 步骤 1：创建 Markdown 文件

在 `docs/` 目录下创建新文件，例如：

```
docs/
└── document/
    └── newCategory/
        └── NewPage.md
```

#### 步骤 2：添加 Front Matter（可选）

```markdown
---
id: new-page
title: 新页面标题
sidebar_label: 新页面
sidebar_position: 1
---

# 新页面标题

页面内容...
```

#### 步骤 3：在 sidebars.ts 中注册

```typescript
{
  type: 'category',
  label: '新分类',
  items: [
    'document/newCategory/NewPage',  // 添加这一行
  ],
}
```

### 自定义页面行为

#### 隐藏编辑按钮

```markdown
---
custom_edit_url: null
---
```

#### 隐藏目录（Table of Contents）

```markdown
---
hide_table_of_contents: true
---
```

#### 设置页面模板

```markdown
---
wrapperClassName: 'custom-page-class'
---

# 页面标题

可以通过 CSS 自定义这个类
```

---

## 导航栏菜单配置指南

### 概述

导航栏配置在 `docusaurus.config.ts` 文件的 `themeConfig.navbar` 部分。它控制顶部导航栏的显示内容，包括 Logo、标题、菜单项等。

### 基本结构

**文件位置：** `docusaurus.config.ts:66-86`

```typescript
themeConfig: {
  navbar: {
    title: 'LinkLayerAI',           // 网站标题
    logo: {                          // Logo 配置
      alt: 'LinkLayerAI Logo',       // Logo 替代文本
      src: 'img/icon.svg',           // Logo 文件路径
    },
    items: [                         // 导航项数组
      // 导航项配置...
    ],
  },
}
```

### 导航项类型

#### 1. 侧边栏链接（docSidebar）

将整个侧边栏作为一个下拉菜单：

```typescript
{
  type: 'docSidebar',                // 类型：侧边栏
  sidebarId: 'document',             // 侧边栏 ID（来自 sidebars.ts）
  position: 'left',                  // 位置：left 或 right
  label: 'Document',                 // 显示标签
}
```

**示例（来自 docusaurus.config.ts:73-78）：**

```typescript
{
  type: 'docSidebar',
  sidebarId: 'document',
  position: 'left',
  label: 'Document',
}
```

**效果：** 显示"Document"菜单，展开后显示整个 `document` 侧边栏的内容。

#### 2. 单个文档链接（doc）

链接到单个文档页面：

```typescript
{
  type: 'doc',
  docId: 'document/startHere/WhatIsLinkLayerAI',  // 文档 ID
  position: 'left',
  label: '开始使用',
}
```

#### 3. 外部链接（href）

链接到外部网站：

```typescript
{
  type: 'html',
  position: 'right',
  value: '<a href="https://github.com/LinklayerAILab">GitHub</a>',
}

// 或者更简单的方式：
{
  href: 'https://github.com/LinklayerAILab',  // 外部 URL
  position: 'right',
  label: 'GitHub',
}
```

#### 4. 下拉菜单（dropdown）

创建自定义下拉菜单：

```typescript
{
  type: 'dropdown',
  label: '社区',
  position: 'right',
  items: [
    {
      label: 'Telegram',
      href: 'https://t.me/LinkLayerAiOfficial',
    },
    {
      label: 'Twitter',
      href: 'https://x.com/intent/follow?screen_name=LinkLayerAI',
    },
  ],
}
```

#### 5. 分割线（divider）

在菜单项之间添加分割线：

```typescript
{
  type: 'divider',
  position: 'right',
}
```

### 当前导航栏配置详解

**文件：** `docusaurus.config.ts:66-86`

```typescript
navbar: {
  title: 'LinkLayerAI',           // ← 1. 网站标题（显示在 Logo 旁边）
  logo: {                          // ← 2. Logo 配置
    alt: 'LinkLayerAI Logo',       //    Logo 的 alt 属性（无障碍访问）
    src: 'img/icon.svg',           //    Logo 文件路径（相对于 static/ 目录）
  },
  items: [
    // ← 3. 左侧第一个菜单项：Document 侧边栏
    {
      type: 'docSidebar',          //    类型：侧边栏菜单
      sidebarId: 'document',       //    侧边栏 ID（对应 sidebars.ts 中的 document）
      position: 'left',            //    显示在导航栏左侧
      label: 'Document',           //    菜单显示文本
    },
    // ← 4. 左侧第二个菜单项：API Guide 侧边栏
    {
      type: 'docSidebar',
      sidebarId: 'guide',          //    侧边栏 ID（对应 sidebars.ts 中的 guide）
      position: 'left',
      label: 'API Guide',
    },
  ],
},
```

### 如何添加新菜单项

#### 示例 1：添加外部链接

在 `items` 数组中添加：

```typescript
items: [
  // 现有菜单项...
  {
    type: 'docSidebar',
    sidebarId: 'document',
    position: 'left',
    label: 'Document',
  },
  {
    type: 'docSidebar',
    sidebarId: 'guide',
    position: 'left',
    label: 'API Guide',
  },
  // ← 新增：GitHub 链接
  {
    href: 'https://github.com/LinklayerAILab',
    position: 'right',              // 显示在右侧
    label: 'GitHub',
  },
],
```

#### 示例 2：添加社区下拉菜单

```typescript
items: [
  // 现有菜单项...
  // ← 新增：社区下拉菜单
  {
    type: 'dropdown',
    label: '社区',
    position: 'right',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/LinkLayerAiOfficial',
      },
      {
        label: 'Twitter',
        href: 'https://x.com/intent/follow?screen_name=LinkLayerAI',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/your-invite',
      },
    ],
  },
],
```

#### 示例 3：添加单个文档链接

```typescript
items: [
  // 现有菜单项...
  // ← 新增：博客链接
  {
    type: 'doc',
    docId: 'blog/first-post',       // 文档 ID
    position: 'left',
    label: '博客',
  },
],
```

### 导航栏样式配置

#### 1. 隐藏导航栏

```typescript
navbar: {
  hideOnScroll: true,              // 向下滚动时隐藏导航栏
}
```

#### 2. 自定义样式

```typescript
navbar: {
  style: 'dark',                   // 导航栏样式：'primary' | 'dark'
}
```

#### 3. 添加搜索栏

你的项目已经集成了本地搜索插件（`@easyops-cn/docusaurus-search-local`），搜索框会自动显示在导航栏中。

**配置文件：** `docusaurus.config.ts:50-63`

```typescript
themes: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      language: ['en'],
      indexDocs: true,              // 索引文档
      indexBlog: false,             // 不索引博客
      indexPages: false,            // 不索引普通页面
      docsRouteBasePath: '/',       // 文档基础路径
      highlightSearchTermsOnTargetPage: true,  // 高亮搜索词
    },
  ],
],
```

### 完整配置示例

**文件：** `docusaurus.config.ts`

```typescript
themeConfig: {
  navbar: {
    title: 'LinkLayerAI',
    logo: {
      alt: 'LinkLayerAI Logo',
      src: 'img/icon.svg',
    },
    hideOnScroll: false,            // 向下滚动时不隐藏
    style: 'primary',               // 使用主题色
    items: [
      // 左侧菜单
      {
        type: 'docSidebar',
        sidebarId: 'document',
        position: 'left',
        label: '文档',
      },
      {
        type: 'docSidebar',
        sidebarId: 'guide',
        position: 'left',
        label: 'API 指南',
      },
      {
        type: 'doc',
        docId: 'document',
        position: 'left',
        label: '首页',
      },
      // 右侧菜单
      {
        href: 'https://github.com/LinklayerAILab',
        position: 'right',
        label: 'GitHub',
      },
      {
        type: 'dropdown',
        label: '社区',
        position: 'right',
        items: [
          {
            label: 'Telegram',
            href: 'https://t.me/LinkLayerAiOfficial',
          },
          {
            label: 'Twitter',
            href: 'https://x.com/LinkLayerAI',
          },
        ],
      },
      {
        type: 'divider',
        position: 'right',
      },
    ],
  },
}
```

### 常见问题

#### 1. 菜单不显示？

**检查：**

- 确认 `sidebarId` 与 `sidebars.ts` 中的 ID 匹配
- 检查 `type` 属性是否正确（`docSidebar`、`doc`、`dropdown` 等）
- 验证文件路径 `docusaurus.config.ts` 是否正确

#### 2. Logo 不显示？

**检查：**

- Logo 文件应放在 `static/img/` 目录
- `src` 路径应写为 `img/icon.svg`（不包含 `static/`）
- 确认文件扩展名正确（`.svg`、`.png` 等）

#### 3. 如何改变菜单顺序？

使用 `position` 属性的值来排序：

- 数字越小越靠左
- 相同 `position` 的项按数组顺序显示

---

## Sidebars 配置指南

### 概述

`sidebars.ts` 文件定义了文档网站的导航结构，它控制文档在侧边栏中的组织和显示方式。

### 基本结构

```typescript
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // 侧边栏配置对象
};
export default sidebars;
```

**SidebarsConfig** 是一个对象，每个键代表一个侧边栏 ID，对应一个文档集合。

---

### 侧边栏定义

你的项目有两个独立的侧边栏：

```typescript
{
  document: [...],  // 主文档侧边栏
  guide: [...]      // API 指南侧边栏
}
```

---

### 侧边栏项类型

每个侧边栏是一个数组，包含以下类型的项：

#### 1. 文档项 (doc)

链接到单个文档页面。

```typescript
{
  type: 'doc',                                    // 类型：文档
  id: 'document/products/InsightsAgent',          // 文档 ID（相对于 docs 目录）
  label: 'Alpha Agent',                           // 显示名称（可选，默认使用文档标题）
}
```

**示例（来自 sidebars.ts:34-38）**

```typescript
{
  type: 'doc',
  id: 'document/products/InsightsAgent',
  label: 'Alpha Agent',  // 覆盖文档的原始标题
}
```

#### 2. 分类项 (category)

创建可折叠的文档或子分类组。

```typescript
{
  type: 'category',              // 类型：分类
  label: 'Start Here',           // 分类显示名称
  collapsed: false,              // 是否默认折叠
  collapsible: true,             // 是否可折叠（默认：true）
  items: [                       // 子项数组
    'document/startHere/WhatIsLinkLayerAI',
    'document/startHere/WhyLinkLayerAI',
  ],
}
```

**示例（来自 sidebars.ts:18-28）**

```typescript
{
  type: 'category',
  label: 'Start Here',
  collapsed: false,      // 页面加载时展开显示
  items: [
    'document/startHere/WhatIsLinkLayerAI',
    'document/startHere/WhyLinkLayerAI',
    'document/startHere/LinkLayerAITokenomics',
    'document/startHere/FAQ&Glossary',
  ],
}
```

---

### 简写语法

Docusaurus 支持两种写法：

**完整写法：**

```typescript
{
  type: 'doc',
  id: 'document/products/InsightsAgent',
  label: 'Alpha Agent',
}
```

**简写字符串形式：**

```typescript
'document/products/InsightsAgent'; // 等同于上面的完整写法
```

**示例（来自 sidebars.ts:56）**

```typescript
'document/technicalDocumentation/TechnicalArchitectur',
// 使用文档自身的标题作为显示名称
```

---

### 文档 ID 规则

文档 ID 对应文件系统路径：

```
docs/
├── startHere/
│   └── WhatIsLinkLayerAI.md
    ↓
文档 ID: document/startHere/WhatIsLinkLayerAI
```

**重要说明：**

- 不包含 `.md` 扩展名
- 路径相对于 `docs` 目录
- 第一段（`document` 或 `guide`）对应你的插件 ID

---

### 配置选项参考表

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `type` | `'doc' \| 'category' \| 'link' \| 'html'` | 项类型 |
| `id` | `string` | 文档 ID（用于 type: 'doc'） |
| `label` | `string` | 侧边栏中的显示名称 |
| `collapsed` | `boolean` | 分类是否默认折叠 |
| `collapsible` | `boolean` | 分类是否可折叠 |
| `items` | `array` | 子项数组（用于分类） |

---

### 你的项目结构

```
docs/
├── document/              ← document 侧边栏
│   ├── startHere/
│   │   ├── WhatIsLinkLayerAI.md
│   │   ├── WhyLinkLayerAI.md
│   │   ├── LinkLayerAITokenomics.md
│   │   └── FAQ&Glossary.md
│   ├── products/
│   │   ├── InsightsAgent.md
│   │   ├── TokenAgent.md
│   │   └── Protocol&Tokens.md
│   ├── technicalDocumentation/
│   │   ├── TechnicalArchitectur.md
│   │   ├── SmartContracts.md
│   │   └── AuditReports.md
│   └── resources&Ecosystem/
│       ├── Litepaper.md
│       ├── ProhibitedCountriesandRegions.md
│       └── LegalDocuments.md
└── guide/                ← guide 侧边栏
    ├── bnpc.md
    ├── bnapp.md
    ├── okxpc.md
    ├── okxapp.md
    ├── bitgetpc.md
    ├── bitgetapp.md
    └── bybitpc.md
```

---

### 当前侧边栏配置

#### Document 侧边栏 (sidebars.ts:12-79)

1. **概述** - 根文档
2. **从这里开始** 分类
   - 什么是 LinkLayer AI
   - 为什么选择 LinkLayer AI
   - LinkLayer AI 代币经济学
   - 常见问题与词汇表
3. **LinkLayerAI 产品** 分类
   - Alpha Agent (InsightsAgent)
   - Perps AI Agent (TokenAgent)
   - Trading Agent (Protocol&Tokens)
4. **技术文档** 分类
   - 技术架构
   - 智能合约
   - 审计报告
5. **资源与生态系统** 分类
   - 白皮书
   - 禁止的国家和地区
   - 法律文件

#### Guide 侧边栏 (sidebars.ts:82-112)

按交易平台组织：

- Binance（PC 端 & 移动端）
- OKX（PC 端 & 移动端）
- Bitget（PC 端 & 移动端）
- Bybit（PC 端）

---

### 常见问题与解决方案

#### 1. 文档 ID 不存在

**错误信息：**

```
These sidebar document ids do not exist:
- document/technicalDocumentation/TechnicalArchitecture
```

**原因：** 文档 ID 拼写错误或文件缺失

**解决方案：** 验证文件路径完全匹配

- 检查 `docs/` 目录中是否存在该文件
- 验证拼写是否正确（例如：`TechnicalArchitecture` vs `TechnicalArchitectur`）
- 确保 ID 中不包含 `.md` 扩展名

#### 2. 分类不显示

**原因：** `items` 数组为空或文档 ID 无效

**解决方案：** 检查 `items` 数组中的所有项是否存在

#### 3. 链接失效

**原因：** 使用简写语法时路径不正确

**解决方案：** 使用以插件 ID 开头的绝对文档 ID（`document/` 或 `guide/`）

---

### 最佳实践

1. **使用描述性标签** - 覆盖自动生成的标题以提升用户体验
2. **逻辑组织** - 将相关文档归入同一分类
3. **保持层级简洁** - 避免超过 2-3 层的嵌套
4. **命名一致** - 使文件结构与侧边栏结构匹配
5. **测试链接** - 添加新页面后验证所有文档 ID 是否存在

---

## 安装步骤

1. 在项目根目录执行 `yarn install`（此目录的上一级）
1. 在当前目录执行 `yarn start`
1. 浏览器会自动打开，显示文档页面

### 附加资源

- [Docusaurus 侧边栏官方文档](https://docusaurus.io/docs/sidebar)
- [Docusaurus 文档插件 API](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs)
