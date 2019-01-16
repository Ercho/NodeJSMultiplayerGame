function Interface()
{
    {
        {
            var y = document.createElement('img');
            y.src = './img/show.png';
            y.setAttribute('id', 'hide_i');
            y.setAttribute('onclick', 'i_hide()');
            y.setAttribute('style', 'height: 50px; width: 50px; background-color: rgba(0,255,255,0.3); position: absolute; left:' + ((window.innerWidth / 2) - 500) + 'px; bottom: 7px; z-index: 1000;');
            document.getElementsByTagName('body')[0].appendChild(y);
        }
        {
            var y = document.createElement('img');
            y.src = './img/show.png';
            y.setAttribute('id', 'show_i');
            y.setAttribute('onclick', 'i_show()');
            y.setAttribute('style', 'height: 50px; width: 50px; background-color: rgba(0,255,255,0.3); position: absolute; left:' + ((window.innerWidth / 2) - 500) + 'px; bottom: -100%; z-index: 1000;');
            document.getElementsByTagName('body')[0].appendChild(y);
        }
        {
            var y = document.createElement('img');
            y.src = './img/settings.png';
            y.setAttribute('id', 'hide_e');
            y.setAttribute('onclick', 'e_hide()');
            y.setAttribute('style', 'height: 50px; width: 50px; background-color: rgba(50,255,120,0.3); position: absolute; left:' + ((window.innerWidth / 2) - 500) + 'px; bottom: -100%; z-index: 1000;');
            document.getElementsByTagName('body')[0].appendChild(y);
        }
        {
            var y = document.createElement('img');
            y.src = './img/settings.png';
            y.setAttribute('id', 'show_e');
            y.setAttribute('onclick', 'e_show()');
            y.setAttribute('style', 'height: 50px; width: 50px; background-color: rgba(50,255,120,0.3); position: absolute; left:' + ((window.innerWidth / 2) - 500) + 'px; bottom: -100%; z-index: 1000;');
            document.getElementsByTagName('body')[0].appendChild(y);
        }
    }
    {
        var x = document.createElement('div');
        x.setAttribute('id', 'inter');
        x.setAttribute('style', 'height: 200px; width: 900px; border: 1px solid #fff; position: absolute; left:' + ((window.innerWidth / 2) - 450) + 'px; bottom: 7px; z-index: 1000;');
        document.getElementsByTagName('body')[0].appendChild(x);
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'p_img');
            y.setAttribute('style', 'height: 150px; width: 300px; border: 1px solid #fff; position: absolute; left: 0; top: 0;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'img_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 300);
            c.setAttribute('height', 150);
            y.appendChild(c);
        }
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'p_health');
            y.setAttribute('style', 'height: 50px; width: 300px; border: 1px solid #fff; position: absolute; left: 0; top: 150px;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'health_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 300);
            c.setAttribute('height', 50);
            y.appendChild(c);
        }
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'p_gen1');
            y.setAttribute('style', 'height: 150px; width: 120px; border: 1px solid #fff; position: absolute; left: 300px; top: 0;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'gen1_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 120);
            c.setAttribute('height', 150);
            y.appendChild(c);
        }
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'p_gen2');
            y.setAttribute('style', 'height: 150px; width: 120px; border: 1px solid #fff; position: absolute; left: 420px; top: 0;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'gen2_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 120);
            c.setAttribute('height', 150);
            y.appendChild(c);
        }
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'p_gen3');
            y.setAttribute('style', 'height: 150px; width: 120px; border: 1px solid #fff; position: absolute; left: 540px; top: 0;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'gen3_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 120);
            c.setAttribute('height', 150);
            y.appendChild(c);
        }
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'p_gen4');
            y.setAttribute('style', 'height: 150px; width: 120px; border: 1px solid #fff; position: absolute; left: 660px; top: 0;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'gen4_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 120);
            c.setAttribute('height', 150);
            y.appendChild(c);
        }
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'p_gen5');
            y.setAttribute('style', 'height: 150px; width: 120px; border: 1px solid #fff; position: absolute; left: 780px; top: 0;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'gen5_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 120);
            c.setAttribute('height', 150);
            y.appendChild(c);
        }
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'e_health_name');
            y.setAttribute('style', 'height: 50px; width: 100px; border: 1px solid #fff; position: absolute; left: 300px; top: 150px;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'e_name_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 100);
            c.setAttribute('height', 50);
            y.appendChild(c);
        }
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'e_health');
            y.setAttribute('style', 'height: 50px; width: 300px; border: 1px solid #fff; position: absolute; left: 400px; top: 150px;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'e_health_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 300);
            c.setAttribute('height', 50);
            y.appendChild(c);
        }
        {
            var y = document.createElement('div');
            y.setAttribute('id', 'p_money');
            y.setAttribute('style', 'height: 50px; width: 200px; border: 1px solid #fff; position: absolute; left: 700px; top: 150px;');
            x.appendChild(y);
            var c = document.createElement('canvas');
            c.setAttribute('style', 'position: absolute; left: 0; top: 0;');
            c.setAttribute('id', 'money_c');
            c.setAttribute('class', 'canvy');
            c.setAttribute('width', 200);
            c.setAttribute('height', 50);
            y.appendChild(c);
        }
    }
    {
        var x = document.createElement('div');
        x.setAttribute('id', 'editor');
        x.setAttribute('style', 'height: 310px; width: 898px; border: 1px solid #fff; position: absolute; left:' + ((window.innerWidth / 2) - 450) + 'px; bottom: -100%; z-index: 1000;');
        document.getElementsByTagName('body')[0].appendChild(x);
        for (var i = 0; i < 11; i++)
        {
            for (var j = 0; j < 32; j++)
            {
                var y = document.createElement('div');
                y.setAttribute('onclick', 'changeInstance(event.target)');
                y.setAttribute('id', 'e*' + i + '*' + j);
                if (i==5) {              
                    y.setAttribute('style', 'background-color: #555; width: 28px; height: 28px; position: absolute; border: 1px solid #fff; left: ' + 28 * j + 'px; top: ' + 28 * i + 'px;');
                }
                else
                    y.setAttribute('style', 'background-color: #aa3; width: 28px; height: 28px; position: absolute; border: 1px solid #fff; left: ' + 28 * j + 'px; top: ' + 28 * i + 'px;');
                if ((j==0 || j==31) && i==5)
                    y.setAttribute('style', 'background-color: #f00; width: 28px; height: 28px; position: absolute; border: 1px solid #fff; left: ' + 28 * j + 'px; top: ' + 28 * i + 'px;');          
                
                x.appendChild(y);
            }
        }
    }
    {
        var x = document.createElement('div');
        x.setAttribute('id', 'inter');
        x.setAttribute('style', 'text-align: center; height: 100vh; width: 100vw; background-color: #aaa; position: absolute; left: -7px; top: -9px; z-index: 1005;');
        x.innerHTML = "<h1>Zaloguj się do gry<h1><br/> <h2>Login:</h2>";
        {
            var h = document.createElement('input');
            h.setAttribute('type', 'text');
            h.setAttribute('id', 'logg');
            x.appendChild(h);
        }
        {
            x.innerHTML += "<br/>";
            var h = document.createElement('input');
            h.setAttribute('type', 'button');
            h.setAttribute('onclick', 'acception()');
            h.setAttribute('value', 'Zaloguj');
            x.appendChild(h);
        }
        document.getElementsByTagName('body')[0].appendChild(x);
    }
}