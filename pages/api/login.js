export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // form-urlencoded 또는 JSON 바디 모두 처리
  let rawPassword = '';
  const body = req.body;
  if (body && typeof body === 'object') {
    rawPassword = body.password || '';
  } else if (typeof body === 'string') {
    try { rawPassword = new URLSearchParams(body).get('password') || ''; } catch {}
  }

  const password = rawPassword.trim();
  const sitePassword = (process.env.SITE_PASSWORD || 'iplabiplabgogo').trim();

  if (password === sitePassword) {
    res.setHeader(
      'Set-Cookie',
      `auth=${sitePassword}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`
    );
    return res.redirect(302, '/');
  }
  return res.redirect(302, '/login?error=1');
}
