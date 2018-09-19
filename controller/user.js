const User = require("../models/userModel");

module.exports = {

    //add new users in user-list

  addNewUser: async (req, res, next) => {
    let user;
      try{
        user =  await User.create({
            username : req.body.username,
            password : req.body.password
        });
        res.status(200).send(user);
      } catch (err) {
        res.status(500).send("There was a problem adding the information to the database.");
      }
  },

};
