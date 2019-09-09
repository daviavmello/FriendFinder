// Path package to get the html file path
let path = require('path');

// GET route that sends the user to AJAX Page
app.get('/survey', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

// Route that leads to home.html
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});