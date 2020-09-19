
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: { type: String, default: '' },
    email: { type: String, unique: true, trim: true, lowercase: true, required: true},
    password: { type: String, required: true, minlength: 8, maxlength: 128},
    password_changed_at: { type: Date },
    active: { type: Boolean, default: true },
    push_token: { type: String, default: '' },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Roles' }],
    permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permissions' }],
    archived: { type: Boolean, default: false },
    last_login: { type: Date },
    created_at: { type: Date },
    updated_at: { type: Date }
})

// methods

// attributes

module.exports = mongoose.model('User', userSchema);
