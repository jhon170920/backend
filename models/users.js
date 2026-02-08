import mongoose from "mongoose";

const UserSChema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password: {type: String, required:true}
});

const Users = mongoose.model("Users", UserSChema, "Users");

export default Users;