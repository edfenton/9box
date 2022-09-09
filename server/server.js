const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

require("./config/mongoose.config");
require('dotenv').config();

const personRoutes = require('./routes/person.routes');
personRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${ port }`));