const express = require('express');
const router = express.Router();

// @route GET api/uers/test
// @desc  Tests users route
// @acces Public
router.get('/test', (req, res) => res.json({msg: "Users Works"}));

module.exports = router;