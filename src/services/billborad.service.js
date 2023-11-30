const billboardSchema= require("../models/billboard.Model")


const obtainBillboards= async()=> {
    return await billboardSchema.find()
}

const saveBillboard= async(billboard)=> {
    let newBillboard = new billboardSchema(billboard)
    return await newBillboard.save
}
// const deleteBillboard = async(id) => {
//     try{
//         const billboard = billboardSchema.findOne({_id: id})
//     if (billboard) {
//         await billboardSchema.findOneAndDelete({_id:id})
//         return ""
//     }
//     }
// }

module.exports= {
    obtainBillboards,
    saveBillboard
}