const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool

const rotaProdutos = require("../controllers/controllerProdutos")

router.get("/", rotaProdutos.getProdutos)
router.post("/", rotaProdutos.postProdutos)
router.patch("/", rotaProdutos.patchProdutos)
router.delete("/", rotaProdutos.deleteProdutos)

module.exports = router