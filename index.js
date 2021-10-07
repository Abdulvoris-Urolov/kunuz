
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/list", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('MongoDBga ulanish hosil qilindi...');
})
.catch((err) => {
    console.error('MongoDBga ulanish vaqtida xato ro`y berdi...', err);
});

app.listen(2000, (req, res) =>{
    console.log(`2000-port ishlayabdi`);
});