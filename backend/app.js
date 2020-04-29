const express = require("express");

const cors = require("cors");

const summRoutes = require("./routes/summ-routes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use("/getSumm", summRoutes);
app.use("/users", userRoutes);

app.listen(5000);
