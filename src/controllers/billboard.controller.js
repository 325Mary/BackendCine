const billboardControllers = {};

const {
    obtainBillboards,
    saveBillboard,
    updateBillboard,
    deleteBillboard
} = require("../services/billborad.service");

billboardControllers.obtainBillboards = async (req, res) => {
    const listBillboards = await obtainBillboards();
    res.json(listBillboards);
};

billboardControllers.saveBillboard = async (req, res) => {
    await saveBillboard(req.body);
    res.send("Cartelera guardada con éxito");
};

billboardControllers.updateBillboard = async (req, res) => {
    const billboardId = req.params.id; // Suponiendo que el id se encuentra en los parámetros de la solicitud
    const updatedBillboard = req.body;
    
    try {
        const result = await updateBillboard(billboardId, updatedBillboard);
        if (result) {
            res.send("Cartelera actualizada con éxito");
        } else {
            res.status(404).send("No se encontró la cartelera para actualizar");
        }
    } catch (error) {
        res.status(500).send("Error al actualizar la cartelera");
    }
};

billboardControllers.deleteBillboard = async (req, res) => {
    const billboardId = req.params.id; // Suponiendo que el id se encuentra en los parámetros de la solicitud
    
    try {
        const result = await deleteBillboard(billboardId);
        if (result) {
            res.send("Cartelera eliminada con éxito");
        } else {
            res.status(404).send("No se encontró la cartelera para eliminar");
        }
    } catch (error) {
        res.status(500).send("Error al eliminar la cartelera");
    }
};

module.exports = billboardControllers;
