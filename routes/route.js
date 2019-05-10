const router = require("express").Router();
const passport = require("passport");

router.post(
    "/signup",
    passport.authenticate("signup", { session: false }),
    async (req, res, next) => {
        res.json({
            message: "Signup successful",
            user: req.user
        });
    }
);

router.post(
    "/login",
    passport.authenticate("login", { session: false }),
    async (req, res, next) => {
        res.send(req.user);
    }
);

module.exports = router;
