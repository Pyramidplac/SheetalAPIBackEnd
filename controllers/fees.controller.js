const db = require("../models");
const Fees = db.fees;

exports.create = (req, res) => {
    if (!req.body.feesmaster) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const fees = new Fees({
        feesmaster: req.body.feesmaster,
        amountmaster: req.body.amountmaster,
        daymaster: req.body.daymaster,
        courseId: course.id
    });

    fees
        .save(fees)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the fees."
            });
        });
};

exports.findAll = (req, res) => {
    Fees.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving fees."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Fees.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete data with id=${id}. Maybe data was not found!`
                });
            } else {
                res.send({
                    message: "data was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete data with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Fees.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} course data were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all data."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Fees.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update fees with id=${id}. Maybe Fees was not found!`
                });
            } else res.send({ message: "Fees was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating fees with id=" + id
            });
        });
};

