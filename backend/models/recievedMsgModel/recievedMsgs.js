import userModel from '../../database/schemas/userSchema.js';

let recievedmsgs = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await userModel.findOne({
            name
        });
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }
        return res.status(200).json({
            recievedmsgs: user.recievedmsgs
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export default recievedmsgs;