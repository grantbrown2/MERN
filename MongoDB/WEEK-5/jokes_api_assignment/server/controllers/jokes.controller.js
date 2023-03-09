const Joke = require('../models/jokes.model')

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch((err) => {
            res.json({message: 'You have encountered an error!', err})
        });
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params._id})
        .then(oneJoke => {
            res.json({joke: oneJoke})
        })
        .catch((err) => {
            res.json({message: 'You have encountered an error!', err})
        })
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(createdJoke => {
            res.json({joke:createdJoke})
        })
        .catch((err) => {
            res.json({message: 'You have encountered an error!', err})
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.updateOne(
        {_id: req.params._id},
        req.body,
        {new:true, runValidators: true} //get explanation for this
    )
        .then(updatedJoke => {
            res.json({joke: updatedJoke})
        })
        .catch((err) => {
            res.json({message: 'You have encountered an error!', err})
        });
}

module.exports.deleteAJoke = (req, res) => {
    Joke.deleteOne({_id:req.params._id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message: 'You have encountered an error!', err})
        });
}