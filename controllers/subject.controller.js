const db = require("../models");
const Subject = db.subject;

exports.create = (req, res) => {
    if (!req.body.subject) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const subject = new Subject({
        subject: req.body.subject,
        timeline: req.body.timeline,
        category: req.body.category
    });

    subject
        .save(subject)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the subject."
            });
        });
};

exports.findAll = (req, res) => {
    Subject.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving subject."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Subject.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete subject with id=${id}. Maybe subject was not found!`
                });
            } else {
                res.send({
                    message: "Subject was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete subject with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Subject.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} course subject were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all subject."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Subject to update can not be empty!"
        });
    }

    const id = req.params.id;

    Subject.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update subject with id=${id}. Maybe subject was not found!`
                });
            } else res.send({ message: "Subject was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating subject with id=" + id
            });
        });
};

