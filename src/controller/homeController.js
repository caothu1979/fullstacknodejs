import CRUDservices from "../services/CRUDservices";
let getHomePage = (req, res) => {
    //return res.send("this is homepage");
   return res.render("homepage.ejs");
}
let getAboutPage = (req, res) => {
    return res.render("about.ejs");
}
let displayAllUsers = async(req, res) => {
    let data = await CRUDservices.getAllUsers();
    console.log(data);
    return res.render("displayCRUD.ejs");
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    displayAllUsers: displayAllUsers
}
