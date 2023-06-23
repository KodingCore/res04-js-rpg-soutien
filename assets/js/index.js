import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";

window.addEventListener("DOMContentLoaded", function(){
    initMap(20, 30);
    let heros = new Character();
    heros.render();
    heros.inventorySpawn();

    this.window.addEventListener("keydown", function(event){
        if(event.key === "z" || event.key ==="Z"){
            heros.moveUp();
        }else if(event.key === "q" || event.key ==="Q"){
            heros.moveLeft();
        }else if(event.key === "s" || event.key ==="S"){
            heros.moveDown();
        }else if(event.key === "d" || event.key ==="D"){
            heros.moveRight();
        }else if(event.key === "g" || event.key ==="G"){
            heros.godMod = !heros.godMod;
        }else if(event.key === "&" || event.key ==="1"){
            heros.refreshSelection(0);
        }else if(event.key === "é" || event.key ==="2"){
            heros.refreshSelection(1);
        }else if(event.key === '"' || event.key ==="3"){
            heros.refreshSelection(2);
        }else if(event.key === "'" || event.key ==="4"){
            heros.refreshSelection(3);
        }
    });
});