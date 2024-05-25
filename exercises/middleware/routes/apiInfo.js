const express = require('express');
const router = express.Router();
const { getInfo, selectSingle } = require('./controllers/apiInfoCon');

// api/info routing
router.get('/', getInfo);

// api/info routing with ID
router.get('/:id', selectSingle);

module.exports = router;
