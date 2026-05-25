# yinhexing-website 项目文档

## 项目背景

**公司名称**: 北京寅禾星科技有限公司
**项目定位**: IT服务公司官网，展示开发+运维+设计全栈能力
**目标用户**: 需要软件开发、运维托管、UI设计服务的中小企业

## 技术架构

```
技术栈: HTML5 + CSS3 + JavaScript
托管平台: Cloudflare Pages
后端服务: Cloudflare Workers（企业微信自动回复）
域名: yhstar.xin（阿里云注册，Cloudflare托管）
```

## 项目结构

```
yinhexing-website/
├── index.html              # 首页
├── services.html           # 服务总览
├── service-dev.html        # 软件开发详情
├── service-ops.html        # 运维托管详情
├── service-design.html     # 设计服务详情
├── pricing.html            # 报价页面
├── cases.html              # 案例列表
├── case-detail.html        # 案例详情
├── about.html              # 关于我们
├── contact.html            # 联系我们
├── blog.html               # 技术博客
├── blog-detail.html        # 博客详情
├── help.html               # 帮助中心
├── privacy.html            # 隐私政策
├── terms.html              # 服务条款
├── industries.html         # 行业解决方案
├── tech-stack.html         # 技术栈展示
├── css/style.css           # 全局样式
├── js/main.js              # 公共JavaScript
├── worker/                 # Cloudflare Worker
│   └── contact-worker.js   # 企业微信自动回复
├── images/                 # 图片资源
│   └── qr.jpg              # 微信二维码
└── blog-articles/          # 博客文章
```

## 已实现功能

### 核心功能
1. ✅ 18个响应式页面
2. ✅ 企业微信自动回复（Cloudflare Worker）
3. ✅ 联系表单（带验证）
4. ✅ 报价计算器
5. ✅ 百度统计集成

### SEO优化
- ✅ 结构化数据（Organization、LocalBusiness、FAQ）
- ✅ sitemap.xml + robots.txt
- ✅ Open Graph标签
- ✅ Canonical URL
- ✅ Meta描述和关键词

### 用户体验
- ✅ 在线客服组件（Tawk.to）
- ✅ 返回顶部按钮
- ✅ 移动端响应式设计
- ✅ 页面加载动画

### 内容模块
- ✅ 客户Logo展示墙
- ✅ 客户评价模块
- ✅ 行业解决方案（6个行业）
- ✅ 技术栈展示（6大类）
- ✅ 8篇技术博客文章

## 部署信息

- **GitHub仓库**: https://github.com/Ningsen123/yhxwebsite.git
- **生产环境**: https://yhstar.xin
- **Cloudflare Pages**: https://yhxwebsite.pages.dev
- **企业微信Worker**: https://contact-form-worker.linyubai123.workers.dev

## 测试报告

- 功能测试: 75条用例，通过率94.7%
- SEO评分: 8.5/10
- 性能评分: 7/10
- 安全评分: 8/10

## 后续优化

- 完善百度统计配置
- 添加更多客户案例
- 优化页面加载速度
- 添加在线预约功能

---

**创建时间**: 2026年5月14日
**最后更新**: 2026年5月18日