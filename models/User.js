const mongoose = require ('mongoose');
const Schema = mongoose.Schema; 

const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

