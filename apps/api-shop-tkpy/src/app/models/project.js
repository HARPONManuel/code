const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    projectId: {
        type: String,
        required: true,
    },
    projectName: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    teamSize: { 
        type: String,
    }
})


projectSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

projectSchema.set('toJSON', {
    virtuals: true,
});

exports.Project = mongoose.model('Project', projectSchema);
