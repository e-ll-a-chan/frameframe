export default function handler(req, res) {
    if (req.method === 'POST') {
      res.status(200).send(`
         <meta property="fc:frame:image" content="https://picsum.photos/1200/630?random=2" />
      `);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }