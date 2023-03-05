const mongoose = require('mongoose');

const plannerSchema  = new  mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model ("Planner" , plannerSchema);


