const {Router}= require('express')
const router= Router()
const {obtainCategorys, saveCategory}= require("../controllers/category.controller")

router.get("/Categorys", obtainCategorys)
router.post("/saveCategory", saveCategory)

module.exports= router