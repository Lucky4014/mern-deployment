import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}>
      <h1>🚀 MERN App Deployed!</h1>
      <p>Backend says: <strong>{msg}</strong></p>
      <p>Task 16 - Deployment & CI/CD</p>
    </div>
  );
}

export default App;
