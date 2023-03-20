const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "Player name is required!"],
        minlength: [2, "Player name must be at least 2 characters long!"]
    },
    role: {type: String}
},{timestamps: true});

module.exports = mongoose.model('Team', TeamSchema);