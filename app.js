const express = require("express");
const app = express();
//porta
const port = 3000;
//avvio server
app.listen(port, () => {
  console.log(`web app on port ${port}`);
});
