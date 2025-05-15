const express = require("express");
const app = express();
//porta
const port = process.env.PORT;
const cors = require("cors");

//middlewares
const notFound = require("./middlewares/notFound");
const handleError = require("./middlewares/handleError");
const movies = require("./routers/movies");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Prima Pagina WebApp");
});
app.use("/film", movies);
//500
app.use(handleError);
//404
app.use(notFound);
//avvio server
app.listen(port, () => {
  console.log(`web app on port ${port}`);
});
