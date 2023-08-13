import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
},
    { timestamps: true }
)

export default mongoose.models?.User || mongoose.model("User", userSchema);