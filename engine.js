var fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
}
startAnimating(30);
function animate(){
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    if(pause==false){
      if(screen.width>screen.height){
        document.getElementById('turn_device').style.display = 'none';
        c.clearRect(0,0, canvas.width, canvas.height);
        scenario.update();
        backgrounds.forEach(obj =>{obj.update();})
        static_objs.forEach(obj =>{obj.update();})
        paralaxes.forEach(obj =>{obj.update();})
        arrows.forEach(obj =>{obj.update();})
        trees.forEach(obj =>{obj.update();})
        satelites.forEach(obj =>{obj.update();})
        asteroides.forEach(obj =>{obj.update();})
        drones.forEach(obj =>{obj.update();})
        jewels.forEach(obj =>{obj.update();})
        life_ups.forEach(obj =>{obj.update();})
        plays.forEach(obj =>{obj.update();});
        nexts.forEach(obj =>{obj.update();})
        play_agains.forEach(obj =>{obj.update();});
        drops.forEach(obj =>{obj.update();})
        energy_houses.forEach(obj =>{obj.update();})
        shocks.forEach(obj =>{obj.update();})
        enemys.forEach(obj =>{obj.update();})
        buildings.forEach(obj =>{ obj.update(); })
        waters.forEach(obj =>{obj.update();})
        lavas.forEach(obj =>{obj.update();})
        bubbles.forEach(obj =>{obj.update();})
        tiles.forEach(obj =>{obj.update();})
        Nave.forEach(obj =>{
            obj.update();
            if(obj.nameSprite != 'explosion' && obj.nameSprite!=null && obj.nameSprite != 'invisible'){
                if(keys.left.pressed && keys.up.pressed ){obj.position.x-=naveSpeedMove; obj.position.y-=naveSpeedMove; obj.nameSprite = 'upleft';} else
                if(keys.left.pressed && keys.down.pressed ){obj.position.x-=naveSpeedMove; obj.position.y+=naveSpeedMove;obj.nameSprite = 'downleft';} else
                if(keys.right.pressed && keys.up.pressed ){obj.position.x+=naveSpeedMove; obj.position.y-=naveSpeedMove; obj.nameSprite = 'upright';} else
                if(keys.right.pressed && keys.down.pressed ){obj.position.x+=naveSpeedMove; obj.position.y+=naveSpeedMove; obj.nameSprite = 'downright';} else
                if(keys.left.pressed){obj.position.x-=naveSpeedMove; obj.nameSprite = 'left'} else
                if(keys.right.pressed){obj.position.x+=naveSpeedMove; obj.nameSprite = 'right'} else
                if(keys.up.pressed){obj.position.y-=naveSpeedMove; obj.nameSprite = 'up'} else
                if(keys.down.pressed){obj.position.y+=naveSpeedMove; obj.nameSprite = 'down'}
                if(keys.a.pressed){obj.fire();}
            }
        })
        gates.forEach(obj =>{obj.update();})
        btns.forEach(obj =>{obj.update();});
        fulls.forEach(obj =>{obj.update();});
        painels.forEach(obj =>{obj.update();});
        lifes.forEach(obj =>{obj.update();});
        barraVidas1.forEach(obj =>{obj.update();});
        barraVidas2.forEach(obj =>{
            obj.width = 285/100*Nave[0].lifeBarr;
            if(Nave[0].nameSprite != 'explosion' && Nave[0].nameSprite!=null){
                obj.update();
            }
        });
        if(!isNull(music)){music.musicRun();}
        /* colision */
        life_ups.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if(obj.nameSprite == 'default') {
                  obj.caught();
                  game_lives++;
                }
             }
        })
        jewels.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if(obj.nameSprite == 'default') {
                   //obj.nameSprite = null;
                   obj.caught();
                   if(obj.number==0){
                     Nave[0].protection.turnOn();
                   } else
                   if(obj.number==1){
                     Nave[0].fury();
                   } else
                   if(obj.number==2){
                     Nave[0].shot_upgrade();
                   } else
                   if(obj.number==3){
                     Nave[0].lifeBarr += (Nave[0].lifeBarr+50>100 ? 100-Nave[0].lifeBarr : 50);
                   }
                 }
             }
        })
        enemys.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             var scn = {
                 obj: {  //scenario
                     c: Math.floor((!isFinite(obj.position.x/canvas.width)) ? 0 : obj.position.x/canvas.width ),
                     r: Math.floor((!isFinite(obj.position.y/canvas.height)) ? 0 : obj.position.y/canvas.height ),
                 }
             }
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if(
                     obj.nameSprite != 'explosion' &&
                     obj.nameSprite != null &&
                     Nave[0].nameSprite != null &&
                     Nave[0].nameSprite != 'explosion'
                   ) {
                     Nave[0].explode();
                     if(obj.type=='enemy'){
                       obj.nameSprite = 'explosion';
                     } else {
                       obj.lifeBossCurrent--;
                     }
                 }
             }
             if(obj.haveTeleguide){
                if(obj.nameSprite=='open'){
                   obj.launch();
                }
            }
             if(obj.haveShot){
                 if(obj.shotDirection=='h' ){
                     if(
                     obj.positionAbsolute.x<p8.x+(canvas.width*0.67) &&
                     obj.positionAbsolute.x+obj.bodyColision.w>p8.x-(canvas.width*0.67) &&
                     obj.positionAbsolute.y<p1.y && obj.positionAbsolute.y+obj.bodyColision.y+obj.bodyColision.h>p1.y
                     ){
                         if((obj.nameSprite=='left'  || obj.nameSprite == 'shot_l') && obj.positionAbsolute.x<Nave[0].positionAbsolute.x){obj.fire();}
                         if((obj.nameSprite=='right' || obj.nameSprite == 'shot_r') && obj.positionAbsolute.x>Nave[0].positionAbsolute.x){obj.fire();}
                     }
                 } else if(obj.shotDirection=='d'){
                     if( obj.nameSprite=='right' || obj.nameSprite == 'shot_r' ){
                         if(
                             Nave[0].positionAbsolute.x-obj.positionAbsolute.x-10 < Nave[0].positionAbsolute.y-obj.positionAbsolute.y &&
                             Nave[0].positionAbsolute.x-obj.positionAbsolute.x+10 > Nave[0].positionAbsolute.y-obj.positionAbsolute.y
                         ){obj.fire();}
                     }
                     if(obj.nameSprite=='left' || obj.nameSprite == 'shot_l' ){
                         if(
                             (Nave[0].positionAbsolute.x - obj.positionAbsolute.x) - 10 < obj.positionAbsolute.y - Nave[0].positionAbsolute.y &&
                             (Nave[0].positionAbsolute.x - obj.positionAbsolute.x) + 10 > obj.positionAbsolute.y - Nave[0].positionAbsolute.y
                         ){obj.fire(); }
                     }
                 }
             }
             Nave[0].shot.forEach(sht =>{
                 var p9  = sht.points(1);
                 var p10 = sht.points(2);
                 var p11 = sht.points(3);
                 var p12 = sht.points(4);
                 if(
                     (obj.colision(p9.x,p9.y) ||
                     obj.colision(p10.x,p10.y) ||
                     obj.colision(p11.x,p11.y) ||
                     obj.colision(p12.x,p12.y)) &&
                     sht.impact_validate()
                 ){
                     if(
                       obj.nameSprite != 'explosion' &&
                       obj.nameSprite !== null &&
                       !sht.shotReady
                     ){
                         if(obj.type == 'boss' ){
                             obj.damage();
                             if(obj.lifeBossCurrent==0){
                               obj.explode();
                               if(obj.actionAfterBossDeath=='offEnergy'){
                                 shocks.forEach(s =>{s.continuous = true; s.onOff = 'off';})
                               }
                             }
                          } else if(obj.type == 'enemy' ){
                             obj.explode();
                         }
                         sht.impact();
                     }
                 }
             })
             obj.shot.forEach(sht =>{
                 var s1=sht.points(1);
                 if(
                     Nave[0].colision(s1.x,s1.y)
                 ){
                     if(Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion') {
                         if(obj.nameSprite != 'explosion' && obj.nameSprite !== null && sht.nameSprite !== null && !sht.shotReady ){
                            Nave[0].damage(5*obj.shotNumber);
                             sht.impact();
                         }
                     }
                 }
             })
             obj.teleguides.forEach(tlg =>{
                 if(
                     tlg.colision(p1.x,p1.y) ||
                     tlg.colision(p2.x,p2.y) ||
                     tlg.colision(p3.x,p3.y) ||
                     tlg.colision(p4.x,p4.y) ||
                     tlg.colision(p5.x,p5.y) ||
                     tlg.colision(p6.x,p6.y) ||
                     tlg.colision(p7.x,p7.y) ||
                     tlg.colision(p8.x,p8.y)
                 ){
                     if(Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion') {
                         if(tlg.nameSprite != 'explosion' && tlg.nameSprite != null && !tlg.shotReady ){
                             Nave[0].damage(5*obj.shotNumber);
                             tlg.impact();
                         }
                     }
                 }
                 if(tlg.timeToSearch<=50){
                     tlg.timeToSearch++;
                 } else {
                     if(tlg.nameSprite != 'explosion' && tlg.nameSprite !== null && !tlg.launchReady ){
                         if(tlg.positionAbsolute.x+12>Nave[0].position.x && tlg.positionAbsolute.x+12<Nave[0].position.x+Nave[0].bodyColision.w){
                            if(tlg.positionAbsolute.y+12<Nave[0].position.y){
                                tlg.nameSprite='down';
                            } else if(tlg.positionAbsolute.y+12>Nave[0].position.y+Nave[0].bodyColision.h){
                                tlg.nameSprite='up';
                            }
                         } else if(tlg.positionAbsolute.x+12<Nave[0].position.x){
                             if(tlg.positionAbsolute.y+12<Nave[0].position.y){
                                tlg.nameSprite='downright';
                            } else if(tlg.positionAbsolute.y+12>Nave[0].position.y+Nave[0].bodyColision.h){
                                tlg.nameSprite='upright';
                            } else {
                                tlg.nameSprite='right';
                            }
                         } else if(tlg.positionAbsolute.x+12>Nave[0].position.x){
                            if(tlg.positionAbsolute.y+12<Nave[0].position.y){
                                tlg.nameSprite='downleft';
                            } else if(tlg.positionAbsolute.y+12>Nave[0].position.y+Nave[0].bodyColision.h){
                                this.nameSprite=='upleft';
                            } else {
                                tlg.nameSprite='left';
                            }
                         }
                     }
                 }
                 Nave[0].shot.forEach(sht =>{
                     var p9  = sht.points(1);
                     var p10 = sht.points(2);
                     var p11 = sht.points(3);
                     var p12 = sht.points(4);
                     if((tlg.nameSprite != 'explosion' && tlg.nameSprite != null) && (p9.y!=0 && p9.x!=0) ){
                       if(
                           tlg.colision(p9.x,p9.y) ||
                           tlg.colision(p10.x,p10.y) ||
                           tlg.colision(p11.x,p11.y) ||
                           tlg.colision(p12.x,p12.y)
                       ){
                           tlg.impact();
                           sht.impact();
                       }
                     }
                 })
             })
        })
        asteroides.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);

             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if( obj.nameSprite == 'alive' &&
                      Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion') {
                     Nave[0].explode();
                     obj.explode();
                 } //else if(Nave[0].nameSprite==null){die();}
             }
             Nave[0].shot.forEach(sht =>{
                 var p9  = sht.points(1);
                 var p10 = sht.points(2);
                 var p11 = sht.points(3);
                 var p12 = sht.points(4);
                 if(
                     (obj.colision(p9.x,p9.y) ||
                     obj.colision(p10.x,p10.y) ||
                     obj.colision(p11.x,p11.y) ||
                     obj.colision(p12.x,p12.y)) &&
                     sht.impact_validate()
                 ){
                     if(obj.nameSprite != 'explosion' && obj.nameSprite != null  && !sht.shotReady){
                         obj.explode();
                         sht.impact();
                     }
                 }
             })
        })
        lavas.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if( Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion' ) {
                     Nave[0].crash();
                 } //else if(Nave[0].nameSprite==null){die();}
             }
        })
        drops.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if( Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion' && obj.nameSprite !==null ) {
                   Nave[0].damage(20);
                     obj.reset();
                 } //else if(Nave[0].nameSprite==null){die();}
             }
             tiles.forEach(tl =>{
                 var cX = obj.positionAbsolute.x+obj.bodyColision.x;
                 var cY = obj.positionAbsolute.y+obj.bodyColision.y;
                 if(tl.colision(cX,cY)){
                   obj.reset();
                 }
             })
        })
        waters.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if( Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion' ) {
                     Nave[0].crash();
                 }
             }
        })
        bubbles.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if( Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion' ) {
                     Nave[0].explode();
                 }
             }
        })
        tiles.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if(Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion') {
                     Nave[0].crash();
                 }
             }
             Nave[0].shot.forEach(sht =>{
                 var p9  = sht.points(1);
                 var p10 = sht.points(2);
                 var p11 = sht.points(3);
                 var p12 = sht.points(4);
                 if(
                     (obj.colision(p9.x,p9.y) ||
                     obj.colision(p10.x,p10.y) ||
                     obj.colision(p11.x,p11.y) ||
                     obj.colision(p12.x,p12.y)) &&
                     sht.impact_validate()
                 ){
                     //sht.nameSprite = "r_impact";
                     sht.impact();

                 }
             })
        })
        shocks.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 (obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y) ) &&
                 obj.onOff=='on'
             ){
                 if(Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion') {
                     Nave[0].crash();
                 }
             }
             Nave[0].shot.forEach(sht =>{
                 var p9  = sht.points(1);
                 var p10 = sht.points(2);
                 var p11 = sht.points(3);
                 var p12 = sht.points(4);
                 if(
                     (obj.colision(p9.x,p9.y) ||
                     obj.colision(p10.x,p10.y) ||
                     obj.colision(p11.x,p11.y) ||
                     obj.colision(p12.x,p12.y)) &&
                     sht.impact_validate()
                 ){
                  sht.impact();
                 }
             })
        })
        buildings.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if(Nave[0].nameSprite != 'explosion' && Nave[0].nameSprite!=null) {
                     Nave[0].crash();
                     obj.explode();
                 }
             }
             Nave[0].shot.forEach(sht =>{
                 var p9  = sht.points(1);
                 var p10 = sht.points(2);
                 var p11 = sht.points(3);
                 var p12 = sht.points(4);
                 if(
                     (obj.colision(p9.x,p9.y) ||
                     obj.colision(p10.x,p10.y) ||
                     obj.colision(p11.x,p11.y) ||
                     obj.colision(p12.x,p12.y)) &&
                     sht.impact_validate()
                 ){
                     if(obj.nameSprite != 'explosion' && obj.nameSprite != null  && !sht.shotReady){
                         switch(sht.nameSprite) {
                             case 'r_default':
                                 if(obj.nameSprite == 'alive' || obj.nameSprite=='l_damage'){  //
                                   obj.r_damage();
                                   sht.impact();
                                 }else{
                                   obj.destroy();
                                   sht.impact();
                                 }
                             break;
                             case 'l_default':
                                if(obj.nameSprite=='alive' || obj.nameSprite=='r_damage'){ //
                                  obj.l_damage();
                                  sht.impact();
                                }else{
                                  obj.destroy();
                                  sht.impact();
                                }
                             break;
                             case 'ul_default':
                             case 'ur_default':
                             case 'dl_default':
                             case 'dr_default':
                             case 'u_default':
                             case 'u_default':
                             case 'd_default':
                             case 'd_default':
                               obj.destroy();
                               sht.impact();
                             break;
                         }
                     }
                 }
             })
        })
        satelites.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if(
                   Nave[0].nameSprite != null &&
                   Nave[0].nameSprite != 'explosion' &&
                   obj.nameSprite == 'alive' ) {
                     Nave[0].explode();
                     obj.explode();
                 }
             }
             Nave[0].shot.forEach(sht =>{
                 var p9  = sht.points(1);
                 var p10 = sht.points(2);
                 var p11 = sht.points(3);
                 var p12 = sht.points(4);
                 if(
                     (obj.colision(p9.x,p9.y) ||
                     obj.colision(p10.x,p10.y) ||
                     obj.colision(p11.x,p11.y) ||
                     obj.colision(p12.x,p12.y)) &&
                     sht.impact_validate()
                 ){
                     if( obj.nameSprite == 'alive') {
                         obj.explode();
                         sht.impact();
                     }
                 }
            })

        })
        countSatelites = Object.keys(satelites).length;
        countSatelitesNull = 0;
        satelites.forEach(sht=>{
          countSatelitesNull += (sht.nameSprite == null ? 1 : 0 );
          if( countSatelites==countSatelitesNull ){
            shocks.forEach(s =>{s.continuous = true; s.onOff = 'off';})
          }
        })
        drones.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             var p9  = Nave[0].shot[0].points(1);
             var p10 = Nave[0].shot[0].points(2);
             var p11 = Nave[0].shot[0].points(3);
             var p12 = Nave[0].shot[0].points(4);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if(Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion' && obj.nameSprite == 'alive' ) {
                     Nave[0].explode();
                 } //else if(Nave[0].nameSprite==null){die();}
             }
             Nave[0].shot.forEach(sht =>{
                 var p9  = sht.points(1);
                 var p10 = sht.points(2);
                 var p11 = sht.points(3);
                 var p12 = sht.points(4);
                 if(
                     (obj.colision(p9.x,p9.y) ||
                     obj.colision(p10.x,p10.y) ||
                     obj.colision(p11.x,p11.y) ||
                     obj.colision(p12.x,p12.y)) &&
                     sht.impact_validate()
                 ){
                     if(obj.nameSprite == 'alive' && obj.nameSprite !== null && !sht.shotReady ){
                       obj.explode();
                       sht.impact();
                     }
                 }
            })
        })
        trees.forEach(obj =>{
            var p1 = Nave[0].points(1);
            var p2 = Nave[0].points(2);
            var p3 = Nave[0].points(3);
            var p4 = Nave[0].points(4);
            var p5 = Nave[0].points(5);
            var p6 = Nave[0].points(6);
            var p7 = Nave[0].points(7);
            var p8 = Nave[0].points(8);

            if(
                obj.colision(p1.x,p1.y) ||
                obj.colision(p2.x,p2.y) ||
                obj.colision(p3.x,p3.y) ||
                obj.colision(p4.x,p4.y) ||
                obj.colision(p5.x,p5.y) ||
                obj.colision(p6.x,p6.y) ||
                obj.colision(p7.x,p7.y) ||
                obj.colision(p8.x,p8.y) /**/
            ){
                if(Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion' && obj.nameSprite == 'alive') {
                    Nave[0].explode();
                    obj.nameSprite = 'fire';
                } //else if(Nave[0].nameSprite==null){die();}
            }
            Nave[0].shot.forEach(sht =>{
                 var p9  = sht.points(1);
                 var p10 = sht.points(2);
                 var p11 = sht.points(3);
                 var p12 = sht.points(4);
                 if(
                     (obj.colision(p9.x,p9.y) ||
                     obj.colision(p10.x,p10.y) ||
                     obj.colision(p11.x,p11.y) ||
                     obj.colision(p12.x,p12.y)) &&
                     sht.impact_validate()
                 ){
                     if(obj.nameSprite == 'alive') {
                       obj.burn();
                       sht.impact();
                     }
                 }
            })
        })
        energy_houses.forEach(obj =>{
            var p1 = Nave[0].points(1);
            var p2 = Nave[0].points(2);
            var p3 = Nave[0].points(3);
            var p4 = Nave[0].points(4);
            var p5 = Nave[0].points(5);
            var p6 = Nave[0].points(6);
            var p7 = Nave[0].points(7);
            var p8 = Nave[0].points(8);

            if(
                obj.colision(p1.x,p1.y) ||
                obj.colision(p2.x,p2.y) ||
                obj.colision(p3.x,p3.y) ||
                obj.colision(p4.x,p4.y) ||
                obj.colision(p5.x,p5.y) ||
                obj.colision(p6.x,p6.y) ||
                obj.colision(p7.x,p7.y) ||
                obj.colision(p8.x,p8.y) /**/
            ){
                if(Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion' && obj.nameSprite == 'alive') {
                    Nave[0].explode();
                    energy_houses.forEach(obj =>{
                      obj.nameSprite = 'destructed';
                    })
                    shocks.forEach(obj =>{obj.continuous = true; obj.onOff = 'off';})
                } //else if(Nave[0].nameSprite==null){die();}
            }
            Nave[0].shot.forEach(sht =>{
                 var p9  = sht.points(1);
                 var p10 = sht.points(2);
                 var p11 = sht.points(3);
                 var p12 = sht.points(4);
                 if(
                     (obj.colision(p9.x,p9.y) ||
                     obj.colision(p10.x,p10.y) ||
                     obj.colision(p11.x,p11.y) ||
                     obj.colision(p12.x,p12.y)) &&
                     sht.impact_validate()
                 ){
                     if(obj.nameSprite == 'alive') {
                         energy_houses.forEach(obj =>{
                           obj.explode();
                         })
                         shocks.forEach(obj =>{obj.continuous = true; obj.onOff = 'off';})
                         sht.impact();
                     }
                 }
            })
        })
        gates.forEach(obj =>{
             var p1 = Nave[0].points(1);
             var p2 = Nave[0].points(2);
             var p3 = Nave[0].points(3);
             var p4 = Nave[0].points(4);
             var p5 = Nave[0].points(5);
             var p6 = Nave[0].points(6);
             var p7 = Nave[0].points(7);
             var p8 = Nave[0].points(8);
             if(
                 obj.colision(p1.x,p1.y) ||
                 obj.colision(p2.x,p2.y) ||
                 obj.colision(p3.x,p3.y) ||
                 obj.colision(p4.x,p4.y) ||
                 obj.colision(p5.x,p5.y) ||
                 obj.colision(p6.x,p6.y) ||
                 obj.colision(p7.x,p7.y) ||
                 obj.colision(p8.x,p8.y)
             ){
                 if( Nave[0].nameSprite != null && Nave[0].nameSprite != 'explosion' && obj.nameSprite != 'implode' && obj.nameSprite !=null ) {
                     Nave[0].nameSprite = 'invisible';
                     obj.nameSprite = 'implode';
                 }
             }
             if(!obj.nameSprite){
                 level++;
                 init(level);
             }
        })
        /* colision */
        /* click mouse */
        fulls.forEach(obj =>{
            if(obj.colision(mousePosition.x,mousePosition.y) || obj.colision(touchRight.x,touchRight.y)){
                fullScreen();
                mousePosition = {x:null,y:null};
            }
        })
        play_agains.forEach(obj =>{
            if(obj.colision(mousePosition.x,mousePosition.y) || obj.colision(touchLeft.x,touchLeft.y) ){
                level = 0;
                init(level);
                mousePosition = {x:null,y:null};
            }
        });
        plays.forEach(obj =>{
            if(obj.colision(mousePosition.x,mousePosition.y) || obj.colision(touchLeft.x,touchLeft.y) ){
                level = 1;
                init(level);
                mousePosition = {x:null,y:null};
            }
        });
        nexts.forEach(obj =>{
            if(obj.colision(mousePosition.x,mousePosition.y) || obj.colision(touchLeft.x,touchLeft.y) ){
                level++;
                init(level);
                mousePosition = {x:null,y:null};
            }
        });
        btns.forEach(obj =>{
          if(Nave[0].nameSprite != 'explosion' && Nave[0].nameSprite != 'invisible' && Nave[0].nameSprite!=null ){
            switch(obj.imgName) {
                case "button_a":
                    if(obj.colision(touchRight.x,touchRight.y)){Nave[0].fire();}
                break;
                case "btn_upleft":
                    if(obj.colision(touchLeft.x,touchLeft.y)){
                      Nave[0].position.x-=3; Nave[0].position.y-=3;
                      Nave[0].nameSprite = 'upleft';}
                break;
                case "btn_up":
                    if(obj.colision(touchLeft.x,touchLeft.y)){Nave[0].position.y-=naveSpeedMove; Nave[0].nameSprite = 'up'}
                break;
                case "btn_upright":
                    if(obj.colision(touchLeft.x,touchLeft.y)){Nave[0].position.y-=naveSpeedMove; Nave[0].position.x+=naveSpeedMove;Nave[0].nameSprite = 'upright';}
                break;
                case "btn_left":
                    if(obj.colision(touchLeft.x,touchLeft.y)){Nave[0].position.x-=naveSpeedMove;Nave[0].nameSprite = 'left'}
                break;
                case "btn_right":
                    if(obj.colision(touchLeft.x,touchLeft.y)){Nave[0].position.x+=naveSpeedMove;Nave[0].nameSprite = 'right'}
                break;
                case "btn_downleft":
                    if(obj.colision(touchLeft.x,touchLeft.y)){Nave[0].position.y+=naveSpeedMove; Nave[0].position.x-=naveSpeedMove;Nave[0].nameSprite = 'downleft';}
                break;
                case "btn_down":
                    if(obj.colision(touchLeft.x,touchLeft.y)){Nave[0].position.y+=naveSpeedMove;Nave[0].nameSprite = 'down';}
                break;
                case "btn_downright":
                    if(obj.colision(touchLeft.x,touchLeft.y)){Nave[0].position.y+=naveSpeedMove; Nave[0].position.x+=naveSpeedMove;Nave[0].nameSprite = 'downright';}
                break;
            }
          }
        })
        /* click mouse */
        if(game_lives==0 && (level != "game_over" && level != 0  ) ){action= false; level = "game_over"; init(level); game_lives=game_lives_initial;}
      } else {
      document.getElementById('turn_device').style.display = 'block';
  }
}
  }
}

if (preload()) {
    init(level);
    document.addEventListener("load",animate());
}
