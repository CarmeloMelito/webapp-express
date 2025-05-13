const express = require("express");
const app = express();
//porta
const port = process.env.PORT;
const cors = require("cors");
//middlewares
const notFound = require("./middlewares/notFound");
const handleError = require("./middlewares/handleError");

app.use(
  cors({
    origin: process.env.FE_APP,
  })
);
app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Prima Pagina WebApp");
});

//500
app.use(handleError);
//404
app.use(notFound);
//avvio server
app.listen(port, () => {
  console.log(`web app on port ${port}`);
});
