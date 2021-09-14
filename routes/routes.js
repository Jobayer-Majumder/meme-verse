const express = require('express');
const router = express.Router();

router.get('/a', (req, res) => {
    res.send('look mom i am using express')
})


module.exports = router;