// Next.js API route to proxy requests to the external API
export default async function handler(req, res) {
  const { domain } = req.query;
  if (!domain) {
    return res.status(400).json({ error: 'Missing domain parameter' });
  }

  const apiUrl = `http://40.82.128.111:5001/v1.1.0/sitemap-urls?domain=${encodeURIComponent(domain)}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      }
    });
    if (!response.ok) {
      const text = await response.text();
      console.error('Proxy fetch failed:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: text,
      });
      return res.status(response.status).json({
        error: 'Failed to fetch from external API',
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: text,
      });
    }
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy error', details: error.message, stack: error.stack });
  }
}
