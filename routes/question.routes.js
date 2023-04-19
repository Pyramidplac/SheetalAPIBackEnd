module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const question = require("../controllers/question.controller");

    var router = require("express").Router();
    const authJwt = require("../middlewares/authJwt");


    router.post("/question", question.create);
    router.get("/question", question.findAll);
    // router.get("/question", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isFaculty], question.findAll);
    router.delete("/question/:id", question.delete);
    router.delete("/question", question.deleteAll);
    router.put("/question/:id", question.update);



    app.use('/api', router);

}
