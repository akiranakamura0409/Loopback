export default function Home() {
  const vercelUrl = process.env.VERCEL_URL;
  const deployedBase = vercelUrl ? `https://${vercelUrl}` : null;

  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem", maxWidth: 720 }}>
      <h1>Loopback echo</h1>
      <p>
        Send any HTTP request to{" "}
        <code style={{ background: "#eee", padding: "0.1em 0.4em" }}>/api/echo</code>
        . The handler returns method, URL, query, headers, cookies, and body as JSON.
        CORS is enabled so browser scripts on other origins (e.g. a bait page) can read the
        response.
      </p>

      {deployedBase ? (
        <section style={{ marginTop: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem" }}>Deployed (this host)</h2>
          <pre style={{ background: "#f5f5f5", padding: "1rem", overflow: "auto" }}>
            {`curl -sS '${deployedBase}/api/echo' \\
  -H 'X-Probe: 1' \\
  -d '{"hello":"world"}'`}
          </pre>
        </section>
      ) : null}

      <section style={{ marginTop: "1.5rem" }}>
        <h2 style={{ fontSize: "1.1rem" }}>Local dev</h2>
        <p style={{ marginTop: 0, color: "#444" }}>
          <code>npm run dev</code> binds to{" "}
          <code>127.0.0.1:3847</code> only (not reachable from other machines).
        </p>
        <pre style={{ background: "#f5f5f5", padding: "1rem", overflow: "auto" }}>
          {`curl -sS http://127.0.0.1:3847/api/echo \\
  -H 'X-Probe: 1' \\
  -d '{"hello":"world"}'`}
        </pre>
      </section>
    </main>
  );
}
