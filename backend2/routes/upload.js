const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const path = require('path');
const Stock = require('../models/stock');



router.post('/', async (req , res) => {

    console.log(req.body.headline);
    const temp = req.body.headline;
    console.log(temp.length);
    console.log(typeof(temp));
    console.log(req.body.image);
    const stock = new Stock({
        headline: req.body.headline,
        source: req.body.source,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image
       
    });

    await stock.save();
})


module.exports = router;