const express = require('express');
const Post = require('./Post');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const ejs = require('ejs');

connectDB();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res. render('Landing');
});

app.post('/submitted', async (req, res) => {
    try {
        const message = req.body.msg;

    const messageMongo = new Post({
        msg: message
    });

    await messageMongo.save();

    res.redirect('/submitted');
    
    } catch (err) {
        res.status(500)
            .send('Server Error');   
 }
});

app.get('/submitted', (req, res) => {
    res.render('submitted')
})

var PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}.`));

