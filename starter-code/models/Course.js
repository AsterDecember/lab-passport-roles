const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        name: String,
        userID:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    }
);


module.exports = mongoose.model("Course", courseSchema);