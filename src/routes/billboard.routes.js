const {Router}= require('express')
const router = Router()

const {obtainBillboards, saveBillboard }= require("../controllers/billboard.controller")

router.get('/getAllBillboards',obtainBillboards )
router.post('/saveBillboard',saveBillboard)
module.exports = router