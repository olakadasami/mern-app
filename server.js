const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');

port = process.env.PORT || 5000

const app = express();

mongoose.connect(process.env.MONGO_DB, () => {
    app.listen(port, () => console.log(`Connected to DB & server started on port ${port}`));

})


