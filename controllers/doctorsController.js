const doctor = require('../models').doctors_model;
module.exports = {
    list(req, res) {
        return doctor
        .findAll({})
        .then((doctor) => res.status(200).send(doctor))
        .catch((error) => {
            res.status(400).send(error);
        });
    },
    getById(req, res) {
        console.log(req.params.id);
        return doctor
        .findByPk(req.params.id)
        .then((doctor) => {
            console.log(doctor);
            if (!doctor) {
                return res.status(404).send({
                message: 'Doctor Not Found',
                });
            }
            return res.status(200).send(doctor);
        })
        .catch((error) => res.status(400).send(error));
    },
    add(req, res) {
        return doctor
        .create({
            name_doctor: req.body.name_doctor,
            specialization: req.body.specialization,
            state: req.body.state
        })
        .then((doctor) => res.status(201).send(doctor))
        .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return doctor
        .findByPk(req.params.id)
        .then(doctor => {
            if (!doctor) {
                return res.status(404).send({
                    message: 'Doctor Not Found',
                });
            }
            return doctor
            .update({
                name_doctor: req.body.name_doctor || doctor.name_doctor,
                specialization: req.body.specialization || doctor.specialization,
                state: req.body.state || doctor.state
            })
            .then(() => res.status(200).send(doctor))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return doctor
        .findByPk(req.params.id)
        .then(doctor => {
            if (!doctor) {
                return res.status(400).send({
                    message: 'Doctor Not Found',
                });
            }
            return doctor
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },   
};
