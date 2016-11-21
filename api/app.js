var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

var quotes = [
    {author: 'Audrey Hepburn', text: "Nothing is impossible, the word itself says 'I'm possible'!"},
    {
        author: 'Walt Disney',
        text: "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"
    },
    {author: 'Unknown', text: "Even the greatest was once a beginner. Don't be afraid to take that first step."},
    {author: 'Neale Donald Walsch', text: "You are afraid to die, and you're afraid to live. What a way to exist."}
];

app.get('/quote/list', function (req, res) {
    res.json(quotes);
});

app.post('/login', function (req, res) {
    var user_name = req.body.name;
    var password = req.body.password;
    console.log("User name = " + user_name + ", password is " + password);
    res.json({
        desc: '就不给你登录'
    });
});

app.get('/animal/list', function (req, res) {
    res.json([
        {id: 1, name:'猪'},
        {id: 2, name:'狗'},
        {id: 3, name:'马'},
        {id: 4, name:'猴'},
        {id: 5, name:'蛇'},
        {id: 6, name:'龙'},
        {id: 7, name:'兔'},
        {id: 8, name:'羊'},
        {id: 9, name:'羊'}
    ]);
});

app.get('/animal/:id', function (req, res) {
    res.json([
        {
            id: req.params.id,
            name: '你猜啊'
        }
    ]);
});


/**
 * 获得参数
 * express获取参数有三种方法：官网实例：
 Checks route params (req.params), ex: /user/:id
 Checks query string params (req.query), ex: ?id=12
 Checks urlencoded body params (req.body), ex: id=
 */

app.listen(process.env.PORT || 8080);
console.log('api server started, http://localhost:8080 ');