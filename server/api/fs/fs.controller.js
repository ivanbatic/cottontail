'use strict';

var Store = require('../../components/store');

exports.getFile = function (req, res) {
    var file = req.params.file;

    Store.getFile(file).then(function (data) {
        return res.json({
            content: data
        });
    }).catch(function (err) {
        handleError(res, err);
    });
};

exports.getCWLToolbox = function(req, res) {
    Store.getCWLToolbox().then(function(tools) {
        return res.json({
            tools: tools
        });
    }).catch(function(err) {
        handleError(res, err);
    })
};

exports.getFilesInWorkspace = function (req, res) {
    Store.getFiles().then(function (storeResult) {
        return res.json({
            baseDir: storeResult.baseDir,
            paths: storeResult.files
        });
    }).catch(function (err) {
        handleError(res, err);
    });
};

exports.updateFile = function (req, res) {
    var file = req.params.file;

    Store.writeFile(file, req.body.content).then(function (file) {

        return res.json({
            message: 'File updated successfully.',
            content: file
        });
    }).catch(function (err) {
        handleError(res, err);
    });
};

exports.createFile = function (req, res) {
    var file = req.params.file;

    Store.createFile(file).then(function (file) {

        return res.json({
            message: 'File created successfully.',
            content: file
        });
    }).catch(function (err) {
        handleError(res, err);
    });
};

function handleError(res, err) {
    return res.status(err.status || 500).json({error: err});
}
