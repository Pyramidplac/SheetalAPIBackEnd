
// ==============================================================================
const express = require("express");
const cors = require("cors");

const app = express();

// =========================================================================
//react na localhost sathe connect krva mate
var corsOptions = {
    origin: "*"
};
// =========================================================================

// =========================================================================
//server ne mongoos sathe connect krva mate
const db = require("./models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
app.use(cors(corsOptions));
// =========================================================================

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// =========================================================================
//routes mathi app import kravyu(route import)
require("./routes/inquiry.routes")(app);
require("./routes/admission.routes")(app);
require("./routes/course.route")(app);
require("./routes/subject.routes")(app);
require("./routes/fees.routes")(app);
require("./routes/onlineinquiry.routes")(app);
require("./routes/academicyear.routes")(app);
require("./routes/question.routes")(app);
require("./routes/QuestionType.routes")(app);
require("./routes/takenBy.routes")(app);

// =========================================================================

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Shital Academy application." });
});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});