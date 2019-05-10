const mongoose = require("mongoose");
const userMongo = "dang";
const passwordMongo = "dang";
const uri = `mongodb+srv://${userMongo}:${passwordMongo}@nodejs-passportjs-jwt-ioswb.mongodb.net/test?retryWrites=true`;
const bcrypt = require("bcrypt");
// connect
mongoose.connect(uri, err => {
    console.log(err);
});
// set up schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
});
// pre save()
// UserSchema.pre("save", async next => {
//     const user = this;
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;
//     next();
// });
// valid user'password
UserSchema.methods.isPasswordValid =  function(password) {
    const user = this;
    console.log(password == user.password);
    if (password == user.password) {
        return true;
    }
    return false;
    // const compare = await bcrypt.compare(password, user.password);
    // return compare;
};

module.exports = mongoose.model("user", UserSchema);
