class Enemy {
    #posX;
    #posY;
    #walkable;

    constructor(posX, posY, walkable){
        this.#posX = 23;
        this.#posY = 10;
        this.#walkable = true;
    }

    get posX(){
        return this.#posX;
    }

    get posY(){
        return this.#posY;
    }

    set posX(posX){
        this.#posX = posX;
    }

    set posY(posY){
        this.#posY = posY;
    }

    moveUp(){
        
        if(this.#posY > 0){
            this.#posY--;
            this.testIsWalkable();
            if(!this.#walkable){
                this.#posY++;
            }else{
                this.render("enemyUp");
            }
        }
    }

    moveDown(){
        if(this.#posY < 19){
            this.#posY++;
            this.testIsWalkable();
            if(!this.#walkable){
                this.#posY--;
            }else{
                this.render("enemy");
            }
        }
    }

    moveLeft(){
        if(this.#posX > 0){
            this.#posX--;
            this.testIsWalkable();
            if(!this.#walkable){
                this.#posX++;
            }else{
                this.render("enemyLeft");
            }
        }
    }

    moveRight(){
        if(this.#posX < 29){
            this.#posX++;
            this.testIsWalkable();
            if(!this.#walkable){
                this.#posX--;
            }else{
                this.render("enemyRight");
            }
        }
    }
    
    testIsWalkable(){
        let newEnemyBox = document.getElementsByClassName("col-" + this.#posX + " row-" + this.#posY)[0];
        if(newEnemyBox.classList.contains("water") || newEnemyBox.classList.contains("stump") || newEnemyBox.classList.contains("tree") || newEnemyBox.classList.contains("rock")){
            this.#walkable = false;
        }else{
            this.#walkable = true;
        }
    }

    render(classChoice){

        
        let newEnemyBox = document.getElementsByClassName("col-" + this.#posX + " row-" + this.#posY)[0];

        let lastEnemyBox = document.getElementsByClassName("enemy");
        if(lastEnemyBox.length > 0){
            lastEnemyBox[0].classList.remove("enemy");
        }else{
            lastEnemyBox = document.getElementsByClassName("enemyUp");
            if(lastEnemyBox.length > 0){
                lastEnemyBox[0].classList.remove("enemyUp");
            }else{
                lastEnemyBox = document.getElementsByClassName("enemyLeft");
                if(lastEnemyBox.length > 0){
                    lastEnemyBox[0].classList.remove("enemyLeft");
                }else{
                    lastEnemyBox = document.getElementsByClassName("enemyRight");
                    if(lastEnemyBox.length > 0){
                        lastEnemyBox[0].classList.remove("enemyRight");
                    }
                }
            }
        }
        
        newEnemyBox.classList.add(classChoice);

    }
}

export { Enemy };