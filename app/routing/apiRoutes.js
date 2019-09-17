// Loads data source
let friends = require("../data/friendsData");

module.exports = app => {
  // Display JSON of all possible friends
  app.get("/api/friends", (req, res) => res.json(friends));

  // Handle incoming survey results from survey.html and sends back data to frontend
  app.post("/api/friends", (req, res) => {
    let newFriend = req.body;
    let newArray = [];
    let sumNewFriendScores = 0;
    let sumCurrentFriendScores = 0;
    let matchName = '';
    let matchPhoto = '';

    friends.forEach(friends => {
        let currentFriend = friends.scores;
        sumCurrentFriendScores = currentFriend.reduce((x,y) => x + y);
        newArray.push(sumCurrentFriendScores);
    });

        let newUser = newFriend.scores;
        newUser = newUser.map(Number);
        sumNewFriendScores = newUser.reduce((x,y) => x + y)

        let closestNumber = newArray.reduce(function(prev, curr) {
            return (Math.abs(curr - sumNewFriendScores) < Math.abs(prev - sumNewFriendScores) ? curr : prev);
          });

          for (let i = 0; i < friends.length; i++) {
            if (closestNumber === newArray[i]) {
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
                console.log('Match name: ' + matchName);
                console.log('Photo: ' + matchPhoto);
            }
        };
 
    res.json({
        name: matchName,
        photo: matchPhoto
    })
    friends.push(newFriend);
  });
};
