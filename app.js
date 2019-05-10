const PORT = 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const secureRoute = require("./routes/secure-route");
const routes = require("./routes/route");
require("./auth/auth");

app.use(bodyParser.json());
app.use("/auth", routes);
app.use("/user", secureRoute);
app.get("/", (req, res) => {
    res.send("Homepage");
});
app.listen(PORT, () => {
    console.log(`app listen on port ${PORT}`);
});
