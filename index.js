const express = require('express');
const app = express();
const http = require('http');
var httpServer;
const bodyParser = require('body-parser')
init();
function init(){
    app.use(bodyParser.json()); // support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true }));
    // Tạo server sử dụng http
    httpServer = http.createServer(app); 
    // Mở port 3003 cho ứng dụng 
    httpServer.listen(3003, function(){ 
        console.log('Webserver listening on localhost:3003'); 
    }); 

    // API sử dụng phương thức get
    app.get('/api/getInfo', function(req, res, next){
        /*
            Phần kết nối database và lấy dữ liệu
        */ 
        var responseData = {
            "name" : req.param('name'),
            "address" : req.param('address'),
        }
        res.status(200).send({ success: true, message: 'Thành công', data: responseData });
    }); 

    // API sử dụng phương thức post
    app.post('/api/insertUser', function(req, res, next){
        // Lấy dữ liệu từ request truyền vào
        var param = req.body;
        var name = param.name;
        var address = param.address;
        /*
            Phần kết nối database và xử lý (insert, update, ..)
        */ 
        var responseData = {
            "name" : name,
            "address" : address
        }
        res.status(200).send({ success: true, message: 'Thành công', data: responseData });
    });
}