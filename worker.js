addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // 如果是根路径访问
  if (url.pathname === '/') {
    // 生成随机字符串
    const randomString = generateRandomString(8)
    return Response.redirect(`${url.origin}/${randomString}`, 302)
  }

  // 处理APK文件下载
  if (url.pathname.endsWith('.apk')) {
    try {
      const response = await fetch('stripchat_super_en_edit_sign.apk')
      return new Response(response.body, {
        headers: {
          'content-type': 'application/vnd.android.package-archive',
          'content-disposition': 'attachment; filename="stripchat_super_en_edit_sign.apk"'
        }
      })
    } catch (error) {
      return new Response('APK file not found', { status: 404 })
    }
  }

  // 返回HTML内容
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Stripchat Super - Download App</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
            color: white;
            min-height: 100vh;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .container {
            max-width: 500px;
            width: 100%;
            text-align: center;
            margin: 0 auto;
            padding: 20px;
        }

        .logo-container {
            width: 120px;
            height: 120px;
            margin: 40px auto;
            border-radius: 24px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            background: #2a2a2a;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .logo {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        h1 {
            font-size: 28px;
            margin-bottom: 15px;
            color: #fff;
        }

        .description {
            font-size: 16px;
            line-height: 1.6;
            color: #cccccc;
            margin-bottom: 30px;
            padding: 0 20px;
        }

        .download-btn {
            background: linear-gradient(45deg, #ff3366 0%, #ff6b3d 100%);
            color: white;
            padding: 16px 40px;
            border-radius: 30px;
            text-decoration: none;
            font-size: 18px;
            font-weight: bold;
            display: inline-block;
            margin: 20px 0;
            box-shadow: 0 4px 15px rgba(255, 51, 102, 0.4);
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
        }

        .download-btn:active {
            transform: scale(0.98);
            box-shadow: 0 2px 10px rgba(255, 51, 102, 0.4);
        }

        .features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 40px 0;
            padding: 0 20px;
        }

        .feature {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
        }

        .feature h3 {
            color: #ff3366;
            margin-bottom: 10px;
        }

        .feature p {
            color: #cccccc;
            font-size: 14px;
        }

        .version {
            color: #888;
            font-size: 14px;
            margin-top: 30px;
        }

        @media (max-width: 480px) {
            .features {
                grid-template-columns: 1fr;
            }
            
            .description {
                font-size: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo-container">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="20" fill="#FF3366"/>
                <path d="M40 20C28.954 20 20 28.954 20 40C20 51.046 28.954 60 40 60C51.046 60 60 51.046 60 40C60 28.954 51.046 20 40 20ZM40 56C31.178 56 24 48.822 24 40C24 31.178 31.178 24 40 24C48.822 24 56 31.178 56 40C56 48.822 48.822 56 40 56Z" fill="white"/>
                <path d="M44 36L36 40L44 44V36Z" fill="white"/>
            </svg>
        </div>
        <h1>Stripchat Super</h1>
        <p class="description">Experience the next level of live streaming with our official mobile app. Enhanced features, better performance, and exclusive content.</p>
        
        <a href="/stripchat_super_en_edit_sign.apk" class="download-btn" download>
            Download Now
        </a>

        <div class="features">
            <div class="feature">
                <h3>HD Quality</h3>
                <p>Crystal clear streaming with adaptive quality</p>
            </div>
            <div class="feature">
                <h3>Fast & Smooth</h3>
                <p>Optimized performance for mobile devices</p>
            </div>
            <div class="feature">
                <h3>Secure</h3>
                <p>Enhanced privacy and security features</p>
            </div>
            <div class="feature">
                <h3>24/7 Support</h3>
                <p>Round-the-clock customer service</p>
            </div>
        </div>

        <p class="version">Version 1.0.0</p>
    </div>
</body>
</html>
  `

  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  })
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
