const categorySchema = require("../models/catgoryModel")

const obtainCategorys= async()=> {
    return await categorySchema.find()
}

const saveCategory= async(category)=> {
    let newCategory = new categorySchema(category)
    return await newCategory.save()
}

module.exports= {
    obtainCategorys,
    saveCategory
}