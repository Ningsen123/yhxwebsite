// Cloudflare Worker - 联系表单自动回复
// 接收表单数据，发送到企业微信

const WEBHOOK_URL = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=8967d76d-5bba-4eef-9307-ab510bcee898';

// CORS头
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

// 处理OPTIONS请求（预检）
function handleOptions() {
    return new Response(null, {
        status: 204,
        headers: corsHeaders,
    });
}

// 发送消息到企业微信
async function sendToWeChat(data) {
    const now = new Date();
    const timeStr = now.toLocaleString('zh-CN', { 
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });

    const message = {
        msgtype: 'markdown',
        markdown: {
            content: `**【新客户咨询】** 🎉

> **姓名：** ${data.name || '未填写'}
> **电话：** ${data.phone || '未填写'}
> **公司：** ${data.company || '未填写'}
> **服务：** ${data.service || '未选择'}
> **预算：** ${data.budget || '未选择'}
> **需求：** ${data.message || '未填写'}

⏰ **咨询时间：** ${timeStr}`
        }
    };

    const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

    const result = await response.json();
    return result;
}

// 主处理函数
async function handleRequest(request) {
    // 处理OPTIONS请求
    if (request.method === 'OPTIONS') {
        return handleOptions();
    }

    // 只允许POST请求
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }

    try {
        // 解析表单数据
        const contentType = request.headers.get('Content-Type') || '';
        let data;

        if (contentType.includes('application/json')) {
            data = await request.json();
        } else if (contentType.includes('application/x-www-form-urlencoded')) {
            const formData = await request.formData();
            data = Object.fromEntries(formData);
        } else {
            // 尝试解析为JSON
            const text = await request.text();
            data = JSON.parse(text);
        }

        // 验证必填字段
        if (!data.name || !data.phone || !data.message) {
            return new Response(JSON.stringify({ 
                error: '请填写必填字段：姓名、电话、需求描述' 
            }), {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
        }

        // 发送到企业微信
        const result = await sendToWeChat(data);

        if (result.errcode === 0) {
            return new Response(JSON.stringify({ 
                success: true, 
                message: '提交成功，我们会尽快与您联系！' 
            }), {
                status: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
        } else {
            console.error('WeChat API error:', result);
            return new Response(JSON.stringify({ 
                error: '发送失败，请稍后重试' 
            }), {
                status: 500,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
        }

    } catch (error) {
        console.error('Worker error:', error);
        return new Response(JSON.stringify({ 
            error: '服务器错误，请稍后重试' 
        }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}

// 导出处理函数
export default {
    fetch: handleRequest,
};