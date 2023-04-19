const db = require("../models");
const Question = db.question;

exports.create = (req, res) => {
    if (!req.body.question) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const question = new Question({
        qtype: req.body.qtype,
        question: req.body.question,
        answer: req.body.answer,
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
    Question.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving question."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Question.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete question with id=${id}. Maybe question was not found!`
                });
            } else {
                res.send({
                    message: "Question was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete question with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Question.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} course question were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all question."
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Question to update can not be empty!"
        });
    }

    const id = req.params.id;

    Question.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update question with id=${id}. Maybe question was not found!`
                });
            } else res.send({ message: "Question was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating question with id=" + id
            });
        });
};

