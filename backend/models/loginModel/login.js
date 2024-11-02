// login existing user

import userModel from '../../database/schemas/userSchema.js';

let login = async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await userModel.findOne({
            name,
            password
        });
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }
        return res.status(200).json({
            message: 'User found'
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export default login;