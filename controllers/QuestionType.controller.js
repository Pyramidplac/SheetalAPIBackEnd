const db = require("../models");
const QuestionType = db.questionType;

exports.create = (req, res) => {
    if (!req.body.questiontype) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const question = new QuestionType({
        questiontype: req.body.questiontype
    });

    question
        .save(question)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the question."
            });
        });
};

exports.findAll = (req, res) => {
    QuestionType.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving QuestionType."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    QuestionType.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete QuestionType with id=${id}. Maybe QuestionType was not found!`
                });
            } else {
                res.send({
                    message: "QuestionType was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete QuestionType with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    QuestionType.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} course QuestionType were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all QuestionType."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "QuestionType to update can not be empty!"
        });
    }

    const id = req.params.id;

    QuestionType.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update QuestionType with id=${id}. Maybe QuestionType was not found!`
                });
            } else res.send({ message: "QuestionType was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating QuestionType with id=" + id
            });
        });
};

