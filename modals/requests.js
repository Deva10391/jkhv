const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReqSchema = new Schema({
    property200: {
        type: Object,
        required: true,
    }
});

module.exports = mongoose.model('collectionName', ReqSchema);