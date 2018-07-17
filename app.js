const express = require('express')
const util = require('util')
const path = require('path')

const getContent = require("./utils/getContent")


const app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.set("views", path.join(__dirname, "tpl"))
app.set('view engine', 'ejs')

app.get('/demo.html', function (req, res) {
    const demoKey  = req.query.demoname;
    let data = demoKey ? getContent(demoKey) : {
        title: '测试demo',
        // 额外引入的css文件
        links: ['/css/t1.css'],
        // style 样式
        style: '.demo{background:#000;color:#fff}',
        // html
        html: '<span>demo演示</span>',
        // 额外引入的 js
        jss: ['/js/t1.js'],
        // script 
        script: 'alert(\'t1\');'
    };
    data.prefix = req.headers.isexternal;
    res.render("demo", data);
})

const server = app.listen('1120', function () {
    console.log('express start at http://localhost:%s', server.address().port)
})