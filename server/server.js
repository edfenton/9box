require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.MY_PORT;
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));
app.use(cookieParser());

require("./config/mongoose.config");

const personRoutes = require('./routes/person.routes');
personRoutes(app);

const userRoutes = require('./routes/user.routes');
userRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${ port }`));