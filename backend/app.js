const express = require("express");

const cors = require("cors");

const summRoutes = require("./routes/summ-routes");

const app = express();

app.use(cors());

app.use("/getSumm", summRoutes);

app.listen(5000);
