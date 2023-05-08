const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.inquiry = require("./inquiry.model")(mongoose);
db.onlineinquiry = require("./onlineinquiry.model")(mongoose);
db.academicyear = require("./academicyear.model")(mongoose);

db.question = require("./question.model")(mongoose);
db.questionType = require("./QuestionType.model")(mongoose);
db.takenBy = require("./takenBy.model")(mongoose);
db.facultyregistration = require("./facultyregistration.model")(mongoose);

db.student = require("./admission.student.model");
db.role = require("./role.model");
db.user = require("./user.model")(mongoose);
db.course = require("./course.model")(mongoose);
db.subject = require("./subject.model")(mongoose);
db.fees = require("./fees.model")(mongoose);
db.ROLES = ["user", "admin", "faculty"];

module.exports = db;