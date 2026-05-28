const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CixioHub Backend</title>
      </head>
      <body>
        <h1>CixioHub Backend Running live  </h1>
        <p>Main backend service is active.</p>

        <h2>Available Routes</h2>

        <ul>
          <li>/health</li>
        </ul>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "backend running",
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});