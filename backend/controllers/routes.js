import LoginPost from './loginControllers/LoginPost.js';
import RegisterPost from './loginControllers/Registerpost.js';
import Recievedmsgs from '../controllers//recievedMsgControllers/RecieveMsgget.js';
import Sendmsg from '../controllers/sendMsgControllers/SendMsgpost.js';

import express from 'express';
const app = express();

app.use('/login', LoginPost);
app.use('/register', RegisterPost);
app.use('/recievedmsgs', Recievedmsgs);
app.use('/sendmsg', Sendmsg);


export default app; 