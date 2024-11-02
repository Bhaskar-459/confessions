// create new user

import userModel from '../../database/schemas/userSchema.js';

let createUser = async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await userModel.findOne({
            name
        });
        if (user) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        await userModel.create({
            name,
            password
        });
        return res.status(200).json({
            message: 'User created'
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export default createUser;