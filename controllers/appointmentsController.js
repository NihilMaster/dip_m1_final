const appointment = require('../models').appointments_model;
const db = require('../models');

module.exports = {
    list(req, res) {
        return appointment.findAll({})
        .then((appointment) => res.status(200).send(appointment))
        .catch((error) => { res.status(400).send(error); });
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
    listJoin(req, res) {
        return db.sequelize.query(
            "select "+
            "a.id_appointment, "+
            "p.name_patient as patient, "+
            "i.name_illness as illness, "+
            "concat(d.name_doctor,' | ',s.name_specialization) as doctor, "+
            "a.date_appointment, "+
            "a.state "+
            "from appointments a "+
            "left join patients p on p.id_patient = a.patient "+
            "left join doctors d on d.id_doctor = a.doctor "+
            "left join illnesses i on i.id_illness = p.illness "+ 
            "left join specializations s on s.id_specialization = d.specialization")
            .then((result) => {
                console.log(result);
                if (!result) {
                    return res.status(404).send({
                        message: 'Appointment Nxt Found',
                    });
                }
                return res.status(200).send(result[0]);
            })
            .catch((error) =>
                res.status(400).send(error));
    },                 
};