'use strict';

var express = require('express');
var controller = require('./fs.controller');

var router = express.Router();

/**
 * Workspace
 */
router.get('/', controller.getFilesInWorkspace);

/**
 * Toolbox
 */
router.get('/toolbox', controller.getCWLToolbox);

/**
 * Files
 */
router.get('/:file', controller.getFile);
router.post('/:file', controller.createFile);
router.put('/:file', controller.updateFile);

module.exports = router;