const PORT = 3000;
const express = require("express");
const passport = require("passport");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.post("/signup", passport.authenticate("signup"), (req, res, next) => {});

app.listen(PORT, () => {
    console.log(`app listen on port ${PORT}`);
});
