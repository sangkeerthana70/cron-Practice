const express = require('express');
const bodyParser = require('body-parser');

//create an instance of express
const app = express();

//require routes/api/practice.js file
const practice = require('./routes/api/practice');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("Hello");
});

app.use('/api/practice', practice);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));