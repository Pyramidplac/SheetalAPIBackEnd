//create,find jevi method aama lakhvani ane export krvani je last ma route ma import karavani koi 1 variable ma
const db = require("../models");//db ma model store kravyu
const onlineinquiry = db.onlineinquiry;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a Inquirysssssssssssss
    const OnlineInquiry = new onlineinquiry({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        phone: req.body.phone,
        message: req.body.message,
    });

    // Save Inquiry in the database
    OnlineInquiry
        .save(OnlineInquiry)
        .then(data => {
            res.send(data);
            var nodemailer = require('nodemailer');

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'rkofficial2512@gmail.com',
                    pass: 'dvzdgifqvbrrgrzy'
                }
            });

            // =========================User Mail==============================
            var mailOptions = {
                from: 'rkofficial2512@gmail.com',
                to: req.body.email,
                subject: 'Thank you for your inquiry',
                text: `Dear ${req.body.name} , thank you for visiting Shital Academy. You have inquired for ${req.body.subject} , if you have any query, you can contact on 6358821400 .`
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            // =========================Faculty Mail==============================
            var mailOptions2 = {
                from: 'rkofficial2512@gmail.com',
                to: "rajankathiriya99@gmail.com",
                subject: 'For Inquiry',
                text:
                    `Student Detailes:
                Student Name:${req.body.name},
                Subject:${req.body.subject},
                Mobile No:${req.body.phone},
                Message:${req.body.message}`
            };
            transporter.sendMail(mailOptions2, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the inquiry."
            });
        });
};

exports.findAll = (req, res) => {
    onlineinquiry.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Inquirys."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    onlineinquiry.findByIdAndRemove(id)
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
    onlineinquiry.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} inquiry were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all inquiry."
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

    onlineinquiry.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update inquiry with id=${id}. Maybe inquiry was not found!`
                });
            } else res.send({ message: "Inquiry was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating inquiry with id=" + id
            });
        });
};