const express = require("express");

const router = express.Router();
const authController = require("../controllers/authController");
// route pour la creation d'un compte !

router.post("/register", authController.register);
// router.methoid('/path',call back function )
router.post("/login", authController.login);
module.exports = router;
