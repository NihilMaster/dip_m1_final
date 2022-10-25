const appointment = require('../models').appointments_model;
module.exports = {
    list(req, res) {
        return appointment
        .findAll({})
        .then((appointment) => res.status(200).send(appointment))
        .catch((error) => {
            res.status(400).send(error);
        });
    },
    getById(req, res) {
        console.log(req.params.id);
        return appointment
        .findByPk(req.params.id)
        .then((appointment) => {
            console.log(appointment);
            if (!appointment) {
                return res.status(404).send({
                message: 'Appointment Not Found',
                });
            }
            return res.status(200).send(appointment);
        })
        .catch((error) => res.status(400).send(error));
    },   
    add(req, res) {
        return appointment
        .create({
            doctor: req.body.doctor,
            patient: req.body.patient,
            date: req.body.date,
            state: req.body.state
        })
        .then((appointment) => res.status(201).send(appointment))
        .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return appointment
        .findByPk(req.params.id)
        .then(appointment => {
            if (!appointment) {
                return res.status(404).send({
                    message: 'Appointment Not Found',
                });
            }
            return appointment
            .update({
                doctor: req.body.doctor || appointment.doctor,
                patient: req.body.patient || appointment.patient,
                date: req.body.date || appointment.date,
                state: req.body.state || appointment.state
            })
            .then(() => res.status(200).send(appointment))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return appointment
        .findByPk(req.params.id)
        .then(appointment => {
            if (!appointment) {
                return res.status(400).send({
                    message: 'Appointment Not Found',
                });
            }
            return appointment
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },                    
};