const mysqlConnection = require("../connection.js");

exports.updateSkin = function (req, res) {
    const userId = req.body.id;
    let sql = "update users SET name='"+req.body.name+"', jeu='"+req.body.jeu+"', prix='"+req.body.prix+"' where id ="+userId;
    let query = mysqlConnection.query(sql,(err, results)=>{
        if(err) throw err;
        res.redirect('/');
    });
};

exports.mainrender = function (req, res) {
    // res.send('bienvenue chez moiiii');
    let sql = "SELECT * FROM users";
    let query = mysqlConnection.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('user_index', {
            title : 'Skins Farmerzzzzzzzz',
            users : rows
        });
    });
};


exports.add = function (req, res) {
    res.render('skin_add', {
        title : "Vendre un skin sur le marché communautaire"
    });
};

exports.save = function (req, res) {
    let data = {name: req.body.name, jeu: req.body.jeu, prix: req.body.prix};
    let sql = "INSERT INTO users SET?";
    let query = mysqlConnection.query(sql, data,(err, results)=>{
        if(err) throw err;
        res.redirect('/');
    });
};

exports.edit = function (req, res) {
    const userId = req.params.userId;
    let sql = `Select * from users where id = ${userId}`; // id = nom clé primaire dans la bd, userId est lié au server
    let query = mysqlConnection.query(sql,(err, result)=>{
        if(err) throw err;
        res.render('skin_edit',{
            title : 'Skins Farmez',
            user : result[0]
        });
    });
};

exports.delete = function (req, res) {
    const userId = req.params.userId;
    let sql = `DELETE from users where id = ${userId}`; // id = nom clé primaire dans la bd, userId est lié au server
    let query = mysqlConnection.query(sql,(err, result)=>{
        if(err) throw err;
        res.redirect('/');
    });
};

exports.get = function (req, res) {
    const userId = req.params.userId;
    let sql = `Select * from users where id = ${userId}`; // id = nom clé primaire dans la bd, userId est lié au server
    let query = mysqlConnection.query(sql,(err, result)=>{
        if(err) throw err;
        res.render('skin_page',{
            title : 'Skins Farmez',
            user : result[0]
        });
    });
};