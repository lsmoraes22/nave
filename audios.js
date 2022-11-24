class audioCanvas {

    aud_src = "sounds/";
    audList = [];

    preloadAudio = function (){
        this.audList['coin']       = new Audio(this.aud_src+'coin.ogg');
        this.audList['colectable'] = new Audio(this.aud_src+'colectable.ogg');
        this.audList['explosion1'] = new Audio(this.aud_src+'explosion1.ogg');
        this.audList['explosion4'] = new Audio(this.aud_src+'explosion4.ogg');
        this.audList['game_over']  = new Audio(this.aud_src+'game_over.ogg');
        this.audList['hitHurt_1']  = new Audio(this.aud_src+'hitHurt_1.ogg');
        this.audList['hitHurt_2']  = new Audio(this.aud_src+'hitHurt_2.ogg');
        this.audList['laserShoot'] = new Audio(this.aud_src+'laserShoot_5.ogg');
        this.audList['live_up']    = new Audio(this.aud_src+'live_up.ogg');
        this.audList['pickupCoin'] = new Audio(this.aud_src+'pickupCoin.ogg');
        this.audList['powerUp']    = new Audio(this.aud_src+'powerUp.ogg');
        this.audList['theme']      = new Audio(this.aud_src+'theme.ogg');
    }
    pauseArray(item){item.forEach(obj =>{obj.pause();} );}
    pauseAll(){this.audList.forEach(obj =>{obj.pause();})};
}
