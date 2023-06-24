import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";
import { Enemy } from "./classes/enemy.js";

window.addEventListener("DOMContentLoaded", function(){
    //MAP
    initMap(20, 30);

    //HEROS
    let heros = new Character();
    heros.render("character");
    heros.inventorySpawn();
    keyEventsListeners(heros);

    //ENEMY
    let enemy = new Enemy(23, 12);

    enemy.render("enemy");

    let enemyTab = [enemy];

    let intervalMoveEnemy = setInterval(updatePositionsEnemy, 250, enemyTab);
    
});

function keyEventsListeners(heros){
    window.addEventListener("keydown", function(event){
        if(event.key === "z" || event.key ==="Z" || event.key ==="ArrowUp"){
            heros.moveUp();
        }else if(event.key === "q" || event.key ==="Q" || event.key ==="ArrowLeft"){
            heros.moveLeft();
        }else if(event.key === "s" || event.key ==="S" || event.key ==="ArrowDown"){
            heros.moveDown();
        }else if(event.key === "d" || event.key ==="D" || event.key ==="ArrowRight"){
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
let countOne = 0;
    let countTwo = 0;
    let countThree = 0;
    let countZero = 0;
    

function updatePositionsEnemy(enemyTab){

    
    for(let enemy of enemyTab){
        let choiceDirection = Math.round(Math.random(0, 1) * 3);

        while(enemy.posX >= 28 && choiceDirection === 2){
            choiceDirection = Math.round(Math.random(0, 1) * 3);
        }
        while(enemy.posX <= 1 && choiceDirection === 0){
            choiceDirection = Math.round(Math.random(0, 1) * 3);
        }
        while(enemy.posY <= 0 && choiceDirection === 1){
            choiceDirection = Math.round(Math.random(0, 1) * 3);
        }
        while(enemy.posY >= 18 && choiceDirection === 3){
            choiceDirection = Math.round(Math.random(0, 1) * 3);
        }

        if(choiceDirection === 0){
            countZero++;
            enemy.moveLeft();
        }else if(choiceDirection === 1){
            countOne++;
            enemy.moveUp();
        }else if(choiceDirection === 2){
            countTwo++;
            enemy.moveRight();
        }else if(choiceDirection === 3){
            countThree++;
            enemy.moveDown();
        }
        // console.clear();
        // console.log("0 : " + countZero + " || 1 : " + countOne +  " || 2 : " + countTwo +  " || 3 : " + countThree);
    }
    
}