const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: /.+\@.+\..+/
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    }, 
    {
        timestamps: true, versionKey: false
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = mongoose.model('User', UserSchema);