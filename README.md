# 寅禾星科技官网 | Yinhexing Technology Official Website

<div align="center">

![寅禾星科技 Logo](images/logo.svg)

**开发 · 运维 · 设计 — 一站式技术伙伴**

[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-blue?logo=cloudflare)](https://pages.cloudflare.com)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
[![Cloudflare Workers](https://img.shields.io/badge/Workers-CD5D16?logo=cloudflareworkers&logoColor=white)](https://workers.cloudflare.com)

🌐 **在线演示 Live Demo:** [https://yhstar.xin](https://yhstar.xin)

</div>

---

## 📖 项目简介 | Project Description

**北京寅禾星科技有限公司**（简称"寅禾星科技"）是一家专注于企业级 IT 技术服务的公司，致力于为成长型企业和创新项目提供 **软件定制开发、运维托管、UI/UX 设计** 等全栈技术解决方案。

本仓库为寅禾星科技官方网站源码，基于纯前端技术栈构建，部署于 **Cloudflare Pages**，后端联系表单使用 **Cloudflare Workers** 实现，确保全球加速访问与高可用性。

> **Yinhexing Technology** is a Beijing-based IT services company specializing in custom software development, operations management, and UI/UX design. This repository contains the official website source code, built with pure frontend technologies and deployed on Cloudflare Pages with Workers for serverless backend functionality.

---

## 🚀 功能特点 | Features

- 🎨 **现代化 UI 设计** — 简洁专业的界面设计，响应式布局完美适配手机、平板、桌面端
- ⚡ **极速加载体验** — Cloudflare 全球 CDN 加速，首屏加载时间 < 1 秒
- 📱 **完全响应式** — Mobile-first 设计理念，所有页面完美适配各尺寸屏幕
- 🔍 **SEO 深度优化** — 结构化数据（Schema.org）、Open Graph 标签、语义化 HTML
- 🌍 **全球访问** — Cloudflare Pages 边缘部署，覆盖全球 200+ 数据中心
- 📬 **Serverless 表单** — Cloudflare Workers 处理联系表单，无需后端服务器
- 🛡️ **安全可靠** — HTTPS 全站加密，Cloudflare 安全防护
- 🚀 **零运维成本** — 纯静态站点 + Serverless Functions，无需维护服务器

---

## 🛠️ 技术栈 | Tech Stack

| 层级 | 技术 | 说明 |
|------|------|------|
| **前端结构** | HTML5 | 语义化标签、无障碍访问 |
| **样式** | CSS3 | CSS 变量、Flexbox/Grid 布局、响应式设计 |
| **交互** | JavaScript | 原生 JS，零框架依赖，轻量高效 |
| **部署** | [Cloudflare Pages](https://pages.cloudflare.com) | 全球 CDN 加速、自动部署 |
| **后端** | [Cloudflare Workers](https://workers.cloudflare.com) | Serverless 联系表单处理 |
| **字体** | Google Fonts (Inter) | 现代无衬线字体 |
| **图标** | Font Awesome 6.4 | 丰富的矢量图标库 |

---

## 📁 项目结构 | Project Structure

```
yinhexing-website/
├── index.html              # 首页 - 公司介绍与核心服务展示
├── about.html              # 关于我们 - 公司简介与团队介绍
├── services.html           # 服务总览 - 一站式IT服务详情
├── service-dev.html        # 软件定制开发服务
├── service-ops.html        # 运维托管服务
├── service-design.html     # UI/UX 设计服务
├── cases.html              # 案例展示 - 项目成功案例
├── case-detail.html        # 案例详情页
├── pricing.html            # 服务报价 - 透明定价方案
├── blog.html               # 技术博客 - 技术分享与行业洞察
├── blog-detail.html        # 博客详情页
├── logo-design.html        # Logo 设计展示
├── contact.html            # 联系我们 - 获取咨询与报价
├── css/
│   └── style.css           # 全局样式表（CSS 变量、响应式）
├── js/
│   └── main.js             # 前端交互逻辑
├── images/                 # 图片资源（Logo、二维码等）
│   ├── logo.svg
│   └── qr.jpg
├── worker/
│   ├── wrangler.toml       # Cloudflare Workers 配置
│   └── contact-worker.js   # 联系表单 Worker 处理逻辑
├── PRODUCT_ROADMAP.md      # 产品路线图
├── TEAM_MANAGEMENT.md      # 团队管理文档
├── TEST_REPORT.md          # 测试报告
└── README.md               # 本文件
```

---

## 🏢 服务内容 | Services Offered

### 💻 软件定制开发
- 企业官网 / 品牌站开发
- 微信小程序 / 移动 APP 开发
- 企业管理系统（CRM / ERP / OA）
- AI 工具与 API 集成开发
- 数据大屏与可视化平台

### 🔧 运维托管服务
- 服务器运维与监控
- 应用部署与 CI/CD 自动化
- 安全防护与数据备份
- 性能优化与故障排查
- 7×24 小时技术支持

### 🎨 UI/UX 设计服务
- 用户界面（UI）设计
- 用户体验（UX）优化
- 品牌视觉设计与 Logo 设计
- 交互原型设计
- 设计规范与组件库搭建

---

## 🚀 快速开始 | Getting Started

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/Ningsen123/yhxwebsite.git

# 进入项目目录
cd yinhexing-website

# 使用任意 HTTP 服务器启动（如 Python）
python3 -m http.server 8080

# 或使用 Node.js
npx serve .
```

浏览器访问 `http://localhost:8080` 即可预览。

### 部署 Cloudflare Workers

```bash
cd worker

# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 开发模式运行
wrangler dev

# 部署到生产环境
wrangler deploy
```

---

## 🌐 在线演示 | Live Demo

> **https://yhstar.xin**

---

## 📞 联系我们 | Contact

| 方式 | 详情 |
|------|------|
| **公司全称** | 北京寅禾星科技有限公司 |
| **电话** | 132-4114-3670 |
| **邮箱** | contact@yinhexing.com |
| **地址** | 北京市大兴区民安路6号 |
| **官网** | [https://yhstar.xin](https://yhstar.xin) |

---

## 📋 服务区域 | Service Area

北京及周边地区 | 也支持远程协作，服务全国客户

---

## 📄 License

本项目基于 [MIT License](LICENSE) 开源协议。

---

<div align="center">

**寅禾星科技 — 让技术驱动业务增长**

*Yinhexing Technology — Empowering Business Growth Through Technology*

[访问官网](https://yhstar.xin) · [联系我们](https://yhstar.xin/contact.html) · [查看服务](https://yhstar.xin/services.html)

</div>
