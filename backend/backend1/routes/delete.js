const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Stock = require('../models/stock');

router.get('/' , async (req , res) => {
    console.log(req.query.headline);
    await Stock.deleteOne({'headline': req.query.headline }, function(err, result) {
    if (err) {
        console.err(err);
    } else {
        res.json(result);
    }
    });  

})

module.exports = router;