addEventListener('keydown', ({keyCode}) =>{
    switch(keyCode){
        case 65:   //key a
            keys.a.pressed = true;
            clickRight = true;
        break;
        case 83:   //key s
            keys.s.pressed = true;
            clickRight = true;
        break;
        case 37:   //key left
            keys.left.pressed = true;
        break;
        case 38:   //key up
            keys.up.pressed = true;
        break;
        case 39:   //key right
            keys.right.pressed = true;
        break;
        case 40:   //key down
            keys.down.pressed = true;
        break;
        case 80:   //key p
            if(pause==true){startar();}else{pausar();}
        break;
    }
})
addEventListener('keyup', ({keyCode}) =>{
    switch(keyCode){
        case 65:   //key a
            keys.a.pressed = false;
            clickRight = false;
        break;
        case 83:   //key s
            keys.s.pressed = false;
            clickRight = false;
        break;
        case 37:   //key left
            keys.left.pressed = false;
        break;
        case 38:   //key up
            keys.up.pressed = false;
        break;
        case 39:   //key right
            keys.right.pressed = false;
        break;
        case 40:   //key down
            keys.down.pressed = false;
        break;
    }
})

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return {x:x ,y:y}
}

function getTouchPosition(canvas, touch) {
    const rect = canvas.getBoundingClientRect()
    const x = touch.pageX - rect.left;
    const y = touch.pageY - rect.top;
    return {x:x ,y:y}
}

canvas.addEventListener('mousedown',  function(e){
    mousePosition = getCursorPosition(canvas, e);
})

canvas.addEventListener('mouseup',  function(e){
    mousePosition = {x:null,y:null};
})

canvas.addEventListener("touchstart",  function(evt){
    var touch1 = evt.targetTouches[0];
    var touch2 = evt.targetTouches[1];

    if (typeof touch1 != "undefined") {
        touchPosition1 = getTouchPosition(canvas, touch1);
        if(touchPosition1.x<canvas.width/2){touchLeft=touchPosition1;}else{touchRight=touchPosition1;}
    }
    if (typeof touch2 != "undefined") {
        touchPosition2 = getTouchPosition(canvas, touch2);
        if(touchPosition2.x<canvas.width/2){touchLeft=touchPosition2;}else{touchRight=touchPosition2;}
    }
}, false);

canvas.addEventListener("touchmove", function(evt) {
    var touch1 = evt.targetTouches[0];
    var touch2 = evt.targetTouches[1];

    if (typeof touch1 != "undefined") {
        touchPosition1 = getTouchPosition(canvas, touch1);
        if(touchPosition1.x<canvas.width/2){touchLeft=touchPosition1;}else{touchRight=touchPosition1;}
    }
    if (typeof touch2 != "undefined") {
        touchPosition2 = getTouchPosition(canvas, touch2);
        if(touchPosition2.x<canvas.width/2){touchLeft=touchPosition2;}else{touchRight=touchPosition2;}
    }

}, false);

canvas.addEventListener("touchend", function(evt){
    var touch1 = evt.changedTouches[0];
    var touch2 = evt.changedTouches[1];

    if (typeof touch1 != "undefined") {
        touchPosition1 = getTouchPosition(canvas, touch1);
        if(touchPosition1.x<canvas.width/2){touchLeft={};}else{touchRight={};}
    }
    if (typeof touch2 != "undefined") {
        touchPosition2 = getTouchPosition(canvas, touch2);
        if(touchPosition2.x<canvas.width/2){touchLeft={};}else{touchRight={};}
    }

}, false);
