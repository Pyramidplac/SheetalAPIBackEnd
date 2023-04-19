//create,find jevi method aama lakhvani ane export krvani je last ma route ma import karavani koi 1 variable ma
const db = require("../models");//db ma model store kravyu
const inquiry = db.inquiry;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a Inquirysssssssssssss
    const Inquiry = new inquiry({
        name: req.body.name,
        parentsname: req.body.parentsname,
        studentmobile: req.body.studentmobile,
        parentmobile: req.body.parentmobile,
        email: req.body.email,
        birthdate: req.body.birthdate,
        gender: req.body.gender,
        whatsapp: req.body.whatsapp,
        education: req.body.education,
        address: req.body.address,
        city: req.body.city,
        inquirydate: req.body.inquirydate,
        takenby: req.body.takenby,
        course: req.body.course,
        leadsource: req.body.leadsource
    });

    // Save Inquiry in the database
    Inquiry
        .save(Inquiry)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the inquiry."
            });
        });
};

exports.findAll = (req, res) => {
    inquiry.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving inquiry."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    inquiry.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete inquiry with id=${id}. Maybe inquiry was not found!`
                });
            } else {
                res.send({
                    message: "Inquiry was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete inquiry with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    inquiry.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Inquiry were deleted successfully!`
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
            message: "Inquiry to update can not be empty!"
        });
    }

    const id = req.params.id;
    console.log(id);

    inquiry.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update inquiry with id=${id}. Maybe inquiry was not found!`
                });
            } else res.send({ message: "inquiry was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating inquiry with id=" + id
            });
        });
};