import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        age : {type: Number,required:true},
        email: {type: String,required: true,unique: true}
    },
    {timestamps: true}
);

const user = mongoose.model('user',userSchema);

export default user;