import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";
import { Enemy } from "./classes/enemy.js";

window.addEventListener("DOMContentLoaded", function(){
    initMap(20, 30);
    let heros = new Character();
    heros.render("character");
    let enemy = new Enemy();
    enemy.render("enemy");
    heros.inventorySpawn();
    keyEventsListeners(heros);
    
});

function keyEventsListeners(heros){
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
}

/*
let updateId;

function topDepart(){
    clearTimeout(modalMatchTimeOut);
    modalMatchTimeOut = null;
    modalMatch.style.display = "none";
    updateId = setInterval(updatePositions, 750);
}

function updatePositions(){
    
    let YMem1 = null;
    let YMemOther = null;
    
    let XMem1 = null;
    let XMemOther = null;
    
    
    let Xok = false;
    let Yok = false;
    
    //Conditions de fin
    if( 
        Xpos1 === Xpos2 && Ypos1 === Ypos2-1 || //1 au dessus de 2
        Xpos1 === Xpos2 && Ypos1 === Ypos2+1  || //1 au dessous de 2
        Xpos1 === Xpos2-1 && Ypos1 === Ypos2  || //1 à gauche de 2
        Xpos1 === Xpos2+1 && Ypos1 === Ypos2  || //1 à droite de 2
        Xpos1 === Xpos2-1 && Ypos1 === Ypos2-1 || //1 au dessus à gauche de 2
        Xpos1 === Xpos2+1 && Ypos1 === Ypos2-1 || //1 au dessus à droite de 2
        Xpos1 === Xpos2+1 && Ypos1 === Ypos2+1 || //1 au dessous à droite de 2
        Xpos1 === Xpos2-1 && Ypos1 === Ypos2+1 //1 au dessous à gauche de 2
        
    )
    {
            modalFin.style.display = "flex";
            titleFin.textContent = "Fin de la map n°" + (numMap+1);
            paraphFin.textContent = "Nombre de coups: " + nombreDeCoups;
        
            nombreDeCoups = 0;
            numMap++;
            counterMap++;
            
            
            
            deleteGrid();
            Yok = false;
            Xok = false;
            
            clearInterval(updateId);
            clearTimeout(timerFirst);
            timerFirst = null;
            updateId = null;
            
            if(counterMap < maps.length){
                
                newMap();
            }
            
    }
    else if(!Xok && !Yok)
    {
        if(Ypos1 === Ypos2 || Ypos1 === Ypos2-1 || Ypos1 === Ypos2+1){
            
            
        }else if(Ypos1 > Ypos2){ //1 dessous 2
            
            YMem1 = mapEnCours[Ypos1];
            YMemOther = mapEnCours[Ypos1-1];
            mapEnCours.splice(Ypos1-1, 2, YMem1, YMemOther);
            Ypos1--;
            
        }else if(Ypos1 < Ypos2){ //1 dessus 2
            YMem1 = mapEnCours[Ypos1];
            YMemOther = mapEnCours[Ypos1+1];
            mapEnCours.splice(Ypos1, 2, YMemOther, YMem1);
            Ypos1++;
        }
        
        if(Xpos1 === Xpos2 || Xpos1 === Xpos2-1 || Xpos1 === Xpos2+1){
            
            
        }else if(Xpos1 > Xpos2){
            
            XMem1 = mapEnCours[Ypos1][Xpos1];
            XMemOther = mapEnCours[Ypos1][Xpos1-1];
            mapEnCours[Ypos1].splice(Xpos1-1, 2, XMem1, XMemOther);
            Xpos1--;
            
        }else if(Xpos1 < Xpos2){
            XMem1 = mapEnCours[Ypos1][Xpos1];
            XMemOther = mapEnCours[Ypos1][Xpos1+1];
            mapEnCours[Ypos1].splice(Xpos1, 2, XMemOther, XMem1);
            Xpos1++;
        }
        
        if(Ypos1 === Ypos2 || Ypos1 === Ypos2-1 || Ypos1 === Ypos2+1){
            Yok = true;
        }
        
        if(Xpos1 === Xpos2 || Xpos1 === Xpos2-1 || Xpos1 === Xpos2+1){
            Xok = true;
        }
        
        nombreDeCoups++;
        nbrCoups.textContent = "Nombre de coups : " + nombreDeCoups;
        mapNumber.textContent = "Map N°: " + (numMap+1);
        deleteGrid();
        gridCreator(mapEnCours);
    }
}*/