const Team = require('../models/team.model');



module.exports.getAllPlayers = (req, res) => {
    Team.find({})
        .then(teams => {
            res.json(teams);
        })
        .catch(err => {res.json(err)})
}

module.exports.newPlayer = (req, res) => {
    Team.create(req.body)
        .then(player => res.json(player))
        .catch(err => console.log(err));
}

module.exports.deletePlayer = (req, res) => {
    Team.deleteOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch(err => console.log(err));
}