export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  res.json({
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
    MODEL: process.env.MODEL || 'gpt-4o',
  });
}
