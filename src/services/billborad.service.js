const billboardSchema = require("../models/billboard.Model");

const obtainBillboards = async () => {
    return await billboardSchema.find();
};

const saveBillboard = async (billboard) => {
    let newBillboard = new billboardSchema(billboard);
    return await newBillboard.save();
};

const updateBillboard = async (billboardId, updatedBillboard) => {
    return await billboardSchema.findOneAndUpdate(
        { _id: billboardId },
        updatedBillboard,
        { new: true }
    );
};

const deleteBillboard = async (billboardId) => {
    return await billboardSchema.findByIdAndDelete(billboardId);
};

module.exports = {
    obtainBillboards,
    saveBillboard,
    updateBillboard,
    deleteBillboard,
};
