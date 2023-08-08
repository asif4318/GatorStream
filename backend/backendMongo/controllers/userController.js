const User = require('../models/userModel')
const Class = require('../models/classModel')




const loginUser = async (req, res) => { // should create an access token and a refresh token to cookies and send to the front end
  try {
    const{email, name, picture, userID} = req.body;
    const user = await User.findOne({userID: userID}).populate('classes');
    if(user) {

      return res.status(200).json(user)
    }else{ 
      const newUser = await User.create({
        userID,
        email,
        name,
        picture
      });
      await newUser.save();
      return res.status(200).json({message: 'User created'})
    }
  } catch (error) {
    res.status(401).json({error: error.message})
  }
}

const getClass = async (req, res) => {
  try{
    const {className} = req.body;
    const userClass = await Class.findOne({className: className});
    if(userClass){
      res.status(200).json(userClass) 
    }else{
      throw new Error('Class not found')
    }

  }catch (error) {
    res.status(401).json({error: error.message})
  }
}


const addClass = async (req, res) => {
  const {className, userID} = req.body;
  try {
    const user = await User.findOne({userID: userID});
    if(!user) {
        throw new Error('User not found')
    }
    

      const foundClass = await Class.findOne({className: className}); 
      if(foundClass){
        if(!user.classes.includes(foundClass._id)){
              user.classes.push(foundClass._id)
              foundClass.users.push(user._id)
              await foundClass.save();
              await user.save();
              return res.status(200).json({message: 'Class added'}) 
        }else{
          return res.status(200).json({message: 'Class already added'})
        }
      }else{
        const newClass = await Class.create({
          className
        });
        newClass.users.push(user._id)
        user.classes.push(newClass._id)
        await newClass.save();
        await user.save();
        return res.status(200).json({message: 'new Class created and added user to it'})
      }

    }catch (error) {
    res.status(401).json({error: error.message})
  }
}


module.exports = {loginUser, addClass, getClass};

