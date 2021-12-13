const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool

const rotaFuncionarios = require("../controllers/controllerFuncionarios")

router.get("/", rotaFuncionarios.getFuncionarios)
router.post("/", rotaFuncionarios.postFuncionarios)
router.patch("/", rotaFuncionarios.patchFuncionarios)
router.delete("/", rotaFuncionarios.deleteFuncionarios)

module.exports = router