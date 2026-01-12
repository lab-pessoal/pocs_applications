const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Hello World - Lab Guilherme Chavenco",
    service: "lab-guilherme-chavenco",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (_req, res) => {
  res.status(200).send("ok");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Lab Guilherme Chavenco listening on port ${port}`);
});

