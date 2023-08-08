const User = require('../models/userModel')




const loginUser = async (req, res) => { // should create an access token and a refresh token to cookies and send to the front end
  try {
    const{email, name, picture} = req.oidc.user;
    const user = await User.findOne({email: email});
    if(user) {
      res.status(200).json(user)
    }else{ 
      const newUser = await User.create({
        email,
        name,
        picture
      });
      await newUser.save();
      res.status(200).json({message: 'User created'})
    }
  } catch (error) {
    res.status(401).json({error: error.message})
  }
}



module.exports = {loginUser};

