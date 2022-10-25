class audioCanvas {

    aud_src = "sound/";
    audList = [];

    preloadAudio = function (){
        this.audList['coin'] = new Audio(this.aud_src+'coin.ogg');
        this.audList['colectable'] = new Audio(this.aud_src+'colectable.ogg');
        this.audList['explosion1'] = new Audio(this.aud_src+'explosion1.ogg');
        this.audList['explosion4'] = new Audio(this.aud_src+'explosion4.ogg');
        this.audList['game-over']  = new Audio(this.aud_src+'game-over.ogg');
        this.audList['music']      = new Audio(this.aud_src+'music.ogg');
        this.audList['pickupCoin'] = new Audio(this.aud_src+'pickupCoin.ogg');
        this.audList['laserShoot'] = new Audio(this.aud_src+'laserShoot_5.wav');
        this.audList['live_up']    = new Audio(this.aud_src+'live_up.ogg');
        this.audList['powerUp']    = new Audio(this.aud_src+'powerUp.ogg');
        this.audList['theme']      = new Audio(this.aud_src+'theme.ogg');
    }

    pauseArray(item){item.pause();}
    pauseAll(){this.audList.forEach(pauseArray)};
}
