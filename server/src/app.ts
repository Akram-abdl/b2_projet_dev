import express from 'express';
import usersRoutes from './routes/users';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users', usersRoutes);


const CONNECTION_URL = "mongodb+srv://projet_dev_user:pr0jEt_d3v_p4ssWOrd@passwordmanager.sxew4.mongodb.net/password_manager";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


// app.get('/', (req, res) => {
//     res.send("Hello from Homepage");
// });

// app.listen(PORT, () => {
//     console.log(`server is running on port: http://localhost:${PORT}`)
// });