import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';

// Import Routes
import apiRoutes from './controllers/routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Database connected');
    }
).catch(err => console.log(err));


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', apiRoutes);

// Listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



