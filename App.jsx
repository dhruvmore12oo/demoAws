import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <main className="page">
      <section className="card">
        <div className="badge">AWS WORKSHOP</div>
        <h1>Welcome to AWS Amplify 🚀</h1>
        <p className="subtitle">
          Build locally, push to GitHub, and deploy your web application with AWS Amplify.
        </p>

        <div className="info">
          <div>
            <span>Student</span>
            <strong>Dhruv More The Hero</strong>
          </div>
          <div>
            <span>Service</span>
            <strong>AWS Amplify</strong>
          </div>
        </div>

        <button onClick={() => setMessage("Hello from your Amplify application!")}>
          Click Me
        </button>

        {message && <p className="success">{message}</p>}
      </section>
    </main>
  );
}

export default App;
