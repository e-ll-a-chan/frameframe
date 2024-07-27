export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }
  
  const randomParam = Math.random();
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://picsum.photos/1200/630?random=${randomParam}" />
      <meta property="fc:frame:button:1" content="Show another image" />
      <meta property="fc:frame:post_url" content="https://0kcal-game.vercel.app/api/new-image" />
      <title>New Image - Farcaster Frame</title>
    </head>
    <body>
      <h1>Here's a new image!</h1>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
