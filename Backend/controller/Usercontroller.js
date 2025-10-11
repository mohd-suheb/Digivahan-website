const User = require('../models/Users');
    
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// ✅ User Register
const userregister = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // check if user exists
    const existuser = await User.findOne({ email });
    if (existuser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }

    // hash password
    const hashpassword = await bcrypt.hash(password, 10);

    // create new user
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashpassword,
    });

   //create token
   const token = jwt.sign(
    {id:user._id},
    process.env.JWT_SECRET,
    {expiresIn:"7d"}

   );

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: error.message,
    });
  }
};


// ✅ User Login
const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials (user not found)',
      });
    }

    // compare passwords
    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect password',
      });
    }

    // create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,  // ⚠️ spelling was wrong before
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error while login',
      error: error.message,
    });
  }
};

// ✅ Export correctly for require() syntax
module.exports = { userregister, loginuser };

