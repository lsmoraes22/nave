function init(level){
    switch(level) {
        case 'game_over':
            music.stop();
            resetObjects();
            music = new sound({audioName:"game_over"})
            music.musicPlay();
            backgrounds = [ new background({imgName: 'game-over'}),]
            play_agains = [ new play_again({x:140, y:240}), ]
        break;
        case 0:
            if(!isNull(music)){music.stop();}
            resetObjects();
            backgrounds = [ new background({ imgName: 'title'}),]
            plays = [ new play({x:190, y:250, imgName:"play"}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 1:
            if(!isNull(music)){music.stop();}
            resetObjects();
            backgrounds = [ new background({imgName: 'scene1'}),]
            nexts = [ new btn_next({x:40, y:100, imgName:"next"}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
            music = new sound({audioName:"theme"})
            music.musicPlay();
        break;
        case 2:
          if(!isNull(music)){music.stop();music = null;}
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
          jewels = [
            new jewel({x:51*gridSize,y:4*gridSize,number:3}),
          ]
          life_ups = [ new life_up({x:100*gridSize, y:8*gridSize})]
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
              new nave_enemy1({x:18*gridSize, y:5*gridSize,   moveSize: 230}),
              new nave_enemy1({x:18*gridSize, y:2*gridSize,   moveSize: 100}),
              new nave_enemy1({x:28*gridSize, y:3*gridSize,   moveSize: 100}),
              new nave_enemy1({x:32*gridSize, y:4*gridSize,   moveSize: 300}),
              new nave_enemy2({x:34*gridSize, y:5*gridSize,   moveSize: 200}),
              new nave_enemy1({x:30*gridSize, y:6*gridSize,   moveSize: 250}),
              new nave_enemy1({x:96*gridSize,  y:2*gridSize,   moveSize: 250}),
              new nave_enemy2({x:106*gridSize, y:2*gridSize,   moveSize: 250}),
              new nave_enemy1({x:106*gridSize, y:3*gridSize,   moveSize: 300}),
              new nave_enemy1({x:106*gridSize, y:4*gridSize,   moveSize: 200}),
              new nave_enemy1({x:126*gridSize, y:2*gridSize,   moveSize: 250}),
              new nave_enemy1({x:126*gridSize, y:3*gridSize,   moveSize: 300}),
              new nave_enemy2({x:126*gridSize, y:4*gridSize,   moveSize: 200}),
          ]
          drones = [
              new drone({x:134*gridSize,y:8*gridSize,moveDirection:'left', moveSize:140}),
              new drone({x:134*gridSize,y:9*gridSize,moveDirection:'right', moveSize:140}),
              new drone({x:108*gridSize,y:8*gridSize,moveDirection:'left', moveSize:280}),
              new drone({x:108*gridSize,y:9*gridSize,moveDirection:'right', moveSize:280}),
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
        case 3:
            if(!isNull(music)){music.stop();music = null;}
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
            jewels = [
              new jewel({x:4*gridSize, y:6*gridSize, number:0}),
            ]
            life_ups = [ new life_up({x:27*gridSize, y:6*gridSize})]
            gates = [ new gate({x:52*gridSize,y:5*gridSize}) ]
            waters = water1_create(0,9,19);
            waters = waters.concat(water2_create(0,10,19));
            waters = waters.concat(water2_create(0,11,19));
            waters = waters.concat(water1_create(35,9,3));
            waters = waters.concat(water2_create(35,10,3));
            waters = waters.concat(water2_create(35,11,3));
            tiles = create_greenMountain(7,7,4,5)
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
                new boss1({x:30*gridSize, y:6*gridSize, moveSize: 130}),
                new robot({x:42*gridSize, y:7*gridSize, moveSize: 130}),
            ]
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
        case 4:
            if(!isNull(music)){music.stop();music = null;}
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
            jewels = [
              new jewel({x:24*gridSize, y:-15*gridSize, number:0})
            ]
            life_ups = [ new life_up({x:29*gridSize, y:-6*gridSize})]
            shocks = create_shock_v(9,5,3,true)
            shocks = shocks.concat(create_shock_h(9,5,4,true))
            shocks = shocks.concat(create_shock_v(12,5,3,true))
            shocks = shocks.concat(create_shock_h(12,-14,19,true))
            shocks = shocks.concat(create_shock_v(20,-5,5,true))
            shocks = shocks.concat(create_shock_v(30,-14,9,true))
            shocks = shocks.concat(create_shock_v(40,-23,25,true))
            shocks = shocks.concat(create_shock_h(31,2,10,true))
            shocks = shocks.concat(create_shock_v(50,-15,15,true))
            shocks = shocks.concat(create_shock_v(67,-23,15,true))
            shocks = shocks.concat(create_shock_v(58,-6,8,true))

            tiles = create_greenMountain(-1,8,79,14)
            tiles = tiles.concat(create_greenMountain(9,-14,3,16))
            tiles = tiles.concat(create_greenHill(20,0,8))
            tiles = tiles.concat(create_greenMountain(21,-5,10,2))
            tiles = tiles.concat(create_greenMountain(51,-15,10,2))
            tiles = tiles.concat(create_greenMountain(58,-8,10,2))
            tiles = tiles.concat(create_greenMountain(73,-18,5,2))
            energy_houses = [ new energy_house1({x:74*gridSize,y:-20*gridSize}), new energy_house2({x:74*gridSize,y:-19*gridSize}), ]
            drones = [
                new drone({x:20*gridSize, y:-11*gridSize, moveDirection:'left',  moveSize:100}),
                new drone({x:20*gridSize, y:-12*gridSize, moveDirection:'right', moveSize:100}),
                new drone({x:20*gridSize, y:-13*gridSize, moveDirection:'left',  moveSize:100}),
                new drone({x:4*gridSize,  y:0*gridSize,   moveDirection:'left',  moveSize:140}),
                new drone({x:4*gridSize,  y:-1*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:4*gridSize,  y:-2*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:4*gridSize,  y:-3*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:4*gridSize,  y:-4*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:4*gridSize,  y:-5*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:4*gridSize,  y:-6*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:4*gridSize,  y:-7*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:4*gridSize,  y:-8*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:4*gridSize,  y:-9*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:4*gridSize,  y:-10*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:4*gridSize,  y:-11*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:4*gridSize,  y:-12*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:4*gridSize,  y:-13*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:4*gridSize,  y:-14*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:4*gridSize,  y:-15*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:35*gridSize,  y:-14*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:35*gridSize,  y:-13*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:35*gridSize,  y:-12*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:35*gridSize,  y:-11*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:35*gridSize,  y:-10*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:35*gridSize,  y:-9*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:35*gridSize,  y:-8*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:35*gridSize,  y:-7*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:35*gridSize,  y:-6*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:35*gridSize,  y:-5*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:35*gridSize,  y:-4*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:35*gridSize,  y:-3*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-3*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-4*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:45*gridSize,  y:-5*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-6*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:45*gridSize,  y:-7*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-8*gridSize,  moveDirection:'left',  moveSize:140}),
                new drone({x:45*gridSize,  y:-9*gridSize,  moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-10*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:45*gridSize,  y:-11*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-12*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:45*gridSize,  y:-13*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-14*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:45*gridSize,  y:-15*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-16*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:45*gridSize,  y:-17*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-18*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:45*gridSize,  y:-19*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:45*gridSize,  y:-20*gridSize, moveDirection:'left',  moveSize:140}),
                new drone({x:45*gridSize,  y:-21*gridSize, moveDirection:'right', moveSize:140}),
                new drone({x:64*gridSize,  y:-21*gridSize, moveDirection:'right', moveSize:70}),
                new drone({x:64*gridSize,  y:-20*gridSize, moveDirection:'left',  moveSize:70}),
                new drone({x:64*gridSize,  y:-19*gridSize, moveDirection:'right',  moveSize:70}),
                new drone({x:64*gridSize,  y:-18*gridSize, moveDirection:'left',  moveSize:70}),
                new drone({x:64*gridSize,  y:-17*gridSize, moveDirection:'right',  moveSize:70}),
                new drone({x:64*gridSize,  y:-16*gridSize, moveDirection:'left',  moveSize:70}),
                new drone({x:64*gridSize,  y:-15*gridSize, moveDirection:'right', moveSize:70}),
                new drone({x:64*gridSize,  y:-14*gridSize, moveDirection:'left',  moveSize:70}),
                new drone({x:64*gridSize,  y:-13*gridSize, moveDirection:'right',  moveSize:70}),
                new drone({x:64*gridSize,  y:-12*gridSize, moveDirection:'left',  moveSize:70}),
                new drone({x:64*gridSize,  y:-11*gridSize, moveDirection:'right',  moveSize:70}),
                new drone({x:64*gridSize,  y:-10*gridSize, moveDirection:'left',  moveSize:70}),
                new drone({x:64*gridSize,  y: -9*gridSize, moveDirection:'left',  moveSize:70}),
                new drone({x:52*gridSize,  y:-3*gridSize, moveDirection:'up',   moveSize:315   }),
                new drone({x:53*gridSize,  y:-3*gridSize, moveDirection:'down', moveSize:315   }),
                new drone({x:54*gridSize,  y:-3*gridSize, moveDirection:'up',   moveSize:315   }),
                new drone({x:55*gridSize,  y:-3*gridSize, moveDirection:'down', moveSize:315   }),
                new drone({x:56*gridSize,  y:-3*gridSize, moveDirection:'up',   moveSize:315   }),
                new drone({x:57*gridSize,  y:-3*gridSize, moveDirection:'down', moveSize:315   }),
                new drone({x:69*gridSize,  y:-15*gridSize, moveDirection:'up',   moveSize:250   }),
                new drone({x:70*gridSize,  y:-15*gridSize, moveDirection:'down', moveSize:250   }),
                new drone({x:71*gridSize,  y:-15*gridSize, moveDirection:'up',   moveSize:250   }),
                new drone({x:72*gridSize,  y:-15*gridSize, moveDirection:'down', moveSize:250   }),
            ]
            enemys = [
                new tank({x:15*gridSize, y:7*gridSize, moveSize: 80}),
                new tank({x:25*gridSize, y:-6*gridSize, moveSize: 80}),
                new nave_enemy1({x:25*gridSize, y: -8*gridSize, moveSize: 100}),
                new nave_enemy1({x:20*gridSize, y: -9*gridSize, moveSize: 220}),
                new nave_enemy1({x:21*gridSize, y:-10*gridSize, moveSize: 200}),
                new nave_enemy2({x:10*gridSize, y:-16*gridSize, moveSize: 340}),
                new nave_enemy2({x:20*gridSize, y:-16*gridSize, moveSize: 500}),
                new nave_enemy2({x:19*gridSize, y:-17*gridSize, moveSize: 600}),
                new nave_enemy2({x:21*gridSize, y:-18*gridSize, moveSize: 550}),
                new nave_enemy2({x:22*gridSize, y:-19*gridSize, moveSize: 600}),
                new nave_enemy2({x:23*gridSize, y:-20*gridSize, moveSize: 500}),
                new nave_enemy2({x:23*gridSize, y:-21*gridSize, moveSize: 500}),
                new nave_enemy2({x:35*gridSize, y:-2*gridSize,  moveSize:140}),
                new nave_enemy2({x:35*gridSize, y:-1*gridSize,  moveSize:140}),
                new nave_enemy2({x:35*gridSize, y: 0*gridSize,  moveSize:140}),
                new nave_enemy2({x:35*gridSize, y: 1*gridSize,  moveSize:140}),
                new nave_enemy2({x:35*gridSize,  y:-2*gridSize,  moveSize:140}),
                new nave_enemy2({x:30*gridSize,  y:-1*gridSize,  moveSize:300}),
                new nave_enemy2({x:30*gridSize,  y: 0*gridSize,  moveSize:240}),
                new nave_enemy2({x:29*gridSize,  y: 1*gridSize,  moveSize:250}),
                new tank({x:  35*gridSize, y:7*gridSize,  moveSize:280}),
                new tank({x:  25*gridSize, y:7*gridSize,  moveSize: 80}),
                new boss1({x: 55*gridSize, y:-17*gridSize,  moveSize: 130}),
                new nave_enemy1({x:55*gridSize, y: -19*gridSize, moveSize: 130}),
                new nave_enemy1({x:54*gridSize, y:-20*gridSize, moveSize: 120}),
                new nave_enemy2({x:56*gridSize, y:-21*gridSize, moveSize: 110}),
                new nave_enemy2({x:57*gridSize, y:-13*gridSize, moveSize: 150}),
                new nave_enemy1({x:55*gridSize, y:-12*gridSize, moveSize: 130}),
                new nave_enemy1({x:54*gridSize, y:-11*gridSize, moveSize: 120}),
                new nave_enemy2({x:56*gridSize, y:-10*gridSize, moveSize: 110}),
                new nave_enemy2({x:68*gridSize, y:-1*gridSize, moveSize: 250}),
                new nave_enemy2({x:65*gridSize, y:0*gridSize, moveSize: 210}),
                new nave_enemy2({x:67*gridSize, y:1*gridSize, moveSize: 230}),
                new nave_enemy2({x:70*gridSize, y:2*gridSize, moveSize: 110}),
                new nave_enemy2({x:62*gridSize, y:2*gridSize, moveSize: 90}),
                new nave_enemy1({x:60*gridSize, y:3*gridSize, moveSize: 70}),
                new tank       ({x:65*gridSize, y:7*gridSize,  moveSize: 80}),
                new tank       ({x:73*gridSize, y:7*gridSize,  moveSize:100}),
                new nave_enemy2({x:72*gridSize, y:-2*gridSize, moveSize: 110}),
                new nave_enemy2({x:73*gridSize, y:-3*gridSize, moveSize: 100}),
                new nave_enemy1({x:74*gridSize, y:-4*gridSize, moveSize: 90}),
                new nave_enemy2({x:75*gridSize, y:-5*gridSize, moveSize: 80}),
                new nave_enemy1({x:72*gridSize, y:-6*gridSize, moveSize: 110}),
                new nave_enemy2({x:73*gridSize, y:-7*gridSize, moveSize: 90}),
                new nave_enemy1({x:74*gridSize, y:-8*gridSize, moveSize: 80}),
            ]
            buildings = create_building(50,0,9);
            Nave = [ new nave({x:200,y:150}) ]
            gates = [ new gate({x:10*gridSize,y:6*gridSize}) ]
            btns = create_joystick("b");
            lifes = [ new Life({x:38, y:8}) ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
            painels = [ new painel({x:0, y:0}), ]
            barraVidas1  = [ new barraVida1({x:70, y:2}), ]
            barraVidas2  = [ new barraVida2({x:80, y:11}), ]
        break;
        case 5:
            if(!isNull(music)){music.stop();music = null;}
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=2;
            scenario.rMin=-1;
            scenario.rMax=0;
            scenario.reset();
            backgrounds = [
                new background({ imgName: 'background3'}),
                new static_obj({ x:150, y:50, imgName: 'planet4'}),
                new background({ imgName: 'atmosphere'}),
            ]
            enemys = [
                new boss2({x:23*gridSize, y:3*gridSize, moveSize: 100}),
                new tank       ({x:8*gridSize,  y:9*gridSize,  moveSize: 80}),
                new tank       ({x:3*gridSize,  y:9*gridSize,  moveSize:100}),
                new nave_enemy2({x:12*gridSize, y:-2*gridSize, moveSize: 110}),
                new nave_enemy2({x:13*gridSize, y:-3*gridSize, moveSize: 100}),
                new nave_enemy1({x:14*gridSize, y:-4*gridSize, moveSize: 90}),
                new nave_enemy2({x:20*gridSize, y:-7*gridSize, moveSize: 110}),
                new nave_enemy2({x:21*gridSize, y:-8*gridSize, moveSize: 100}),
                new nave_enemy1({x:22*gridSize, y:-9*gridSize, moveSize: 90}),
                new nave_enemy2({x:27*gridSize, y:-2*gridSize, moveSize: 200}),
                new nave_enemy2({x:28*gridSize, y:-3*gridSize, moveSize: 150}),
                new nave_enemy1({x:29*gridSize, y:-4*gridSize, moveSize: 190}),
                new nave_enemy2({x:43*gridSize, y:-2*gridSize, moveSize: 110}),
                new nave_enemy2({x:44*gridSize, y:-3*gridSize, moveSize: 100}),
                new nave_enemy1({x:45*gridSize, y:-4*gridSize, moveSize: 90}),
                new tank       ({x:38*gridSize,  y:9*gridSize,  moveSize: 90}),
                new tank       ({x:43*gridSize,  y:9*gridSize,  moveSize:110}),
            ]
            life_ups = [ new life_up({x:10*gridSize, y:8*gridSize})]
            shocks = create_shock_v(20,1,3,true)
            shocks = shocks.concat(create_shock_v(33,1,3,true))
            shocks = shocks.concat(create_shock_h(20,1,14,true))
            tiles = create_greenMountain(-1,10,53,3)
            tiles = tiles.concat(create_greenHill(20,4,4))
            tiles = tiles.concat(create_greenHill(33,4,8))
            tiles = tiles.concat(create_greenMountain(20,7,9,5))
            Nave = [ new nave({x:200,y:150}) ]
            gates = [ new gate({x:30*gridSize,y:8*gridSize}) ]
            btns = create_joystick("b");
            lifes = [ new Life({x:38, y:8}) ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
            painels = [ new painel({x:0, y:0}), ]
            barraVidas1  = [ new barraVida1({x:70, y:2}), ]
            barraVidas2  = [ new barraVida2({x:80, y:11}), ]
        break;
        case 6:
          if(!isNull(music)){music.stop();music = null;}
          resetObjects();
          backgrounds = [ new background({imgName: 'scene2'}),]
          nexts = [ new btn_next({x:40, y:100, imgName:"next"}), ]
          fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
          music = new sound({audioName:"theme"})
          music.musicPlay();
        break;
        case 7:
          if(!isNull(music)){music.stop();music = null;}
          resetObjects();
          backgrounds = [ new background({imgName: 'scene3'}),]
          nexts = [ new btn_next({x:40, y:100, imgName:"next"}), ]
          fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
          music = new sound({audioName:"theme"})
        break;
        case 8:
            if(!isNull(music)){music.stop();music = null;}
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=6;
            scenario.rMin=0;
            scenario.rMax=0;
            backgrounds = [
                new background({x:0, y:0, imgName: 'background8'}),
            ]
            life_ups = [
              new life_up({x:37*gridSize, y:3*gridSize})
            ]
            jewels = [
              new jewel({x:107*gridSize, y:3*gridSize, number:3}),
              new jewel({x:69*gridSize,  y:3*gridSize, number:3}),
              new jewel({x:90*gridSize,  y:3*gridSize, number:3}),
            ]
            tiles = create_brownMountain(-1,10,158,2)
            tiles = tiles.concat(create_brownMountain(-1,-1,158,3))
            tiles = tiles.concat(create_brownHill1( 27, 5, 5))
            tiles = tiles.concat(create_brownHill1( 37, 5, 5))
            tiles = tiles.concat(create_brownHill1( 49, 5, 5))
            tiles = tiles.concat(create_brownHill1( 60, 5, 5))
            tiles = tiles.concat(create_brownHill1( 69, 5, 5))
            tiles = tiles.concat(create_brownHill1( 80, 5, 5))
            tiles = tiles.concat(create_brownHill1( 90, 5, 5))
            tiles = tiles.concat(create_brownHill1(107, 5, 5))
            tiles = tiles.concat(create_brownHill1(127, 5, 5))
            drops = [

                new drop({x:12*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:13*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:14*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:15*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:16*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:17*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:18*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:19*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:21*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:22*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:23*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:24*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:30*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:31*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:32*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:33*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:34*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:40*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:41*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:42*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:43*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:44*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:45*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:46*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:52*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:53*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:54*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:55*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:56*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:57*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:58*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:62*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:63*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:64*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:65*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:66*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:67*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:71*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:72*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:73*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:74*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:75*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:76*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:77*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:82*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:83*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:84*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:85*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:86*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:87*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:92*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:93*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:94*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:95*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:96*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:97*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:98*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:99*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:100*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:101*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:102*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:103*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:104*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:109*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:100*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:111*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:112*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:113*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:114*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:115*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:116*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:117*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:118*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:119*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:110*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:121*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:122*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:123*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:124*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
  //              new drop({x:125*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
  //              new drop({x:126*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
  //              new drop({x:127*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
  //              new drop({x:128*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:129*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:130*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),

                new drop({x:131*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:132*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:133*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:134*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:135*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:136*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:137*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:138*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:139*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
                new drop({x:140*gridSize, y:2*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.35)}),
            ]
            Nave = [ new nave({x:200,y:150}) ]
            gates = [ new gate({x:150*gridSize,y:7*gridSize}) ]
            btns = create_joystick("b");
            lifes = [ new Life({x:38, y:8}) ]
            painels = [ new painel({x:0, y:0}), ]
            barraVidas1  = [ new barraVida1({x:70, y:2}), ]
            barraVidas2  = [ new barraVida2({x:80, y:11}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 9:
            if(!isNull(music)){music.stop();music = null;}
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=3;
            scenario.rMin=-3;
            scenario.rMax=0;
            backgrounds = [
                new background({x:0, y:0, imgName: 'background8'}),
            ]
            Nave = [ new nave({x:200,y:150}) ]
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
            life_ups = [ new life_up({x:25*gridSize, y:6*gridSize}) ]
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
        case 10:
          if(!isNull(music)){music.stop();music = null;}
          resetObjects();
          scenario.cMin=0;
          scenario.cMax=3;
          scenario.rMin=-3;
          scenario.rMax=0;
          backgrounds = [
              new background({x:0, y:0, imgName: 'background8'}),
          ]
          drops = [
              new drop({x:10*gridSize, y:4*gridSize, speedAnimation: 0.1}),
              new drop({x:13*gridSize, y:4*gridSize, speedAnimation: 0.2}),
              new drop({x:15*gridSize, y:4*gridSize, speedAnimation: 0.1}),
              new drop({x:20*gridSize, y:4*gridSize, speedAnimation: 0.15}),
              new drop({x:16*gridSize, y:4*gridSize, speedAnimation: 0.3}),
              new drop({x:23*gridSize, y:4*gridSize, speedAnimation: 0.25}),
              new drop({x:25*gridSize, y:4*gridSize, speedAnimation: 0.3}),
              new drop({x:26*gridSize, y:4*gridSize, speedAnimation: 0.2}),
              new drop({x:30*gridSize, y:4*gridSize, speedAnimation: 0.2}),
              new drop({x:33*gridSize, y:4*gridSize, speedAnimation: 0.4}),
              new drop({x:35*gridSize, y:4*gridSize, speedAnimation: 0.2}),
              new drop({x:36*gridSize, y:4*gridSize, speedAnimation: 0.3}),
              new drop({x:37*gridSize, y:4*gridSize, speedAnimation: 0.25}),
              new drop({x:38*gridSize, y:4*gridSize, speedAnimation: 0.1}),
              new drop({x:40*gridSize, y:4*gridSize, speedAnimation: 0.15}),
              new drop({x:46*gridSize, y:4*gridSize, speedAnimation: 0.34}),
              new drop({x:48*gridSize, y:4*gridSize, speedAnimation: 0.2}),
              new drop({x:53*gridSize, y:4*gridSize, speedAnimation: 0.5}),
              new drop({x:55*gridSize, y:4*gridSize, speedAnimation: 0.4}),
              new drop({x:56*gridSize, y:4*gridSize, speedAnimation: 0.25}),
              new drop({x:60*gridSize, y:4*gridSize, speedAnimation: 0.22}),
              new drop({x:63*gridSize, y:4*gridSize, speedAnimation: 0.3}),
              new drop({x:65*gridSize, y:4*gridSize, speedAnimation: 0.42}),
              new drop({x:72*gridSize, y:-4*gridSize, speedAnimation: 0.42}),
              new drop({x:68*gridSize, y:-4*gridSize, speedAnimation: 0.4}),
              new drop({x:66*gridSize, y:-4*gridSize, speedAnimation: 0.35}),
              new drop({x:65*gridSize, y:-4*gridSize, speedAnimation: 0.2}),
              new drop({x:63*gridSize, y:-4*gridSize, speedAnimation: 0.25}),
              new drop({x:61*gridSize, y:-4*gridSize, speedAnimation: 0.1}),
              new drop({x:60*gridSize, y:-4*gridSize, speedAnimation: 0.22}),
              new drop({x:58*gridSize, y:-4*gridSize, speedAnimation: 0.12}),
              new drop({x:56*gridSize, y:-4*gridSize, speedAnimation: 0.23}),
              new drop({x:55*gridSize, y:-4*gridSize, speedAnimation: 0.18}),
              new drop({x:53*gridSize, y:-4*gridSize, speedAnimation: 0.23}),
              new drop({x:52*gridSize, y:-4*gridSize, speedAnimation: 0.26}),
              new drop({x:51*gridSize, y:-4*gridSize, speedAnimation: 0.28}),
              new drop({x:48*gridSize, y:-4*gridSize, speedAnimation: 0.1}),
              new drop({x:46*gridSize, y:-4*gridSize, speedAnimation: 0.2}),
              new drop({x:45*gridSize, y:-4*gridSize, speedAnimation: 0.15}),
              new drop({x:43*gridSize, y:-4*gridSize, speedAnimation: 0.25}),
              new drop({x:42*gridSize, y:-4*gridSize, speedAnimation: 0.22}),
              new drop({x:41*gridSize, y:-4*gridSize, speedAnimation: 0.21}),
              new drop({x:38*gridSize, y:-4*gridSize, speedAnimation: 0.15}),
              new drop({x:36*gridSize, y:-4*gridSize, speedAnimation: 0.23}),
              new drop({x:35*gridSize, y:-4*gridSize, speedAnimation: 0.12}),
              new drop({x:33*gridSize, y:-4*gridSize, speedAnimation: 0.22}),
              new drop({x:32*gridSize, y:-4*gridSize, speedAnimation: 0.26}),
              new drop({x:31*gridSize, y:-4*gridSize, speedAnimation: 0.2}),
              new drop({x:28*gridSize, y:-4*gridSize, speedAnimation: 0.1}),
              new drop({x:26*gridSize, y:-4*gridSize, speedAnimation: 0.22}),
              new drop({x:25*gridSize, y:-4*gridSize, speedAnimation: 0.1}),
              new drop({x:23*gridSize, y:-4*gridSize, speedAnimation: 0.2}),
              new drop({x:22*gridSize, y:-4*gridSize, speedAnimation: 0.3}),
              new drop({x:21*gridSize, y:-4*gridSize, speedAnimation: 0.18}),
              new drop({x:19*gridSize, y:-4*gridSize, speedAnimation: 0.12}),
              new drop({x:18*gridSize, y:-4*gridSize, speedAnimation: 0.13}),
              new drop({x:16*gridSize, y:-4*gridSize, speedAnimation: 0.2}),
              new drop({x:15*gridSize, y:-4*gridSize, speedAnimation: 0.13}),
              new drop({x:13*gridSize, y:-4*gridSize, speedAnimation: 0.25}),
              new drop({x:12*gridSize, y:-4*gridSize, speedAnimation: 0.32}),
              new drop({x:11*gridSize, y:-4*gridSize, speedAnimation: 0.1}),
              new drop({x:24*gridSize, y:-24*gridSize, speedAnimation: 0.2}),
              new drop({x:23*gridSize, y:-24*gridSize, speedAnimation: 0.2}),
              new drop({x:22*gridSize, y:-24*gridSize, speedAnimation: 0.23}),
              new drop({x:21*gridSize, y:-24*gridSize, speedAnimation: 0.18}),
              new drop({x:19*gridSize, y:-24*gridSize, speedAnimation: 0.12}),
              new drop({x:18*gridSize, y:-24*gridSize, speedAnimation: 0.13}),
              new drop({x:16*gridSize, y:-24*gridSize, speedAnimation: 0.2}),
              new drop({x:15*gridSize, y:-24*gridSize, speedAnimation: 0.13}),
              new drop({x:13*gridSize, y:-24*gridSize, speedAnimation: 0.25}),
              new drop({x:12*gridSize, y:-24*gridSize, speedAnimation: 0.32}),
              new drop({x:11*gridSize, y:-24*gridSize, speedAnimation: 0.1}),
              new drop({x:09*gridSize, y:-24*gridSize, speedAnimation: 0.15}),
              new drop({x:08*gridSize, y:-24*gridSize, speedAnimation: 0.18}),
              new drop({x:6*gridSize,  y:-24*gridSize, speedAnimation: 0.23}),
              new drop({x:5*gridSize,  y:-24*gridSize, speedAnimation: 0.1}),
              new drop({x:3*gridSize,  y:-24*gridSize, speedAnimation: 0.2}),
              new drop({x:2*gridSize,  y:-24*gridSize, speedAnimation: 0.25}),
              new drop({x:1*gridSize,  y:-24*gridSize, speedAnimation: 0.15}),
              new drop({x:27*gridSize, y:-12*gridSize, speedAnimation: 0.2}),
              new drop({x:29*gridSize, y:-13*gridSize, speedAnimation: 0.25}),
              new drop({x:31*gridSize, y:-13*gridSize, speedAnimation: 0.3}),
              new drop({x:33*gridSize, y:-13*gridSize, speedAnimation: 0.21}),
              new drop({x:34*gridSize, y:-13*gridSize, speedAnimation: 0.25}),
              new drop({x:35*gridSize, y:-13*gridSize, speedAnimation: 0.3}),
              new drop({x:37*gridSize, y:-13*gridSize, speedAnimation: 0.22}),
              new drop({x:39*gridSize, y:-13*gridSize, speedAnimation: 0.25}),
              new drop({x:41*gridSize, y:-13*gridSize, speedAnimation: 0.3}),
              new drop({x:43*gridSize, y:-13*gridSize, speedAnimation: 0.25}),
              new drop({x:44*gridSize, y:-13*gridSize, speedAnimation: 0.2}),
              new drop({x:45*gridSize, y:-13*gridSize, speedAnimation: 0.32}),
              new drop({x:47*gridSize, y:-13*gridSize, speedAnimation: 0.4}),
              new drop({x:49*gridSize, y:-13*gridSize, speedAnimation: 0.15}),
              new drop({x:51*gridSize, y:-13*gridSize, speedAnimation: 0.5}),
              new drop({x:37*gridSize, y:-22*gridSize, speedAnimation: 0.25}),
              new drop({x:38*gridSize, y:-22*gridSize, speedAnimation: 0.15}),
              new drop({x:39*gridSize, y:-22*gridSize, speedAnimation: 0.35}),
              new drop({x:40*gridSize, y:-22*gridSize, speedAnimation: 0.30}),
              new drop({x:41*gridSize, y:-22*gridSize, speedAnimation: 0.10}),
              new drop({x:43*gridSize, y:-22*gridSize, speedAnimation: 0.22}),
              new drop({x:44*gridSize, y:-22*gridSize, speedAnimation: 0.12}),
              new drop({x:45*gridSize, y:-22*gridSize, speedAnimation: 0.32}),
              new drop({x:47*gridSize, y:-22*gridSize, speedAnimation: 0.34}),
              new drop({x:49*gridSize, y:-22*gridSize, speedAnimation: 0.12}),
              new drop({x:51*gridSize, y:-22*gridSize, speedAnimation: 0.23}),
              new drop({x:53*gridSize, y:-22*gridSize, speedAnimation: 0.25}),
              new drop({x:54*gridSize, y:-22*gridSize, speedAnimation: 0.16}),
              new drop({x:55*gridSize, y:-22*gridSize, speedAnimation: 0.30}),
              new drop({x:57*gridSize, y:-22*gridSize, speedAnimation: 0.5}),
              new drop({x:59*gridSize, y:-22*gridSize, speedAnimation: 0.4}),
              new drop({x:1*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5) }),
              new drop({x:2*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:3*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:5*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:6*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:7*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5) }),
              new drop({x:8*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:9*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:12*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:14*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:17*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5) }),
              new drop({x:18*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:19*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:22*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:24*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:27*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5) }),
              new drop({x:28*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:29*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:32*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:34*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:37*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5) }),
              new drop({x:38*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:39*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:42*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:44*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:47*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5) }),
              new drop({x:48*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:49*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:52*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:54*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:57*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5) }),
              new drop({x:58*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:59*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:62*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:64*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
              new drop({x:65*gridSize, y:-31*gridSize, speedAnimation: getRandomArbitrary(0.1, 0.5)}),
          ]
          Nave = [ new nave({x:200,y:250}) ]
          tiles = create_brownMountain(-1,10,10,3);
          tiles = tiles.concat(   create_brownHill1(65, -1,  3));
          tiles = tiles.concat(create_brownMountain(-1,-33,  70,  2));
          tiles = tiles.concat(create_brownMountain(-1,  2,  70,  2));
          tiles = tiles.concat(create_brownMountain(10, -6,  70,  2));
          tiles = tiles.concat(create_brownMountain(55, -2,   4,  2));
          tiles = tiles.concat(create_brownMountain(40, -2,   4,  2));
          tiles = tiles.concat(create_brownMountain(20, -2,   7,  2));
          tiles = tiles.concat(create_brownMountain(-1, -26, 30,  2));
          tiles = tiles.concat(create_brownMountain(12, -18,  2, 12));
          tiles = tiles.concat(create_brownMountain(26, -24,  2, 12));
          tiles = tiles.concat(create_brownMountain(28, -15, 25,  2));
          tiles = tiles.concat(create_brownMountain(60, -22,  2, 16));
          tiles = tiles.concat(create_brownMountain(37, -24,  25, 2));
          tiles = tiles.concat(create_brownMountain(43, -19,  4,  2));
          tiles = tiles.concat(create_brownMountain(30, -19,  4,  2));
          tiles = tiles.concat(create_brownMountain(40, -10,  4,  2));
          tiles = tiles.concat(create_brownMountain(50, -10,  4,  2));
          tiles = tiles.concat(create_brownMountain(21,   9, 30,  4));
          tiles = tiles.concat(create_brownMountain(68,   9, 10,  4));
          tiles = tiles.concat(create_brownMountain(68, -32,  2, 16));
          tiles = tiles.concat(create_brownMountain(75, -28,  3,  2));
          tiles = tiles.concat(create_brownMountain(75, -24,  3,  2));
          tiles = tiles.concat(create_brownMountain(75, -20,  3,  2));
          tiles = tiles.concat(create_brownMountain(75, -16,  3,  2));
          tiles = tiles.concat(create_brownMountain(75, -12,  3,  2));
          lavas = lava1_create(9,11,12);
          lavas = lavas.concat(lava1_create(51,10,17));
          lavas = lavas.concat(lava2_create(51,11,17));
          bubbles = [
            new bubble({x:10*gridSize, y:10*gridSize, speedAnimation: 0.5}),
            new bubble({x:13*gridSize, y:10*gridSize, speedAnimation: 0.7}),
            new bubble({x:19*gridSize, y:10*gridSize, speedAnimation: 0.6 }),
            new bubble({x:53*gridSize, y:9*gridSize,  speedAnimation: 0.5}),
            new bubble({x:59*gridSize, y:9*gridSize,  speedAnimation: 0.7}),
            new bubble({x:62*gridSize, y:9*gridSize,  speedAnimation: 0.6 }),
          ]
          enemys = [
            new robot ({x:76*gridSize, y:-25*gridSize, moveSize:22}),
            new robot ({x:76*gridSize, y:-21*gridSize, moveSize:22}),
            new robot ({x:76*gridSize, y:-17*gridSize, moveSize:22}),
            new robot ({x:76*gridSize, y:-25*gridSize, moveSize:22}),
            new robot ({x:76*gridSize, y:-21*gridSize, moveSize:22}),
            new robot ({x:76*gridSize, y:-17*gridSize, moveSize:22}),
            new robot ({x:76*gridSize, y:-13*gridSize, moveSize:22}),
            new boss1 ({x:8*gridSize, y:-28*gridSize, moveSize:122}),
          ]
          jewels = [
            new jewel({x:72*gridSize,  y:  8*gridSize, number:3}),
            new jewel({x: 4*gridSize,  y: -2*gridSize, number:3}),
            new jewel({x:58*gridSize,  y: -8*gridSize, number:3}),
            new jewel({x:58*gridSize,  y:-28*gridSize, number:3}),
          ]
          life_ups = [ new life_up({ x:3*gridSize,  y:-28*gridSize }), ]
          gates = [ new gate({x:74*gridSize,y:-32*gridSize}) ]
          btns = create_joystick("b");
          lifes = [ new Life({x:38, y:8}) ]
          painels = [ new painel({x:0, y:0}), ]
          barraVidas1  = [ new barraVida1({x:70, y:2}), ]
          barraVidas2  = [ new barraVida2({x:80, y:11}), ]
          fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 11:
            if(!isNull(music)){music.stop();music = null;}
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=2;
            scenario.rMin=0;
            scenario.rMax=0;
            backgrounds = [
                new background({x:0, y:0, imgName: 'background8'}),
            ]
            Nave = [ new nave({x:200,y:150}) ]
            enemys = [
              new boss4({x:35*gridSize,y:7*gridSize,moveSize:80})
            ]
            life_ups = [ new life_up({x:30*gridSize, y:8*gridSize})]
            jewels = [
              new jewel({x:30*gridSize, y:7*gridSize, number:1}),
            ]
            tiles = create_brownMountain(-1,-1,54,2);
            tiles = tiles.concat(create_brownMountain(36,5,8,2));
            tiles = tiles.concat(create_brownMountain(32,5,2,6));
            tiles = tiles.concat(create_brownMountain(46,5,2,6));
            tiles = tiles.concat(create_brownMountain(-1,10,54,2));
            shocks = create_shock_h(48,7,4,true);
            drops = [
                new drop({x:9*gridSize,  y:1*gridSize, speedAnimation: 0.1}),
                new drop({x:10*gridSize, y:1*gridSize, speedAnimation: 0.9}),
                new drop({x:11*gridSize, y:1*gridSize, speedAnimation: 0.3}),
                new drop({x:14*gridSize, y:1*gridSize, speedAnimation: 0.4}),
                new drop({x:15*gridSize, y:1*gridSize, speedAnimation: 0.5}),
                new drop({x:16*gridSize, y:1*gridSize, speedAnimation: 0.2}),
                new drop({x:17*gridSize, y:1*gridSize, speedAnimation: 0.6}),
                new drop({x:18*gridSize, y:1*gridSize, speedAnimation: 0.55}),
                new drop({x:20*gridSize, y:1*gridSize, speedAnimation: 0.2}),
                new drop({x:23*gridSize, y:1*gridSize, speedAnimation: 0.15}),
                new drop({x:24*gridSize, y:1*gridSize, speedAnimation: 0.25}),
                new drop({x:25*gridSize, y:1*gridSize, speedAnimation: 0.7}),
                new drop({x:26*gridSize, y:1*gridSize, speedAnimation: 0.35}),
                new drop({x:27*gridSize, y:1*gridSize, speedAnimation: 0.05}),
                new drop({x:34*gridSize, y:1*gridSize, speedAnimation: 0.15}),
                new drop({x:35*gridSize, y:1*gridSize, speedAnimation: 0.12}),
                new drop({x:40*gridSize, y:1*gridSize, speedAnimation: 0.18}),
                new drop({x:44*gridSize, y:1*gridSize, speedAnimation: 0.15}),
                new drop({x:45*gridSize, y:1*gridSize, speedAnimation: 0.12}),
            ]
            gates = [ new gate({x:49*gridSize,y:8*gridSize}) ]
            btns = create_joystick("b");
            lifes = [ new Life({x:38, y:8}) ]
            painels = [ new painel({x:0, y:0}), ]
            barraVidas1  = [ new barraVida1({x:70, y:2}), ]
            barraVidas2  = [ new barraVida2({x:80, y:11}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 12:
          if(!isNull(music)){music.stop();music = null;}
          resetObjects();
          backgrounds = [ new background({imgName: 'scene4'}),]
          nexts = [ new btn_next({x:40, y:100, imgName:"next"}), ]
          fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
          music = new sound({audioName:"theme"})
          music.musicPlay();
        break;
        case 13:
            if(!isNull(music)){music.stop();music = null;}
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=6;
            scenario.rMin=0;
            scenario.rMax=0;
            backgrounds = [
              new background({x:0, y:0, imgName: 'background10'}),
            ]
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
            Nave = [ new nave({x:200,y:150}) ]
            jewels = [
              new jewel({x:62*gridSize, y:4*gridSize, number:1})
            ]
            life_ups = [
              new life_up({x:90*gridSize, y:3*gridSize})
            ]
            gates = [ new gate({x:150*gridSize,y:6*gridSize}) ]
            btns = create_joystick("w");
            lifes = [ new Life({x:38, y:8}) ]
            painels = [ new painel({x:0, y:0}), ]
            barraVidas1  = [ new barraVida1({x:70, y:2}), ]
            barraVidas2  = [ new barraVida2({x:80, y:11}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 14:
          if(!isNull(music)){music.stop();music = null;}
          resetObjects();
          backgrounds = [ new background({imgName: 'scene5'}),]
          nexts = [ new btn_next({x:40, y:100, imgName:"next"}), ]
          fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
          music = new sound({audioName:"theme"})
          music.musicPlay();
        break;
        case 15:
          if(!isNull(music)){music.stop();music = null;}
          resetObjects();
          scenario.cMin=0;
          scenario.cMax=6;
          scenario.rMin=0;
          scenario.rMax=0;
          backgrounds = [
            new background({x:0, y:0, imgName: 'background10'}),
          ]
          static_objs = [
            new static_obj({x:300, y:120, imgName: 'planet2'}),
            new static_obj({x:150, y:180, imgName: 'planet11'}),
            new static_obj({x:0, y:330, imgName: 'orbit'}),
          ]
          Nave = [ new nave({x:200,y:150}) ]
          jewels = [
            new jewel({x:30*gridSize, y:getRandomArbitrary(2,10)*gridSize, number:1}),
            new jewel({x:65*gridSize, y:getRandomArbitrary(2,10)*gridSize, number:1}),
            new jewel({x:95*gridSize, y:getRandomArbitrary(2,10)*gridSize, number:1}),
            new jewel({x:125*gridSize, y:getRandomArbitrary(2,10)*gridSize, number:1}),
          ]
          satelites = [
            new satelite({x:10*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:12*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:13*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:15*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:16*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:18*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:20*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:21*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:22*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:23*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:24*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:26*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:28*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:30*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:31*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:32*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:33*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:34*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:35*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:36*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:37*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:38*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:39*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:40*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:41*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:42*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:43*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:44*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:45*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:46*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:47*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:48*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:49*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:50*gridSize,y:getRandomArbitrary(2,10)*gridSize}),

            new satelite({x:51*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:52*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:53*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:54*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:55*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:56*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:57*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:58*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:59*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:60*gridSize,y:getRandomArbitrary(2,10)*gridSize}),

            new satelite({x:61*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:62*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:63*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:64*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:65*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:66*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:67*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:68*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:69*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:70*gridSize,y:getRandomArbitrary(2,10)*gridSize}),

            new satelite({x:71*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:72*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:73*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:74*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:75*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:76*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:77*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:78*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:79*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:80*gridSize,y:getRandomArbitrary(2,10)*gridSize}),

            new satelite({x:81*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:82*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:83*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:84*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:85*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:86*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:87*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:88*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:89*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:90*gridSize,y:getRandomArbitrary(2,10)*gridSize}),

            new satelite({x:91*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:92*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:93*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:94*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:95*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:96*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:97*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:98*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:99*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:100*gridSize,y:getRandomArbitrary(2,10)*gridSize}),

            new satelite({x:101*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:102*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:103*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:104*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:105*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:106*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:107*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:108*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:109*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:110*gridSize,y:getRandomArbitrary(2,10)*gridSize}),

            new satelite({x:111*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:112*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:113*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:114*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:115*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:116*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:117*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:118*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:119*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:120*gridSize,y:getRandomArbitrary(2,10)*gridSize}),

            new satelite({x:121*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:122*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:123*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:124*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:125*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:126*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:127*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:128*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:129*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:130*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
/**/
            new satelite({x:131*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:132*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:133*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:134*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:135*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:136*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:137*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:138*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:139*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
            new satelite({x:140*gridSize,y:getRandomArbitrary(2,10)*gridSize}),
          ]
          shocks = create_shock_h(149, 5, 4, true);
          shocks = shocks.concat(create_shock_v(149, 5, 4, true));
          shocks = shocks.concat(create_shock_h(149, 8, 4, true));
          shocks = shocks.concat(create_shock_v(149+3, 5, 4, true));
          gates = [ new gate({x:150*gridSize,y:6*gridSize}) ]
          btns = create_joystick("w");
          lifes = [ new Life({x:38, y:8}) ]
          painels = [ new painel({x:0, y:0}), ]
          barraVidas1  = [ new barraVida1({x:70, y:2}), ]
          barraVidas2  = [ new barraVida2({x:80, y:11}), ]
          fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 16:
          if(!isNull(music)){music.stop();music = null;}
          resetObjects();
          scenario.cMin=0;
          scenario.cMax=6;
          scenario.rMin=0;
          scenario.rMax=0;
          backgrounds = [
            new background({x:0, y:0, imgName: 'background2'}),
          ]
          static_objs = [
            new static_obj({x:300, y:120, imgName: 'planet2'}),
            new static_obj({x:150, y:180, imgName: 'planet11'}),
            new static_obj({x:0, y:0, imgName: 'atmosphere'}),
          ]
          tiles = create_whiteMountain(-1,9,158,4);
          buildings = create_alien_building(9,4,5);
          buildings = buildings.concat(create_alien_building(49,4,5));
          buildings = buildings.concat(create_alien_building(69,4,5));
          buildings = buildings.concat(create_alien_building(92,4,5));
          buildings = buildings.concat(create_alien_building(122,6,3));
          shocks = create_shock_v(82,1,8);
          shocks = shocks.concat(create_shock_v(22,1,8));
          shocks = shocks.concat(create_shock_v(49,1,3));
          shocks = shocks.concat(create_shock_v(69,1,3));
          shocks = shocks.concat(create_shock_v(92,1,3));
          shocks = shocks.concat(create_shock_v(122,1,5));
          shocks = shocks.concat(create_shock_v(103,1,8));
          shocks = shocks.concat(create_shock_v(135,1,8));
          Nave = [ new nave({x:200,y:150}) ]
          jewels = [
            new jewel({x:62*gridSize, y:4*gridSize, number:1}),
            new jewel({x:121*gridSize, y:4*gridSize, number:1}),
            new jewel({x:124*gridSize, y:4*gridSize, number:3}),
          ]
          life_ups = [ new life_up({x:28*gridSize, y:7*gridSize})]
          enemys = [
              new antiaerea({x:12*gridSize, y:7*gridSize, moveSize: 70}),
              new antiaerea({x:32*gridSize, y:7*gridSize, moveSize: 50}),
              new antiaerea({x:39*gridSize, y:7*gridSize, moveSize: 45}),
              new antiaerea({x:53*gridSize, y:7*gridSize, moveSize: 40}),
              new antiaerea({x:63*gridSize, y:7*gridSize, moveSize: 50}),
              new antiaerea({x:88*gridSize, y:7*gridSize, moveSize: 45}),
              new antiaerea({x:95*gridSize, y:7*gridSize, moveSize: 50}),
              new antiaerea({x:108*gridSize, y:7*gridSize, moveSize: 52}),
              new antiaerea({x:126*gridSize, y:7*gridSize, moveSize: 42}),
              new antiaerea({x:138*gridSize, y:7*gridSize, moveSize: 40}),
          ]
          gates = [ new gate({x:150*gridSize,y:6*gridSize}) ]
          btns = create_joystick("b");
          lifes = [ new Life({x:38, y:8}) ]
          painels = [ new painel({x:0, y:0}), ]
          barraVidas1  = [ new barraVida1({x:70, y:2}), ]
          barraVidas2  = [ new barraVida2({x:80, y:11}), ]
          fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
        case 17:
            if(!isNull(music)){music.stop();music = null;}
            resetObjects();
            scenario.cMin=0;
            scenario.cMax=2;
            scenario.rMin=0;
            scenario.rMax=0;
            backgrounds = [
              new background({x:0, y:0, imgName: 'background2'}),
            ]
            static_objs = [
              new static_obj({x:300, y:120, imgName: 'planet2'}),
              new static_obj({x:150, y:180, imgName: 'planet11'}),
              new static_obj({x:0, y:0, imgName: 'atmosphere'}),
            ]
            enemys = [
              new boss3({x:35*gridSize, y:4*gridSize, moveSize:80}),
              new antiaerea({x:15*gridSize, y:8*gridSize, moveSize:80})
            ]
            Nave = [ new nave({x:200,y:150}) ]
            jewels = [
              new jewel({x:62*gridSize, y:4*gridSize, number:1})
            ]
            life_ups = [
              new life_up({x:17*gridSize, y:8*gridSize})
            ]
            tiles = create_whiteMountain(-1,10,58,3)
            shocks = create_shock_h(47,5,4,true)
            shocks = shocks.concat(create_shock_v(47,5,4,true))
            shocks = shocks.concat(create_shock_v(50,5,4,true))
            shocks = shocks.concat(create_shock_h(47,8,4,true))
            shocks = shocks.concat(create_shock_v(32,3,6,true))
            shocks = shocks.concat(create_shock_v(32,9,2,true))
            shocks = shocks.concat(create_shock_h(32,3,14,true))
            gates = [ new gate({x:48*gridSize,y:6*gridSize}) ]
            btns = create_joystick("b");
            lifes = [ new Life({x:38, y:8}) ]
            painels = [ new painel({x:0, y:0}), ]
            barraVidas1  = [ new barraVida1({x:70, y:2}), ]
            barraVidas2  = [ new barraVida2({x:80, y:11}), ]
            fulls = [ new full_screen({x:canvas.width-70, y:10}), ]
        break;
    }
}
function create_joystick(color){
    var refjst = {x:30,y:100}
    var sBtn = 65; //comprimento curto
    var lBtn = 95; //comprimento longo
    btns = [
        new btn_a({x:refjst.x+canvas.width-170,y:refjst.y+130, color:color}),
        new btn_upleft({x:refjst.x,y:refjst.y, color:color}),
        new btn_up({x:refjst.x+sBtn+sBtn,y:refjst.y, color:color}),
        new btn_upright({x:refjst.x+lBtn+lBtn,y:refjst.y, color:color}),
        new btn_left({x:refjst.x,y:refjst.y+sBtn+sBtn, color:color}),
        new btn_center({x:refjst.x+sBtn+sBtn,y:refjst.y+sBtn+sBtn, color:color}),
        new btn_right({x:refjst.x+lBtn+lBtn,y:refjst.y+sBtn+sBtn, color:color}),
        new btn_downleft({x:refjst.x,y:refjst.y+lBtn+lBtn, color:color}),
        new btn_down({x:refjst.x+sBtn+sBtn,y:refjst.y+lBtn+lBtn, color:color}),
        new btn_downright({x:refjst.x+lBtn+lBtn,y:refjst.y+lBtn+lBtn, color:color}),
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
