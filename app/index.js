const express = require("express");
const morgan = require("morgan");
const app = express();
app.listen(9876, () => {
  console.log("Server running on 9876");
});
