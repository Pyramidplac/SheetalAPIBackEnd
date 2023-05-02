module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const questionType = require("../controllers/QuestionType.controller");

    var router = require("express").Router();
    const authJwt = require("../middlewares/authJwt");


    router.post("/questiontype", questionType.create);
    router.get("/questiontype", questionType.findAll);
    // router.get("/questiontype", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isFaculty], questionType.findAll);
    router.delete("/questiontype/:id", questionType.delete);
    router.delete("/questiontype", questionType.deleteAll);
    router.put("/questiontype/:id", questionType.update);



    app.use('/api', router);

}
