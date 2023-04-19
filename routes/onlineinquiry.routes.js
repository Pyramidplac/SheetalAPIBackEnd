//koi 1 variable ma aakhu co ntrollor store kravi devanu ane ane get ma ane post ma variablename.controllorexport(var)

module.exports = app => {
    const onlineinquiry = require("../controllers/onlineInquiry.controller");//full contoller shital ma import kravyu

    var router = require("express").Router();//router ma express.js import kravyu


    router.post("/onlineinquiry", onlineinquiry.create);//onlineinquiry.create ma je create(method) che a controller ma thi lai aavya
    router.get("/onlineinquiry", onlineinquiry.findAll);//onlineinquiry.findAll ma je findAll(method) che a controller ma thi lai aavya
    router.delete("/onlineinquiry/:id", onlineinquiry.delete);
    router.delete("/onlineinquiry", onlineinquiry.deleteAll);
    router.put("/onlineinquiry/:id", onlineinquiry.update);


    app.use('/api', router);//je api bane a last ma aapnu je server hoy tya aa last ma lahvanu

}