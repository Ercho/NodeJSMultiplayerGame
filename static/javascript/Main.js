window.onload = function ()
{
    var play;
    var id;   
    var rad = 0;
    var ruchL = false;
    var ruchR = false;
    var ruchT = false;
    var ruchP = false;
    var interfejs;
    var base1;
    var base2;
    var skybox;
    var gold;
    var enemyP1 = [];
    var enemyP2 = [];
    var enemyP3 = [];
    var enemyP4 = [];
    var enemyP1_2 = [];
    var enemyP2_2 = [];
    var enemyP3_2 = [];
    var enemyP4_2 = [];
    var income1 = [];
    var income2 = [];
    var tower1 = [];
    var tower2 = [];
    var plane = [];
    var renderer;
    var scene;
    var camera;
    var camVect;
    var plus;
    var minus;
    var BASE1;
    var PLANE1;
    var BASE2;
    var PLANE2;
    var ENEMY1;
    var ENEMY2;
    var ENEMY3;
    var ENEMY4;
    var INCOME;
    var TOWER;
    var started = true;
    {
        client.on("onconnect", function (data)
        {
            id = data.clientName;
            console.log(id)
        })
        client.on("nameUpdate", function (data)
        {
            id = data.clientName;
            play = data.play;
            console.log(id)
        })
        client.on("update", function (data)
        {
            base1.health = data.you.health;
            base2.health = data.enemy.health;
            gold =  data.gold;
            enemyP1 = data.you.p1;
            enemyP2 = data.you.p2;
            enemyP3 = data.you.p3;
            enemyP4 = data.you.p4;
            enemyP1_2 = data.enemy.p1;
            enemyP2_2 = data.enemy.p2;
            enemyP3_2 = data.enemy.p3;
            enemyP4_2 = data.enemy.p4;
            income1 = data.you.income;
            income2 = data.enemy.income;
            tower1 = data.you.tower;
            tower2 = data.enemy.tower;
            console.log('odbieram');
            if (started)
            {
                setInterval(up2date, 100)
                started = false;
            }
        })
    }
    function up2date()
    {
        client.emit("updating", {
            health: base1.health,
            income: income1,
            p1: enemyP1,
            p2: enemyP2,
            p3: enemyP3,
            p4: enemyP4,
            tower: tower1,
            gold: gold,
        })
        console.log('Wysyłam');
    }
    {
        var Geometry = new THREE.CubeGeometry(256, 256, 256, 1, 1, 1);
        var Material = new THREE.MeshNormalMaterial();
        BASE1 = new THREE.Mesh(Geometry, Material);
    }
    {
        var Geometry = new THREE.CubeGeometry(256, 256, 256, 1, 1, 1);
        var Material = new THREE.MeshNormalMaterial();
        BASE2 = new THREE.Mesh(Geometry, Material);
    }
    {
        var Geometry = new THREE.PlaneBufferGeometry(256, 256);
        var Material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('./img/gravel.jpg'), side: THREE.DoubleSide
        });
        PLANE1 = new THREE.Mesh(Geometry, Material);
    }
    {
        var Geometry = new THREE.PlaneBufferGeometry(256, 256);
        var Material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('./img/podloga.jpg'), side: THREE.DoubleSide
        });
        PLANE2 = new THREE.Mesh(Geometry, Material);
    }   
    function animateScene()
    {
        if (ruchL)
        {
            rad--;
            if (rad < 0)
                rad = 360;
        }
        if (ruchP)
        {
            if (camVect.x < 3500)
                camVect.add(minus);
        }
        if (ruchT)
        {
            if (camVect.x > -3500)
                camVect.add(plus);
        }
        if (ruchR)
        {
            if (rad > 360)
                rad = 0;
            rad++;
        }
        {
            camera.position.x = 4000 * Math.sin((Math.PI / 180) * rad);
            camera.position.z = 4000 * Math.cos((Math.PI / 180) * rad);
            renderer.render(scene, camera);
            requestAnimationFrame(animateScene);
            camera.lookAt(camVect);
        }
        return;
    }
    document.onkeydown = function (event)
    {
        switch (event.keyCode)
        {
            case 38:
                ruchP = true;
                break;
            case 40:
                ruchT = true;
                break;
            case 37:
                ruchL = true;
                break;
            case 39:
                ruchR = true;
                break;
        }
        return;
    }
    document.onkeyup = function (event)
    {
        switch (event.keyCode)
        {
            case 38:
                ruchP = false;
                break;
            case 40:
                ruchT = false;
                break;
            case 37:
                ruchL = false;
                break;
            case 39:
                ruchR = false;
                break;
        }
        return;
    }       
    function draw()
    {
        var canvases = document.getElementsByClassName('canvy');
        var canlen = canvases.length;
        for (var i = 0; i < canlen ; i++)
        {
            var ctx = canvases[i].getContext('2d');
            ctx.beginPath();
            ctx.clearRect(0, 0, canvases[i].width, canvases[i].height);
            ctx.fillStyle = "#111";
            ctx.fillRect(0, 0, canvases[i].width, canvases[i].height);
            ctx.closePath();            
            switch (i)
            {
                case 0:
                    {

                    }
                    break;
                case 1:
                    {
                        ctx.beginPath();
                        ctx.strokeStyle = "#fff";
                        ctx.strokeRect(20, 30, canvases[i].width-40, canvases[i].height-40);
                        ctx.closePath();
                        ctx.beginPath();
                        ctx.fillStyle = "#f00";
                        ctx.fillRect(20, 30, (canvases[i].width-40)* (base1.health/1000), canvases[i].height-40);
                        ctx.closePath();
                    }
                    break;
                case 2:
                    {

                    }
                    break;
                case 3:
                    {

                    }
                    break;
                case 4:
                    {

                    }
                    break;
                case 5:
                    {

                    }
                    break;
                case 6:
                    {

                    }
                    break;
                case 7:
                    {
                        
                    }
                    break;
                case 8:
                    {
                        ctx.beginPath();
                        ctx.strokeStyle = "#fff";
                        ctx.strokeRect(20, 30, canvases[i].width - 40, canvases[i].height - 40);
                        ctx.closePath();
                        ctx.beginPath();
                        ctx.fillStyle = "#f00";
                        ctx.fillRect(20, 30, (canvases[i].width - 40) * (base2.health / 1000), canvases[i].height - 40);
                        ctx.closePath();
                    }
                    break;
                case 9:
                    {

                    }
                    break;
            }           
        }
    }
    {
        interfejs = new Interface();
        skybox = new Skybox();
        base1 = new Base(-4096, 0, play, BASE1);
        base2 = new Base(3840, 0, !play, BASE2);
        for (var i = -16; i < 16; i++)
        {
            for (var j = -5; j < 6; j++)
            {
                var helper;
                if (j == 0)
                {
                    helper = new Plane(i * 256, j * 256, true, PLANE1);
                }
                else
                {
                    helper = new Plane(i * 256, j * 256, false, PLANE2);
                }
                plane.push(helper);
            }
        }
        {
            camVect = new THREE.Vector3(0, 0, 0);
            plus = new THREE.Vector3(-40, 0, 0);
            minus = new THREE.Vector3(40, 0, 0);
        }
        {
            renderer = new THREE.WebGLRenderer();
            renderer.setClearColor(0x222222);
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementsByTagName("body")[0].appendChild(renderer.domElement);
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(
                    60, // k¹t patrzenia kamery (FOV - field of view)
                    window.innerWidth / window.innerHeight, // proporcje widoku, powinny odpowiadaæ proporjom naszego ekranu przegl¹darki
                    0.1, // minimalna renderowana odleg³oœæ
                    13000 // maxymalna renderowana odleg³oœæ
                );
            camera.position.y = 1000;
        }
        {
            scene.add(skybox);
            scene.add(base1.Output);
            scene.add(base2.Output);
            for (var i = 0; i < plane.length; i++)
            {
                scene.add(plane[i].Output);
            }
        }
        animateScene();
        setInterval(draw, 500);
    }
}
    
    
    
