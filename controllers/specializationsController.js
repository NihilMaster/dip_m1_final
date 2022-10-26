const specialization = require('../models').specializations_model;
module.exports = {
    list(req, res) {
        return specialization
        .findAll({})
        .then((specialization) => res.status(200).send(specialization))
        .catch((error) => {
            res.status(400).send(error);
        });
    },
    add(req, res) {
        return specialization
        .create({
            name_specialization: req.body.name_specialization
        })
        .then((specialization) => res.status(201).send(specialization))
        .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return specialization
        .findByPk(req.params.id)
        .then(specialization => {
            if (!specialization) {
                return res.status(404).send({
                    message: 'Specialization Not Found',
                });
            }
            return specialization
            .update({
                name_specialization: req.body.name_specialization || specialization.name_specialization
            })
            .then(() => res.status(200).send(specialization))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
}