require("dotenv").config();
const express = require("express");
const gradient = require('gradient-string')
const cors = require("cors");

const PORT = 4041;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(gradient.rainbow(`runnin wild on ${PORT}`)))

