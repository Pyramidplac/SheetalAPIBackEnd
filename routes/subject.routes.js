module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const subject = require("../controllers/subject.controller");

    var router = require("express").Router();
    const authJwt = require("../middlewares/authJwt");


    router.post("/subject", subject.create);
    router.get("/subject", subject.findAll);
    // router.get("/subject", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isFaculty], subject.findAll);
    router.delete("/subject/:id", subject.delete);
    router.delete("/subject", subject.deleteAll);
    router.put("/subject/:id", subject.update);



    app.use('/api', router);

}
