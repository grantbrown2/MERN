const TeamController = require('../controllers/team.controller');

module.exports = (app) => {
    app.get('/players/list', TeamController.getAllPlayers)
    app.post('/players/add', TeamController.newPlayer)
    app.delete('/players/remove/:id', TeamController.deletePlayer)
}