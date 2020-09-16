
const mongoose = require('mongoose');


const PermissionSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    guard_name: { type: String, default: 'API' },
    created_at: { type: Date }
})

// methods

// attributes

module.exports = mongoose.model('Permissions', PermissionSchema);
