const PORT = 3000;
const express = require("express");
const passport = require("passport");
const app = express();
const bodyParser = require("body-parser");
const authRoute = require("./auth/auth");
const routes = require("./routes/route");

app.use(bodyParser.json());
app.use("/auth", routes);
app.get("/", (req, res) => {
    res.send("Homepage");
});
app.listen(PORT, () => {
    console.log(`app listen on port ${PORT}`);
});
