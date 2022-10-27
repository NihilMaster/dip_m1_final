const patient = require('../models').patients_model;
module.exports = {
    list(req, res) {
        return patient
        .findAll({})
        .then((patient) => res.status(200).send(patient))
        .catch((error) => {
            res.status(400).send(error);
        });
    },
    getById(req, res) {
        console.log(req.params.id);
        return patient
        .findByPk(req.params.id)
        .then((patient) => {
            console.log(patient);
            if (!patient) {
                return res.status(404).send({
                message: 'Patient Not Found',
                });
            }
            return res.status(200).send(patient);
        })
        .catch((error) => res.status(400).send(error));
    },
    add(req, res) {
        return patient
        .create({
            name_patient: req.body.name_patient,
            illness: req.body.illness,
            state: req.body.state,
            biological_sex: req.body.biological_sex,
            birthday: req.body.birthday,
            identification: req.body.identification
        })
        .then((patient) => res.status(201).send(patient))
        .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return patient
        .findByPk(req.params.id)
        .then(patient => {
            if (!patient) {
                return res.status(404).send({
                    message: 'Patient Not Found',
                });
            }
            return patient
            .update({
                name_patient: req.body.name_patient || patient.name_patient,
                illness: req.body.illness || patient.illness,
                state: req.body.state || patient.state,
                biological_sex: req.body.biological_sex || patient.biological_sex,
                birthday: req.body.birthday,
                identification: req.body.identification
            })
            .then(() => res.status(200).send(patient))
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return patient
        .findByPk(req.params.id)
        .then(patient => {
            if (!patient) {
                return res.status(400).send({
                    message: 'Patient Not Found',
                });
            }
            return patient
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send(error));
        })
        .catch((error) => res.status(400).send(error));
    },    
};