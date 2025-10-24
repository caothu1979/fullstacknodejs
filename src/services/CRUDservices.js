import db from "../config/connectDB"
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
module.exports = {
    getAllUsers:getAllUsers
}