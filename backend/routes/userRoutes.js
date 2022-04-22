
const express = require("express");
const {
    registerUser

} = require("../controllers/userControllers");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser);

module.exports = router;