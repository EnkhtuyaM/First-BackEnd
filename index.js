const express = require("express");
const app = express();
const { products, users } = require("./dummy.json");

app.get("/products", (request, response) => {
  response.type = "application/json";
  response.status(200);
  response.send({ products });
});

app.get("/users", (request, response) => {
  response.type = "application/json";
  response.send({ users });
});

app.listen(3001, () => {
  console.log("Server is listening");
});
app.get("/users", (request, response) => {
  response.type = "application/json";
  response.status(200);
  response.send({ name });
});
