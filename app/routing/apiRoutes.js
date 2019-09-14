// Loads data source
let friends = require("../data/friendsData");

module.exports = app => {
  // Display JSON of all possible friends
  app.get("/api/friends", (req, res) => {
    return res.json(friends);
  });

  // Handle incoming survey results from survey.html and sends back data to frontend
  app.post("/api/friends", (req, res) => {
    let newFriend = req.body;
    let currentFriendScores;
    // let newFriendScores = newFriend.scores
    let newArray = [];
    for (let i = 0; i < friends.length; i++) {
        currentFriendScores = friends[i].scores;

        for (i = 0; i < currentFriendScores.length; i++) {
            console.log(newFriend.scores[i]);
            console.log(currentFriendScores[i]);
            
            newArray.push(Math.abs(parseInt(newFriend.scores[i]) - parseInt(currentFriendScores[i])));
            // console.log(newArray);
          }


          
        
    }





    console.log(newArray);








    
  });
  //   friends.push(newFriend);
  //   res.json(friends);
};
