class Enemy {
    #posX;
    #posY;
    #walkable;

    constructor(posX, posY, walkable){
        this.#posX = posX;
        this.#posY = posY;
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
        let listObjectsUnwalkable = ["water", "stump", "chest", "tree", "rock", "character",  "characterUp", "characterLeft", "characterRight"];
        for(let object of listObjectsUnwalkable){
            if(newEnemyBox.classList.contains(object)){
                this.#walkable = false;
                break;
            }else{
                this.#walkable = true;
            }
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