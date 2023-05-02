const db = require("../models");
const TakenBy = db.takenBy;

exports.create = (req, res) => {
    if (!req.body.takenby) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const takenBy = new TakenBy({
        takenby: req.body.takenby
    });

    takenBy
        .save(takenBy)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the takenBy."
            });
        });
};

exports.findAll = (req, res) => {
    TakenBy.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving TakenBy."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    TakenBy.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete TakenBy with id=${id}. Maybe TakenBy was not found!`
                });
            } else {
                res.send({
                    message: "TakenBy was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete TakenBy with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    TakenBy.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} course TakenBy were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all TakenBy."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "TakenBy to update can not be empty!"
        });
    }

    const id = req.params.id;

    TakenBy.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update TakenBy with id=${id}. Maybe TakenBy was not found!`
                });
            } else res.send({ message: "TakenBy was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating TakenBy with id=" + id
            });
        });
};

