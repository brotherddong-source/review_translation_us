export default function Login({ hasError }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; }
        body {
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Noto Sans KR', sans-serif;
          background: #f7f7f7;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        header {
          background: #2B2D7B;
          height: 56px;
          display: flex;
          align-items: center;
          padding: 0 1.5rem;
          gap: 0;
          flex-shrink: 0;
        }
        .header-logo { height: 28px; width: auto; display: block; }
        .header-divider {
          width: 1px; height: 28px;
          background: rgba(255,255,255,0.35);
          margin: 0 1.1rem; flex-shrink: 0;
        }
        .header-text h1 { font-size: 1.05rem; font-weight: 700; color: #fff; line-height: 1.2; }
        .header-text p  { font-size: 0.68rem; color: rgba(255,255,255,0.7); margin-top: 0.15rem; }
        .main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }
        .card {
          background: #fff;
          border: 1px solid #e0e0e0;
          padding: 2.5rem;
          width: 100%;
          max-width: 360px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .logo { text-align: center; margin-bottom: 1.5rem; }
        .logo img { width: 120px; height: auto; }
        .error-msg {
          background: #fef2f2; color: #dc2626;
          border: 1px solid #fecaca;
          padding: 0.625rem 0.875rem; font-size: 0.8rem;
          margin-bottom: 1rem; text-align: center;
        }
        label {
          display: block; font-size: 0.72rem; font-weight: 600;
          color: #6e6e6e; margin-bottom: 0.375rem; letter-spacing: 0.03em;
        }
        input[type=password] {
          width: 100%; padding: 0.75rem 1rem;
          border: 1px solid #e0e0e0;
          font-size: 0.9375rem; color: #212121;
          outline: none; transition: border-color 0.15s;
          letter-spacing: 0.15em; background: #fff;
        }
        input[type=password]:focus { border-color: #2B2D7B; }
        button {
          margin-top: 1.25rem; width: 100%;
          padding: 0.875rem;
          background: #2B2D7B; color: #fff;
          border: none;
          font-size: 0.875rem; font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: background 0.15s;
        }
        button:hover { background: #1e1f5c; }
        button:active { background: #16175a; }
        @media (max-width: 480px) {
          header { padding: 0 1rem; height: 52px; }
          .header-logo { height: 20px; }
          .header-divider { margin: 0 0.75rem; height: 24px; }
          .header-text h1 { font-size: 0.9rem; }
          .header-text p { display: none; }
          .card { padding: 2rem 1.25rem; }
        }
      `}} />
      <header>
        <img src="/iplab-logo-white.png" alt="IPLAB" className="header-logo" />
        <div className="header-divider" />
        <div className="header-text">
          <h1>특허 번역 검토기</h1>
          <p>Patent Translation Review System</p>
        </div>
      </header>
      <div className="main">
        <div className="card">
          <div className="logo"><img src="/iplab-logo-blue.png" alt="IPLAB" /></div>
          {hasError && (
            <div className="error-msg">⚠ 비밀번호가 올바르지 않습니다.</div>
          )}
          <form method="POST" action="/api/login">
            <label htmlFor="pw">비밀번호</label>
            <input
              id="pw"
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              autoFocus
              autoComplete="current-password"
            />
            <button type="submit">입장하기 →</button>
          </form>
        </div>
      </div>
    </>
  );
}

export function getServerSideProps({ query }) {
  return { props: { hasError: query.error === '1' } };
}
