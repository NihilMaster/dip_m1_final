const illness = require('../models').illnesses_model;
module.exports = {
    list(req, res) {
        return illness
        .findAll({})
        .then((illness) => res.status(200).send(illness))
        .catch((error) => {
            res.status(400).send(error);
        });
    },  
};