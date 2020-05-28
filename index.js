import * as MODEL from './models.js'

function events(){

    var value = document.getElementById('dropdownBones').value;
    console.log(value)

    if(value == 1){
        MODEL.drawSkull();
    }
    else if(value == 2){
        MODEL.drawThoracic();
    }
    else if(value==3){
        MODEL.drawSpine();
    }

}

document.getElementById('stage').addEventListener('click', events, {pasive: true});