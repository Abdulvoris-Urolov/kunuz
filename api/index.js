const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");


dotenv.config();

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
//    useCreateIndex: true, 
})
.then(() => {
    console.log('MongoDBga ulanish hosil qilindi...');
})
.catch((err) => {
    console.error('MongoDBga ulanish vaqtida xato ro`y berdi...', err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.use("/", (req, res) =>{
    console.log('main url');
});
//console.log('Abdulvoris');


app.listen("2000", (req, res) =>{
    console.log(`2000-port ishlayabdi`);
});