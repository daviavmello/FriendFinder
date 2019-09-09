// Loads data source
let friends = require('../data/friends');

module.exports = app => {

// Display JSON of all possible friends
app.get('/api/friends', (req,res) => {
    return res.json(friends)
});

// Handle incoming survey results
app.post("/api/friends", (req,res) => {
    let match = req.body;
    match.routeName = match.name.replace(/\s+/g, "").toLowerCase();
    console.log(match);
    match.push(match);
    res.json(match);
}); 
};