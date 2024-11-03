import userModel from '../../database/schemas/userSchema.js';
import bcrypt from 'bcrypt';

let sendMsg = async (req, res) => {
    try {
        const { sender, reciever, message } = req.body;
        // console.log(sender,reciever,message);
        const user = await userModel.findOne({ name: reciever });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        let senderhash = await bcrypt.hash(sender, 10);
        user.recievedmsgs.push({sender:senderhash,reciever,message})
        await user.save();
        return res.status(200).json({ message: 'Message sent' });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default sendMsg;