const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

const employeesRouter = require("./employeesRouter");
app.use("/employees", employeesRouter);

// 404 middleware
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
