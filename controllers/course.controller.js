const db = require("../models");
const Course = db.course;

exports.create = (req, res) => {
    if (!req.body.course) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const course = new Course({
        course: req.body.course,
        coursefees: req.body.coursefees,
        year: req.body.year,
        type: req.body.type,
    });

    course
        .save(course)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the course."
            });
        });
};

exports.findAll = (req, res) => {
    Course.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving course."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Course.findByIdAndRemove(id)
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
    Course.deleteMany({})
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

    Course.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update course with id=${id}. Maybe course was not found!`
                });
            } else res.send({ message: "course was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating course with id=" + id
            });
        });
};

