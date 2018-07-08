const express = require('express')
const util = require('util')
const path = require('path')


const app = express()

app.use(express.static(path.join(__dirname, 'static')))

app.set("views", path.join(__dirname, "tpl"))
app.set('view engine', 'ejs')

app.get('/index.html', function (req, res) {
    // console.log(req.headers)
    // res.send(JSON.stringify(req.headers))
    // res.send(util.inspect(req.headers,{depth:null}))
    res.render("demo", {
        links: ['/css/t1.css'],
        jss: ['/js/t1.js'],
        script: 'alert(\'t1\')'
    })
})

const server = app.listen('1120', function () {
    console.log('express start at http://%s:%s', server.address().address, server.address().port)
})