// GET route that sends the user to AJAX Page
app.get('/survey', req,res => {
    res.sendFile(path.join(__dirname, "survey.html"));
})

// Route that leads to home.html
app.get('/', req,res => {
    res.sendFile(path.join(__dirname, "home.html"));
})