function App() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <h1>CixioHub Frontend Running</h1>
      
      


      <p>Available Services:</p>

      <ul>
        <li>
          <a
            href="http://localhost:8000"
            target="_blank"
            rel="noreferrer"
          >
            Backend Service
          </a>
        </li>

        <li>
          <a
            href="http://localhost:8000/health"
            target="_blank"
            rel="noreferrer"
          >
            Backend Health API
          </a>
        </li>

        <li>
          <a
            href="http://localhost:8001"
            target="_blank"
            rel="noreferrer"
          >
            Notify Service
          </a>
        </li>

        <li>
          <a
            href="http://localhost:8001/notify"
            target="_blank"
            rel="noreferrer"
          >
            Notify API
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;