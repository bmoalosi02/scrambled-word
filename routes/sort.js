const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /sort:
 *   post:
 *     summary: Sort characters in a string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 example: example
 *     responses:
 *       200:
 *         description: Sorted characters as array
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 word:
 *                   type: array
 *                   items:
 *                     type: string
 */
router.post('/', (req, res) => {
    const {data} = req.body;

    if (typeof data !== 'string') {
        return res.status(400).json({ error: 'Field "data" must be a string'});
    }

    const sortedArray = data.split('').sort();
    res.json({ word: sortedArray });
});

module.exports = router;