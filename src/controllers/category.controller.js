

const  {
    obtainCategorys,
    saveCategory
}=  require("../services/catgory.service")

const categorysCotrollers = {}


categorysCotrollers.obtainCategorys= async (req, res)=> {
    const listCategorys = await obtainCategorys()
    res.json(listCategorys)
}
categorysCotrollers.saveCategory= async(req, res) => {
    await saveCategory(req.body)
    res.send("categoria guarada con exito")
}

module.exports= categorysCotrollers