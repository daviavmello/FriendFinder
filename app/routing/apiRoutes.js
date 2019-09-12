// Loads data source
let friends = require('../data/friendsData');

module.exports = app => {

// Display JSON of all possible friends
app.get('/api/friends', (req,res) => {
    return res.json(friends)
});

// Handle incoming survey results from survey.html and sends back data to frontend
app.post("/api/friends", (req,res) => {
    let match = req.body;

    console.log(match);
    friends.push(match);
    res.json(friends);

    
}); 
};