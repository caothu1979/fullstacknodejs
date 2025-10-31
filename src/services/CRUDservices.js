import db from "../models/index";
import bcrypt from "bcryptjs";
let getAllUsers = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let users = db.User.findAll();
            resolve(users);
        } catch(e)
        {
            reject(e);
        }
    }) 
}
let createPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    return hash;
    
}
let createUser = (data) => {
    console.log("Create an user:",data);
}
module.exports = {
    getAllUsers: getAllUsers,
    createUser: createUser,
    createPassword: createPassword 
}