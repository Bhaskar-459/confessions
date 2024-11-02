import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    reciever: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    recievedmsgs: {
        type: [msgSchema],
        default: []
    },
});

const User = mongoose.model('User', userSchema);

export default User;