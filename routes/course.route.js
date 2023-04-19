module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const course = require("../controllers/course.controller");

    var router = require("express").Router();
    const authJwt = require("../middlewares/authJwt");


    router.post("/course", course.create);
    router.get("/course", course.findAll);
    // router.get("/course", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isFaculty], course.findAll);
    router.delete("/course/:id", course.delete);
    router.delete("/course", course.deleteAll);
    router.put("/course/:id", course.update);



    app.use('/api', router);

}
