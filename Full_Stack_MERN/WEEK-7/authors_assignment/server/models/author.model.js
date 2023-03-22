const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author must have a name!"],
        minlength: [3, "Author name must have at least 3 characters!"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);