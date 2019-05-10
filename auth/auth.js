const passport = require("passport");
const UserModel = require("../models/User.model");
const LocalStrategy = require("passport-local").Strategy;

//Create a passport middleware to handle user registration
passport.use(
    "signup",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        async (email, password, done) => {
            try {
                const user = await UserModel.create({ email, password });
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

passport.use(
    "login",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        async (email, password, done) => {
            try {
                //Find the user associated with the email provided by the user
                const user = await UserModel.findOne({ email });
                console.log(user);
                if (!user) {
                    //If the user isn't found in the database, return a message
                    return done(null, { message: "User not found" });
                }
                if (!user.isPasswordValid(password)) {
                    return done(null, { message: "Wrong password" });
                }
                //Send the user information to the next middleware
                console.log(user);
                return done(null, user, { message: "Logged in Successfully" });
            } catch (error) {
                console.log(error);
                return done(error);
            }
        }
    )
);
