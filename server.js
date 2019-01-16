var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var socketio = require("socket.io");
var mongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var clients = [];
var clientsData = [null, null];
var data4players = [null, null];
var check = true;
var IDENTIFIER;
function callit()
{
    console.log(data4players);
}
function notify()
{
    clients[0].emit('update',
        {
            you: data4players[0],
            enemy: data4players[1],
            gold: clientsData[0].gold,
        });
    clients[1].emit('update',
        {
            you: data4players[1],
            enemy: data4players[0],
            gold: clientsData[1].gold,
        });
}
var server = http.createServer(function (request, response)
{    
    switch (request.method) {
        case "GET":
            if (request.url === "/")
            {
                fs.readFile("static/index.html", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/css/Style.css")
            {
                fs.readFile("static/css/Style.css", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/css' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/Main.js")
            {
                fs.readFile("static/javascript/Main.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/Base.js")
            {
                fs.readFile("static/javascript/Base.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/libs/three.js")
            {
                fs.readFile("static/libs/three.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/Plane.js")
            {
                fs.readFile("static/javascript/Plane.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/Interface.js")
            {
                fs.readFile("static/javascript/Interface.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/Skybox.js")
            {
                fs.readFile("static/javascript/Skybox.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/Tower.js")
            {
                fs.readFile("static/javascript/Tower.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/Income.js")
            {
                fs.readFile("static/javascript/Income.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/EnemyP1.js")
            {
                fs.readFile("static/javascript/EnemyP1.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/EnemyP2.js")
            {
                fs.readFile("static/javascript/EnemyP2.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/EnemyP3.js")
            {
                fs.readFile("static/javascript/EnemyP3.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/EnemyP4.js")
            {
                fs.readFile("static/javascript/EnemyP4.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/UI.js")
            {
                fs.readFile("static/javascript/UI.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/javascript/EnemyP3.js")
            {
                fs.readFile("static/javascript/EnemyP3.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/libs/jquery-3.2.1.js")
            {
                fs.readFile("static/libs/jquery-3.2.1.js", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'application/javascript' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/gravel.jpg")
            {
                fs.readFile("static/img/gravel.jpg", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/jpeg' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/podloga.jpg")
            {
                fs.readFile("static/img/podloga.jpg", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/jpeg' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/settings.png")
            {
                fs.readFile("static/img/settings.png", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/png' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/show.png")
            {
                fs.readFile("static/img/show.png", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/png' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/sandtrap_bk.png")
            {
                fs.readFile("static/img/sandtrap_bk.png", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/png' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/sandtrap_dn.png")
            {
                fs.readFile("static/img/sandtrap_dn.png", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/png' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/sandtrap_ft.png")
            {
                fs.readFile("static/img/sandtrap_ft.png", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/png' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/sandtrap_lf.png")
            {
                fs.readFile("static/img/sandtrap_lf.png", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/png' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/sandtrap_rt.png")
            {
                fs.readFile("static/img/sandtrap_rt.png", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/png' });
                    response.write(data);
                    response.end();
                })
            }
            else if (request.url === "/img/sandtrap_up.png")
            {
                fs.readFile("static/img/sandtrap_up.png", function (error, data)
                {
                    response.writeHead(200, { 'Content-Type': 'text/png' });
                    response.write(data);
                    response.end();
                })
            }
            break;
    }
})
server.listen(3000);
var io = socketio.listen(server);
console.log("start")
/*
mongoClient.connect("mongodb://localhost/gmd", function (err, db)
{
    if (err) console.log(err)
    else console.log("mongo podłączone")
    mongodb = db;
    db.createCollection("em_roczny", function (err, coll)
    {
        console.log(coll);
    })
})
*/


io.sockets.on("connection", function (client)
{
    clients.push(client);  
    var i = clients.indexOf(client);
    client.emit("onconnect", {
        clientName: client.id,
    })
    client.on("disconnect", function ()
    {
        clients.splice(i, 1);
        clientsData.splice(i, 1);
        if (clients.length < 2)
            clearInterval(IDENTIFIER);
    })
    client.on("login", function (data)
    {
        if (check)
        {          
            setInterval(callit, 10000);
            check = false;
        }
        console.log(i);
        var player;
        if (clients.length > 2)
        {
            client.send("Maximum players, you have been distonnected");
            client.disconnect();
            return;
        }
        if (i == 0)
            player = true;
        else
            player = false;
        var dane = {
            id: client.id,
            name: data.login,
            type: player,
            gold: 100,
        };
        clientsData[i] = dane;
        var p_d = {
            name: clientsData[i].name,
            health: 1000,
            income: [],
            p1: [],
            p2: [],
            p3: [],
            p4: [],
            tower: [],
        };
        data4players[i] = p_d;       
        client.emit('nameUpdate',
        {
            clientName: dane.name,
            play: player,
        });
        if (clients.length > 1){
            IDENTIFIER = setInterval(notify, 300);
        }
        return;
    })
    client.on("updating", function (data)
    {
        data4players[i].health = data.health;
        clientsData[i].gold = data.gold;
        data4players[i].income = data.income;
        data4players[i].p1 = data.p1;
        data4players[i].p2 = data.p2;
        data4players[i].p3 = data.p3;
        data4players[i].p4 = data.p4;
        data4players[i].tower = data.tower;
    })
})