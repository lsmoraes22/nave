const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d', { alpha: false });
canvas.width = (screen.width<=900 ? screen.width : 900)  //640;   //innerWidth; 1024
canvas.height = (screen.height<=400 ? screen.height : 400) // 360;  //innerHeight;  576
c.font = "30px Comic Sans MS";
c.fillStyle = "white";
c.textAlign = "center";
c.fillText("Loading...", canvas.width/2, canvas.height/2);

function preload() {
    img = new imageCanvas();
    img.preloadImage(img.resources);

    snd = new audioCanvas();
    snd.preloadAudio();

    return true;
}

const gravity = 0;
let naveSpeedMove = 5;                             //velocida de movimento da nave
let varScore = 0;
let number_shows_sdk = 5;                          //numero atual de execucao
let max_shows_sdk = 5;                             //vezes a serem executadas ate o anuncio
let game_lives_initial = 3;
let game_lives = game_lives_initial;
let level = 0;
let touchPosition1 = {};
let mousePosition = {};
let touchPosition2 = {};
let touchLeft = {};
let touchRight = {};
let clickRight = false
let scrollOffset = 0; //posicao da tela
let action = false;   //carrega o jogador
let pause = false;    /*  */
let gridSize = 35;
let scenario = {
    c:0, r:0, x:0 , y:0, cMin:0, cMax:0, rMin:0, rMax:0, cWidth: 900, rHeight: 400,
    update: function(){
        this.c = Math.ceil(this.x/this.cWidth);     //canvas.width 640
        this.r = Math.ceil(this.y/this.rHeight);    // canvas.height 360
    },
    reset: function(){
        this.x = 0;
        this.y = 0;  //360-canvas.height
        this.c = 0;
        this.r = 0;
    }
};
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function testUndefined(t){
  if (t === undefined) {
  return 'Undefined value!';
}
  return t;
}
function isNull(obj) {
    return obj === null;
}
function fullScreen(){
    var elem = document.documentElement;
    if( window.innerHeight == screen.height) {
        if (elem.exitFullscreen) {
            elem.exitFullscreen();
        } else if (elem.webkitExitFullscreen) { /* Safari */
            elem.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            elem.msExitFullscreen();
        }
    } else {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        } else {
            console.log(error.message);
        }
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function pausar(){pause=true;}
function startar(){pause=false;}
