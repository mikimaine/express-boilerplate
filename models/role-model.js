
const mongoose = require('mongoose');


const RoleSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permissions' }],
    archived: { type: Boolean, default: false },
    created_at: { type: Date },
    updated_at: { type: Date }
})

// methods

// attributes

module.exports = mongoose.model('Roles', RoleSchema);
