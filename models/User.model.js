const mongoose = require("mongoose");
const userMongo = "dang";
const passwordMongo = "dang";
const uri = `mongodb+srv://${userMongo}:${passwordMongo}@nodejs-passportjs-jwt-ioswb.mongodb.net/test?retryWrites=true`;
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
userSchema.pre("save", async next => {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});
// valid user'password
userSchema.method.isPasswordValid = async function(next) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
};
module.exports = mongoose.model("user", UserSchema);
