function init(level){
    switch(level) {
        case 'game_over':
            resetObjects();
            backgrounds = [ new background({imgName: 'game-over'}),]
            play_agains = [ new play_again({x:140, y:240}), ]
        break;
        case 0:
            resetObjects();
            backgrounds = [ new background({ imgName: 'title'}),]
            plays = [ new play({x:190, y:250, imgName:"play"}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 1:
            resetObjects();
            backgrounds = [ new background({imgName: 'scene1'}),]
            nexts = [ new btn_next({x:40, y:300, imgName:"next"}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 2:
        resetObjects();
            scenario.cMin=0;
            scenario.cMax=3;
            scenario.rMin=-2;
            scenario.rMax=0;
            scenario.reset();
            backgrounds = [
                new background({ imgName: 'background3'}),
                new static_obj({ x:150, y:50, imgName: 'planet4'}),
                new background({ imgName: 'atmosphere'}),
            ]
            paralaxes = [
                new paralaxe({imgName: 'paralaxe1'}),
            ]
            jewels = [ new jewel({x:2*gridSize, y:5*gridSize, number:2})]
            life_ups = [ new life_up({x:3*gridSize, y:5*gridSize})]
            gates = [ new gate({x:52*gridSize,y:5*gridSize}) ]
            waters = water1_create(0,9,19);
            waters = waters.concat(water2_create(0,10,19));
            waters = waters.concat(water2_create(0,11,19));
            waters = waters.concat(water1_create(35,9,3));
            waters = waters.concat(water2_create(35,10,3));
            waters = waters.concat(water2_create(35,11,3));
            tiles = create_greenMountain(7,7,4,4)
            tiles = tiles.concat(create_greenMountain(18,-5,8,2));
            tiles = tiles.concat(create_greenMountain(16,2,4,2));
            tiles = tiles.concat(create_greenHill(17,-4,6));
            tiles = tiles.concat(create_greenMountain(19,8,16,4));
            tiles = tiles.concat(create_greenMountain(38,8,40,4));
            tiles = tiles.concat(create_greenMountain(27,0,8,2));
            tiles = tiles.concat(create_greenHill(33,-6,6));
            tiles = tiles.concat(create_greenMountain(41,-5,14,2));

            shocks = create_shock_v(9,-12,14,true)
            shocks = shocks.concat(create_shock_h(10,-12,8,true))
            shocks = shocks.concat(create_shock_v(25,-19,14,true))
            shocks = shocks.concat(create_shock_h(25,1,2,true))
            shocks = shocks.concat(create_shock_v(33,-12,6,true))
            shocks = shocks.concat(create_shock_h(33,-12,15,true))
            shocks = shocks.concat(create_shock_v(41,-3,7,true))
            shocks = shocks.concat(create_shock_v(47,2,6,true))
            shocks = shocks.concat(create_shock_v(54,-19,14,true))
            shocks = shocks.concat(create_shock_h(0,-19,25,true))
            shocks = shocks.concat(create_shock_h(26,-19,28,true))

            buildings = create_building(9,2,5)
            buildings = buildings.concat(create_building(25,2,6))

            enemys = [
                new tank({x:21*gridSize, y:-6*gridSize, moveSize: 70}),
                new robot({x:21*gridSize, y:7*gridSize, moveSize: 80}),
                new robot({x:29*gridSize, y:-1*gridSize, moveSize: 80}),
                new robot({x:48*gridSize, y:-6*gridSize, moveSize: 200}),
                new robot({x:46*gridSize, y:-6*gridSize, moveSize: 150}),
//                new boss3({x:15*gridSize, y:1*gridSize, moveSize: 130}),
                new robot({x:42*gridSize, y:7*gridSize, moveSize: 130}),
//                new nave_enemy1({x:12*gridSize,y:-12*gridSize, moveSize: 200}),
//                new nave_enemy2({x:300,y:150, moveSize: 200}),
            ]
            // energy_houses = [ new energy_house1({x:7*gridSize,y:5*gridSize}), new energy_house2({x:7*gridSize,y:6*gridSize}), ]

            drones = [
                new drone({x:150,y:-600,moveDirection:'left', moveSize:100}),
                new drone({x:150,y:-550,moveDirection:'right', moveSize:100}),
                new drone({x:150,y:-500,moveDirection:'left', moveSize:100}),
                new drone({x:150,y:-450,moveDirection:'right', moveSize:100}),
                new drone({x:150,y:-400,moveDirection:'left', moveSize:100}),
                new drone({x:150,y:-350,moveDirection:'right', moveSize:100}),
                new drone({x:150,y:-300,moveDirection:'left', moveSize:100}),
                new drone({x:150,y:-250,moveDirection:'right', moveSize:100}),
                new drone({x:150,y:-200,moveDirection:'left', moveSize:100}),
                new drone({x:150,y:-150,moveDirection:'right', moveSize:100}),
                new drone({x:150,y:-100,moveDirection:'left', moveSize:100}),
                new drone({x:150,y:-50,moveDirection:'right', moveSize:100}),
                new drone({x:150,y:  0,moveDirection:'left', moveSize:100}),
                new drone({x:150,y: 50,moveDirection:'right', moveSize:100}),
                new drone({x:150,y:100,moveDirection:'left', moveSize:100}),
                new drone({x:300,y:-550,moveDirection:'down', moveSize:100}),
                new drone({x:350,y:-550,moveDirection:'up', moveSize:100}),
                new drone({x:400,y:-550,moveDirection:'down', moveSize:100}),
                new drone({x:450,y:-550,moveDirection:'up', moveSize:100}),
                new drone({x:500,y:-550,moveDirection:'down', moveSize:100}),
                new drone({x:550,y:-550,moveDirection:'up', moveSize:100}),
                new drone({x:600,y:-550,moveDirection:'up', moveSize:100}),
                new drone({x:650,y:-550,moveDirection:'down', moveSize:100}),
                new drone({x:700,y:-550,moveDirection:'up', moveSize:100}),
                new drone({x:750,y:-550,moveDirection:'up', moveSize:100}),
                new drone({x:800,y:-550,moveDirection:'up', moveSize:100}),
                new drone({x:450,y:-120,moveDirection:'left', moveSize:100}),
                new drone({x:450,y:-70,moveDirection:'right', moveSize:100}),
                new drone({x:450,y:-20,moveDirection:'left', moveSize:100}),
                new drone({x:450,y: 30,moveDirection:'right', moveSize:100}),
                new drone({x:450,y: 80,moveDirection:'left', moveSize:80}),
                new drone({x:450,y: 130,moveDirection:'right', moveSize:100}),
                new drone({x:450,y: 180,moveDirection:'left', moveSize:100}),
                new drone({x:750,y:-70,moveDirection:'right', moveSize:100}),
                new drone({x:750,y:-20,moveDirection:'left', moveSize:100}),
                new drone({x:750,y: 30,moveDirection:'right', moveSize:100}),
                new drone({x:1010,y:-70,moveDirection:'right', moveSize:100}),
                new drone({x:1010,y:-120,moveDirection:'left', moveSize:100}),
                new drone({x:1010,y:-170,moveDirection:'right', moveSize:100}),
                new drone({x:1010,y:-220,moveDirection:'left', moveSize:100}),
                new drone({x:1010,y:-270,moveDirection:'right', moveSize:100}),
                new drone({x:1010,y:-320,moveDirection:'left', moveSize:100}),
                new drone({x:1010,y:-370,moveDirection:'right', moveSize:100}),
                new drone({x:1010,y:-420,moveDirection:'left', moveSize:100}),
                new drone({x:1010,y:-470,moveDirection:'right', moveSize:100}),
                new drone({x:1010,y:-520,moveDirection:'left', moveSize:100}),
                new drone({x:1010,y:-570,moveDirection:'right', moveSize:100}),
                new drone({x:1010,y:-620,moveDirection:'left', moveSize:100}),
                new drone({x:1200,y:-570,moveDirection:'up', moveSize:100}),
                new drone({x:1250,y:-570,moveDirection:'down', moveSize:100}),
                new drone({x:1300,y:-570,moveDirection:'up', moveSize:100}),
                new drone({x:1350,y:-570,moveDirection:'down', moveSize:100}),
                new drone({x:1400,y:-570,moveDirection:'up', moveSize:100}),
                new drone({x:1450,y:-570,moveDirection:'down', moveSize:100}),
                new drone({x:1500,y:-570,moveDirection:'up', moveSize:100}),
                new drone({x:1550,y:-570,moveDirection:'down', moveSize:100}),
                new drone({x:1600,y:-570,moveDirection:'up', moveSize:100}),
                new drone({x:1650,y:-570,moveDirection:'down', moveSize:100}),
                new drone({x:1770,y:-670,moveDirection:'left', moveSize:100}),
                new drone({x:1770,y:-620,moveDirection:'right', moveSize:100}),
                new drone({x:1770,y:-570,moveDirection:'left', moveSize:100}),
                new drone({x:1770,y:-520,moveDirection:'right', moveSize:100}),
                new drone({x:1770,y:-470,moveDirection:'left', moveSize:100}),
                new drone({x:1770,y:-420,moveDirection:'right', moveSize:100}),
                new drone({x:1770,y:-370,moveDirection:'left', moveSize:100}),
                new drone({x:1770,y:-320,moveDirection:'right', moveSize:100}),
                new drone({x:1770,y:-270,moveDirection:'left', moveSize:100}),
                new drone({x:1770,y:-220,moveDirection:'right', moveSize:100}),
                new drone({x:1770,y:-170,moveDirection:'left', moveSize:100}),
                new drone({x:1200,y:-310,moveDirection:'up', moveSize:100}),
                new drone({x:1250,y:-310,moveDirection:'down', moveSize:100}),
                new drone({x:1300,y:-310,moveDirection:'up', moveSize:100}),
                new drone({x:1350,y:-310,moveDirection:'down', moveSize:100}),
                new drone({x:1400,y:-310,moveDirection:'up', moveSize:100}),
                new drone({x:1450,y:-310,moveDirection:'down', moveSize:100}),
                new drone({x:1500,y:-310,moveDirection:'up', moveSize:100}),
                new drone({x:1550,y:-310,moveDirection:'down', moveSize:100}),
                new drone({x:1600,y:-310,moveDirection:'up', moveSize:100}),
                new drone({x:1650,y:-310,moveDirection:'down', moveSize:100}),
                new drone({x:1310,y:-70,moveDirection:'right', moveSize:100}),
                new drone({x:1310,y:-120,moveDirection:'left', moveSize:100}),
                new drone({x:1310,y:-170,moveDirection:'right', moveSize:100}),
                new drone({x:1310,y:-220,moveDirection:'left', moveSize:100}),
                new drone({x:1310,y:-270,moveDirection:'right', moveSize:100}),
                new drone({x:1310,y:-320,moveDirection:'left', moveSize:100}),
                new drone({x:1310,y:-370,moveDirection:'right', moveSize:100}),
                new drone({x:1310,y:-420,moveDirection:'left', moveSize:100}),
            ];
            Nave = [ new nave({x:200,y:150}) ]
            btns = create_joystick("b");
            lifes = [ new Life({x:42, y:8}) ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
            painels = [ new painel({x:0, y:0}), ]
            barraVidas1  = [ new barraVida1({x:90, y:1}), ]
            barraVidas2  = [ new barraVida2({x:100, y:10}), ]
        break;
        /*
        case 2:
          resetObjects();
          scenario.cMin=0;
          scenario.cMax=6;
          scenario.rMin=0;
          scenario.rMax=0;
          backgrounds = [
            new background({ imgName: 'background3'}),
            new static_obj({ x:150, y:50, imgName: 'planet4'}),
            new background({ imgName: 'atmosphere'}),
          ]
          jewels = [ new jewel({x:51*gridSize,y:4*gridSize,number:3})]
          tiles = create_greenMountain(-1,9,27,4);
          tiles = tiles.concat(create_greenMountain(45,9,23,4));
          tiles = tiles.concat(create_greenMountain(67,7,12,6));
          tiles = tiles.concat(create_greenMountain(77,9,11,3));
          tiles = tiles.concat(create_brownMountain(75,-1,12,6));
          tiles = tiles.concat(create_greenMountain(87,7,12,6));
          tiles = tiles.concat(create_greenMountain(140,9,15,3));
          tiles = tiles.concat(create_brownMountain(118,9,12,4));
          waters = water1_create(26,10,19);
          waters = waters.concat(water2_create(26,11,19));
          waters = waters.concat(water1_create(99,10,19));
          waters = waters.concat(water2_create(99,11,19));
          waters = waters.concat(water1_create(130,10,10));
          waters = waters.concat(water2_create(130,11,10));
          buildings = create_building(9,4,5);
          buildings = buildings.concat(create_building(49,4,5));
          buildings = buildings.concat(create_building(69,4,3));
          buildings = buildings.concat(create_building(92,4,3));
          buildings = buildings.concat(create_building(92,4,3));
          buildings = buildings.concat(create_building(122,6,3));
          shocks = create_shock_v(82,5,4);
          enemys = [
              new tank       ({x:15*gridSize, y:8*gridSize,  moveSize: 170}),
              new tank       ({x:17*gridSize, y:8*gridSize,  moveSize: 200}),
              new tank       ({x:47*gridSize, y:8*gridSize,  moveSize: 40}),
              new tank       ({x:57*gridSize, y:8*gridSize,  moveSize: 250}),
              new tank       ({x:60*gridSize, y:8*gridSize,  moveSize: 220}),
              new tank       ({x:74*gridSize, y:6*gridSize,  moveSize: 135}),
              new tank       ({x:96*gridSize, y:6*gridSize,  moveSize: 70}),
              new tank       ({x:120*gridSize, y:8*gridSize,  moveSize: 40}),
              new tank       ({x:126*gridSize, y:8*gridSize,  moveSize: 80}),

              new nave_enemy1({x:18*gridSize, y:-12*gridSize, moveSize: 200}),
              new nave_enemy2({x:18*gridSize, y:5*gridSize,   moveSize: 230}),
              new nave_enemy2({x:18*gridSize, y:2*gridSize,   moveSize: 100}),
              new nave_enemy2({x:28*gridSize, y:3*gridSize,   moveSize: 100}),
              new nave_enemy2({x:32*gridSize, y:4*gridSize,   moveSize: 300}),
              new nave_enemy2({x:34*gridSize, y:5*gridSize,   moveSize: 200}),
              new nave_enemy2({x:30*gridSize, y:6*gridSize,   moveSize: 250}),


              new nave_enemy2({x:96*gridSize,  y:2*gridSize,   moveSize: 250}),
              new nave_enemy2({x:106*gridSize, y:2*gridSize,   moveSize: 250}),
              new nave_enemy2({x:106*gridSize, y:3*gridSize,   moveSize: 300}),
              new nave_enemy2({x:106*gridSize, y:4*gridSize,   moveSize: 200}),

              new nave_enemy2({x:126*gridSize, y:2*gridSize,   moveSize: 250}),
              new nave_enemy2({x:126*gridSize, y:3*gridSize,   moveSize: 300}),
              new nave_enemy2({x:126*gridSize, y:4*gridSize,   moveSize: 200}),
          ]
          drones = [
              new drone({x:134*gridSize,y:8*gridSize,moveDirection:'left', moveSize:140}),
              new drone({x:134*gridSize,y:9*gridSize,moveDirection:'right', moveSize:140}),
          ]
          Nave = [ new nave({x:200,y:150}) ]
          gates = [ new gate({x:148*gridSize,y:6*gridSize}) ]
          btns = create_joystick("b");
          lifes = [ new Life({x:38, y:8}) ]
          fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
          painels = [ new painel({x:0, y:0}), ]
          barraVidas1  = [ new barraVida1({x:70, y:2}), ]
          barraVidas2  = [ new barraVida2({x:80, y:11}), ]
        break;
        /**/
        case 3:
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=3;
            scenario.rMin=-3;
            scenario.rMax=0;
            backgrounds = [
                new background({x:0, y:0, imgName: 'background8'}),
            //    new background({x:0, y:0, imgName: 'atmosphere'}),
            ]
            Nave = [ new nave({x:200,y:150}) ]
            enemys = [
                //new boss3({x:10*gridSize, y:3*gridSize, moveSize: 130}),
                //new antiaerea({x:10*gridSize, y:3*gridSize, moveSize: 0}),
            ]

            enemys = [
                new robot({x:23*gridSize, y:6*gridSize, moveSize:50}),
                new robot({x:29*gridSize, y:-1*gridSize, moveSize:70}),
                new robot({x:23*gridSize, y:-15*gridSize, moveSize:85}),
                new robot({x:21*gridSize, y:-15*gridSize, moveSize:120}),
                new robot({x:11*gridSize, y:-22*gridSize, moveSize:120}),
                new robot({x:21*gridSize, y:-23*gridSize, moveSize:100}),
                new robot({x:28*gridSize, y:-24*gridSize, moveSize:80}),
                new robot({x:35*gridSize, y:-25*gridSize, moveSize:90}),
                new robot({x:45*gridSize, y:-22*gridSize, moveSize:90}),
                new robot({x:45*gridSize, y:-12*gridSize, moveSize:110}),
                new robot({x:40*gridSize, y:-1*gridSize, moveSize:150}),
            ]

            drops = [
                new drop({x:10*gridSize, y:2*gridSize, speedAnimation: 0.1}),
                new drop({x:13*gridSize, y:2*gridSize, speedAnimation: 0.2}),
                new drop({x:16*gridSize, y:2*gridSize, speedAnimation: 0.15}),
                new drop({x:20*gridSize, y:-7*gridSize, speedAnimation: 0.15}),
                new drop({x:22*gridSize, y:-7*gridSize, speedAnimation: 0.2}),
                new drop({x:25*gridSize, y:-7*gridSize, speedAnimation: 0.08}),
                new drop({x:29*gridSize, y:-18*gridSize, speedAnimation: 0.25}),
                new drop({x:25*gridSize, y:-18*gridSize, speedAnimation: 0.15}),
                new drop({x:20*gridSize, y:-18*gridSize, speedAnimation: 0.1}),
                new drop({x:19*gridSize, y:-18*gridSize, speedAnimation: 0.05}),
                new drop({x:12*gridSize, y:-18*gridSize, speedAnimation: 0.2}),
                new drop({x:15*gridSize, y:-18*gridSize, speedAnimation: 0.08}),
                new drop({x:09*gridSize, y:-18*gridSize, speedAnimation: 0.2}),
                new drop({x:05*gridSize, y:-29*gridSize, speedAnimation: 0.15}),
                new drop({x:03*gridSize, y:-29*gridSize, speedAnimation: 0.3}),
                new drop({x:08*gridSize, y:-29*gridSize, speedAnimation: 0.15}),
                new drop({x:13*gridSize, y:-29*gridSize, speedAnimation: 0.2}),
                new drop({x:17*gridSize, y:-29*gridSize, speedAnimation: 0.4}),
                new drop({x:22*gridSize, y:-29*gridSize, speedAnimation: 0.1}),
                new drop({x:25*gridSize, y:-29*gridSize, speedAnimation: 0.15}),
                new drop({x:28*gridSize, y:-29*gridSize, speedAnimation: 0.2}),
                new drop({x:35*gridSize, y:-29*gridSize, speedAnimation: 0.1}),
                new drop({x:33*gridSize, y:-29*gridSize, speedAnimation: 0.4}),
                new drop({x:37*gridSize, y:-29*gridSize, speedAnimation: 0.2}),
                new drop({x:41*gridSize, y:-29*gridSize, speedAnimation: 0.15}),
                new drop({x:45*gridSize, y:-29*gridSize, speedAnimation: 0.3}),
                new drop({x:48*gridSize, y:-29*gridSize, speedAnimation: 0.2}),
                new drop({x:53*gridSize, y:-29*gridSize, speedAnimation: 0.4}),
                new drop({x:55*gridSize, y:-29*gridSize, speedAnimation: 0.1}),
                new drop({x:57*gridSize, y:-29*gridSize, speedAnimation: 0.2}),
                new drop({x:61*gridSize, y:-29*gridSize, speedAnimation: 0.15}),
                new drop({x:65*gridSize, y:-29*gridSize, speedAnimation: 0.3}),
                new drop({x:35*gridSize, y:-18*gridSize, speedAnimation: 0.1}),
                new drop({x:33*gridSize, y:-18*gridSize, speedAnimation: 0.4}),
                new drop({x:37*gridSize, y:-18*gridSize, speedAnimation: 0.2}),
                new drop({x:41*gridSize, y:-18*gridSize, speedAnimation: 0.15}),
                new drop({x:45*gridSize, y:-18*gridSize, speedAnimation: 0.3}),
                new drop({x:48*gridSize, y:-18*gridSize, speedAnimation: 0.2}),
                new drop({x:40*gridSize, y:-8*gridSize, speedAnimation: 0.15}),
                new drop({x:43*gridSize, y:-8*gridSize, speedAnimation: 0.2}),
                new drop({x:45*gridSize, y:-8*gridSize, speedAnimation: 0.08}),
                new drop({x:40*gridSize, y:-8*gridSize, speedAnimation: 0.1}),
                new drop({x:43*gridSize, y:-8*gridSize, speedAnimation: 0.25}),
                new drop({x:45*gridSize, y:-8*gridSize, speedAnimation: 0.09}),
                new drop({x:50*gridSize, y:-8*gridSize, speedAnimation: 0.15}),
                new drop({x:48*gridSize, y:-8*gridSize, speedAnimation: 0.2}),
                new drop({x:52*gridSize, y:-8*gridSize, speedAnimation: 0.2}),
                new drop({x:55*gridSize, y:-8*gridSize, speedAnimation: 0.08}),
                new drop({x:60*gridSize, y:-8*gridSize, speedAnimation: 0.1}),
                new drop({x:63*gridSize, y:-8*gridSize, speedAnimation: 0.25}),
                new drop({x:65*gridSize, y:-8*gridSize, speedAnimation: 0.09}),
                new drop({x:40*gridSize, y:3*gridSize, speedAnimation: 0.15}),
                new drop({x:43*gridSize, y:3*gridSize, speedAnimation: 0.2}),
                new drop({x:45*gridSize, y:3*gridSize, speedAnimation: 0.08}),
            ]
            gates = [ new gate({x:32*gridSize,y:6*gridSize}) ]
            lavas = lava1_create(0,9, 19)
            lavas = lavas.concat(lava2_create(0,10, 19))
            lavas = lavas.concat(lava2_create(0,11, 19))
            lavas = lavas.concat(lava1_create(31,9, 21))
            lavas = lavas.concat(lava2_create(31,10, 21))
            lavas = lavas.concat(lava2_create(31,11, 21))

            bubbles = [
                new bubble({x:3*gridSize, y:8*gridSize, speedAnimation: 0.6 }),
                new bubble({x:5*gridSize, y:8*gridSize, speedAnimation: 0.4}),
                new bubble({x:8*gridSize, y:8*gridSize, speedAnimation: 0.5}),
                new bubble({x:13*gridSize, y:8*gridSize, speedAnimation: 0.7}),
                new bubble({x:33*gridSize, y:8*gridSize, speedAnimation: 0.6 }),
                new bubble({x:35*gridSize, y:8*gridSize, speedAnimation: 0.4}),
                new bubble({x:38*gridSize, y:8*gridSize, speedAnimation: 0.5}),
                new bubble({x:43*gridSize, y:8*gridSize, speedAnimation: 0.7})
            ]

            tiles = create_brownMountain(-1,-11,10,14);
            tiles = tiles.concat(create_brownMountain(8,-12,10,14))
            tiles = tiles.concat(create_brownMountain(32,-11,4,3))
            tiles = tiles.concat(create_brownMountain(40,-11,25,3))
            tiles = tiles.concat(create_brownMountain(17,-14,10,7))
            tiles = tiles.concat(create_brownMountain(21,7,5,7))
            tiles = tiles.concat(create_brownMountain(30,0,8,5))
            tiles = tiles.concat(create_brownMountain(26,0,5,13))
            tiles = tiles.concat(create_brownMountain(52,8,11,5))
            tiles = tiles.concat(create_brownMountain(37,0,11,3))
            tiles = tiles.concat(create_brownMountain(21,7,5,7))
            tiles = tiles.concat(create_brownMountain(32,-18,3,7))
            tiles = tiles.concat(create_brownMountain(18,-22,7,3))
            tiles = tiles.concat(create_brownMountain(25,-23,7,3))
            tiles = tiles.concat(create_brownMountain(32,-24,7,4))
            tiles = tiles.concat(create_brownMountain(7,-21,44,3))
            tiles = tiles.concat(create_brownMountain(-1,-32,64,3))
            tiles = tiles.concat(create_brownHill1(33,-8,8))
            tiles = tiles.concat(create_brownHill1(19,8,4))
            tiles = tiles.concat(create_brownHill1(20,7,5))
            tiles = tiles.concat(create_brownHill1(21,6,6))

            btns = create_joystick("b");
            lifes = [ new Life({x:38, y:8}) ]
            painels = [ new painel({x:0, y:0}), ]
            barraVidas1  = [ new barraVida1({x:70, y:2}), ]
            barraVidas2  = [ new barraVida2({x:80, y:11}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        /**/
        case 2:
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=6;
            scenario.rMin=0;
            scenario.rMax=0;
            backgrounds = [
              new background({x:0, y:0, imgName: 'background10'}),
            ]
            Nave = [ new nave({x:200,y:150}) ]
            asteroides = [

              new asteroide2({x:21*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:21*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6) }),
              new asteroide2({x:22*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:22*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:24*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:25*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:26*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:28*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:29*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:31*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:32*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:33*gridSize,y:-5*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:35*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:36*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:38*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:39*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:41*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:42*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:44*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:45*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:46*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:48*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:49*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:51*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:52*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:54*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:55*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:56*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:58*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:59*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:61*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:62*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:64*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:65*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:66*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:68*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:69*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:72*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:73*gridSize,y:-5*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:75*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:76*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:78*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:79*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:81*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:82*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:94*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:95*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:96*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:98*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:99*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:101*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:102*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:103*gridSize,y:-5*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:105*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:106*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:108*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:109*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:111*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:112*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:114*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:115*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:116*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:118*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:119*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:121*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:122*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:124*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:125*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:126*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:128*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:129*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:131*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:132*gridSize,y:-4*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:134*gridSize,y:-2*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:135*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:136*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide1({x:138*gridSize,y:-7*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
              new asteroide2({x:139*gridSize,y:-9*gridSize,direction:"d",speed: getRandomArbitrary(2, 6)}),
            ]
            gates = [ new gate({x:150*gridSize,y:6*gridSize}) ]
            btns = create_joystick("w");
            lifes = [ new Life({x:38, y:8}) ]
            painels = [ new painel({x:0, y:0}), ]
            barraVidas1  = [ new barraVida1({x:70, y:2}), ]
            barraVidas2  = [ new barraVida2({x:80, y:11}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        /**/
    }
}

function create_joystick(color){
    var refjst = {x:30,y:200}
    btns = [
        new btn_a({x:refjst.x+canvas.width-170,y:refjst.y+30, color:color}),
        new btn_upleft({x:refjst.x,y:refjst.y, color:color}),
        new btn_up({x:refjst.x+65,y:refjst.y, color:color}),
        new btn_upright({x:refjst.x+95,y:refjst.y, color:color}),
        new btn_left({x:refjst.x,y:refjst.y+65, color:color}),
        new btn_center({x:refjst.x+65,y:refjst.y+65, color:color}),
        new btn_right({x:refjst.x+95,y:refjst.y+65, color:color}),
        new btn_downleft({x:refjst.x,y:refjst.y+95, color:color}),
        new btn_down({x:refjst.x+65,y:refjst.y+95, color:color}),
        new btn_downright({x:refjst.x+95,y:refjst.y+95, color:color}),
    ];
    return btns;
}

function lava1_create(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(new lava({x: (x+i)*gridSize, y:y*gridSize, type: 'surface'}));
    }
    return arr;
}

function lava2_create(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(new lava({x: (x+i)*gridSize, y:y*gridSize, type: 'deep'}));
    }
    return arr;
}

function water1_create(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(new water1({x: (x+i)*gridSize, y:y*gridSize}));
    }
    return arr;
}

function water2_create(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(new water2({x: (x+i)*gridSize, y:y*gridSize}));
    }
    return arr;
}

function create_brownHill1(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==0 ?
                new tile({x:x*gridSize, y:(y+i)*gridSize, tileName: 'brownHill1'})
            :
                new tile({x:x*gridSize, y:(y+i)*gridSize, tileName: 'brownHill2'})
            )
        );
    }
    return arr;
}

function create_greenHill(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==0 ?
                new tile({x:x*gridSize, y:(y+i)*gridSize, tileName: 'greenHill1'})
            :
                new tile({x:x*gridSize, y:(y+i)*gridSize, tileName: 'greenHill2'})
            )
        );
    }
    return arr;
}

function create_building(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==(number-1) ?
                new building2({x:x*gridSize, y:(y+i)*gridSize})
            :
                new building1({x:x*gridSize, y:(y+i)*gridSize})
            )
        );
    }
    return arr;
}


function create_alien_building(x,y,number){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==(number-1) ?
                new alien_building3({x:x*gridSize, y:(y+i)*gridSize})
            :
                (i==0 ?
                    new alien_building1({x:x*gridSize, y:(y+i)*gridSize})
                :
                    new alien_building2({x:x*gridSize, y:(y+i)*gridSize})
                )
            )
        );
    }
    return arr;
}

function create_shock_v(x,y,number,continuous){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==(number-1) ?
                new shock_v({x:x*gridSize, y:(y+i)*gridSize, shockNumber:3,continuous:continuous})
            :
                ((i==0) ?
                    new shock_v({x:x*gridSize, y:(y+i)*gridSize, shockNumber:1,continuous:continuous})
                :
                    new shock_v({x:x*gridSize, y:(y+i)*gridSize, shockNumber:2,continuous:continuous})
                )
            )
        );
    }
    return arr;
}

function create_shock_h(x,y,number,continuous){
    var arr = []
    for (let i = 0; i < number; i++) {
        arr.push(
            (i==(number-1) ?
                new shock_h({x:(x+i)*gridSize, y:y*gridSize, shockNumber:3,continuous:continuous})
            :
                ((i==0) ?
                    new shock_h({x:(x+i)*gridSize, y:y*gridSize, shockNumber:1,continuous:continuous})
                :
                    new shock_h({x:(x+i)*gridSize, y:y*gridSize, shockNumber:2,continuous:continuous})
                )
            )
        );
    }
    return arr;
}

function create_greenMountain(x,y,numberX,numberY){

    var arr = []
    for (let i2 = 0; i2 < numberY; i2++) {
        for (let i = 0; i < numberX; i++) {
            arr.push(
                (i2==(numberY-1) ?
                    (i==(numberX-1) ?
                        new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile9' })
                    :
                        ((i==0) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile7' })
                        :
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile8' })
                        )
                    )
                :
                    (i2==0 ?
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile3' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile1' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile2' })
                            )
                        )
                    :
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile6' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile4' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'greenTile5' })
                            )
                        )
                    )
                )
            );
        }
    }
    return arr;
}


function create_whiteMountain(x,y,numberX,numberY){

    var arr = []
    for (let i2 = 0; i2 < numberY; i2++) {
        for (let i = 0; i < numberX; i++) {
            arr.push(
                (i2==(numberY-1) ?
                    (i==(numberX-1) ?
                        new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile9' })
                    :
                        ((i==0) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile7' })
                        :
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile8' })
                        )
                    )
                :
                    (i2==0 ?
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile3' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile1' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile2' })
                            )
                        )
                    :
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile6' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile4' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'whiteTile5' })
                            )
                        )
                    )
                )
            );
        }
    }
    return arr;
}

function create_brownMountain(x,y,numberX,numberY){

    var arr = []
    for (let i2 = 0; i2 < numberY; i2++) {
        for (let i = 0; i < numberX; i++) {
            arr.push(
                (i2==(numberY-1) ?
                    (i==(numberX-1) ?
                        new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile9' })
                    :
                        ((i==0) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile7' })
                        :
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile8' })
                        )
                    )
                :
                    (i2==0 ?
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile3' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile1' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile2' })
                            )
                        )
                    :
                        (i==(numberX-1) ?
                            new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile6' })
                        :
                            ((i==0) ?
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile4' })
                            :
                                new tile({x:(x+i)*gridSize, y:(y+i2)*gridSize, tileName: 'brownTile5' })
                            )
                        )
                    )
                )
            );
        }
    }
    return arr;
}
