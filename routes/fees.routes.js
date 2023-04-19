module.exports = app => {



    const fees = require("../controllers/fees.controller");

    var router = require("express").Router();


    router.post("/fees", fees.create);
    router.get("/fees", fees.findAll);
    router.delete("/fees/:id", fees.delete);
    router.delete("/fees", fees.deleteAll);
    router.put("/fees/:id", fees.update);



    app.use('/api', router);

}
