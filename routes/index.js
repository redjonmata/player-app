var db = require("../models");

module.exports = {
    getHomePage: (req, res) => {
        let playersArray = [];
        db.player.findAll()
            .then(function (players) {
                res.render('index.ejs', {
                    title: "Welcome to Socka | View Players",
                    players: players
                })
            })
            .catch(function (err) {
                console.log("OOps something went wrong");
            });
    }
};