const express = require("express");
const testcontroller = require("./controller/testcontroller");
const {validate} = require("./middleware/testmiddleware");

const router = express.Router();

router.use('/adduser',validate,testcontroller.adduser);
router.use('/getuser/:id',validate,testcontroller.getoneuser);
router.use('/getuser',validate,testcontroller.getuser);
router.use('/updateuser/:id',validate,testcontroller.updateuser);
router.use('/deleteuser/:id',validate,testcontroller.deleteuser);

module.exports = router;