// Cloudflare Workers script for SPA routing
export default {
  async fetch(request, env, _ctx) {
    const url = new URL(request.url);

    // Handle static assets
    try {
      const response = await env.ASSETS.fetch(request);

      // If the request is for an HTML file or not found, return index.html for SPA routing
      if (
        response.status === 404 ||
        (!url.pathname.includes(".") && !url.pathname.startsWith("/api"))
      ) {
        const indexRequest = new Request(
          new URL("/index.html", request.url),
          request,
        );
        return await env.ASSETS.fetch(indexRequest);
      }

      return response;
    } catch (_error) {
      // Fallback to index.html for SPA routing
      const indexRequest = new Request(
        new URL("/index.html", request.url),
        request,
      );
      return await env.ASSETS.fetch(indexRequest);
    }
  },
};
