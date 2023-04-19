//koi 1 variable ma aakhu co ntrollor store kravi devanu ane ane get ma ane post ma variablename.controllorexport(var)

module.exports = app => {
    const inquiry = require("../controllers/inquiry.controller");//full contoller shital ma import kravyu

    var router = require("express").Router();//router ma express.js import kravyu


    router.post("/", inquiry.create);//inquiry.create ma je create(method) che a controller ma thi lai aavya
    router.get("", inquiry.findAll);//inquiry.findAll ma je findAll(method) che a controller ma thi lai aavya
    router.delete("/:id", inquiry.delete);
    router.delete("/", inquiry.deleteAll);
    router.put("/:id", inquiry.update);


    app.use('/api/inquiry', router);//je api bane a last ma aapnu je server hoy tya aa last ma lahvanu

}