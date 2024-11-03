import userModel from '../../database/schemas/userSchema.js';
import bcrypt from 'bcrypt';

let changePassword = async (req, res) => {
    try {
        const { name, password, newPassword } = req.body;
        const user = await userModel.findOne({
            name,
        });
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                message: 'Invalid password'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await userModel.updateOne({
            name,
        }, {
            password: hashedPassword
        });

        return res.status(200).json({
            message: 'Password changed'
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export default changePassword;