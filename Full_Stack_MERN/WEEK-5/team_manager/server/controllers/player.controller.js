const Player = require('../models/player.model');

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json({players: allPlayers}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.findOnePlayer = (req, res) => {
    Player.findById({_id: req.params.id})
        .then(onePlayer => res.json({player: onePlayer}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json({player: newPlayer}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

// module.exports.updatePlayer = (req, res) => {
//     Player.
// }