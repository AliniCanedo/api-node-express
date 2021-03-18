'use strict';
const Produto = require('../models/produto.model');
exports.findAll = function (req, res) {
    Produto.findAll(function (err, produto) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', produto);
        res.send(produto);
    });
};
exports.create = function (req, res) {
    const new_produto = new produto(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        produto.create(new_produto, function (err, produto) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "produto added successfully!", data: produto });
        });
    }
};
exports.findById = function (req, res) {
    produto.findById(req.params.id, function (err, produto) {
        if (err)
            res.send(err);
        res.json(produto);
    });
};
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        produto.update(req.params.id, new produto(req.body), function (err, produto) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'produto successfully updated' });
        });
    }
};
exports.delete = function (req, res) {
    produto.delete(req.params.id, function (err, produto) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'produto successfully deleted' });
    });
};