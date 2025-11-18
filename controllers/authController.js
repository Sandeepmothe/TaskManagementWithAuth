const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register
exports.register = async (req, res ) => {
    const {name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash( password, 10);
    const user = await User.create({name, email, password: hashedPassword });

    res.json({ message: 'User Created', user})
};

//Login 
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if(!user) return res.json({ message: 'Invalid Email'});

    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.json({ message: "Password Incorrect"})

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d'});

    res.json({ message: 'Login Success', token })
};