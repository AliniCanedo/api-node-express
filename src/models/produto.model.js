'use strict';
var dbConn = require('../../config/db.config');
//Produto object create
var Produto = function (produto) {
    this.nome = produto.nome;
    this.preco = produto.preco;
    this.imgUrl = produto.imgUrl;
    this.descricao = produto.descricao;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Produto.create = function (newEmp, result) {
    dbConn.query("INSERT INTO produtos set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Produto.findById = function (id, result) {
    dbConn.query("Select * from produtos where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Produto.findAll = function (result) {
    dbConn.query("Select * from produtos", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('produtos : ', res);
            result(null, res);
        }
    });
};
Produto.update = function (id, produto, result) {
    dbConn.query("UPDATE produtos SET nome=?,preco=?,imgUrl=?,descricao=? WHERE id = ?", [produto.nome, produto.preco, produto.imgUrl, produto.descricao, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Produto.delete = function (id, result) {
    dbConn.query("DELETE FROM produtos WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Produto;