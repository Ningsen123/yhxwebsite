     1|// ========================================
     2|// 寅禾星科技 - 公共JavaScript v2
     3|// ========================================
     4|
     5|document.addEventListener('DOMContentLoaded', function() {
     6|// 移动端菜单切换
     7|const mobileToggle = document.getElementById('mobileToggle');
     8|const navMenu = document.getElementById('navMenu');
     9|
    10|if (mobileToggle && navMenu) {
    11|mobileToggle.addEventListener('click', () => {
    12|navMenu.classList.toggle('active');
    13|});
    14|
    15|navMenu.querySelectorAll('a').forEach(link => {
    16|link.addEventListener('click', () => {
    17|navMenu.classList.remove('active');
    18|});
    19|});
    20|}
    21|
    22|// 导航栏滚动效果
    23|const navbar = document.getElementById('navbar');
    24|if (navbar) {
    25|window.addEventListener('scroll', () => {
    26|if (window.scrollY > 50) {
    27|navbar.classList.add('scrolled');
    28|} else {
    29|navbar.classList.remove('scrolled');
    30|}
    31|});
    32|}
    33|
    34|// 平滑滚动
    35|document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    36|anchor.addEventListener('click', function(e) {
    37|const href = this.getAttribute('href');
    38|if (href !== '#') {
    39|e.preventDefault();
    40|const target = document.querySelector(href);
    41|if (target) {
    42|target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    43|}
    44|}
    45|});
    46|});
    47|
    48|// 返回顶部按钮
    49|initBackToTop();
    50|
    51|// 在线客服
    52|initOnlineService();
    53|
    54|// 淡入动画
    55|initFadeInAnimation();
    56|
    57|// 表单验证
    58|initFormValidation();
    59|});
    60|
    61|// ========================================
    62|// 返回顶部按钮
    63|// ========================================
    64|function initBackToTop() {
    65|const backToTop = document.getElementById('backToTop');
    66|if (!backToTop) return;
    67|
    68|window.addEventListener('scroll', () => {
    69|if (window.scrollY > 300) {
    70|backToTop.classList.add('visible');
    71|} else {
    72|backToTop.classList.remove('visible');
    73|}
    74|});
    75|
    76|backToTop.addEventListener('click', () => {
    77|window.scrollTo({ top: 0, behavior: 'smooth' });
    78|});
    79|}
    80|
    81|// ========================================
    82|// 在线客服
    83|// ========================================
    84|function initOnlineService() {
    85|const serviceBtn = document.getElementById('serviceBtn');
    86|const servicePopup = document.getElementById('servicePopup');
    87|
    88|if (!serviceBtn || !servicePopup) return;
    89|
    90|serviceBtn.addEventListener('click', () => {
    91|servicePopup.classList.toggle('active');
    92|});
    93|
    94|// 点击其他地方关闭
    95|document.addEventListener('click', (e) => {
    96|if (!e.target.closest('.online-service')) {
    97|servicePopup.classList.remove('active');
    98|}
    99|});
   100|}
   101|
   102|// ========================================
   103|// 淡入动画
   104|// ========================================
   105|function initFadeInAnimation() {
   106|const observer = new IntersectionObserver((entries) => {
   107|entries.forEach(entry => {
   108|if (entry.isIntersecting) {
   109|entry.target.classList.add('visible');
   110|}
   111|});
   112|}, { threshold: 0.1 });
   113|
   114|document.querySelectorAll('.fade-in').forEach(el => {
   115|observer.observe(el);
   116|});
   117|}
   118|
   119|// ========================================
   120|// 表单验证
   121|// ========================================
   122|function initFormValidation() {
   123|const forms = document.querySelectorAll('form[data-validate]');
   124|
   125|forms.forEach(form => {
   126|form.addEventListener('submit', function(e) {
   127|e.preventDefault();
   128|
   129|let isValid = true;
   130|const requiredFields = form.querySelectorAll('[required]');
   131|
   132|requiredFields.forEach(field => {
   133|const formGroup = field.closest('.form-group');
   134|
   135|// 清除之前的错误状态
   136|formGroup.classList.remove('error');
   137|field.classList.remove('form-error');
   138|
   139|// 验证必填字段
   140|if (!field.value.trim()) {
   141|formGroup.classList.add('error');
   142|field.classList.add('form-error');
   143|isValid = false;
   144|}
   145|
   146|// 验证手机号
   147|if (field.type === 'tel' && field.value) {
   148|const phoneRegex = /^1[3-9]\d{9}$/;
   149|if (!phoneRegex.test(field.value)) {
   150|formGroup.classList.add('error');
   151|field.classList.add('form-error');
   152|isValid = false;
   153|}
   154|}
   155|
   156|// 验证邮箱
   157|if (field.type === 'email' && field.value) {
   158|const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   159|if (!emailRegex.test(field.value)) {
   160|formGroup.classList.add('error');
   161|field.classList.add('form-error');
   162|isValid = false;
   163|}
   164|}
   165|});
   166|
   167|if (isValid) {
   168|// 提交成功
   169|const formData = new FormData(form);
   170|const data = Object.fromEntries(formData);
   171|// 提交到Worker
                fetch('https://contact-form-worker.linyubai123.workers.dev', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        showNotification('提交成功！我们会尽快与您联系。', 'success');
                        form.reset();
                    } else {
                        showNotification(result.error || '提交失败，请稍后重试', 'error');
                    }
                })
                .catch(error => {
                    console.error('提交失败:', error);
                    showNotification('网络错误，请稍后重试', 'error');
                });
   172|
   173|// 显示成功提示
   174|showNotification('提交成功！我们会在1个工作日内与您联系。', 'success');
   175|form.reset();
   176|} else {
   177|showNotification('请填写完整的必填信息', 'error');
   178|}
   179|});
   180|
   181|// 实时清除错误状态
   182|form.querySelectorAll('input, textarea, select').forEach(field => {
   183|field.addEventListener('input', function() {
   184|const formGroup = this.closest('.form-group');
   185|formGroup.classList.remove('error');
   186|this.classList.remove('form-error');
   187|});
   188|});
   189|});
   190|}
   191|
   192|// ========================================
   193|// 通知提示
   194|// ========================================
   195|function showNotification(message, type = 'info') {
   196|// 移除已有的通知
   197|const existing = document.querySelector('.notification');
   198|if (existing) existing.remove();
   199|
   200|const notification = document.createElement('div');
   201|notification.className = `notification notification-${type}`;
   202|notification.innerHTML = `
   203|<div class="notification-content">
   204|<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
   205|<span>${message}</span>
   206|</div>
   207|`;
   208|
   209|document.body.appendChild(notification);
   210|
   211|// 添加样式
   212|notification.style.cssText = `
   213|position: fixed;
   214|top: 90px;
   215|right: 20px;
   216|background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#0EA5E9'};
   217|color: white;
   218|padding: 16px 24px;
   219|border-radius: 8px;
   220|box-shadow: 0 4px 12px rgba(0,0,0,0.15);
   221|z-index: 10000;
   222|animation: slideIn 0.3s ease;
   223|`;
   224|
   225|// 3秒后自动消失
   226|setTimeout(() => {
   227|notification.style.animation = 'slideOut 0.3s ease';
   228|setTimeout(() => notification.remove(), 300);
   229|}, 3000);
   230|}
   231|
   232|// ========================================
   233|// 报价计算器
   234|// ========================================
   235|function initPricingCalculator() {
   236|const calcForm = document.getElementById('pricingCalc');
   237|if (!calcForm) return;
   238|
   239|calcForm.addEventListener('submit', function(e) {
   240|e.preventDefault();
   241|calculatePrice();
   242|});
   243|
   244|// 实时计算
   245|const inputs = calcForm.querySelectorAll('input, select');
   246|inputs.forEach(input => {
   247|input.addEventListener('change', calculatePrice);
   248|});
   249|}
   250|
   251|function calculatePrice() {
   252|const serviceType = document.getElementById('serviceType')?.value;
   253|const complexity = document.getElementById('complexity')?.value;
   254|const timeline = document.getElementById('timeline')?.value;
   255|
   256|if (!serviceType || !complexity || !timeline) return;
   257|
   258|// 基础价格表 (单位: 元)
   259|const basePrice = {
   260|'web': { 'simple': 15000, 'medium': 50000, 'complex': 150000 },
   261|'miniapp': { 'simple': 20000, 'medium': 60000, 'complex': 180000 },
   262|'app': { 'simple': 30000, 'medium': 80000, 'complex': 250000 },
   263|'system': { 'simple': 50000, 'medium': 120000, 'complex': 350000 },
   264|'ai': { 'simple': 80000, 'medium': 200000, 'complex': 500000 }
   265|};
   266|
   267|// 时间系数
   268|const timelineFactor = {
   269|'urgent': 1.3,
   270|'normal': 1.0,
   271|'flexible': 0.9
   272|};
   273|
   274|const base = basePrice[serviceType]?.[complexity] || 50000;
   275|const factor = timelineFactor[timeline] || 1.0;
   276|const estimated = Math.round(base * factor);
   277|
   278|// 更新显示
   279|const resultEl = document.getElementById('priceResult');
   280|if (resultEl) {
   281|resultEl.innerHTML = `
   282|<div class="price-estimate">
   283|<span class="price-label">预估费用</span>
   284|<span class="price-value">¥${estimated.toLocaleString()}</span>
   285|<span class="price-note">* 最终报价以需求评估为准</span>
   286|</div>
   287|`;
   288|}
   289|}
   290|
   291|// ========================================
   292|// 案例筛选
   293|// ========================================
   294|function initCaseFilter() {
   295|const filterBtns = document.querySelectorAll('.filter-btn');
   296|const caseCards = document.querySelectorAll('.case-detail-card');
   297|
   298|filterBtns.forEach(btn => {
   299|btn.addEventListener('click', function() {
   300|// 更新按钮状态
   301|filterBtns.forEach(b => b.classList.remove('active'));
   302|this.classList.add('active');
   303|
   304|const filter = this.dataset.filter;
   305|
   306|// 筛选案例
   307|caseCards.forEach(card => {
   308|if (filter === 'all' || card.dataset.type === filter) {
   309|card.style.display = 'block';
   310|} else {
   311|card.style.display = 'none';
   312|}
   313|});
   314|});
   315|});
   316|}
   317|
   318|// ========================================
   319|// 选项卡切换
   320|// ========================================
   321|function switchTab(type) {
   322|// 更新按钮状态
   323|document.querySelectorAll('.pricing-tab').forEach(tab => {
   324|tab.classList.remove('active');
   325|});
   326|event.target.classList.add('active');
   327|
   328|// 更新内容显示
   329|document.querySelectorAll('.pricing-section').forEach(section => {
   330|section.classList.remove('active');
   331|});
   332|document.getElementById(type + '-pricing').classList.add('active');
   333|}
   334|
   335|// ========================================
   336|// 动画样式注入
   337|// ========================================
   338|const style = document.createElement('style');
   339|style.textContent = `
   340|@keyframes slideIn {
   341|from { transform: translateX(100%); opacity: 0; }
   342|to { transform: translateX(0); opacity: 1; }
   343|}
   344|@keyframes slideOut {
   345|from { transform: translateX(0); opacity: 1; }
   346|to { transform: translateX(100%); opacity: 0; }
   347|}
   348|`;
   349|document.head.appendChild(style);
   350|