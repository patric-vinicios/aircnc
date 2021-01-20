const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/aircnc', {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3333, () => {
    console.log(`server running`)
})
