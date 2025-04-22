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

  try {
    // 使用__STATIC_CONTENT的方式访问静态文件
    const response = await __STATIC_CONTENT.get('index.html')
    if (response === null) {
      return new Response('File not found', { status: 404 })
    }
    return new Response(response, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    })
  } catch (error) {
    return new Response('Error loading page: ' + error.message, { status: 500 })
  }
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
