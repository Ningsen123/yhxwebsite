// ========================================
// 寅禾星科技 - 公共JavaScript v2
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // 返回顶部按钮
    initBackToTop();

    // 在线客服
    initOnlineService();

    // 淡入动画
    initFadeInAnimation();

    // 表单验证
    initFormValidation();
});

// ========================================
// 返回顶部按钮
// ========================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// 在线客服
// ========================================
function initOnlineService() {
    const serviceBtn = document.getElementById('serviceBtn');
    const servicePopup = document.getElementById('servicePopup');

    if (!serviceBtn || !servicePopup) return;

    serviceBtn.addEventListener('click', () => {
        servicePopup.classList.toggle('active');
    });

    // 点击其他地方关闭
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.online-service')) {
            servicePopup.classList.remove('active');
        }
    });
}

// ========================================
// 淡入动画
// ========================================
function initFadeInAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// 表单验证
// ========================================
function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                const formGroup = field.closest('.form-group');

                // 清除之前的错误状态
                formGroup.classList.remove('error');
                field.classList.remove('form-error');

                // 验证必填字段
                if (!field.value.trim()) {
                    formGroup.classList.add('error');
                    field.classList.add('form-error');
                    isValid = false;
                }

                // 验证手机号
                if (field.type === 'tel' && field.value) {
                    const phoneRegex = /^1[3-9]\d{9}$/;
                    if (!phoneRegex.test(field.value)) {
                        formGroup.classList.add('error');
                        field.classList.add('form-error');
                        isValid = false;
                    }
                }

                // 验证邮箱
                if (field.type === 'email' && field.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        formGroup.classList.add('error');
                        field.classList.add('form-error');
                        isValid = false;
                    }
                }
            });

            if (isValid) {
                // 提交成功
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                console.log('表单提交:', data);

                // 显示成功提示
                showNotification('提交成功！我们会在1个工作日内与您联系。', 'success');
                form.reset();
            } else {
                showNotification('请填写完整的必填信息', 'error');
            }
        });

        // 实时清除错误状态
        form.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', function() {
                const formGroup = this.closest('.form-group');
                formGroup.classList.remove('error');
                this.classList.remove('form-error');
            });
        });
    });
}

// ========================================
// 通知提示
// ========================================
function showNotification(message, type = 'info') {
    // 移除已有的通知
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#0EA5E9'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    // 3秒后自动消失
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// 报价计算器
// ========================================
function initPricingCalculator() {
    const calcForm = document.getElementById('pricingCalc');
    if (!calcForm) return;

    calcForm.addEventListener('submit', function(e) {
        e.preventDefault();
        calculatePrice();
    });

    // 实时计算
    const inputs = calcForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('change', calculatePrice);
    });
}

function calculatePrice() {
    const serviceType = document.getElementById('serviceType')?.value;
    const complexity = document.getElementById('complexity')?.value;
    const timeline = document.getElementById('timeline')?.value;

    if (!serviceType || !complexity || !timeline) return;

    // 基础价格表 (单位: 元)
    const basePrice = {
        'web': { 'simple': 15000, 'medium': 50000, 'complex': 150000 },
        'miniapp': { 'simple': 20000, 'medium': 60000, 'complex': 180000 },
        'app': { 'simple': 30000, 'medium': 80000, 'complex': 250000 },
        'system': { 'simple': 50000, 'medium': 120000, 'complex': 350000 },
        'ai': { 'simple': 80000, 'medium': 200000, 'complex': 500000 }
    };

    // 时间系数
    const timelineFactor = {
        'urgent': 1.3,
        'normal': 1.0,
        'flexible': 0.9
    };

    const base = basePrice[serviceType]?.[complexity] || 50000;
    const factor = timelineFactor[timeline] || 1.0;
    const estimated = Math.round(base * factor);

    // 更新显示
    const resultEl = document.getElementById('priceResult');
    if (resultEl) {
        resultEl.innerHTML = `
            <div class="price-estimate">
                <span class="price-label">预估费用</span>
                <span class="price-value">¥${estimated.toLocaleString()}</span>
                <span class="price-note">* 最终报价以需求评估为准</span>
            </div>
        `;
    }
}

// ========================================
// 案例筛选
// ========================================
function initCaseFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const caseCards = document.querySelectorAll('.case-detail-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            // 筛选案例
            caseCards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ========================================
// 选项卡切换
// ========================================
function switchTab(type) {
    // 更新按钮状态
    document.querySelectorAll('.pricing-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // 更新内容显示
    document.querySelectorAll('.pricing-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(type + '-pricing').classList.add('active');
}

// ========================================
// 动画样式注入
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
