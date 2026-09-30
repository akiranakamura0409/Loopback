export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem", maxWidth: 640 }}>
      <h1>Loopback echo</h1>
      <p>
        Send any HTTP request to{" "}
        <code style={{ background: "#eee", padding: "0.1em 0.4em" }}>/api/echo</code>{" "}
        (this server binds to <code>127.0.0.1:3847</code> only).
      </p>
      <pre style={{ background: "#f5f5f5", padding: "1rem", overflow: "auto" }}>
{`curl -sS http://127.0.0.1:3847/api/echo \\
  -H 'X-Probe: 1' \\
  -d '{"hello":"world"}'`}
      </pre>
    </main>
  );
}
