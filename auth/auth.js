const passport = require("passport");
const UserModel = require("../models/User.model");
const localStrategy = require("passport-local").Strategy;

passport.use(
    "signup",
    new localStorage(
        {
            usernameField: "email",
            passwordField: "password"
        },
        async (email, password, done) => {
            try {
                const user = await new UserModel({
                    email,
                    password
                }).save();
                done(null, user, { messege: "created" });
            } catch (error) {
                done(error);
            }
        }
    )
);

passport.use(
    "login",
    new localStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        async (email, password, err) => {
            try {
                const user = await UserModel.findOne({ email });
                if (!user) {
                    done(null, false, { messege: "User not found" });
                } else {
                    done(null, user);
                }
            } catch (error) {
                done(null, false, error);
            }
        }
    )
);
