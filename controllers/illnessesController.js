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
    getById(req, res) {
        console.log(req.params.id);
        return illness
        .findByPk(req.params.id)
        .then((illness) => {
            console.log(illness);
            if (!illness) {
                return res.status(404).send({
                message: 'Illness Not Found',
                });
            }
            return res.status(200).send(illness);
        })
        .catch((error) => res.status(400).send(error));
    },
    add(req, res) {
        return illness
        .create({
            name_illness: req.body.name_illness
        })
        .then((illness) => res.status(201).send(illness))
        .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return illness
        .findByPk(req.params.id)
        .then(illness => {
            if (!illness) {
                return res.status(404).send({
                    message: 'Illness Not Found',
                });
            }
            return illness
            .update({
                name_illness: req.body.name_illness || illness.name_illness
            })
            .then(() => res.status(200).send(illness))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },  
};