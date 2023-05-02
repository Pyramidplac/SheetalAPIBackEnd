module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const takenBy = require("../controllers/takenBy.controller");

    var router = require("express").Router();
    const authJwt = require("../middlewares/authJwt");


    router.post("/takenBy", takenBy.create);
    router.get("/takenBy", takenBy.findAll);
    // router.get("/takenBy", [authJwt.verifyToken, authJwt.isAdmin, authJwt.isFaculty], takenBy.findAll);
    router.delete("/takenBy/:id", takenBy.delete);
    router.delete("/takenBy", takenBy.deleteAll);
    router.put("/takenBy/:id", takenBy.update);



    app.use('/api', router);

}
