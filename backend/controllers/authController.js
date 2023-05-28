const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
const {username,email,password} = req.body
//destructurer l obejt req.body 
if(username=="" || email == "" || password =="") {
   res.send({ error: "veuillez remplir tous les champs ! " });
}
  try {
    let user = await userModel.findOne({ email: req.body.email });
    // user ==> 2 cas possibles (null / document)
    if (user) {
      res.send({ error: "addresse email deja utilisé" });  
    } else {
      let newUser = new userModel(req.body);
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          console.log(err);  
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
          if (err) {
            console.log(err);
          }
          //remplacer le mot de passe brut avec le mot de passe hashé
          newUser.password = hashedPassword;
          newUser.save();
          res.send({ msg: "utilisateur creé avec succes ! " });
        });
      });
    }
  } catch (err) {
    res.send(err);
  }
};

const login = async (req, res) => {
  const {email,password} = req.body
//destructurer l obejt req.body 
if( email == "" || password =="") {
   res.send({ error: "veuillez remplir tous les champs ! " });
}
  const user = await userModel.findOne({ email: req.body.email });
  if (user == null) { // if(!user)
    res.send({
      error: "aucun utilisateur est associé avec cette addresse email",
    });
  } else {

    bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
    if (err) {
      console.log(err);
    }
    if (isMatch) {
      const payload = {
        id: user._id,
        email: user.email,
        username: user.username,
      };

      let token = jwt.sign(payload, "secret", { expiresIn: 3600 });
      res.send({
        msg: "connecté avec succes ! ",
        token: token,
        user: user,
      });
    } else {
      return res.send({ error: "mot de passe incorrecte" });
    }
  });
  }
  
};

module.exports = { login, register };
