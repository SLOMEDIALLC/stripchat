export default {
  async fetch(request, env) {
    return new Response(null, {
      status: 301,
      headers: {
        "Location": "https://stripchat.com"
      }
    });
  }
}
