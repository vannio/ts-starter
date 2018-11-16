const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log("Hi, I'm hogging port 3000");
});
