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
          align-items: center;
          justify-content: center;
        }
        .card {
          background: #fff;
          border: 1px solid #e0e0e0;
          padding: 2.5rem;
          width: 100%;
          max-width: 360px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .logo { font-size: 2rem; text-align: center; margin-bottom: 0.5rem; }
        .title {
          font-size: 1rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; text-align: center;
          color: #212121; margin-bottom: 0.25rem;
        }
        .subtitle {
          font-size: 0.72rem; color: #6e6e6e;
          text-align: center; margin-bottom: 2rem;
        }
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
        input[type=password]:focus {
          border-color: #0ea5e9;
        }
        button {
          margin-top: 1.25rem; width: 100%;
          padding: 0.875rem;
          background: #212121; color: #fff;
          border: none;
          font-size: 0.875rem; font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: background 0.15s;
        }
        button:hover { background: #000; }
        button:active { background: #3f3f3f; }
      `}} />
      <div className="card">
        <div className="logo">⚖️</div>
        <div className="title">특허 번역 검토기</div>
        <div className="subtitle">Patent Translation Review System</div>
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
    </>
  );
}

export function getServerSideProps({ query }) {
  return { props: { hasError: query.error === '1' } };
}
