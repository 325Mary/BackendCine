const billboardControllers= {}

const {
    obtainBillboards,
    saveBillboard
}= require("../services/billborad.service")


billboardControllers.obtainBillboards= async(req,res)=> {
    const listBillboards = await obtainBillboards()
    res.json(listBillboards)
}

billboardControllers.saveBillboard= async(req,res)=> {
    await saveBillboard(req.body)
    res.send("Cartelera guardada con exito")
}
module.exports= billboardControllers