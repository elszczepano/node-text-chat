import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    room: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Message = module.exports = mongoose.model('Message', messageSchema);