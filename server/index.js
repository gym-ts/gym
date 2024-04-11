const db = require('./database/index')
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

const Authentication = require('./routes/login.routes');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use("/api/auth", Authentication);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
