//koi 1 variable ma aakhu co ntrollor store kravi devanu ane ane get ma ane post ma variablename.controllorexport(var)

module.exports = app => {
    const academicyear = require("../controllers/academicyear.controller");//full contoller shital ma import kravyu

    var router = require("express").Router();//router ma express.js import kravyu


    router.post("/", academicyear.create);//academicyear.create ma je create(method) che a controller ma thi lai aavya
    router.get("", academicyear.findAll);//academicyear.findAll ma je findAll(method) che a controller ma thi lai aavya
    router.delete("/:id", academicyear.delete);
    router.delete("/", academicyear.deleteAll);
    router.put("/:id", academicyear.update);


    app.use('/api/academicyear', router);//je api bane a last ma aapnu je server hoy tya aa last ma lahvanu

}