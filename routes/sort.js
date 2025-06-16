const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {
    const {data} = req.body;

    if (typeof data !== 'string') {
        return res.status(400).json({ error: 'Field "data" must be a string'});
    }

    const sortedArray = data.split('').sort();
    res.json({ word: sortedArray });
});

module.exports = router;