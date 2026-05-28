const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Notify Service </title>
      </head>
      <body>
        <h1>Notify Service Running live</h1>
        <p>This is the notification microservice.</p>
      </body>
    </html>
  `);
});

app.get("/notify", (req, res) => {
  res.json({
    message: "notification service running",
  });
});

app.listen(8001, () => {
  console.log("Notify service running on port 8001");
});