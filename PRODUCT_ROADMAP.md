# YHX Website Product Roadmap & Documentation

> **Version:** 1.0
> **Last Updated:** May 16, 2026
> **Website:** https://yhstar.xin
> **Planning Horizon:** Q2 2026 – Q4 2026

---

## 1. Executive Summary

The yhxwebsite (yhstar.xin) currently serves as a marketing presence for the company with 7 static/dynamic pages (index, services, pricing, cases, about, contact, blog) and basic lead capture via a contact form, pricing calculator, and WeChat Work integration. This roadmap outlines a phased approach to transform the site from a brochure-level presence into a **conversion-optimized, data-driven lead generation and client management platform**.

**Key Strategic Goals (2026):**
- Increase inbound lead volume by 40% through UX and conversion optimization
- Reduce average lead response time from hours to minutes via automated workflows
- Build a client self-service portal to reduce support overhead by 30%
- Establish analytics-driven decision making across all product pages

---

## 2. Current State Analysis

### 2.1 Existing Pages & Features

| Page        | Status | Notes                                  |
|-------------|--------|----------------------------------------|
| index       | Live   | Main landing page                      |
| services    | Live   | Service descriptions                   |
| pricing     | Live   | Pricing tiers with calculator          |
| cases       | Live   | Case studies / portfolio               |
| about       | Live   | Company information                    |
| contact     | Live   | Contact form                           |
| blog        | Live   | Content marketing / SEO                |

### 2.2 Existing Integrations

| Integration     | Status | Capability                            |
|-----------------|--------|---------------------------------------|
| WeChat Work     | Live   | Basic messaging / notification        |
| Contact Form    | Live   | Lead capture (no automation)          |
| Pricing Calc    | Live   | Interactive pricing estimation        |

### 2.3 Identified Gaps

- **No analytics beyond basics** — no funnel tracking, no heatmaps
- **No CRM** — leads from contact form are not systematically managed
- **No live chat** — visitors must leave the site or email for support
- **No booking system** — scheduling requires manual back-and-forth
- **No client portal** — no way for clients to check project status
- **Limited SEO** — no structured data, limited internal linking strategy
- **No A/B testing** — no framework for CRO experiments
- **No multi-language** — no English/Japanese pages for international prospects

---

## 3. Feature Roadmap

### Priority Framework

| Priority | Definition | SLA | Examples |
|----------|-----------|-----|----------|
| **P0** | Must-have; blocks core business goals or revenue | Ship within sprint | Live chat, analytics upgrade, CRM integration |
| **P1** | High-impact; significantly improves conversion or efficiency | Ship within quarter | Client portal, booking system, SEO overhaul |
| **P2** | Nice-to-have; enhances experience or opens new channels | Ship when capacity allows | Multi-language, advanced A/B testing, AI chatbot |

---

### 3.1 P0 Features (Critical — Q2 2026)

#### F1: Advanced Analytics & Conversion Tracking
**Why:** Cannot optimize what you cannot measure. Current site likely lacks funnel tracking, event tracking, and attribution.

**Technical Requirements:**
- Implement Google Analytics 4 (GA4) with custom event tracking
- Install Hotjar or Microsoft Clarity for session recording and heatmaps
- Set up conversion events: form submit, pricing calculator use, CTA clicks, blog read
- Create GA4 custom audiences for remarketing
- Add UTM parameter handling for campaign attribution
- Server-side tagging for accurate data collection (respects ad blockers)

**Effort:** 1–2 weeks
**Owner:** Frontend + Marketing

#### F2: Live Chat Integration
**Why:** 53% of visitors abandon sites that take >3 seconds to respond. WeChat Work alone is insufficient for web visitors.

**Technical Requirements:**
- Integrate Tidio, Crisp, or Intercom widget (choose based on budget)
- Configure automated welcome message triggered on first visit
- Route chat to WeChat Work or team Slack/DingTalk for response
- Set up offline form fallback when team is unavailable
- Mobile-responsive chat widget (bottom-right float)
- Track chat initiation as conversion event in GA4

**Effort:** 3–5 days
**Owner:** Frontend + Ops

#### F3: CRM Integration (Lead Management)
**Why:** Leads from the contact form currently have no structured follow-up process.

**Technical Requirements:**
- Option A: Integrate with existing WeChat Work CRM (企业微信SCRM)
- Option B: Lightweight CRM — HubSpot Free, or Zoho CRM (both support Chinese market)
- Option C: Custom Airtable/Notion database via API for internal use
- Auto-create contact record on form submission
- Lead scoring based on: page visited, pricing calc usage, service interest
- Automated follow-up email/WeChat sequence (3-touch drip)
- Dashboard: leads by source, conversion rate, response time

**Effort:** 2–3 weeks
**Owner:** Full-stack + Marketing

#### F4: Website Performance Optimization
**Why:** Slow sites lose 7% conversion per additional second of load time. Chinese users expect fast domestic loading.

**Technical Requirements:**
- Core Web Vitals audit (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Image optimization: WebP/AVIF format, lazy loading, responsive srcset
- Implement CDN with China node (Alibaba Cloud CDN or Tencent Cloud CDN)
- Minify and tree-shake JS/CSS bundles
- Preload critical fonts (avoid FOUT/FOIT)
- Implement service worker for offline capability on key pages
- Target: 90+ Lighthouse score on mobile and desktop

**Effort:** 2–3 weeks
**Owner:** Frontend + DevOps

---

### 3.2 P1 Features (High Impact — Q3 2026)

#### F5: Client Portal / Dashboard
**Why:** Clients repeatedly ask for project status updates; a self-service portal reduces support burden and increases satisfaction.

**Technical Requirements:**
- Authentication system (email + WeChat login)
- Project status dashboard (timeline, milestones, deliverables)
- File upload/download for document exchange
- In-site messaging (replaces email threads)
- Invoice and payment history view
- Mobile-first responsive design
- Technology: Next.js + API routes, or lightweight platform like Softr

**Effort:** 6–8 weeks
**Owner:** Full-stack team

#### F6: Online Booking / Meeting Scheduler
**Why:** Eliminates email ping-pong for scheduling consultations and reduces no-shows.

**Technical Requirements:**
- Integrate Calendly or Tencent Meeting (腾讯会议) scheduling API
- Display available time slots based on team calendar
- Time zone detection and auto-adjustment
- Auto-confirmation email + WeChat notification
- Buffer time rules between meetings
- Calendar sync (Google Calendar, Outlook)
- Embed widget on contact page and services pages

**Effort:** 2–3 weeks
**Owner:** Frontend + Backend

#### F7: SEO & Content Strategy Overhaul
**Why:** Organic traffic is the highest-ROI channel. Current blog likely lacks structure for search visibility.

**Technical Requirements:**
- Implement JSON-LD structured data (Organization, FAQ, Service, Article schemas)
- Internal linking strategy: services → cases → blog hub
- Meta tag optimization for all pages (title, description, OG tags)
- Create pillar content pages for top 10 services
- XML sitemap optimization with priority weighting
- Blog category/tag taxonomy with SEO-optimized URLs
- Implement hreflang tags (prepare for multi-language)
- Technical SEO: canonical tags, 301 redirect mapping, robots.txt audit
- Target: Top 10 Google/Baidu ranking for 15+ relevant keywords within 6 months

**Effort:** 4–6 weeks (ongoing content production)
**Owner:** Marketing + Frontend

#### F8: Enhanced Pricing Calculator
**Why:** Current calculator is a basic tool. Upgrading it improves lead quality by helping prospects self-qualify.

**Technical Requirements:**
- Multi-step wizard UI (service selection → requirements → timeline → quote)
- Conditional logic: show/hide options based on selections
- Save progress (localStorage + email recovery)
- Send detailed quote PDF via email
- Track funnel step abandonment in GA4
- A/B test different pricing presentation formats
- Integrate with CRM: auto-create lead with full calculator data

**Effort:** 3–4 weeks
**Owner:** Frontend + Backend

---

### 3.3 P2 Features (Enhancement — Q4 2026)

#### F9: Multi-language Support (i18n)
**Why:** Opens the site to international clients and improves SEO in English/Japanese markets.

**Technical Requirements:**
- Implement i18n framework (next-intl or i18next)
- Translate all pages: Chinese (default), English, Japanese
- Language switcher in header/nav
- Separate URL paths per language (e.g., /en/, /ja/)
- hreflang tags for international SEO
- CMS integration for content editors to manage translations

**Effort:** 3–4 weeks
**Owner:** Frontend + Translators

#### F10: AI-Powered Chatbot
**Why:** Scalable 24/7 support that handles FAQs and qualifies leads before human handoff.

**Technical Requirements:**
- Train chatbot on service FAQ, pricing info, case studies
- Integration with ChatGPT API / Claude API or Chinese LLM (Qwen/DeepSeek)
- Escalation to human agent when complex query detected
- Intent recognition: pricing inquiry, service question, support request
- Collect lead info before escalation (name, company, need)
- Analytics: common questions, escalation rate, resolution time
- Compliance: data handling per PIPL (个人信息保护法)

**Effort:** 4–5 weeks
**Owner:** Backend + AI/ML

#### F11: A/B Testing Framework
**Why:** Systematic optimization requires controlled experiments.

**Technical Requirements:**
- Integrate VWO, Google Optimize successor, or custom solution
- Test priority: CTA copy, form length, pricing page layout, hero section
- Statistical significance calculator built into dashboard
- Minimum 2 weeks per test cycle
- Document all experiments and results in a shared knowledge base

**Effort:** 1–2 weeks (setup), ongoing management
**Owner:** Marketing + Frontend

#### F12: Client Testimonial & Review System
**Why:** Social proof is the #1 trust signal for B2B buyers.

**Technical Requirements:**
- Structured testimonial collection workflow (post-project email sequence)
- Video testimonial hosting (OSS/CDN + lazy embed)
- Star ratings display on service and case pages
- Schema.org Review markup for rich snippets
- Integration with third-party review platforms (if applicable)

**Effort:** 2–3 weeks
**Owner:** Frontend + Marketing

---

## 4. Implementation Timeline

```
Q2 2026 (Apr-Jun)                    Q3 2026 (Jul-Sep)                    Q4 2026 (Oct-Dec)
├─ Week 1-2: Analytics setup         ├─ Week 1-4: Client Portal            ├─ Week 1-3: Multi-language
├─ Week 3-4: Live Chat               ├─ Week 3-6: Booking System           ├─ Week 3-7: AI Chatbot
├─ Week 3-6: CRM Integration         ├─ Week 4-8: Pricing Calculator v2    ├─ Week 5-8: A/B Testing
├─ Week 5-8: Performance Opt         ├─ Week 1-8: SEO Overhaul (ongoing)   ├─ Week 7-10: Review System
├─ Week 9-12: Buffer / Testing       ├─ Week 9-12: Integration hardening   ├─ Week 10-12: Year-end review
```

### Detailed Sprint Plan

| Sprint | Dates | Feature | Status |
|--------|-------|---------|--------|
| Sprint 1 | Apr 7–18 | GA4 + Hotjar + event tracking | Planned |
| Sprint 2 | Apr 21–May 2 | Live chat widget + workflow | Planned |
| Sprint 3 | May 5–30 | CRM integration + lead scoring | Planned |
| Sprint 4 | Jun 1–20 | Performance optimization | Planned |
| Sprint 5 | Jun 22–Jul 11 | Buffer + QA + deploy all P0 | Planned |
| Sprint 6 | Jul 13–Aug 7 | Client portal (auth + dashboard) | Planned |
| Sprint 7 | Aug 10–Sep 4 | Booking system + calendar | Planned |
| Sprint 8 | Sep 7–25 | Pricing calculator v2 | Planned |
| Sprint 9 | Sep 28–Oct 16 | Multi-language foundation | Planned |
| Sprint 10 | Oct 19–Nov 13 | AI chatbot development | Planned |
| Sprint 11 | Nov 16–Dec 4 | A/B testing + review system | Planned |
| Sprint 12 | Dec 7–31 | Year-end optimization + planning | Planned |

---

## 5. Integration Recommendations

### 5.1 CRM Options

| Platform | Pros | Cons | Price | Recommendation |
|----------|------|------|-------|----------------|
| WeChat Work (企业微信) SCRM | Native Chinese, integrates with existing WeChat Work | Limited customization | ¥300-800/mo | ✅ **Start here** — leverage existing integration |
| HubSpot Free | Excellent UX, free tier generous | Limited Chinese market support | Free–$45/mo | ✅ **Best for growth** — add as secondary |
| Zoho CRM | Good Chinese support, affordable | Steeper learning curve | ¥100-300/mo | Consider if budget-constrained |
| Airtable | Flexible, team-friendly | Not a true CRM | Free–$20/mo | Good for internal ops only |

**Recommendation:** WeChat Work SCRM as primary + HubSpot Free for international leads.

### 5.2 Analytics Options

| Platform | Use Case | Cost | Recommendation |
|----------|----------|------|----------------|
| Google Analytics 4 | Web analytics, acquisition | Free | ✅ **Primary** |
| Hotjar | Heatmaps, recordings, surveys | Free–$39/mo | ✅ **Primary** |
| Microsoft Clarity | Alternative to Hotjar (free) | Free | ✅ **Backup** |
| Plausible | Privacy-first analytics (GDPR) | €9/mo | Optional for privacy |

**Recommendation:** GA4 + Hotjar (or Clarity if budget-sensitive).

### 5.3 Live Chat / Support

| Platform | WeChat Integration | Chinese Market | Price | Recommendation |
|----------|-------------------|---------------|-------|----------------|
| Tidio | No | No | Free–$20/mo | ⚠️ Best UX, no Chinese |
| Crisp | Limited | Limited | Free–$25/mo | Good balance |
| Intercom | No | No | $39+/mo | Enterprise-grade, expensive |
| 企业微信客服 | ✅ Native | ✅ | Included | ✅ **Start with this** |
| Juzibot (句子互动) | ✅ Native | ✅ | ¥200+/mo | ✅ **Best Chinese option** |

**Recommendation:** 企业微信客服 for WeChat-native + Crisp for web visitors.

### 5.4 Booking / Scheduling

| Platform | Integration | Price | Recommendation |
|----------|------------|-------|----------------|
| Calendly | Google/Outlook calendar | Free–$12/mo | ✅ **Best overall** |
| Tencent Meeting API | WeChat ecosystem | Free | Best for Chinese users |
| Cal.com | Open source, self-hostable | Free | Good for customization |

**Recommendation:** Calendly (international) + Tencent Meeting API (domestic).

---

## 6. Competitive Analysis

### 6.1 Competitor Landscape

| Competitor Type | Common Features | YHX Differentiators |
|----------------|-----------------|-------------------|
| **Large agencies** (huge team, high prices) | Case studies, testimonials, team pages | More affordable, personalized service, faster turnaround |
| **Freelancer platforms** (猪八戒, 一品威客) | Gig marketplace, reviews, escrow | Dedicated team relationship, ongoing support, quality control |
| **SaaS website builders** (Wix, Squarespace, 凡科) | Drag-and-drop, templates | Custom development, scalable architecture, no platform lock-in |
| **Local competitors** | Basic sites, WeChat presence | Superior UX, data-driven approach, comprehensive service offering |

### 6.2 Feature Comparison

| Feature | YHX | Large Agencies | Freelance Platforms | SaaS Builders |
|---------|-----|---------------|-------------------|--------------|
| Custom Development | ✅ | ✅ | ⚠️ | ❌ |
| Affordable Pricing | ✅ | ❌ | ✅ | ✅ |
| Chinese Market Focus | ✅ | ⚠️ | ✅ | ⚠️ |
| WeChat Integration | ✅ | ⚠️ | ❌ | ❌ |
| Live Chat Support | ⬜ (planned) | ✅ | ❌ | ⚠️ |
| Client Portal | ⬜ (planned) | ⚠️ | ❌ | ⚠️ |
| SEO Support | ⬜ (planned) | ✅ | ❌ | ⚠️ |
| Analytics | ⬜ (planned) | ⚠️ | ❌ | ⚠️ |

### 6.3 Competitive Strategies

1. **Positioning:** "The agile agency that delivers enterprise quality at startup prices"
2. **Speed:** Emphasize faster delivery cycles vs. large agencies
3. **Technology:** Showcase modern tech stack (vs. legacy agencies using outdated tools)
4. **Transparency:** Client portal gives real-time visibility (vs. black-box agencies)
5. **Data-Driven:** Analytics-first approach differentiates from "design-first" competitors

---

## 7. Success Metrics & KPIs

### 7.1 Business Metrics

| Metric | Current (Est.) | Q3 Target | Q4 Target |
|--------|---------------|-----------|-----------|
| Monthly unique visitors | Baseline TBD | +20% | +40% |
| Contact form submissions/mo | Baseline TBD | +30% | +50% |
| Pricing calculator completions/mo | Baseline TBD | +40% | +60% |
| Lead-to-client conversion rate | Baseline TBD | +15% | +25% |
| Average lead response time | Hours | < 1 hour | < 15 min |
| Client satisfaction (CSAT) | N/A | 85%+ | 90%+ |

### 7.2 Technical Metrics

| Metric | Target |
|--------|--------|
| Lighthouse mobile score | 90+ |
| Lighthouse desktop score | 95+ |
| Core Web Vitals (LCP) | < 2.5s |
| Core Web Vitals (CLS) | < 0.1 |
| Uptime | 99.9% |
| Time to First Byte (TTFB) | < 200ms (China CDN) |

### 7.3 Feature Adoption Metrics (by Q4 2026)

| Feature | Target Adoption |
|---------|----------------|
| Live chat initiated conversations | 15% of visitors |
| Client portal logins (active clients) | 80% of active clients |
| Booking system usage | 30% of consultations booked online |
| AI chatbot resolution rate | 60% without human escalation |
| Multi-language page views | 10% of total traffic |

---

## 8. Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| Scope creep on client portal | High | High | MVP-first approach; defer P2 features |
| CRM integration complexity | Medium | Medium | Start with WeChat Work (already in place) |
| SEO changes cause ranking drop | High | Low | Gradual rollout; monitor Search Console daily |
| Performance regression after new features | Medium | Medium | Automated Lighthouse CI checks |
| Data privacy compliance (PIPL) | High | Low | Legal review before deploying AI chatbot |

---

## 9. Budget Estimates (Q2-Q4 2026)

| Category | Estimated Cost (6 months) |
|----------|--------------------------|
| Development (internal/contract) | ¥60,000 – ¥120,000 |
| Analytics tools (Hotjar + GA4) | ¥0 – ¥3,000 |
| Live chat platform | ¥1,200 – ¥3,600 |
| CRM (HubSpot Free + WeChat SCRM) | ¥2,000 – ¥5,000 |
| Booking system | ¥0 – ¥1,500 |
| CDN & hosting upgrade | ¥3,000 – ¥6,000 |
| Translation services | ¥5,000 – ¥15,000 |
| **Total estimated range** | **¥71,200 – ¥154,100** |

---

## 10. Next Steps

1. **Immediate (This Week):**
   - Audit current analytics setup
   - Select and begin GA4 + Hotjar implementation
   - Evaluate WeChat Work SCRM options

2. **Short-term (Next 2 Weeks):**
   - Choose live chat platform and begin integration
   - Document current lead flow from form submissions
   - Set up baseline metrics tracking

3. **Mid-term (This Month):**
   - Begin CRM integration sprint
   - Start performance audit with Lighthouse
   - Kick off SEO content strategy planning

---

*Document maintained by the YHX product team. For questions, contact the project lead or raise an issue in the project repository.*
