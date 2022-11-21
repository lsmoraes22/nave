let percLoad = 0;
class imageCanvas {

    imgList = [];
    imageObj = "";
    img_src= "images/";

    resources = [
        {name: "arrow",                   src: this.img_src+"arrow.png",	            sx:0,	sy:0,	width:70,	height:70	},
        {name: "assets",                  src: this.img_src+"assets.png",	            sx:0,	sy:0,	width:35,	height:35	},
        {name: "antiaerea",               src: this.img_src+"antiaerea.png",	        sx:0,	sy:0,	width:70,	height:70	},
        {name: "building",                src: this.img_src+"building.png",	          sx:0,	sy:0,	width:35,	height:35	},
        {name: "bubble",                  src: this.img_src+"bubble.png",	            sx:0,	sy:0,	width:35,	height:35	},
        {name: "alien_building",          src: this.img_src+"alien_building.png",	    sx:0,	sy:0,	width:35,	height:35	},
        {name: "drone",                   src: this.img_src+"drone.png",	            sx:0,	sy:0,	width:35,	height:35	},
        {name: "drop",                    src: this.img_src+"drop.png", 	            sx:0,	sy:0,	width:35,	height:35	},
        {name: "tree",                    src: this.img_src+"tree.png",	              sx:0,	sy:0,	width:35,	height:35	},
        {name: "shot",                    src: this.img_src+"shot.png",	               sx:0,	sy:0,	width:35,	height:35	},
        {name: "shot_enemy",              src: this.img_src+"shot_enemy.png",	        sx:0,	sy:0,	width:35,	height:35	},
        {name: "play",                    src: this.img_src+"play.png",	              sx:0,	sy:0,	width:101,	height:35	},
        {name: "play-again",              src: this.img_src+"play-again.png",	        sx:0,	sy:0,	width:220,	height:35	},
        {name: "button_a",                src: this.img_src+"button_a.png",	          sx:0,	sy:0,	width:100,	height:100	},
        {name: "btn_center",              src: this.img_src+"btn_center.png",	        sx:0,	sy:0,	width:60,	height:60	},
        {name: "btn_down",                src: this.img_src+"btn_down.png",	          sx:0,	sy:0,	width:60,	height:130 },
        {name: "btn_downleft",            src: this.img_src+"btn_downleft.png",	      sx:0,	sy:0,	width:130,	height:130 },
        {name: "btn_downright",           src: this.img_src+"btn_downright.png",	    sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_left",                src: this.img_src+"btn_left.png",	          sx:0,	sy:0,	width:130,	height:60	},
        {name: "btn_right",               src: this.img_src+"btn_right.png",	        sx:0,	sy:0,	width:130,	height:60	},
        {name: "btn_up",                  src: this.img_src+"btn_up.png",	            sx:0,	sy:0,	width:60,	height:130	},
        {name: "btn_upleft",              src: this.img_src+"btn_upleft.png",	        sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_upright",             src: this.img_src+"btn_upright.png",	      sx:0,	sy:0,	width:130,	height:130	},
        {name: "button_a_2",              src: this.img_src+"button_a_2.png",	        sx:0,	sy:0,	width:100,	height:100	},
        {name: "btn_center_2",            src: this.img_src+"btn_center_2.png",	      sx:0,	sy:0,	width:60,	height:60	},
        {name: "btn_down_2",              src: this.img_src+"btn_down_2.png",	        sx:0,	sy:0,	width:60,	height:130	},
        {name: "btn_downleft_2",          src: this.img_src+"btn_downleft_2.png",	    sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_downright_2",         src: this.img_src+"btn_downright_2.png",	  sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_left_2",              src: this.img_src+"btn_left_2.png",	        sx:0,	sy:0,	width:130,	height:60	},
        {name: "btn_right_2",             src: this.img_src+"btn_right_2.png",	      sx:0,	sy:0,	width:130,	height:60	},
        {name: "btn_up_2",                src: this.img_src+"btn_up_2.png",	          sx:0,	sy:0,	width:60,	height:130	},
        {name: "btn_upleft_2",            src: this.img_src+"btn_upleft_2.png",	      sx:0,	sy:0,	width:130,	height:130	},
        {name: "btn_upright_2",           src: this.img_src+"btn_upright_2.png",	    sx:0,	sy:0,	width:130,	height:130	},
        {name: "boss1",                   src: this.img_src+"boss1.png",	            sx:0,	sy:0,	width:35,	height:35	},
        {name: "boss2",                   src: this.img_src+"boss2.png",	            sx:0,	sy:0,	width:35,	height:35	},
        {name: "boss3",                   src: this.img_src+"boss3.png",	            sx:0,	sy:0,	width:35,	height:35	},
        {name: "boss3_explosion",         src: this.img_src+"boss3_explosion.png",	  sx:0,	sy:0,	width:35,	height:35	},
        {name: "boss4",                   src: this.img_src+"boss4.png",	            sx:0,	sy:0,	width:35,	height:35	},
        {name: "full_screen",             src: this.img_src+"full_screen.png",	      sx:0,	sy:0,	width:35,	height:35	},
        {name: "fury",                    src: this.img_src+"fury.png",	              sx:0,	sy:0,	width:35,	height:35	},
        {name: "energy_house",            src: this.img_src+"energy_house.png",	      sx:0,	sy:0,	width:35,	height:35	},
        {name: "painel",                  src: this.img_src+"painel.png",	            sx:0,	sy:0,	width:410,	height:35	},
        {name: "barraProtecao1",          src: this.img_src+"barraProtecao1.png",	    sx:0,	sy:0,	width:550,	height:35	},
        {name: "barraProtecao2",          src: this.img_src+"barraProtecao2.png",	    sx:0,	sy:0,	width:285,	height:15	},
        {name: "barraSuperTiro1",         src: this.img_src+"barraSuperTiro1.png",	  sx:0,	sy:0,	width:550,	height:35	},
        {name: "barraSuperTiro2",         src: this.img_src+"barraSuperTiro2.png",	  sx:0,	sy:0,	width:285,	height:15	},
        {name: "barraVida1",              src: this.img_src+"barraVida1.png",	        sx:0,	sy:0,	width:550,	height:35	},
        {name: "barraVida2",              src: this.img_src+"barraVida2.png",	        sx:0,	sy:0,	width:285,	height:15	},
        {name: "numbers_p",               src: this.img_src+"numbers_p.png",            sx:0,	sy:0,	width:285,	height:15	},
        {name: "joystick",                src: this.img_src+"joystick3.png",            sx:0,	sy:0,	width:101,	height:35	},
        {name: "lava",                    src: this.img_src+"lava.png",	                sx:0,	sy:0,	width:35,	height:35	},
        {name: "nave",                    src: this.img_src+"nave.png",	                sx:0,	sy:0,	width:35,	height:35	},
        {name: "gate",                    src: this.img_src+"gate_b.png",	            sx:0,	sy:0,	width:70,	height:70	},
        {name: "gate_m",                  src: this.img_src+"gate_b_m.png",	            sx:0,	sy:0,	width:70,	height:70	},
        {name: "next",                    src: this.img_src+"next.png",	                sx:0,	sy:0,	width:120,	height:41	},
        {name: "nave_enemy1",             src: this.img_src+"nave_enemy1.png",	        sx:0,	sy:0,	width:35,	height:35	},
        {name: "nave_enemy2",             src: this.img_src+"nave_enemy2.png",	        sx:0,	sy:0,	width:35,	height:35	},
        {name: "robot",                   src: this.img_src+"robot.png",	            sx:0,	sy:0,	width:35,	height:35	},
        {name: "lifeBoss1",               src: this.img_src+"lifeBoss1.png",	        sx:0,	sy:0,	width:37,	height:2	},
        {name: "lifeBoss2",               src: this.img_src+"lifeBoss2.png",	        sx:0,	sy:0,	width:37,	height:2	},
        {name: "atmosphere",              src: this.img_src+"atmosphere.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "background1",             src: this.img_src+"background1.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "background2",             src: this.img_src+"background2.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "background3",             src: this.img_src+"background3.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "background4",             src: this.img_src+"background4.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "background5",             src: this.img_src+"background5.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "background6",             src: this.img_src+"background6.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "background7",             src: this.img_src+"background7.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "background8",             src: this.img_src+"background8.png",	        sx:0,	sy:0,	width:900,	height:506   },
        {name: "background9",             src: this.img_src+"background9.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "background10",            src: this.img_src+"background10.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "orbit",                   src: this.img_src+"orbit.png",	            sx:0,	sy:0,	width:900,	height:74	},
        {name: "paralaxe1",               src: this.img_src+"paralaxe1.png",	        sx:0,	sy:0,	width:1280,	height:720	},
        {name: "planet1",                 src: this.img_src+"planet1.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet2",                 src: this.img_src+"planet2.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet3",                 src: this.img_src+"planet3.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet4",                 src: this.img_src+"planet4.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet5",                 src: this.img_src+"planet5.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet6",                 src: this.img_src+"planet6.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet7",                 src: this.img_src+"planet7.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet8",                 src: this.img_src+"planet8.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet9",                 src: this.img_src+"planet9.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet10",                src: this.img_src+"planet10.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet11",                src: this.img_src+"planet11.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet12",                src: this.img_src+"planet12.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet13",                src: this.img_src+"planet13.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet14",                src: this.img_src+"planet14.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet15",                src: this.img_src+"planet15.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "planet16",                src: this.img_src+"planet16.png",  	        sx:0,	sy:0,	width:256,	height:256	},
        {name: "protection",               src: this.img_src+"protection.png",    	  sx:0,	sy:0,	width:35,	height:35	},
        {name: "shock_off",               src: this.img_src+"shock_off.png",    	    sx:0,	sy:0,	width:35,	height:35	},
        {name: "shock_h_on",              src: this.img_src+"shock_h_on.png",  	      sx:0,	sy:0,	width:35,	height:35	},
        {name: "shock_v_on",              src: this.img_src+"shock_v_on.png",  	      sx:0,	sy:0,	width:35,	height:35	},
        {name: "title",                   src: this.img_src+"title.png",	            sx:0,	sy:0,	width:900,	height:506	},
        {name: "teleguide",               src: this.img_src+"teleguide.png",	        sx:0,	sy:0,	width:900,	height:506	},
        {name: "scene1",                  src: this.img_src+"scene1.png",	            sx:0,	sy:0,	width:900,	height:506	},
        {name: "scene2",                  src: this.img_src+"scene2.png",	            sx:0,	sy:0,	width:900,	height:506	},
        {name: "scene3",                  src: this.img_src+"scene3.png",	            sx:0,	sy:0,	width:900,	height:506	},
        {name: "scene4",                  src: this.img_src+"scene4.png",	            sx:0,	sy:0,	width:900,	height:506	},
        {name: "scene5",                  src: this.img_src+"scene5.png",	            sx:0,	sy:0,	width:900,	height:506	},
        {name: "game-over",               src: this.img_src+"game-over.png",	        sx:0,	sy:0,	width:900,	height:506	},
    ];

    preloadImage = function (img, onload, onerror) {
        for(var i = 0; i < Object.keys(img).length; i++){
            this.imgList[img[i].name] = Object.assign({image : new Image()});
            this.imgList[img[i].name].image.src = img[i].src;
            this.imgList[img[i].name].image.alt = img[i].name;
            this.imgList[img[i].name].image.sx = img[i].sx;
            this.imgList[img[i].name].image.sy = img[i].sy;
            this.imgList[img[i].name].image.width = img[i].width;
            this.imgList[img[i].name].image.height = img[i].height;
            this.imgList[img[i].name].image.class = img[i].class;
            percLoad = (i+1)/Object.keys(img).length;
        }
    }

    run = function (imgURL, x, y){
        this.imageObj = new Image();
        c.drawImage(
        this.imgList[imgURL].image,
        x,
        y,
        this.imgList[imgURL].image.width,
        this.imgList[imgURL].image.height
        );
        this.imageObj.src = this.imgList[imgURL].image.src;
    }
}
