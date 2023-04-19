//create,find jevi method aama lakhvani ane export krvani je last ma route ma import karavani koi 1 variable ma
const db = require("../models");//db ma model store kravyu
const academicyear = db.academicyear;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.academicyear) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a Inquirysssssssssssss
    const Academicyear = new academicyear({
        academicyear: req.body.academicyear,
        academicyearfromdate: req.body.academicyearfromdate,
        academicyearenddate: req.body.academicyearenddate
    });

    // Save Inquiry in the database
    Academicyear
        .save(Academicyear)
        .then(data => {
            res.send(data);

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Academic Year."
            });
        });
};

exports.findAll = (req, res) => {
    academicyear.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Academic Year."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    academicyear.findByIdAndRemove(id)
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
    academicyear.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} data were deleted successfully!`
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
    console.log(id);

    academicyear.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update data with id=${id}. Maybe data was not found!`
                });
            } else res.send({ message: "data was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating data with id=" + id
            });
        });
};