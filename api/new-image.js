export default function handler(req, res) {
  console.log('Request received:', req.method);
  if (req.method === 'POST') {
    console.log('Processing POST request');

  } else {
    console.log('Method not allowed:', req.method);
    res.status(405).end();
  }
}
