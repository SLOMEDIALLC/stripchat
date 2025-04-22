export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 如果是根路径，重定向到 INDEX.HTML
    if (url.pathname === '/' || url.pathname === '') {
      return Response.redirect(url.origin + '/INDEX.HTML', 301);
    }
    
    // 如果请求的是 INDEX.HTML，返回下载页面内容
    if (url.pathname === '/INDEX.HTML') {
      return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Stream App Download</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .container {
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            text-align: center;
        }
        .logo {
            width: 120px;
            height: 120px;
            margin: 20px auto;
            background: #ff3366;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            color: white;
            box-shadow: 0 4px 15px rgba(255, 51, 102, 0.3);
        }
        h1 {
            font-size: 2.5em;
            margin: 20px 0;
            background: linear-gradient(45deg, #ff3366, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }
        .feature {
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(5px);
        }
        .download-btn {
            display: inline-block;
            background: linear-gradient(45deg, #ff3366, #ff6b6b);
            color: white;
            padding: 15px 40px;
            border-radius: 30px;
            text-decoration: none;
            font-size: 1.2em;
            font-weight: bold;
            margin: 20px 0;
            transition: transform 0.3s ease;
        }
        .download-btn:hover {
            transform: translateY(-2px);
        }
        .safety {
            margin-top: 40px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
        }
        .safety h3 {
            color: #ff3366;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">LS</div>
        <h1>Live Stream App</h1>
        
        <div class="features">
            <div class="feature">
                <h3>🌟 Premium Content</h3>
                <p>Access exclusive live streaming content in HD quality</p>
            </div>
            <div class="feature">
                <h3>🔒 Private & Secure</h3>
                <p>End-to-end encryption for your privacy</p>
            </div>
            <div class="feature">
                <h3>🎥 Live Interaction</h3>
                <p>Real-time chat and interactive features</p>
            </div>
        </div>

        <a href="stripchat_super_en_edit_sign.apk" class="download-btn">
            Download App
        </a>

        <div class="safety">
            <h3>Safe Download</h3>
            <p>✓ Virus Scanned</p>
            <p>✓ No Hidden Costs</p>
            <p>✓ 24/7 Support</p>
        </div>
    </div>
</body>
</html>`, {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      });
    }
    
    // 对于其他请求，返回 404
    return new Response('Not Found', { status: 404 });
  }
}
