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
    // 返回index.html的内容
    return new Response(await fetch('index.html'), {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    })
  } catch (error) {
    return new Response('Error loading page', { status: 500 })
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
