const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(routes);

app.listen(8000, () => {
  console.log("API listening on port 8000");
});
