class sprite{
    constructor({x, y, imgName, assX, assY, imgFrm, loop, next, end, speedAnimation}){
        this.frames = 0                                //
        this.speedAnimation = speedAnimation           //velocidade da animacao 1=100%=60fps; 0.5=50%=30fps
        this.imgName = imgName                         //
        this.position ={x:x, y:y}                      //-scenario.y
        this.sprite = {
            img: imgName,                              //nome da imagem
            assetPos: {x:assX, y:assY},                //posicao do quadrante dentro do asset
            cropWidth: gridSize,                       //largura do corte da imagem
            cropHeight: gridSize,                      //altura do corte da imagem
            width: gridSize,                           //largura da colagem da imagem
            height: gridSize,                          //altura da colagem da imagem
            imgFrm: imgFrm,                            //quantidade de imagens da animacao
            loop: loop,                                //true repeticao infinita da animacao false: animacao apresenta uma vez
            next: next,                                //proxima animacao caso loop = false
            end: end                                   //fim da animacao true / false
        }
    }
    draw(){
        if( this.position.x<canvas.width &&
            this.position.y<canvas.height &&
            this.position.x+this.sprite.width>0 &&
            this.position.y+this.sprite.height>0 ){
            c.drawImage(
                img.imgList[this.sprite.img].image,
                (this.sprite.assetPos.x * this.sprite.cropWidth) + (Math.floor(this.frames*this.speedAnimation) * this.sprite.cropWidth), //
                this.sprite.assetPos.y * this.sprite.cropHeight,
                this.sprite.cropWidth,
                this.sprite.cropHeight,
                this.position.x,
                this.position.y,
                this.sprite.width,
                this.sprite.height,
            )
        }
    }
    animation(){
        this.draw();
        this.frames++;
        if(this.sprite.loop){
            if(Math.floor(this.frames*this.speedAnimation)==this.sprite.imgFrm){this.frames=0;return false;}
        } else {
            if(Math.floor(this.frames*this.speedAnimation)==this.sprite.imgFrm){this.frames=0; return true;}else{return false;}
        }
    }
}

class images{
    constructor({x, y, imgName}){
        this.imgName = imgName
        this.width = img.imgList[this.imgName].image.width
        this.height = img.imgList[this.imgName].image.height
        this.static = false
        this.position ={x:x, y:y}
        this.crop = {
            x:0,
            y:0,
            width: img.imgList[this.imgName].image.width,
            height: img.imgList[this.imgName].image.height
        }
    }
    draw(){
        c.drawImage(
            img.imgList[this.imgName].image,
            this.crop.x,
            this.crop.y,
            this.crop.width,
            this.crop.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    animation(){
        this.draw();
    }
    colision(x,y){
        var colision = {position:{
          x: this.position.x,
          y:this.position.y
        }
    }
        if(x>=colision.position.x &&
           x<=colision.position.x+this.width &&
           y>=colision.position.y &&
           y<=colision.position.y+this.height){
               return true;
           }else{
               return false;
           }
    }
}

class sound{
    constructor({audioName}){
        this.audioName = audioName
        this.musicOn = false
    }
    play = function (){
        snd.audList[this.audioName].play();
    }
    musicPlay= function (){ this.musicOn = true }
    musicRun = function (){
      if(this.musicOn){
        if(snd.audList[this.audioName].currentTime==0 ||
          snd.audList[this.audioName].currentTime==snd.audList[this.audioName].duration){
          snd.audList[this.audioName].play();
        }
      }
    }
    stop = function (){
        this.musicOn = false
        snd.audList[this.audioName].pause();
        snd.audList[this.audioName].currentTime = 0;
    }
    pause = function (){
        snd.audList[this.audioName].pause();
    }
}

class character {                                              //personagem
    constructor({x, y, colx, coly, colw, colh}){
        this.position = {x: x, y: y}
        this.positionAbsolute = {x: x, y: y}
        this.scenario = {
             x: Math.floor(x/canvas.width),
             y: Math.floor(y/canvas.height)
        }
        this.currentSprite = null                              //sprite atual
        this.bodyColision = {x:colx, y:coly, w:colw, h:colh}   //pontos de colisao
        this.sprites = {}                                      //criar new sprite
        this.sounds = {}                                       //criar new sound
        this.principal = false                                 //personagem controlado pelo joystick
    }
    setNextSprite(sprt){
        this.currentSprite = sprt;
    }
    action(sprt){                                              //funcao executa a animacao atual
        this.currentSprite = sprt;
        if(this.principal){
            this.positionAbsolute.x = this.position.x;
            this.positionAbsolute.y = this.position.y;
            if(scenario.c>scenario.cMin){
                if(this.position.x<=canvas.width*0.33){scenario.x-=naveSpeedMove;this.position.x+=naveSpeedMove;}
            } else {
                if(this.position.x<=0){this.position.x+=naveSpeedMove;}
            }
            if(scenario.y>(scenario.rMin*scenario.rHeight)){
                if(this.position.y<=400*0.3){scenario.y-=naveSpeedMove;this.position.y+=naveSpeedMove;}
            } else {
                if(this.position.y<=400*0.15){this.position.y+=naveSpeedMove;}
            }
            if(scenario.x+canvas.width<=scenario.cWidth*scenario.cMax){
                 if(this.position.x+this.bodyColision.w>=canvas.width*0.66){scenario.x+=naveSpeedMove;this.position.x-=naveSpeedMove;}
            } else {
                 if(this.position.x>=canvas.width-this.bodyColision.w-20){this.position.x-=naveSpeedMove;}
            }
            if(scenario.y+canvas.height<=scenario.rHeight){
                if(this.position.y+this.bodyColision.h>=400*0.55){scenario.y+=naveSpeedMove;this.position.y-=naveSpeedMove;}
            } else {
                if(this.position.y>=400-this.bodyColision.h){this.position.y-=naveSpeedMove;}
            }
        }else{
            this.positionAbsolute.x = this.position.x-scenario.x;
            this.positionAbsolute.y = this.position.y-scenario.y;
        }
        this.currentSprite.position.x = this.positionAbsolute.x;
        this.currentSprite.position.y = this.positionAbsolute.y;
        if(
            this.currentSprite.position.x<canvas.width*2 &&
            this.currentSprite.position.x>-canvas.width &&
            this.currentSprite.position.y<canvas.height*2 &&
            this.currentSprite.position.y>-canvas.height
        ){
            return this.currentSprite.animation();
        }
    }
    colision(x,y){
        var colision = {position:{x: this.positionAbsolute.x, y:this.positionAbsolute.y}}
        if(x>=colision.position.x+this.bodyColision.x &&
           x<=colision.position.x+this.bodyColision.x+this.bodyColision.w &&
           y>=colision.position.y+this.bodyColision.y &&
           y<=colision.position.y+this.bodyColision.y+this.bodyColision.h){
           return true;
           }else{
           return false;
           }
    }
    points(number){                                            //pontos do objeto para colisao
        var ret = {x:null, y:null};
        switch(number) {
           case 1:
               ret.x=this.positionAbsolute.x+this.bodyColision.x;
               ret.y=this.positionAbsolute.y+this.bodyColision.y;
           break;
           case 2:
               ret.x=this.positionAbsolute.x+this.bodyColision.x+this.bodyColision.w;
               ret.y=this.positionAbsolute.y+this.bodyColision.y;
           break;
           case 3:
               ret.x=this.positionAbsolute.x+this.bodyColision.x+this.bodyColision.w;
               ret.y=this.positionAbsolute.y+this.bodyColision.y+this.bodyColision.h;
           break;
           case 4:
               ret.x=this.positionAbsolute.x+this.bodyColision.x;
               ret.y=this.positionAbsolute.y+this.bodyColision.y+this.bodyColision.h;
           break;
           case 5:
               ret.x=this.positionAbsolute.x+this.bodyColision.x+(this.bodyColision.w/2);
               ret.y=this.positionAbsolute.y+this.bodyColision.y+this.bodyColision.h;
           break;
           case 6:
               ret.x=this.positionAbsolute.x+this.bodyColision.x+(this.bodyColision.w/2);
               ret.y=this.positionAbsolute.y+this.bodyColision.y;
           break;
           case 7:
               ret.x=this.positionAbsolute.x+this.bodyColision.x+this.bodyColision.w;
               ret.y=this.positionAbsolute.y+this.bodyColision.y+(this.bodyColision.h/2);
           break;
           case 8:
               ret.x=this.positionAbsolute.x+this.bodyColision.x;
               ret.y=this.positionAbsolute.y+this.bodyColision.y+(this.bodyColision.h/2);
           break;
        }
        return ret;
    }
}

class nave extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:4, coly:4, colw:26, colh:31})
        this.nameSprite = 'right'                              //nome do sprite a ser executado
        this.shotReady = true                                  //true: preparado para tiro, false: tempo inatividade, 'timeSetup': tempo apos a explosao
        this.timeShot = 0                                      //tempo do disparo at� o momento atual
        this.furyTime = 750                                    //Tempo de duracao do supertiro
        this.furyTimeClock = 0                                 //clock do supertiro
        this.furyTimeOnOff = 'off'                             //supertiro liga desliga
        this.maxTimeShot = 140                                 //tempo max ate o proximo disparo
        this.lifeBarr = 100                                    //barra de vida
        this.shotNumber = 1                                    //numero da cor do tiro 1:amarelo, 2:vermelho, 3:verde, 4:roxo
        this.shotCount = 7                                     //numero de tiros simultaneos  ex: 1, 2, 4
        this.shotCurrent = 0                                   //disparo atual
        this.sprites = {
            explosion: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:0,
                assY:0,
                imgFrm:15,
                loop: false,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 1
            }),
            invisible: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:0,
                assY:4,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.5
            }),
            right: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:3,
                assY:1,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
            left: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:5,
                assY:1,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
            up: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"nave",
                assX:0,
                assY:5,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
            down: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"nave",
                assX:0,
                assY:4,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
            upleft: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"nave",
                assX:0,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
            downleft: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"nave",
                assX:0,
                assY:2,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
            upright: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"nave",
                assX:0,
                assY:1,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
            downright: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"nave",
                assX:0,
                assY:3,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName:'explosion4'}) ],
          laserShoot: [
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'}),
            new sound({audioName:'laserShoot'})
          ]
        }
        this.shot = [
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null}),
            new shot({x: null, y:null})
        ]
        this.protection = new protection({x:this.position.x, y:this.position.y})
        this.furied = new fury({x:this.position.x, y:this.position.y})
    }
    fire(){
        if(this.shotReady){
           this.shot[this.shotCurrent].shotNumber = this.shotNumber;
           this.sounds.laserShoot[this.shotNumber].play();
           if(this.shotCurrent==this.shot.length-1){this.shotCurrent=0;}else{this.shotCurrent++;}
           if(this.nameSprite == 'right'){
               this.shot[this.shotCurrent].position.x = this.position.x+this.bodyColision.x+this.bodyColision.w+scenario.x;
               this.shot[this.shotCurrent].position.y = this.position.y+scenario.y;
               this.shot[this.shotCurrent].r_fire();
               this.shotReady = false;
           } else if(this.nameSprite == 'left'){
               this.shot[this.shotCurrent].position.x = this.position.x-this.bodyColision.x-this.bodyColision.w+scenario.x-10;
               this.shot[this.shotCurrent].position.y = this.position.y+scenario.y;
               this.shot[this.shotCurrent].l_fire();
               this.shotReady = false;
           } else if(this.nameSprite == 'up'){
               this.shot[this.shotCurrent].position.x = this.position.x+scenario.x;
               this.shot[this.shotCurrent].position.y = this.position.y-this.bodyColision.y-this.bodyColision.h+scenario.y-10 ;
               this.shot[this.shotCurrent].u_fire();
               this.shotReady = false;
           } else if(this.nameSprite == 'down'){
               this.shot[this.shotCurrent].position.x = this.position.x+scenario.x;
               this.shot[this.shotCurrent].position.y = this.position.y+this.bodyColision.y+this.bodyColision.h+scenario.y;
               this.shot[this.shotCurrent].d_fire();
               this.shotReady = false;
           } else if(this.nameSprite == 'upright'){
               this.shot[this.shotCurrent].position.x = this.position.x+this.bodyColision.x+this.bodyColision.w+scenario.x+5;
               this.shot[this.shotCurrent].position.y = this.position.y-this.bodyColision.y-10-this.bodyColision.h+scenario.y;//-this.shot[this.shotCurrent].bodyColision.h;
               this.shot[this.shotCurrent].ur_fire();
               this.shotReady = false;
           } else if(this.nameSprite == 'upleft'){
               this.shot[this.shotCurrent].position.x = this.position.x-this.bodyColision.x-this.bodyColision.w+scenario.x-8;
               this.shot[this.shotCurrent].position.y = this.position.y-this.bodyColision.y-this.bodyColision.h+scenario.y-8;
               this.shot[this.shotCurrent].ul_fire();
               this.shotReady = false;
           } else if(this.nameSprite == 'downright'){
               this.shot[this.shotCurrent].position.x = this.position.x+this.bodyColision.x+this.bodyColision.w+scenario.x+3;
               this.shot[this.shotCurrent].position.y = this.position.y+this.bodyColision.y+this.bodyColision.h+scenario.y+3;
               this.shot[this.shotCurrent].dr_fire();
               this.shotReady = false;
           } else if(this.nameSprite == 'downleft'){
               this.shot[this.shotCurrent].position.x = this.position.x-this.bodyColision.x-this.bodyColision.w+scenario.x-4;//-this.shot[this.shotCurrent].bodyColision.w;
               this.shot[this.shotCurrent].position.y = this.position.y+this.bodyColision.y+this.bodyColision.h+scenario.y+2;
               this.shot[this.shotCurrent].dl_fire();
               this.shotReady = false;
           }
        }
    }
    shot_upgrade(){
      this.shotNumber = (this.shotNumber<3 ? this.shotNumber+1 : 3);
      this.shot.forEach((item, i) => {
        this.shot[i].upgrade();
      });
    }
    fury(){
      this.shotCount=20;this.furyTimeOnOff='on';
    }
    damage(damage){
      if(this.protection.onOff=='off'){this.lifeBarr -=damage; }
    }
    explode(){
      if(this.protection.onOff=='off'){
        this.nameSprite = 'explosion';
        this.sounds.explosion[0].play();
      }
    }
    crash(){
      this.nameSprite = 'explosion'; this.sounds.explosion[0].play();
    }
    update(){
        this.principal = true;
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
            if(this.lifeBarr<=0 && this.nameSprite !== 'explosion' ){this.explode(); this.lifeBarr=100;}
        } else {
            die();
        }
        if(this.nameSprite == 'right'){
          this.bodyColision = {x:6, y:11, w: 28, h: 12};
        } else if(this.nameSprite == 'left'){
          this.bodyColision = {x:0, y:11, w: 28, h: 12};
        } else if(this.nameSprite == 'upright'){
          this.bodyColision = {x:10, y:5, w: 21, h: 21};
        } else if(this.nameSprite == 'upleft'){
          this.bodyColision = {x:5, y:5, w: 21, h: 21};
        } else if(this.nameSprite == 'downright'){
          this.bodyColision = {x:9, y:9, w: 21, h: 21};
        } else if(this.nameSprite == 'downleft'){
          this.bodyColision = {x:5, y:9, w: 21, h: 21};
        } else if(this.nameSprite == 'up'){
          this.bodyColision = {x:0, y:0, w: 35, h: 35};
        } else if(this.nameSprite == 'down'){
          this.bodyColision = {x:0, y:0, w: 35, h: 35};
        }
        if(!this.shotReady){ this.timeShot++; }
        if(this.timeShot>=(this.maxTimeShot/this.shotCount)){ this.timeShot=0; }
        if(this.timeShot==0){ this.shotReady=true; }
        this.shot.forEach(sht =>{sht.update();})
        this.protection.position.x = this.position.x+scenario.x;
        this.protection.position.y = this.position.y+scenario.y;
        this.protection.update();
        if(this.furyTimeOnOff=='on'){
          if(this.furyTimeClock<=this.furyTime){
            this.furyTimeClock++;
            this.furied.nameSprite = 'fury';
            this.furied.position.x = this.position.x+scenario.x-17;
            this.furied.position.y = this.position.y+scenario.y-17;
            this.furied.update();
          }else{
            this.shotCount = 7;
            this.furyTimeClock=0;
            this.furied.nameSprite = null;
            this.furyTimeOnOff = 'off';
          }
        }
    }
}


class fury extends character {
    constructor({x,y}){
      super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
      this.nameSprite = null                              //nome do sprite a ser executado
      this.sprites = {
        fury: new sprite({
            x:this.position.x,
            y:this.position.y,
            imgName:"fury",
            assX:0,
            assY: 0,
            imgFrm:4,
            loop: true,
            next: null,
            end: false,
            speedAnimation: 1.5
        })
      }
    }
    update(){
      this.sprites.fury.sprite.cropWidth = gridSize*2;
      this.sprites.fury.sprite.cropHeight = gridSize*2;
      this.sprites.fury.sprite.width = gridSize*2;
      this.sprites.fury.sprite.height = gridSize*2;
      if(this.nameSprite !== null){
        if(!this.launchReady){
          this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
          if(this.sprites[this.nameSprite].sprite.end){
              this.nameSprite = this.sprites[this.nameSprite].sprite.next;
          }
        }
      }
    }
}

class protection extends character {
    constructor({x,y}){
      super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
      this.nameSprite = null                              //nome do sprite a ser executado
      this.onOff = 'off'
      this.timeFlickering = 930                            //tempo piscando
      this.timeout = 1000                                   //tempo do fim
      this.timeClock = 0
      this.sprites = {
        on: new sprite({
            x:this.position.x,
            y:this.position.y,
            imgName:"protection",
            assX:0,
            assY: 0,
            imgFrm:2,
            loop: true,
            next: null,
            end: false,
            speedAnimation: 0.2
        }),
        flickering: new sprite({
            x:this.position.x,
            y:this.position.y,
            imgName:"protection",
            assX:0,
            assY: 0,
            imgFrm:4,
            loop: true,
            next: null,
            end: false,
            speedAnimation: 0.4
        })
      }
    }
    turnOn(){
      this.onOff = 'on'; this.nameSprite = "on";
    }
    turnFlickering(){
      this.nameSprite='flickering';
    }
    turnOff(){
      this.onOff = 'off'; this.nameSprite = null;
    }
    update(){
      if(this.nameSprite !== null){
        if(!this.launchReady){
          this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
          if(this.sprites[this.nameSprite].sprite.end){
              this.nameSprite = this.sprites[this.nameSprite].sprite.next;
          }
        }
      }
      if(this.onOff!='off'){
        if(this.timeClock>=this.timeFlickering){if(this.nameSprite!='flickering'){this.turnFlickering();}}
        if(this.timeClock>=this.timeout){
          this.turnOff();
          this.timeClock=0;
        }else{this.timeClock++;}
      }
    }
}

class shot extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = null                              //nome do sprite a ser executado
        this.timeShot = 0;                                  //tempo do disparo ate o momento atual
        this.shotNumber = 1
        this.shotReady = true                               //true: preparado para tiro, false: tempo inatividade
        this.sprites = {
            r_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:0,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: 'r_default',
                end: false,
                speedAnimation: 0.4
            }),
            r_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:1,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            r_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:2,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            l_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:6,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: 'l_default',
                end: false,
                speedAnimation: 0.4
            }),
            l_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:7,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            l_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:8,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            u_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:0,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: false,
                next: 'u_default',
                end: false,
                speedAnimation: 0.4
            }),
            u_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:1,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            u_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:2,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            d_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:6,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: false,
                next: 'd_default',
                end: false,
                speedAnimation: 0.4
            }),
            d_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:7,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            d_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:8,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            ul_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:12,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: 'ul_default',
                end: false,
                speedAnimation: 0.4
            }),
            ul_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:13,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            ul_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:14,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            ur_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:15,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: 'ur_default',
                end: false,
                speedAnimation: 0.4
            }),
            ur_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:16,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            ur_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:17,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            dl_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:12,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: false,
                next: 'dl_default',
                end: false,
                speedAnimation: 0.4
            }),
            dl_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:13,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            dl_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:14,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            dr_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:15,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: false,
                next: 'dr_default',
                end: false,
                speedAnimation: 0.4
            }),
            dr_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:16,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            dr_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot",
                assX:17,
                assY: this.shotNumber+3,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
        }
        this.sounds = {}
        this.speedShot = 10
    }
    r_fire() {
      this.nameSprite = "r_initial";this.shotReady=false;this.bodyColision.x=0;this.bodyColision.y=15;this.bodyColision.w=35;this.bodyColision.h=3;
    }
    l_fire() {
      this.nameSprite = "l_initial";
      this.shotReady=false;
      this.bodyColision.x=0;
      this.bodyColision.y=15;
      this.bodyColision.w=35;
      this.bodyColision.h=3;
    }
    u_fire() {
      this.nameSprite = "u_initial";
      this.shotReady=false;
      this.bodyColision.x=15;
      this.bodyColision.y=0;
      this.bodyColision.w=3;this.bodyColision.h=35;
    }
    d_fire() {
      this.nameSprite = "d_initial";
      this.shotReady=false;
      this.bodyColision.x=15;
      this.bodyColision.y=0;
      this.bodyColision.w=3;
      this.bodyColision.h=35;
    }
    ul_fire(){
      this.nameSprite = "ul_initial";
      this.shotReady=false;
      this.bodyColision.x=0;
      this.bodyColision.y=0;
      this.bodyColision.w=5;
      this.bodyColision.h=5;
    }
    dl_fire(){
      this.nameSprite = "dl_initial";
      this.shotReady=false;
      this.bodyColision.x=0;
      this.bodyColision.y=30;
      this.bodyColision.w=5;
      this.bodyColision.h=5;
    }
    ur_fire(){
      this.nameSprite = "ur_initial";
      this.shotReady=false;
      this.bodyColision.x=30;
      this.bodyColision.y=0;
      this.bodyColision.w=5;
      this.bodyColision.h=5;
    }
    dr_fire(){
      this.nameSprite = "dr_initial";
      this.shotReady=false;
      this.bodyColision.x=30;
      this.bodyColision.y=30;
      this.bodyColision.w=5;
      this.bodyColision.h=5;
    }
    impact(){
        if(this.nameSprite == "r_default"){this.nameSprite = "r_impact";}else
        if(this.nameSprite == "l_default"){this.nameSprite = "l_impact";}else
        if(this.nameSprite == "u_default"){this.nameSprite = "u_impact";}else
        if(this.nameSprite == "d_default"){this.nameSprite = "d_impact";}else
        if(this.nameSprite == "ul_default"){this.nameSprite = "ul_impact";}else
        if(this.nameSprite == "dl_default"){this.nameSprite = "dl_impact";}else
        if(this.nameSprite == "ur_default"){this.nameSprite = "ur_impact";}else
        if(this.nameSprite == "dr_default"){this.nameSprite = "dr_impact";}
    }
    impact_validate(){
        switch(this.nameSprite) {
            case 'ul_default':
            case 'ur_default':
            case 'dl_default':
            case 'dr_default':
            case 'r_default':
            case 'u_default':
            case 'l_default':
            case 'd_default':
                return true;
            default:
                return false;
        }
    }
    upgrade(){
      this.shotNumber = (this.shotNumber<3 ? this.shotNumber+1 : 3);
      this.sprites.r_initial.sprite.assY= this.shotNumber-1;
      this.sprites.r_default.sprite.assY= this.shotNumber-1;
      this.sprites.r_impact.sprite.assY= this.shotNumber-1;
      this.sprites.l_initial.sprite.assY= this.shotNumber-1;
      this.sprites.l_default.sprite.assY= this.shotNumber-1;
      this.sprites.l_impact.sprite.assY= this.shotNumber-1;
      this.sprites.u_initial.sprite.assY= this.shotNumber-1;
      this.sprites.u_default.sprite.assY= this.shotNumber-1;
      this.sprites.u_impact.sprite.assY= this.shotNumber-1;
      this.sprites.d_initial.sprite.assY= this.shotNumber-1;
      this.sprites.d_default.sprite.assY= this.shotNumber-1;
      this.sprites.d_impact.sprite.assY= this.shotNumber-1;
      this.sprites.ul_initial.sprite.assY= this.shotNumber-1;
      this.sprites.ul_default.sprite.assY= this.shotNumber-1;
      this.sprites.ul_impact.sprite.assY= this.shotNumber-1;
      this.sprites.ur_initial.sprite.assY= this.shotNumber-1;
      this.sprites.ur_default.sprite.assY= this.shotNumber-1;
      this.sprites.ur_impact.sprite.assY= this.shotNumber-1;
      this.sprites.dl_initial.sprite.assY= this.shotNumber-1;
      this.sprites.dl_default.sprite.assY= this.shotNumber-1;
      this.sprites.dl_impact.sprite.assY= this.shotNumber-1;
      this.sprites.dr_initial.sprite.assY= this.shotNumber-1;
      this.sprites.dr_default.sprite.assY= this.shotNumber-1;
      this.sprites.dr_impact.sprite.assY= this.shotNumber-1;
    }
    update(){
        if(this.nameSprite !== null){
            if(!this.shotReady){
                this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite])
                if(this.sprites[this.nameSprite].sprite.end){
                    this.nameSprite = this.sprites[this.nameSprite].sprite.next;
                }
                if(this.nameSprite == 'r_default'){ this.position.x+=this.speedShot;}
                if(this.nameSprite == 'l_default'){ this.position.x-=this.speedShot;}
                if(this.nameSprite == 'u_default'){ this.position.y-=this.speedShot;}
                if(this.nameSprite == 'd_default'){ this.position.y+=this.speedShot;}
                if(this.nameSprite == 'ul_default'){ this.position.y-=this.speedShot; this.position.x-=this.speedShot;}
                if(this.nameSprite == 'dl_default'){ this.position.y+=this.speedShot; this.position.x-=this.speedShot;}
                if(this.nameSprite == 'ur_default'){ this.position.y-=this.speedShot; this.position.x+=this.speedShot;}
                if(this.nameSprite == 'dr_default'){ this.position.y+=this.speedShot; this.position.x+=this.speedShot;}
            }
            if(this.positionAbsolute.x >canvas.width ||
               this.positionAbsolute.y >canvas.height ||
               this.positionAbsolute.x <-this.bodyColision.w-this.bodyColision.x ||
               this.positionAbsolute.y <-this.bodyColision.h-this.bodyColision.y
            ){this.shotReady = true; this.positionAbsolute = {x:null,y:null};}
        } else{ this.shotReady = true; this.positionAbsolute = {x:null,y:null}; }
    }
}

class shot_enemy extends character {
    constructor({x,y,number}){
        super({x: x,y: y, colx:15, coly:15, colw:5, colh:5})
        this.nameSprite = null                              //nome do sprite a ser executado
        this.timeShot = 0;                                  //tempo do disparo at� o momento atual
        this.shotNumber = number                            //
        this.shotReady = true                               //true: preparado para tiro, false: tempo inatividade
        this.sprites = {
            l_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:12,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: 'l_default',
                end: false,
                speedAnimation: 0.4
            }),
            l_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:13,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            l_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:14,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            r_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:15,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: 'r_default',
                end: false,
                speedAnimation: 0.4
            }),
            r_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:16,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            r_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:17,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            u_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:18,
                assY: this.shotNumber+1,
                imgFrm:1,
                loop: false,
                next: 'u_default',
                end: false,
                speedAnimation: 0.4
            }),
            u_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:19,
                assY: this.shotNumber+1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            u_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:20,
                assY: this.shotNumber+1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            d_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:21,
                assY: this.shotNumber+1,
                imgFrm:1,
                loop: false,
                next: 'd_default',
                end: false,
                speedAnimation: 0.4
            }),
            d_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:22,
                assY: this.shotNumber+1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            d_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:23,
                assY: this.shotNumber+1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            ul_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:9,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: 'ul_default',
                end: false,
                speedAnimation: 0.4
            }),
            ul_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:10,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            ul_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:11,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            ur_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:0,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: 'ur_default',
                end: false,
                speedAnimation: 0.4
            }),
            ur_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:1,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            ur_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:2,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            dl_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:9,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: 'dl_default',
                end: false,
                speedAnimation: 0.4
            }),
            dl_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:10,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            dl_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:11,
                assY: this.shotNumber-1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            dr_initial: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:6,
                assY: this.shotNumber+1,
                imgFrm:1,
                loop: false,
                next: 'dr_default',
                end: false,
                speedAnimation: 0.4
            }),
            dr_default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:7,
                assY: this.shotNumber+1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            dr_impact: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shot_enemy",
                assX:8,
                assY: this.shotNumber+1,
                imgFrm:1,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
        }
        this.sounds = {}
        this.speedShot = 10
    }
    r_fire() {
      this.nameSprite = "r_initial";
      this.shotReady=false;
    }
    l_fire() {
      this.nameSprite = "l_initial";
      this.shotReady=false;
    }
    u_fire() {
      this.nameSprite = "u_initial";
      this.shotReady=false;
    }
    d_fire() {
      this.nameSprite = "d_initial";
      this.shotReady=false;
    }
    ul_fire(){
      this.nameSprite = "ul_initial";
      this.shotReady=false;
    }
    dl_fire(){
      this.nameSprite = "dl_initial";
      this.shotReady=false;
    }
    ur_fire(){
      this.nameSprite = "ur_initial";
      this.shotReady=false;
    }
    dr_fire(){
      this.nameSprite = "dr_initial";
      this.shotReady=false;
    }
    impact(){
        if(this.nameSprite == "r_default"){this.nameSprite = "r_impact";}else
        if(this.nameSprite == "l_default"){this.nameSprite = "l_impact";}else
        if(this.nameSprite == "u_default"){this.nameSprite = "u_impact";}else
        if(this.nameSprite == "d_default"){this.nameSprite = "d_impact";}else
        if(this.nameSprite == "ul_default"){this.nameSprite = "ul_impact";}else
        if(this.nameSprite == "dl_default"){this.nameSprite = "dl_impact";}else
        if(this.nameSprite == "ur_default"){this.nameSprite = "ur_impact";}else
        if(this.nameSprite == "dr_default"){this.nameSprite = "dr_impact";}
    }
    update(){
        if(this.nameSprite !== null){
            if(!this.shotReady){
                this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite])
                if(this.sprites[this.nameSprite].sprite.end){
                    this.nameSprite = this.sprites[this.nameSprite].sprite.next;
                }
                if(this.nameSprite == 'r_default'){ this.position.x-=this.speedShot;}
                if(this.nameSprite == 'l_default'){ this.position.x+=this.speedShot;}
                if(this.nameSprite == 'u_default'){ this.position.y-=this.speedShot;}
                if(this.nameSprite == 'd_default'){ this.position.y+=this.speedShot;}
                if(this.nameSprite == 'ul_default'){ this.position.y-=this.speedShot; this.position.x-=this.speedShot;}
                if(this.nameSprite == 'dl_default'){ this.position.y+=this.speedShot; this.position.x-=this.speedShot;}
                if(this.nameSprite == 'ur_default'){ this.position.y-=this.speedShot; this.position.x+=this.speedShot;}
                if(this.nameSprite == 'dr_default'){ this.position.y+=this.speedShot; this.position.x+=this.speedShot;}
            }
            if(this.position.x >canvas.width+scenario.x+50 || this.position.y >canvas.height+scenario.y+50 )
            {this.shotReady = true;}
        }else{ this.shotReady = true; this.position = {x:null,y:null}; }
    }
}

class teleguide extends character {
    constructor({x, y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = null                              //nome do sprite a ser executado
        this.timeToSearch = 0                               //tempo para comecar a busca
        this.timeShot = 0;                                  //tempo do disparo at� o momento atual
        this.launchReady = true                             //true: preparado para lancamento, false: tempo inatividade
        this.sprites = {
            up: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:0,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            upright: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:1,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            right: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:2,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            downright: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:3,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),

            down: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:4,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            downleft: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:5,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            left: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:6,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            upleft: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:7,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            initial_up: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:0,
                assY:0,
                imgFrm:1,
                loop: false,
                next: 'up',
                end: false,
                speedAnimation: 0.1
            }),
            initial_upright: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:1,
                assY:0,
                imgFrm:1,
                loop: false,
                next: 'upright',
                end: false,
                speedAnimation: 0.1
            }),
            initial_right: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:2,
                assY:0,
                imgFrm:1,
                loop: false,
                next: 'right',
                end: false,
                speedAnimation: 0.1
            }),
            initial_downright: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:3,
                assY:0,
                imgFrm:1,
                loop: false,
                next: 'downright',
                end: false,
                speedAnimation: 0.1
            }),
            initial_down: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:4,
                assY:0,
                imgFrm:1,
                loop: false,
                next: 'down',
                end: false,
                speedAnimation: 0.1
            }),
            initial_downleft: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:5,
                assY:0,
                imgFrm:1,
                loop: false,
                next: 'downleft',
                end: false,
                speedAnimation: 0.1
            }),
            initial_left: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:6,
                assY:0,
                imgFrm:1,
                loop: false,
                next: 'left',
                end: false,
                speedAnimation: 0.1
            }),
            initial_upleft: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"teleguide",
                assX:7,
                assY:0,
                imgFrm:1,
                loop: false,
                next: 'upleft',
                end: false,
                speedAnimation: 0.1
            }),
            explosion: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:0,
                assY:0,
                imgFrm:15,
                loop: false,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 1
            }),
        }
        this.sounds = { explosion: snd.audList['explosion1'], }
    }
    update(){
        if(this.nameSprite !== null){
            if(!this.launchReady){
                this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
                if(this.sprites[this.nameSprite].sprite.end){
                    this.nameSprite = this.sprites[this.nameSprite].sprite.next;
                }
                if(this.nameSprite=='down'){this.position.y+=3;} else
                if(this.nameSprite=='up'){this.position.y-=3;} else
                if(this.nameSprite=='left'){this.position.x-=3;} else
                if(this.nameSprite=='right'){this.position.x+=3;} else
                if(this.nameSprite=='downright'){this.position.x+=3;this.position.y+=3;} else
                if(this.nameSprite=='upright'){this.position.x+=3;this.position.y-=3;} else
                if(this.nameSprite=='downleft'){this.position.x-=3;this.position.y+=3;} else
                if(this.nameSprite=='upleft'){this.position.x-=3;this.position.y-=3;}
                if(this.position.x >canvas.width+scenario.x+50 || this.position.y >canvas.height+scenario.y+50 ){this.launchReady = true;}
                if(this.position.x <scenario.x-50 || this.position.y <scenario.y-50 ){this.launchReady = true;}
                this.timeToSearch++;
                //if(this.timeToSearch==300){this.impact();}
            }
        }else{
            this.launchReady = true;
            this.position = {x:null,y:null};
            this.timeToSearch = 0;
        }
    }
    up_launch() {
      this.nameSprite='initial_up';
      this.launchReady=false;
    }
    impact() {
      this.nameSprite = "explosion";
      this.positionAbsolute = {x:null,y:null}
    }
}

class arrow extends character {
    constructor({x,y,direction}){
        super({x: x,y: y, colx:0, coly:11, colw:35, colh:24})
        this.nameSprite = direction                              //nome do sprite a ser executado
        this.sprites = {
            left: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"arrow",
                assX:0,
                assY:0,
                imgFrm:3,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            right: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"arrow",
                assX:3,
                assY:0,
                imgFrm:3,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            down: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"arrow",
                assX:0,
                assY:1,
                imgFrm:3,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            up: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"arrow",
                assX:3,
                assY:1,
                imgFrm:3,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
        }
        this.sounds = {}

        this.sprites.left.sprite.cropWidth = gridSize*2
        this.sprites.left.sprite.cropHeight = gridSize*2
        this.sprites.left.sprite.width = gridSize*2
        this.sprites.left.sprite.height = gridSize*2

        this.sprites.right.sprite.cropWidth = gridSize*2
        this.sprites.right.sprite.cropHeight = gridSize*2
        this.sprites.right.sprite.width = gridSize*2
        this.sprites.right.sprite.height = gridSize*2

        this.sprites.up.sprite.cropWidth = gridSize*2
        this.sprites.up.sprite.cropHeight = gridSize*2
        this.sprites.up.sprite.width = gridSize*2
        this.sprites.up.sprite.height = gridSize*2

        this.sprites.down.sprite.cropWidth = gridSize*2
        this.sprites.down.sprite.cropHeight = gridSize*2
        this.sprites.down.sprite.width = gridSize*2
        this.sprites.down.sprite.height = gridSize*2
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class bubble extends character {
    constructor({x,y,speedAnimation}){
        super({x: x,y: y, colx:0, coly:20, colw:35, colh:15})
        this.nameSprite = 'default'                              //nome do sprite a ser executado
        this.sprites = {
            default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"bubble",
                assX:0,
                assY:0,
                imgFrm:20,
                loop: true,
                next: null,
                end: false,
                speedAnimation: speedAnimation
            }),
        }
        this.sounds = {}
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class water1 extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:11, colw:35, colh:24})
        this.nameSprite = 'default'                              //nome do sprite a ser executado
        this.sprites = {
            default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:12,
                assY:1,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.2
            }),
        }
        this.sounds = {}
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class lava extends character {
    constructor({x,y,type}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = type                              //nome do sprite a ser executado
        this.sprites = {
            surface: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"lava",
                assX:0,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            deep: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"lava",
                assX:1,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
        }
        this.sounds = {}
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class drop extends character {
    constructor({x,y, speedAnimation}){
        super({x: x,y: y, colx:10, coly:10, colw:15, colh:15})
        this.nameSprite = 'set'                              //nome do sprite a ser executado
        this.initialPosition = {x:x,y:y}
        this.sprites = {
            set: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"drop",
                assX:0,
                assY:0,
                imgFrm:7,
                loop: false,
                next: 'fall',
                end: false,
                speedAnimation: speedAnimation
            }),
            fall: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"drop",
                assX:7,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
        }
        this.sounds = {}
        this.speedMove = 8;
    }
    reset(){
      this.position.y=this.initialPosition.y;
      this.nameSprite = 'set';
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
            if(this.nameSprite=='fall'){
                if(this.position.y<canvas.height){
                    this.position.y+=this.speedMove;
                } else {
                  this.reset();
                }
            }
        }
    }
}

class gate extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:20, coly:20, colw:30, colh:30})
        this.nameSprite = 'default'                              //nome do sprite a ser executado
        this.sprites = {
            default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"gate",
                assX:0,
                assY:0,
                imgFrm:4,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            implode: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"gate_m",
                assX:0,
                assY:0,
                imgFrm:7,
                loop: false,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            cropWidth: gridSize*2,                       //largura do corte da imagem
            cropHeight: gridSize*2                      //altura do corte da imagem
        }
        this.sprites.default.sprite.cropWidth = gridSize*2
        this.sprites.default.sprite.cropHeight = gridSize*2
        this.sprites.default.sprite.width = gridSize*2
        this.sprites.default.sprite.height = gridSize*2
        this.sprites.implode.sprite.cropWidth = gridSize*2
        this.sprites.implode.sprite.cropHeight = gridSize*2
        this.sprites.implode.sprite.width = gridSize*2
        this.sprites.implode.sprite.height = gridSize*2
        this.sounds = {}
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class shock_v extends character {
    constructor({x,y,shockNumber,continuous}){
        super({x: x,y: y, colx:12, coly:12, colw:10, colh:10})
        this.shockNumber = shockNumber //shockNumber 1:topo 2:centro 3:baixo
        this.nameSprite = (shockNumber==1 ? 'on_v_1' : (shockNumber==2 ? 'on_v_2' : (shockNumber==3 ? 'on_v_3' : '' )))  //nome do sprite a ser executado
        this.continuous = continuous                             //continuo ou intermitente
        this.onOff = 'on'                                        //on or off
        this.sprites = {
            on_v_1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_v_on",
                assX:4,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            on_v_2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_v_on",
                assX:2,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            on_v_3: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_v_on",
                assX:0,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            off_v_1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_off",
                assX:0,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            off_v_2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_off",
                assX:1,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            off_v_3: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_off",
                assX:0,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
        }
        this.sounds = {}
        this.timeAnimation = 0
    }
    update(){
        if(this.nameSprite !== null){
            this.timeAnimation++;
            if(!this.continuous){
                if(Math.floor(this.timeAnimation/100) % 2){
                    this.onOff = 'on';
                } else{
                    this.onOff = 'off';
                }
            }
            if(this.shockNumber==1){
                if(this.onOff=='on' ){
                  this.nameSprite = 'on_v_1';
                  this.bodyColision = {x:12, y:12, w:10, h:23}
                } else
                if(this.onOff=='off'){
                  this.nameSprite = 'off_v_1';
                  this.bodyColision = {x:0, y:0, w:0, h:0}
                }
            } else
            if(this.shockNumber==2){
                if(this.onOff=='on' ){
                  this.nameSprite = 'on_v_2';
                  this.bodyColision = {x:12, y:0, w:10, h:35}
                } else
                if(this.onOff=='off'){
                  this.nameSprite = 'off_v_2';
                  this.bodyColision = {x:0, y:0, w:0, h:0}
                }
            } else
            if(this.shockNumber==3){
                if(this.onOff=='on' ){
                   this.nameSprite = 'on_v_3';
                   this.bodyColision = {x:0, y:0, w:10, h:23}
                 } else
                if(this.onOff=='off'){
                  this.nameSprite = 'off_v_3';
                  this.bodyColision = {x:0, y:0, w:0, h:0}
                }
            }
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class shock_h extends character {
    constructor({x,y,shockNumber,continuous}){
        super({x: x,y: y, colx:12, coly:12, colw:10, colh:10})
        this.shockNumber = shockNumber //1:esquerda 2:centro 3:direita
        this.nameSprite = ''; //(shockNumber==1 ? 'on_h_1' : (shockNumber==2 ? 'on_h_2' : (shockNumber==3 ? 'on_h_3' : '' )))  //nome do sprite a ser executado
        this.continuous = continuous                             //continuo ou intermitente
        this.onOff = 'on'                                        //on or off
        this.sprites = {
            on_h_1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_h_on",
                assX:0,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            on_h_2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_h_on",
                assX:2,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            on_h_3: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_h_on",
                assX:4,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            off_h_1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_off",
                assX:0,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            off_h_2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_off",
                assX:1,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
            off_h_3: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"shock_off",
                assX:0,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.4
            }),
        }
        this.sounds = {}
        this.timeAnimation = 0
    }
    update(){
        if(this.nameSprite !== null){
            this.timeAnimation++;
            if(!this.continuous){
                if(Math.floor(this.timeAnimation/100) % 2){
                    this.onOff = 'on';
                } else{
                    this.onOff = 'off';
                }
            }
            if(this.shockNumber==1){
                if(this.onOff=='on' ){
                  this.nameSprite = 'on_h_1';
                  this.bodyColision = {x:12, y:12, w:23, h:10}
                } else
                if(this.onOff=='off'){
                  this.nameSprite = 'off_h_1';
                  this.bodyColision = {x:0, y:0, w:0, h:0}
                }
            } else
            if(this.shockNumber==2){
                if(this.onOff=='on' ){
                  this.nameSprite = 'on_h_2';
                  this.bodyColision = {x:0, y:12, w:35, h:10}
                } else
                if(this.onOff=='off'){
                  this.nameSprite = 'off_h_2';
                  this.bodyColision = {x:0, y:0, w:0, h:0}
                }
            } else
            if(this.shockNumber==3){
                if(this.onOff=='on' ){
                  this.nameSprite = 'on_h_3';
                  this.bodyColision = {x:0, y:12, w:23, h:10}
                } else
                if(this.onOff=='off'){
                  this.nameSprite = 'off_h_3';
                  this.bodyColision = {x:0, y:0, w:0, h:0}
                }
            }
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class water2 extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'default'                              //nome do sprite a ser executado
        this.sprites = {
            default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:14,
                assY:1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
        }
        this.sounds = {}
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class tree extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:5, coly:2, colw:25, colh:33})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.sprites = {
            fire: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"tree",
                assX:0,
                assY:0,
                imgFrm:3,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:11,
                assY:1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
        }
        this.sounds = {
          explosion: [new sound({audioName:'explosion1'})],
        }
    }
    burn(){
      this.nameSprite = 'fire';
      this.sounds.explosion[0].play();
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class energy_house1 extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:5, coly:2, colw:25, colh:33})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.sprites = {
            destructed: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"energy_house",
                assX:3,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"energy_house",
                assX:0,
                assY:0,
                imgFrm:3,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName:'explosion1'}) ],
        }
    }
    explode(){
      this.sounds.explosion[0].play();
      this.nameSprite = 'destructed';
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class energy_house2 extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:5, coly:2, colw:25, colh:33})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.sprites = {
            destructed: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"energy_house",
                assX:3,
                assY:1,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"energy_house",
                assX:0,
                assY:1,
                imgFrm:3,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName:'explosion1'}) ],
        }
    }
    explode(){
      this.sounds.explosion[0].play();
      this.nameSprite = 'destructed';
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class tile extends character {
    constructor({x,y,tileName}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = tileName                              //nome do sprite a ser executado
        this.sprites = {
            brownHill1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 7,
                assY: 1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownHill2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 8,
                assY: 1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenHill1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 9,
                assY: 1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenHill2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 10,
                assY: 1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteHill1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 3,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteHill2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 4,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownTile1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 6,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownTile2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 7,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownTile3: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 8,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownTile4: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 6,
                assY: 3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownTile5: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 7,
                assY: 3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownTile6: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 8,
                assY: 3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownTile7: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 6,
                assY: 4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownTile8: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 7,
                assY: 4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            brownTile9: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 8,
                assY: 4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenTile1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:9,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenTile2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 10,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenTile3: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 11,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenTile4: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 9,
                assY: 3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenTile5: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 10,
                assY: 3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenTile6: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 11,
                assY: 3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenTile7: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 9,
                assY: 4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenTile8: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 10,
                assY: 4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            greenTile9: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 11,
                assY: 4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteTile1: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 12,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteTile2: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 13,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteTile3: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 14,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteTile4: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 12,
                assY: 3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteTile5: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 13,
                assY: 3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteTile6: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 14,
                assY: 3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteTile7: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 12,
                assY: 4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteTile8: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 13,
                assY: 4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            whiteTile9: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 14,
                assY: 4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
        }
        this.sounds = {

        }
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class asteroide1 extends character {
    constructor({x,y,direction,speed}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.direction = direction                             //v: vertical d:diagonal s:static
        this.speed = speed                                     //velocidade
        this.initialPosition = {x:x,y:y}
        this.sprites = {
          explosion: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:0,
                assY:0,
                imgFrm:15,
                loop: false,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 1
            }),
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:0,
                assY:1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName: 'explosion1'})],
        }
    }
    explode(){
      this.nameSprite = 'explosion';
      this.sounds.explosion[0].play();
    }
    reset(){
      this.position.x=this.initialPosition.x;
      this.position.y=this.initialPosition.y;
      this.nameSprite="alive";
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
               this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
            if(this.direction=="v"){
              this.position.y+=this.speed;
            } else
            if(this.direction=="d"){
              this.position.x-=this.speed;this.position.y+=this.speed;
            }
            if(this.position.y>canvas.height+50 || this.position.x<-50 || this.nameSprite==null){
              this.reset();
            }
        }
    }
}

class asteroide2 extends character {
    constructor({x,y,direction,speed}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.direction = direction                             //v: vertical d:diagonal s:static
        this.speed = speed                                     //velocidade
        this.initialPosition = {x:x,y:y}
        this.sprites = {
            explosion: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:0,
                assY:0,
                imgFrm:15,
                loop: false,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 1
            }),
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:1,
                assY:1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName:'explosion1'}), ],
        }
    }
    explode(){
      this.nameSprite = 'explosion';
      this.sounds.explosion[0].play();
    }
    reset(){
      this.position.x=this.initialPosition.x;
      this.position.y=this.initialPosition.y;
      this.nameSprite="alive";
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
               this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
        if(this.direction=="v"){
          this.position.y+=this.speed;} else
        if(this.direction=="d"){
          this.position.x-=this.speed;this.position.y+=this.speed;}
        if(this.position.y>canvas.height+50 || this.position.x<-50 || this.nameSprite==null){
          this.reset();
        }
    }
}

class satelite extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.sprites = {
            explosion: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:0,
                assY:0,
                imgFrm:15,
                loop: false,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 1
            }),
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:5,
                assY:2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName:'explosion1'}), ],
        }
    }
    explode(){
      this.nameSprite='explosion';
      this.sounds.explosion[0].play();
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
               this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class enemy extends character {
    constructor({x, y, spriteSheet, shotNumber, shotCount, shotDirection, moveSize}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'left'                              //nome do sprite a ser executado
        this.shotNumber = shotNumber                          //tipo de tiro
        this.shotDirection = shotDirection                    //h: horizontal, v: vertical, d: diagonal
        this.launchDirection = 'up'                           //h: horizontal, v: vertical, d: diagonal
        this.speedMove = 2                                    //velocidade do movimento
        this.shotPosIni = {left:{x:0,y:0}, right:{x:0,y:0}}   //posicao inicial xy do tiro
        this.launchPosIni = {
            up:{x:0,y:0},
            right:{x:0,y:0},
            down:{x:0,y:0},
            left:{x:0,y:0}
        }
        this.shotPosAdjust = {left:{x:0,y:0}, right:{x:0,y:0}}  //ajustar posicao inicial xy do tiro (adiciona o valor xy informado)
        this.launchPosAdjust = {
            up:{x:0,y:0},
            right:{x:0,y:0},
            down:{x:0,y:0},
            left:{x:0,y:0},
          }                                                     //ajustar posicao inicial xy do tiro (adiciona o valor xy informado)
        this.spriteSheet = spriteSheet                          //spriteSheet do inimigo
        this.posXIni = this.position.x                          //posicao inicial do movimento
        this.shotReady = true                                   //tiro preparado
        this.animationToShot = false                            //animacao do tiro
        this.haveShot = true                                    //posui tiro
        this.haveTeleguide = false                              //posui lancamento de projetil
        this.type = 'enemy'                                     //enemy or boss
        this.lifeBossMax = 50                                   //vida total do chefe
        this.lifeBossCurrent = this.lifeBossMax                 //vida atual
        this.lifeBossBarr = {
            background: new lifeBoss1({x:null,y:null}),
            life: new lifeBoss2({x:null,y:null})
        }
        this.moveSize = moveSize                                //tamanho do movimento
        this.timeShot = 0                                       //tempo do tiro
        this.timeLaunch = 0                                     //tempo do lancamento
        this.shotCurrent = 1                                    //tiro atual
        this.launchCurrent = 1                                  //lancamento atual
        this.maxTimeShot = 140                                  //tempo maximo do tiro
        this.maxTimeLaunch = 140                                //tempo maximo do lancamento
        this.shotCount = shotCount                              //quantodade de tiros simultaneos
        this.launchCount = 6                                    //quantodade de lancamentos simultaneos
        this.move = 'right';                                    //direcao do movimento
        this.sprites = {
            open: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName: this.spriteSheet,
                assX:8,
                assY:0,
                imgFrm:2,
                loop: false,
                next: 'close',
                end: false,
                speedAnimation: 0.05
            }),
            close: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName: this.spriteSheet,
                assX:8,
                assY:0,
                imgFrm:2,
                loop: false,
                next: 'right',
                end: false,
                speedAnimation: 0.05
            }),
            stopedRight: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName: this.spriteSheet,
                assX:8,
                assY:0,
                imgFrm:2,
                loop: false,
                next: 'left',
                end: false,
                speedAnimation: 0.05
            }),
            stopedLeft: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName: this.spriteSheet,
                assX:8,
                assY:0,
                imgFrm:2,
                loop: false,
                next: 'right',
                end: false,
                speedAnimation: 0.05
            }),
            right: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName: this.spriteSheet,
                assX:4,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
            left: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName: this.spriteSheet,
                assX:6,
                assY:0,
                imgFrm:2,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 1
            }),
            shot_r: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName: this.spriteSheet,
                assX:17,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.7
            }),
            shot_l: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName: this.spriteSheet,
                assX:17,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.7
            }),
            explosion: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName: "assets",
                assX:0,
                assY:0,
                imgFrm:15,
                loop: false,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 1
            }),
        }
        this.sounds = { explosion: snd.audList['explosion1'], }
        this.shot = [
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
            new shot_enemy({x: null, y:null, number: this.shotNumber}),
        ]
        this.teleguides = []
    }
    explode(){
        this.sounds['explosion'].play();
        this.nameSprite = 'explosion';
    }
    launch(){
        if(this.launchReady){
            if(this.launchDirection=='up'){
                if(this.launchCurrent==this.teleguides.length-1){this.launchCurrent=0;}else{this.launchCurrent++;}
                this.launchPosIni.up.x = this.position.x-this.teleguides[0].bodyColision.x-this.teleguides[0].bodyColision.w+this.launchPosAdjust.up.x;
                this.launchPosIni.up.y = this.position.y+this.launchPosAdjust.up.y;
                this.teleguides[this.launchCurrent].position.x = this.launchPosIni.up.x;
                this.teleguides[this.launchCurrent].position.y = this.launchPosIni.up.y;
                this.teleguides[this.launchCurrent].up_launch();
            } else if(this.launchDirection=='down'){
                //falta desenvolver
            } else if(this.launchDirection=='right'){
                //falta desenvolver
            } else if(this.launchDirection=='left'){
                //falta desenvolver
            }
            this.launchReady = false;
        }
    }
    fire(){
        if(this.shotDirection=='h'){
            if(this.shotReady){
                this.shotPosIni.right.x = this.position.x-this.shot[0].bodyColision.x-this.shot[0].bodyColision.w+this.shotPosAdjust.right.x;
                this.shotPosIni.right.y = this.position.y+this.shotPosAdjust.right.y;
                this.shotPosIni.left.x =  this.position.x+this.bodyColision.x+this.bodyColision.w+this.shotPosAdjust.left.x;
                this.shotPosIni.left.y =  this.position.y+this.shotPosAdjust.left.y;
                if(this.shotCurrent==this.shot.length-1){this.shotCurrent=0;}else{this.shotCurrent++;}
                if(this.nameSprite == 'left' || this.nameSprite == 'shot_l' ){
                    this.shot[this.shotCurrent].position.x = this.shotPosIni.left.x;
                    this.shot[this.shotCurrent].position.y = this.shotPosIni.left.y;
                    this.shot[this.shotCurrent].l_fire();
                    this.shotReady = false;
                } else if(this.nameSprite == 'right' || this.nameSprite == 'shot_r'){
                    this.shot[this.shotCurrent].position.x = this.shotPosIni.right.x;
                    this.shot[this.shotCurrent].position.y = this.shotPosIni.right.y;
                    this.shot[this.shotCurrent].r_fire();
                    this.shotReady = false;
                }
             }
        } else if(this.shotDirection=='v'){
          //falta desenvolver
        } else if(this.shotDirection=='d'){
            if(this.shotReady){
               if(this.shotCurrent==this.shot.length-1){this.shotCurrent=0;}else{this.shotCurrent++;}
               if(this.nameSprite == 'left' || this.nameSprite == 'shot_l' ){
                   this.shot[this.shotCurrent].position.x = this.position.x+this.bodyColision.x+this.bodyColision.w;
                   this.shot[this.shotCurrent].position.y = this.position.y-this.bodyColision.x-this.bodyColision.h;
                   this.shot[this.shotCurrent].ur_fire();
                   this.shotReady = false;
               } else if(this.nameSprite == 'right' || this.nameSprite == 'shot_r'){
                   this.shot[this.shotCurrent].position.x = this.position.x-this.bodyColision.x-this.bodyColision.w;
                   this.shot[this.shotCurrent].position.y = this.position.y-this.bodyColision.x-this.bodyColision.h;
                   this.shot[this.shotCurrent].ul_fire();
                   this.shotReady = false;
               }
            }
        }
    }
    update(){
        if(this.nameSprite !== null ){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){ this.nameSprite = this.sprites[this.nameSprite].sprite.next; }
            if(this.animationToShot ){
                if(!this.shotReady){
                    if(this.nameSprite == 'left'){
                        this.nameSprite = 'shot_l';
                    }else if (this.nameSprite == 'right'){
                        this.nameSprite = 'shot_r';
                    }
                } else{
                    if(this.nameSprite == 'shot_l' || this.nameSprite == 'left'){
                        this.nameSprite = 'left';
                    }else if(this.nameSprite == 'shot_r' || this.nameSprite == 'right'){
                        this.nameSprite = 'right';
                    }
                }
            }
            if(this.nameSprite=='left' || this.nameSprite=='right'){
                if (this.move=='left'){
                  this.position.x-=this.speedMove;
                } else if (this.move=='right'){
                  this.position.x+=this.speedMove;
                }
            }
            if(this.type == 'enemy'){
                if(this.posXIni>=this.position.x+this.moveSize ){
                    this.move='right';
                    this.nameSprite = 'left';
                }else if(this.posXIni<=this.position.x-this.moveSize){
                    this.move='left';
                    this.nameSprite = 'right';
                }
            } else if(this.type == 'boss'){
                this.lifeBossBarr.background.position = {x:this.positionAbsolute.x+(this.bodyColision.w/2), y:this.positionAbsolute.y};
                this.lifeBossBarr.life.position = {x:this.positionAbsolute.x+(this.bodyColision.w/2), y:this.positionAbsolute.y};
                this.lifeBossBarr.background.update();
                this.lifeBossBarr.life.width = 37*(this.lifeBossCurrent/this.lifeBossMax);
                this.lifeBossBarr.life.update();
                if (this.nameSprite == 'left' || this.nameSprite == 'right' ){
                    if(this.posXIni>=this.position.x+this.moveSize ){
                        this.nameSprite = 'stopedRight';
                        this.move='right';
                        this.position.x += this.speedMove;
                    } else if(this.posXIni<=this.position.x-this.moveSize){
                        this.nameSprite = 'stopedLeft';
                        this.move='left';
                        this.position.x -= this.speedMove;
                    }
                }
            }
        }
        if(!this.shotReady){ this.timeShot++; }
        if(this.timeShot>=(this.maxTimeShot/this.shotCount)){ this.timeShot=0; }
        if(this.timeShot==0){ this.shotReady=true; }
        if(!this.launchReady){ this.timeLaunch++; }
        if(this.timeLaunch>=(this.maxTimeLaunch/this.launchCount)){ this.timeLaunch=0; }
        if(this.timeLaunch==0){ this.launchReady=true; }
        this.shot.forEach(sht =>{sht.update();})
        this.teleguides.forEach(tlg =>{tlg.update();})
    }
}

class robot extends enemy {
    constructor({x, y, moveSize}){
        super({
            x: x,
            y: y,
            spriteSheet: 'robot',
            shotNumber: 3,
            shotCount:7,
            shotDirection: 'h',
            moveSize: moveSize
        })
        this.shotPosAdjust.right.x = 0
        this.shotPosAdjust.right.y = 0
        this.shotPosAdjust.left.x =  0
        this.shotPosAdjust.left.y = 0
        this.sprites.right.sprite.assetPos.x = 0
        this.sprites.right.speedAnimation = 0.1
        this.sprites.left.sprite.assetPos.x = 3
        this.sprites.left.speedAnimation = 0.1
    }
}
class boss1 extends enemy {
    constructor({x, y, moveSize}){
        super({
            x: x,
            y: y,
            spriteSheet: 'boss1',
            shotNumber: 4,
            shotCount:6,
            shotDirection: 'h',
            moveSize: moveSize
        })
        this.bodyColision = {x:21, y:3, w:24, h:67}
        this.animationToShot = true
        this.type = 'boss'
        this.shotPosAdjust.right.x = 0
        this.shotPosAdjust.right.y = -1
        this.shotPosAdjust.left.x =  10
        this.shotPosAdjust.left.y = -1

        this.sprites.stopedLeft.sprite.cropWidth = gridSize*2
        this.sprites.stopedLeft.sprite.cropHeight = gridSize*2
        this.sprites.stopedLeft.sprite.width = gridSize*2
        this.sprites.stopedLeft.sprite.height = gridSize*2
        this.sprites.stopedLeft.sprite.assetPos.x = 8
        this.sprites.stopedLeft.speedAnimation = 0.02
        this.sprites.stopedLeft.sprite.imgFrm = 1

        this.sprites.stopedRight.sprite.cropWidth = gridSize*2
        this.sprites.stopedRight.sprite.cropHeight = gridSize*2
        this.sprites.stopedRight.sprite.width = gridSize*2
        this.sprites.stopedRight.sprite.height = gridSize*2
        this.sprites.stopedRight.sprite.assetPos.x = 8
        this.sprites.stopedRight.speedAnimation = 0.02
        this.sprites.stopedRight.sprite.imgFrm = 1

        this.sprites.shot_r.sprite.cropWidth = gridSize*2
        this.sprites.shot_r.sprite.cropHeight = gridSize*2
        this.sprites.shot_r.sprite.width = gridSize*2
        this.sprites.shot_r.sprite.height = gridSize*2
        this.sprites.shot_r.sprite.assetPos.x = 17
        this.sprites.shot_r.speedAnimation = 0.2
        this.sprites.shot_r.sprite.imgFrm = 1

        this.sprites.shot_l.sprite.cropWidth = gridSize*2
        this.sprites.shot_l.sprite.cropHeight = gridSize*2
        this.sprites.shot_l.sprite.width = gridSize*2
        this.sprites.shot_l.sprite.height = gridSize*2
        this.sprites.shot_l.sprite.assetPos.x = 18
        this.sprites.shot_l.speedAnimation = 0.2
        this.sprites.shot_l.sprite.imgFrm = 1

        this.sprites.right.sprite.cropWidth = gridSize*2
        this.sprites.right.sprite.cropHeight = gridSize*2
        this.sprites.right.sprite.width = gridSize*2
        this.sprites.right.sprite.height = gridSize*2
        this.sprites.right.sprite.assetPos.x = 0
        this.sprites.right.speedAnimation = 0.2
        this.sprites.right.sprite.imgFrm = 8

        this.sprites.left.sprite.cropWidth = gridSize*2
        this.sprites.left.sprite.cropHeight = gridSize*2
        this.sprites.left.sprite.width = gridSize*2
        this.sprites.left.sprite.height = gridSize*2
        this.sprites.left.sprite.assetPos.x = 9
        this.sprites.left.speedAnimation = 0.2
        this.sprites.left.sprite.imgFrm = 8
    }
}
class boss2 extends enemy {
    constructor({x, y, moveSize}){
        super({
            x: x,
            y: y,
            spriteSheet: 'boss2',
            shotNumber: 4,
            shotCount:14,
            shotDirection: 'h',
            moveSize: moveSize
        })
        this.bodyColision = {x:42, y:6, w:50, h:134}
        this.animationToShot = true
        this.type = 'boss'
        this.shotPosAdjust.right.x = 10
        this.shotPosAdjust.right.y = 13
        this.shotPosAdjust.left.x =  25
        this.shotPosAdjust.left.y = 13

        this.sprites.explosion.sprite.img        = 'boss2'
        this.sprites.explosion.sprite.cropWidth  = gridSize*4
        this.sprites.explosion.sprite.cropHeight = gridSize*4
        this.sprites.explosion.sprite.width      = gridSize*4
        this.sprites.explosion.sprite.height     = gridSize*4
        this.sprites.explosion.sprite.assetPos.x = 19
        this.sprites.explosion.speedAnimation    = 1
        this.sprites.explosion.sprite.imgFrm     = 45

        this.sprites.stopedLeft.sprite.cropWidth = gridSize*4
        this.sprites.stopedLeft.sprite.cropHeight = gridSize*4
        this.sprites.stopedLeft.sprite.width = gridSize*4
        this.sprites.stopedLeft.sprite.height = gridSize*4
        this.sprites.stopedLeft.sprite.assetPos.x = 8
        this.sprites.stopedLeft.speedAnimation = 0.02
        this.sprites.stopedLeft.sprite.imgFrm = 1

        this.sprites.stopedRight.sprite.cropWidth = gridSize*4
        this.sprites.stopedRight.sprite.cropHeight = gridSize*4
        this.sprites.stopedRight.sprite.width = gridSize*4
        this.sprites.stopedRight.sprite.height = gridSize*4
        this.sprites.stopedRight.sprite.assetPos.x = 8
        this.sprites.stopedRight.speedAnimation = 0.02
        this.sprites.stopedRight.sprite.imgFrm = 1

        this.sprites.shot_r.sprite.cropWidth = gridSize*4
        this.sprites.shot_r.sprite.cropHeight = gridSize*4
        this.sprites.shot_r.sprite.width = gridSize*4
        this.sprites.shot_r.sprite.height = gridSize*4
        this.sprites.shot_r.sprite.assetPos.x = 17
        this.sprites.shot_r.speedAnimation = 0.2
        this.sprites.shot_r.sprite.imgFrm = 1

        this.sprites.shot_l.sprite.cropWidth = gridSize*4
        this.sprites.shot_l.sprite.cropHeight = gridSize*4
        this.sprites.shot_l.sprite.width = gridSize*4
        this.sprites.shot_l.sprite.height = gridSize*4
        this.sprites.shot_l.sprite.assetPos.x = 18
        this.sprites.shot_l.speedAnimation = 0.2
        this.sprites.shot_l.sprite.imgFrm = 1

        this.sprites.right.sprite.cropWidth = gridSize*4
        this.sprites.right.sprite.cropHeight = gridSize*4
        this.sprites.right.sprite.width = gridSize*4
        this.sprites.right.sprite.height = gridSize*4
        this.sprites.right.sprite.assetPos.x = 0
        this.sprites.right.speedAnimation = 0.12
        this.sprites.right.sprite.imgFrm = 8

        this.sprites.left.sprite.cropWidth = gridSize*4
        this.sprites.left.sprite.cropHeight = gridSize*4
        this.sprites.left.sprite.width = gridSize*4
        this.sprites.left.sprite.height = gridSize*4
        this.sprites.left.sprite.assetPos.x = 9
        this.sprites.left.speedAnimation = 0.12
        this.sprites.left.sprite.imgFrm = 8
    }
}
class boss3 extends enemy {
    constructor({x, y, moveSize}){
        super({
            x: x,
            y: y,
            spriteSheet: 'boss3',
            shotNumber: 2,
            shotCount:14,
            shotDirection: 'h',
            moveSize: moveSize
        })
        this.bodyColision = {x:20, y:75, w:265, h:100}
        this.haveShot = true;
        this.haveTeleguide = true;
        this.animationToShot = true
        this.type = 'boss'
        this.shotPosAdjust.right.x = -20
        this.shotPosAdjust.right.y = 145
        this.shotPosAdjust.left.x =  225
        this.shotPosAdjust.left.y = 213

        this.launchPosAdjust.up.x = 175
        this.launchPosAdjust.up.y = 12

        this.sprites.explosion.sprite.img        = 'boss3_explosion'
        this.sprites.explosion.sprite.cropWidth  = gridSize*9
        this.sprites.explosion.sprite.cropHeight = gridSize*5
        this.sprites.explosion.sprite.width      = gridSize*9
        this.sprites.explosion.sprite.height     = gridSize*5
        this.sprites.explosion.sprite.assetPos.x = 0
        this.sprites.explosion.speedAnimation    = 1
        this.sprites.explosion.sprite.imgFrm     = 135

        this.sprites.stopedLeft.sprite.cropWidth = gridSize*9
        this.sprites.stopedLeft.sprite.cropHeight = gridSize*5
        this.sprites.stopedLeft.sprite.width = gridSize*9
        this.sprites.stopedLeft.sprite.height = gridSize*5
        this.sprites.stopedLeft.sprite.assetPos.x = 0
        this.sprites.stopedLeft.sprite.assetPos.y = 0
        this.sprites.stopedLeft.speedAnimation = 0.1
        this.sprites.stopedLeft.sprite.imgFrm = 5
        this.sprites.stopedLeft.sprite.next = 'open'

        this.sprites.open.sprite.cropWidth = gridSize*9
        this.sprites.open.sprite.cropHeight = gridSize*5
        this.sprites.open.sprite.width = gridSize*9
        this.sprites.open.sprite.height = gridSize*5
        this.sprites.open.sprite.assetPos.x = 4
        this.sprites.open.sprite.assetPos.y = 0
        this.sprites.open.speedAnimation = 0.01
        this.sprites.open.sprite.imgFrm = 1
        this.sprites.open.sprite.next = 'close'

        this.sprites.close.sprite.cropWidth = gridSize*9
        this.sprites.close.sprite.cropHeight = gridSize*5
        this.sprites.close.sprite.width = gridSize*9
        this.sprites.close.sprite.height = gridSize*5
        this.sprites.close.sprite.assetPos.x = 0
        this.sprites.close.sprite.assetPos.y = 1
        this.sprites.close.speedAnimation = 0.1
        this.sprites.close.sprite.imgFrm = 5

        this.sprites.stopedRight.sprite.cropWidth = gridSize*9
        this.sprites.stopedRight.sprite.cropHeight = gridSize*5
        this.sprites.stopedRight.sprite.width = gridSize*9
        this.sprites.stopedRight.sprite.height = gridSize*5
        this.sprites.stopedRight.sprite.assetPos.x = 0
        this.sprites.stopedRight.sprite.assetPos.y = 0
        this.sprites.stopedRight.speedAnimation = 0.1
        this.sprites.stopedRight.sprite.imgFrm = 5
        this.sprites.stopedRight.sprite.next = 'open'

        this.sprites.shot_r.sprite.cropWidth = gridSize*9
        this.sprites.shot_r.sprite.cropHeight = gridSize*5
        this.sprites.shot_r.sprite.width = gridSize*9
        this.sprites.shot_r.sprite.height = gridSize*5
        this.sprites.shot_r.sprite.assetPos.x = 0
        this.sprites.shot_r.sprite.assetPos.y = 0
        this.sprites.shot_r.speedAnimation = 0.4
        this.sprites.shot_r.sprite.imgFrm = 1

        this.sprites.shot_l.sprite.cropWidth = gridSize*9
        this.sprites.shot_l.sprite.cropHeight = gridSize*5
        this.sprites.shot_l.sprite.width = gridSize*9
        this.sprites.shot_l.sprite.height = gridSize*5
        this.sprites.shot_l.sprite.assetPos.x = 0
        this.sprites.shot_l.sprite.assetPos.y = 0
        this.sprites.shot_l.speedAnimation = 0.4
        this.sprites.shot_l.sprite.imgFrm = 1

        this.sprites.right.sprite.cropWidth = gridSize*9
        this.sprites.right.sprite.cropHeight = gridSize*5
        this.sprites.right.sprite.width = gridSize*9
        this.sprites.right.sprite.height = gridSize*5
        this.sprites.right.sprite.assetPos.x = 0
        this.sprites.right.sprite.assetPos.y = 0
        this.sprites.right.speedAnimation = 0.4
        this.sprites.right.sprite.imgFrm = 1

        this.sprites.left.sprite.cropWidth = gridSize*9
        this.sprites.left.sprite.cropHeight = gridSize*5
        this.sprites.left.sprite.width = gridSize*9
        this.sprites.left.sprite.height = gridSize*5
        this.sprites.left.sprite.assetPos.x = 0
        this.sprites.left.sprite.assetPos.y = 0
        this.sprites.left.speedAnimation = 0.4
        this.sprites.left.sprite.imgFrm = 1
        this.teleguides = [
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null})
        ]
    }
}
class boss4 extends enemy {
    constructor({x, y, moveSize}){
        super({
            x: x,
            y: y,
            spriteSheet: 'boss4',
            shotNumber: 2,
            shotCount:14,
            shotDirection: 'h',
            moveSize: moveSize
        })
        this.bodyColision = {x:42, y:6, w:270, h:134}
        this.animationToShot = true
        this.type = 'boss'
        this.shotPosAdjust.right.x = -20
        this.shotPosAdjust.right.y = 145
        this.shotPosAdjust.left.x =  225
        this.shotPosAdjust.left.y = 213
        this.haveShot = false;

        this.sprites.explosion.sprite.img        = 'boss4'
        this.sprites.explosion.sprite.cropWidth  = 318
        this.sprites.explosion.sprite.cropHeight = gridSize*3
        this.sprites.explosion.sprite.width      = 318
        this.sprites.explosion.sprite.height     = gridSize*3
        this.sprites.explosion.sprite.assetPos.x = 4
        this.sprites.explosion.speedAnimation    = 1
        this.sprites.explosion.sprite.imgFrm     = 45

        this.sprites.stopedLeft.sprite.cropWidth = 318
        this.sprites.stopedLeft.sprite.cropHeight = gridSize*3
        this.sprites.stopedLeft.sprite.width = 318
        this.sprites.stopedLeft.sprite.height = gridSize*3
        this.sprites.stopedLeft.sprite.assetPos.x = 0
        this.sprites.stopedLeft.sprite.assetPos.y = 0
        this.sprites.stopedLeft.speedAnimation = 0.02
        this.sprites.stopedLeft.sprite.imgFrm = 4

        this.sprites.stopedRight.sprite.cropWidth = 318
        this.sprites.stopedRight.sprite.cropHeight = gridSize*3
        this.sprites.stopedRight.sprite.width = 318
        this.sprites.stopedRight.sprite.height = gridSize*3
        this.sprites.stopedRight.sprite.assetPos.x = 0
        this.sprites.stopedRight.sprite.assetPos.y = 0
        this.sprites.stopedRight.speedAnimation = 0.02
        this.sprites.stopedRight.sprite.imgFrm = 4

        this.sprites.shot_r.sprite.cropWidth = 318
        this.sprites.shot_r.sprite.cropHeight = gridSize*3
        this.sprites.shot_r.sprite.width = 318
        this.sprites.shot_r.sprite.height = gridSize*3
        this.sprites.shot_r.sprite.assetPos.x = 0
        this.sprites.shot_r.sprite.assetPos.y = 0
        this.sprites.shot_r.speedAnimation = 0.2
        this.sprites.shot_r.sprite.imgFrm = 4

        this.sprites.shot_l.sprite.cropWidth = 318
        this.sprites.shot_l.sprite.cropHeight = gridSize*3
        this.sprites.shot_l.sprite.width = 318
        this.sprites.shot_l.sprite.height = gridSize*3
        this.sprites.shot_l.sprite.assetPos.x = 0
        this.sprites.shot_l.sprite.assetPos.y = 0
        this.sprites.shot_l.speedAnimation = 0.2
        this.sprites.shot_l.sprite.imgFrm = 4

        this.sprites.right.sprite.cropWidth = 318
        this.sprites.right.sprite.cropHeight = gridSize*3
        this.sprites.right.sprite.width = 318
        this.sprites.right.sprite.height = gridSize*3
        this.sprites.right.sprite.assetPos.x = 0
        this.sprites.right.sprite.assetPos.y = 0
        this.sprites.right.speedAnimation = 0.12
        this.sprites.right.sprite.imgFrm = 4

        this.sprites.left.sprite.cropWidth = 318
        this.sprites.left.sprite.cropHeight = gridSize*3
        this.sprites.left.sprite.width = 318
        this.sprites.left.sprite.height = gridSize*3
        this.sprites.left.sprite.assetPos.x = 0
        this.sprites.left.sprite.assetPos.y = 0
        this.sprites.left.speedAnimation = 0.12
        this.sprites.left.sprite.imgFrm = 4
    }
}
class nave_enemy1 extends enemy {
    constructor({x, y, moveSize}){
        super({
            x: x,
            y: y,
            spriteSheet: 'nave_enemy1',
            shotNumber: 1,
            shotCount:14,
            shotDirection: 'h',
            moveSize: moveSize
        })
        this.lifeBossMax = 1
        this.shotPosAdjust.right.x = -20
        this.shotPosAdjust.right.y = 3
        this.shotPosAdjust.left.x =  3
        this.shotPosAdjust.left.y =  3

        this.sprites.right.sprite.assetPos.x = 0
        this.sprites.right.speedAnimation = 0.7
        this.sprites.left.sprite.assetPos.x = 2
        this.sprites.left.speedAnimation = 0.7
    }
}
class nave_enemy2 extends enemy {
    constructor({x, y, moveSize}){
        super({
            x: x,
            y: y,
            spriteSheet: 'nave_enemy2',
            shotNumber: 3,
            shotCount:14,
            shotDirection: 'h',
            moveSize: moveSize
        })
        this.lifeBossMax = 1
        this.bodyColision = {x:5, y:10, w:25, h:15}
        this.sprites.right.sprite.assetPos.x = 0
        this.sprites.right.speedAnimation = 0.7
        this.sprites.left.sprite.assetPos.x = 2
        this.sprites.left.speedAnimation = 0.7
    }
}
class tank extends enemy {
    constructor({x, y, moveSize}){
        super({
            x: x,
            y: y,
            spriteSheet: 'assets',
            shotNumber: 4,
            shotCount:14,
            shotDirection: 'd',
            moveSize: moveSize
        })
        this.bodyColision = {x:0, y:17, w: 35, h: 18};
        this.sprites.right.sprite.assetPos.x = 1
        this.sprites.right.sprite.assetPos.y = 2
        this.sprites.right.sprite.imgFrm = 1
        this.sprites.left.sprite.assetPos.x = 0
        this.sprites.left.sprite.assetPos.y = 2
        this.sprites.left.sprite.imgFrm = 1
    }
}
class antiaerea extends enemy {
    constructor({x, y, moveSize}){
        super({
            x: x,
            y: y,
            spriteSheet: 'antiaerea',
            shotNumber: 4,
            shotCount:14,
            shotDirection: 'd',
            moveSize: moveSize
        })
        this.haveShot = false
        this.haveTeleguide = true
        this.speedMove = 1
        this.type = 'boss'
        this.launchPosAdjust.up.x = 50
        this.launchPosAdjust.up.y = -20
        this.bodyColision = {x:0, y:10, w: 70, h: 60};
        this.sprites.explosion.sprite.img        = 'antiaerea'
        this.sprites.explosion.sprite.cropWidth  = gridSize*2
        this.sprites.explosion.sprite.cropHeight = gridSize*2
        this.sprites.explosion.sprite.width      = gridSize*2
        this.sprites.explosion.sprite.height     = gridSize*2
        this.sprites.explosion.sprite.assetPos.x = 1
        this.sprites.explosion.speedAnimation    = 1
        this.sprites.explosion.sprite.imgFrm     = 15

        this.sprites.right.sprite.img        = 'antiaerea'
        this.sprites.right.sprite.cropWidth = gridSize*2
        this.sprites.right.sprite.cropHeight = gridSize*2
        this.sprites.right.sprite.width = gridSize*2
        this.sprites.right.sprite.height = gridSize*2
        this.sprites.right.sprite.assetPos.x = 0
        this.sprites.right.speedAnimation = 0.12
        this.sprites.right.sprite.imgFrm = 1

        this.sprites.left.sprite.img        = 'antiaerea'
        this.sprites.left.sprite.cropWidth = gridSize*2
        this.sprites.left.sprite.cropHeight = gridSize*2
        this.sprites.left.sprite.width = gridSize*2
        this.sprites.left.sprite.height = gridSize*2
        this.sprites.left.sprite.assetPos.x = 0
        this.sprites.left.speedAnimation = 0.12
        this.sprites.left.sprite.imgFrm = 1

        this.sprites.stopedLeft.sprite.cropWidth = gridSize*2
        this.sprites.stopedLeft.sprite.cropHeight = gridSize*2
        this.sprites.stopedLeft.sprite.width = gridSize*2
        this.sprites.stopedLeft.sprite.height = gridSize*2
        this.sprites.stopedLeft.sprite.assetPos.x = 0
        this.sprites.stopedLeft.sprite.assetPos.y = 0
        this.sprites.stopedLeft.speedAnimation = 0.1
        this.sprites.stopedLeft.sprite.imgFrm = 1
        this.sprites.stopedLeft.sprite.next = 'open'

        this.sprites.open.sprite.cropWidth = gridSize*2
        this.sprites.open.sprite.cropHeight = gridSize*2
        this.sprites.open.sprite.width = gridSize*2
        this.sprites.open.sprite.height = gridSize*2
        this.sprites.open.sprite.assetPos.x = 0
        this.sprites.open.sprite.assetPos.y = 0
        this.sprites.open.speedAnimation = 0.01
        this.sprites.open.sprite.imgFrm = 1
        this.sprites.open.sprite.next = 'close'

        this.sprites.close.sprite.cropWidth = gridSize*2
        this.sprites.close.sprite.cropHeight = gridSize*2
        this.sprites.close.sprite.width = gridSize*2
        this.sprites.close.sprite.height = gridSize*2
        this.sprites.close.sprite.assetPos.x = 0
        this.sprites.close.sprite.assetPos.y = 0
        this.sprites.close.speedAnimation = 0.01
        this.sprites.close.sprite.imgFrm = 1

        this.sprites.stopedRight.sprite.cropWidth = gridSize*2
        this.sprites.stopedRight.sprite.cropHeight = gridSize*2
        this.sprites.stopedRight.sprite.width = gridSize*2
        this.sprites.stopedRight.sprite.height = gridSize*2
        this.sprites.stopedRight.sprite.assetPos.x = 0
        this.sprites.stopedRight.sprite.assetPos.y = 0
        this.sprites.stopedRight.speedAnimation = 0.1
        this.sprites.stopedRight.sprite.imgFrm = 1
        this.sprites.stopedRight.sprite.next = 'open'
        this.teleguides = [
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null}),
            new teleguide({x:null,y:null})
        ]
    }
}


class static_obj {
    constructor({x,y,imgName}){
        this.position = {
            x: x,
            y: y
        }
        this.imgName = imgName
    }
    draw(){
        c.drawImage(
            img.imgList[this.imgName].image,           //nome da imagem
            this.position.x ,
            this.position.y
        )
    }
    update(){
        this.draw();
        this.frames++;
    }
}

class background{
    constructor({imgName}){
        this.position = {
            x: -((img.imgList[imgName].image.width-canvas.width)/2),
            y: -((img.imgList[imgName].image.height-canvas.height)/2)
        }
        this.imgName = imgName
    }
    draw(){
        c.drawImage(
            img.imgList[this.imgName].image,           //nome da imagem
            this.position.x ,
            this.position.y
        )
    }
    update(){
        this.draw();
        this.frames++;
    }
}

class paralaxe{
    constructor({imgName}){
        this.imgName = imgName,
        this.position = {x:0,y: canvas.height}
        this.width = img.imgList[this.imgName].image.width ;
        this.height = img.imgList[this.imgName].image.height;
        this.scen = {c:0, r:0, w:0, h:0};                           //calculo do cenario
    }
    draw(){
        c.drawImage(
            img.imgList[this.imgName].image,           //nome da imagem
            this.position.x ,
            this.position.y
        )
    }
    update(){
        this.scen = {
            c:scenario.rMax-scenario.rMin,
            r:scenario.cMax-scenario.cMin,
            w:this.scen.c*canvas.width,
            h:this.scen.r*canvas.height
        }
        var trilhaX = (this.width-canvas.width)
        var trilhaY = (this.height-canvas.height)
        var trilhaScenX = scenario.x/((scenario.cMax-scenario.cMin-1)*640)
        var trilhaScenY = scenario.y/((scenario.rMax-scenario.rMin-1)*360)
        this.position.x = -trilhaX*trilhaScenX;
        this.position.y = -(trilhaY*trilhaScenY)-360;
        this.draw();
        this.frames++;
    }
}

class life_up extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'default'                              //nome do sprite a ser executado
        this.sprites = {
            default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:3,
                assY:4,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.7
            }),

        }
        this.sounds = { colectable: new sound({audioName:'colectable'}), }
    }
    caught(){
      this.sounds['colectable'].play();
      this.nameSprite = null;
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class jewel extends character {
    constructor({x,y,number}){
        super({x: x,y: y, colx:5, coly:2, colw:25, colh:33})
        this.nameSprite = 'default'                              //nome do sprite a ser executado
        this.number = number;
        this.sprites = {
            default: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:number,
                assY:3,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.7
            }),

        }
        this.sounds = { colectable: new sound({audioName:'colectable'}), }
    }
    caught(){
      this.sounds['colectable'].play();
      this.nameSprite = null;
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class drone extends character {
    constructor({x, y, moveDirection, moveSize}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.posYIni = this.position.y;                        //posicao do y inicial
        this.posXIni = this.position.x;                        //posicao do y inicial
        this.moveDirection = moveDirection;                    //up right down left
        this.moveSize = moveSize;
        this.speedMove = 5
        this.sprites = {
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"drone",
                assX:0,
                assY:0,
                imgFrm:8,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.7
            }),
            explosion: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX:0,
                assY:0,
                imgFrm:15,
                loop: false,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 1
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName: 'explosion1'}), ],
        }
    }
    explode(){
      this.nameSprite='explosion';
      this.sounds.explosion[0].play();
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
            if(this.moveDirection=='down'){this.position.y+=this.speedMove;} else
            if(this.moveDirection=='up'){this.position.y-=this.speedMove;} else
            if(this.moveDirection=='left'){this.position.x-=this.speedMove;} else
            if(this.moveDirection=='right'){this.position.x+=this.speedMove;}

            if(this.posYIni>=this.position.y+this.moveSize ){this.moveDirection='down';} else
            if(this.posYIni<=this.position.y-this.moveSize){this.moveDirection='up';}  else
            if(this.posXIni<=this.position.x-this.moveSize){this.moveDirection='left';} else
            if(this.posXIni>=this.position.x+this.moveSize){this.moveDirection='right';}
        }
    }
}

class alien_building1 extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.sprites = {
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX: 0,
                assY: 0,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            r_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX:1,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            l_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX:2,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            destroyed: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX:3,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName: 'explosion1'}), ],
        }
    }
    l_damage(){
      this.nameSprite='r_damage';
      this.sounds.explosion[0].play();
    }
    r_damage(){
      this.nameSprite='l_damage';
      this.sounds.explosion[0].play();
    }
    destroy(){
      this.nameSprite='destroyed';
      this.sounds.explosion[0].play();
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class alien_building2 extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.sprites = {
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX: 0,
                assY: 1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            r_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX:1,
                assY:1,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            l_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX:2,
                assY:1,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            destroyed: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX:3,
                assY:1,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName:'explosion1'}), ],
        }
    }
    l_damage(){
      this.nameSprite='r_damage';
      this.sounds.explosion[0].play();
    }
    r_damage(){
      this.nameSprite='l_damage';
      this.sounds.explosion[0].play();
    }
    destroy(){
      this.nameSprite='destroyed';
      this.sounds.explosion[0].play();
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}


class alien_building3 extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.sprites = {
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX: 0,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            r_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX:1,
                assY:2,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            l_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX:2,
                assY:2,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            destroyed: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"alien_building",
                assX:3,
                assY:2,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName:'explosion1'}), ],
        }
    }
    l_damage(){
      this.nameSprite='r_damage';
      this.sounds.explosion[0].play();
    }
    r_damage(){
      this.nameSprite='l_damage';
      this.sounds.explosion[0].play();
    }
    destroy(){
      this.nameSprite='destroyed';
      this.sounds.explosion[0].play();
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class building1 extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.sprites = {
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 2,
                assY: 1,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            r_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"building",
                assX:0,
                assY:0,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            l_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"building",
                assX:0,
                assY:2,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            destroyed: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"building",
                assX:0,
                assY:4,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
        }
        this.sounds = {
          explosion: [ new sound({audioName:'explosion1'}) ,] ,
        }
    }
    l_damage(){
      this.nameSprite='r_damage';
      this.sounds.explosion[0].play();
    }
    r_damage(){
      this.nameSprite='l_damage';
      this.sounds.explosion[0].play();
    }
    destroy(){
      this.nameSprite='destroyed';
      this.sounds.explosion[0].play();
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}


class building2 extends character {
    constructor({x,y}){
        super({x: x,y: y, colx:0, coly:0, colw:35, colh:35})
        this.nameSprite = 'alive'                              //nome do sprite a ser executado
        this.sprites = {
            alive: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"assets",
                assX: 2,
                assY: 2,
                imgFrm:1,
                loop: true,
                next: null,
                end: false,
                speedAnimation: 0.1
            }),
            r_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"building",
                assX:0,
                assY:1,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            l_damage: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"building",
                assX:0,
                assY:3,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
            destroyed: new sprite({
                x:this.position.x,
                y:this.position.y,
                imgName:"building",
                assX:0,
                assY:5,
                imgFrm:1,
                loop: true,
                next: null,                                    //informa a proxima animacao apos o fim da atual
                end:  false,
                speedAnimation: 0.3
            }),
        }
        this.sounds = { explosion: snd.audList['explosion1'], }
    }
    l_damage(){
      this.nameSprite='r_damage';
      this.sounds.explosion[0].play();
    }
    r_damage(){
      this.nameSprite='l_damage';
      this.sounds.explosion[0].play();
    }
    destroy(){
      this.nameSprite='destroyed';
      this.sounds.explosion[0].play();
    }
    update(){
        if(this.nameSprite !== null){
            this.sprites[this.nameSprite].sprite.end = this.action(this.sprites[this.nameSprite]);
            if(this.sprites[this.nameSprite].sprite.end){
                this.nameSprite = this.sprites[this.nameSprite].sprite.next;
            }
        }
    }
}

class play extends images {
    constructor({x,y,imgName}){
        super({x: x-scenario.x,y: y-scenario.y, imgName:"play"})
    }
    update(){
        this.animation();
    }
}

class btn_next extends images {
    constructor({x,y,imgName}){
        super({x: x-scenario.x,y: y-scenario.y, imgName: "next" })
    }
    update(){
        this.animation();
    }
}

class play_again extends images {
    constructor({x,y,imgName}){
        super({x: x,y: y, imgName:"play-again"})
    }
    update(){
        this.animation();
    }
}

class full_screen extends images {
    constructor({x,y}){
      super({x: x,y: y, imgName:"full_screen"})
    }
    update(){ this.animation(); }
}

class painel extends images {
    constructor({x,y}){ super({x: x,y: y, imgName:"painel"}) }
    update(){ this.animation(); }
}

class barraVida2 extends images {
    constructor({x,y}){ super({x: x,y: y, imgName: "barraVida2"}) }
    update(){ this.animation();}
}

class barraVida1 extends images {
    constructor({x,y}){ super({x: x,y: y, imgName: "barraVida1"}) }
    update(){ this.animation(); }
}

class lifeBoss1 extends images {
    constructor({x,y}){ super({x: x,y: y, imgName: "lifeBoss1"}) }
    update(){ this.animation(); }
}

class lifeBoss2 extends images {
    constructor({x,y}){ super({x: x,y: y, imgName: "lifeBoss2"}) }
    update(){ this.animation(); }
}

class barraSuperTiro1 extends images {
    constructor({x,y}){ super({x: x,y: y, imgName: "barraSuperTiro1"}) }
    update(){ this.animation(); }
}

class barraSuperTiro2 extends images {
    constructor({x,y}){ super({x: x,y: y, imgName: "barraSuperTiro2"}) }
    update(){ this.animation(); }
}


class Life {
    constructor({x,y}){
        this.position = {
            x,
            y
        }
        this.number = game_lives
        this.currentCropWidth = 15
        this.currentCropHeight = 23
        this.width = 15
        this.height = 23
    }
    update(){
      this.number=game_lives;
      this.draw();
    }
    draw(){
        var s = this.number.toString()
        var l = s.length
        for (var i = 0; i < l; i++) {
            c.drawImage(
                img.imgList['numbers_p'].image,
                this.currentCropWidth*(s[i]),
                0,
                this.currentCropWidth,
                this.currentCropHeight,
                this.position.x+(i*(this.currentCropHeight-8)),
                this.position.y,
                this.width,
                this.height
            )
        }
    }
}

class btn_a extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "button_a" : "button_a_2") }) }
    update(){ this.animation(); }
}

class btn_upleft extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_upleft" : "btn_upleft_2")}) }
    update(){ this.animation(); }
}

class btn_up extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_up" : "btn_up_2")}) }
    update(){ this.animation(); }
}

class btn_upright extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_upright" : "btn_upright_2")}) }
    update(){ this.animation(); }
}

class btn_left extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_left" : "btn_left_2")}) }
    update(){ this.animation(); }
}

class btn_center extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_center" : "btn_center_2")}) }
    update(){ this.animation(); }
}

class btn_right extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_right" : "btn_right_2")}) }
    update(){ this.animation(); }
}

class btn_downleft extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_downleft" : "btn_downleft_2")}) }
    update(){ this.animation(); }
}

class btn_down extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_down" : "btn_down_2")}) }
    update(){ this.animation(); }
}

class btn_downright extends images {
    constructor({x,y,color}){
      super({x: x,y: y, imgName:(color=='b' ? "btn_downright" : "btn_downright_2")}) }
    update(){ this.animation(); }
}


let Nave = [];
let asteroides = [];
let backgrounds = [];
let waters = [];
let paralaxes = [];
let tiles = [];
let trees = [];
let satelites = [];
let tanks = [];
let enemys = [];
let jewels = [];
let life_ups = [];
let plays = [];
let btns = [];
let lifes = [];
let fulls = [];
let painels = [];
let barraVidas1 = [];
let barraVidas2 = [];
let drones = [];
let drops = [];
let buildings = [];
let play_agains = [];
let robots = [];
let shocks = [];
let energy_houses = [];
let nexts = [];
let gates = [];
let static_objs = [];
let arrows = [];
let bubbles = [];
let lavas = [];
let music = null;

function resetObjects(){
    scenario.reset();
    Nave = [];
    asteroides = [];
    backgrounds = [];
    paralaxes = [];
    waters = [];
    tiles = [];
    trees = [];
    satelites = [];
    tanks = [];
    enemys = [];
    jewels = [];
    life_ups = [];
    plays = [];
    btns = [];
    lifes = [];
    fulls = [];
    painels = [];
    barraVidas1 = [];
    barraVidas2 = [];
    drones = [];
    buildings = [];
    play_agains = [];
    robots = [];
    shocks = [];
    energy_houses = [];
    nexts = [];
    gates = [];
    static_objs = [];
    arrows = [];
    bubbles = [];
    lavas = [];
    drops = [];
}

function die(){
    resetObjects();
    game_lives--;
    init(level);
    scenario.reset();
}

const keys = {
    right: {pressed: false},
    up:    {pressed: false},
    left:  {pressed: false},
    down:  {pressed: false},
    a:     {pressed: false},
    s:     {pressed: false},
    null_keys: function(){
        this.right.pressed = false;
        this.up.pressed = false;
        this.left.pressed = false;
        this.down.pressed = false;
        this.a.pressed = false;
        this.s.pressed = false;
    }
}

function nextLevel(){level++;}
