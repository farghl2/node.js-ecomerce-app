const express = require('express');
const {addCategory} = require('../services/categoriesService')

const router = express.Router();


router.post('/',addCategory);


module.exports = router;