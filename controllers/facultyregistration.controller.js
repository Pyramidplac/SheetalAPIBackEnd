const db = require("../models");
const config = require("../config/auth.config");
var bcrypt = require("bcryptjs");
const FacultyRegistration = db.facultyregistration;
const Role = db.role;
var jwt = require("jsonwebtoken");

exports.facultySignUp = (req, res) => {
    debugger;
    const facultyRegistration = new FacultyRegistration({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        course: req.body.course,
        role: req.body.role,
        roles: db.role.id
    });
    facultyRegistration.save(facultyRegistration).then(y => {
        if (req.body.roles) {
            Role.find({ name: { $in: req.body.roles } }).then((roles) => {
                facultyRegistration.roles = roles.map(role => role._id);
                facultyRegistration.save(facultyRegistration).then(err => {
                    res.send({ message: "Faculty was registered successfully!" });
                });
            })
        }
        else {
            Role.findOne({ name: "admin" }).then((role) => {
                console.log(role);
                facultyRegistration.roles = [role._id];
                facultyRegistration.save().then(err => {
                    res.send({ message: "Faculty was registered successfully!" });
                })
            })
        }
    })
}

exports.facultySignin = (req, res) => {
    FacultyRegistration.findOne({
        email: req.body.email
    })
        .populate("roles", "-__v")
        .exec().then((user) => {


            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user._id,
                email: user.email,
                password: user.password,
                course: user.course,
                role: user.role,
                roles: authorities,
                accessToken: token
            });
        });
};

exports.findAll = (req, res) => {
    FacultyRegistration.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving student."
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    FacultyRegistration.findByIdAndRemove(id)
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
    FacultyRegistration.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Student data were deleted successfully!`
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

    FacultyRegistration.findByIdAndUpdate(id, req.body, { useFindAndModify: true })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update student with id=${id}. Maybe student was not found!`
                });
            } else res.send({ message: "Student was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating student with id=" + id
            });
        });
};

