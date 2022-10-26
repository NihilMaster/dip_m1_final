const specialization = require('../models').specialization_model;
module.exports = {
    list(req, res) {
        return specialization
        .findAll({})
        .then((specialization) => res.status(200).send(specialization))
        .catch((error) => {
            res.status(400).send(error);
        });
    }
}