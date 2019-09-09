const express = require('express');

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listener
app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
})