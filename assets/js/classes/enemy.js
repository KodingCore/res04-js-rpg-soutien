class Enemy {
    #name;
    #posX;
    #posY;
    #initPosX;
    #initPosY;
    #walkable;
    #lastDirection;
    #zoning;

    constructor(name, posX, posY, zoning){
        this.#name = name;
        this.#posX = posX;
        this.#posY = posY;
        this.#initPosX = posX;
        this.#initPosY = posY;
        this.#walkable = true;
        this.#zoning = zoning;
    }

    get posX(){
        return this.#posX;
    }

    get posY(){
        return this.#posY;
    }

    get name(){
        return this.#name;
    }

    set posX(posX){
        this.#posX = posX;
    }

    set posY(posY){
        this.#posY = posY;
    }

    set name(name){
        this.#name = name;
    }

    moveUp(){
        
        if(this.#posY > 0 && this.#posY > this.#initPosY - this.#zoning){
            this.#posY--;
            this.testIsWalkable();
            if(!this.#walkable){
                this.#posY++;
                this.redirection();
            }else{
                this.render("enemyUp");
                this.#lastDirection = "Up";
            }
        }else{
            this.redirection();
        }
    }

    moveDown(){
        if(this.#posY < 19 && this.#posY < this.#initPosY + this.#zoning){
            this.#posY++;
            this.testIsWalkable();
            if(!this.#walkable){
                this.#posY--;
                this.redirection();
            }else{
                this.render("enemy");
                this.#lastDirection = "Down";
            }
        }else{
            this.redirection();
        }
    }

    moveLeft(){
        if(this.#posX > 0 && this.#posX > this.#initPosX - this.#zoning){
            this.#posX--;
            this.testIsWalkable();
            if(!this.#walkable){
                this.#posX++;
                this.redirection();
            }else{
                this.render("enemyLeft");
                this.#lastDirection = "Left";
            }
        }else{
            this.redirection();
        }
    }

    moveRight(){
        if(this.#posX < 29 && this.#posX < this.#initPosX + this.#zoning){
            this.#posX++;
            this.testIsWalkable();
            if(!this.#walkable){
                this.#posX--;
                this.redirection();
            }else{
                this.render("enemyRight");
                this.#lastDirection = "Right";
            }
        }else{
            this.redirection();
        }
    }

    redirection(){
        if(this.#lastDirection === "Left"){
            this.moveRight();
        }else if(this.#lastDirection === "Right"){
            this.moveLeft();
        }else if(this.#lastDirection === "Up"){
            this.moveDown();
        }else if(this.#lastDirection === "Down"){
            this.moveUp();
        }
    }
    
    testIsWalkable(){
        let newEnemyBox = document.getElementsByClassName("col-" + this.#posX + " row-" + this.#posY)[0];
        let listObjectsUnwalkable = ["water", "stump", "chest", "tree", "rock", "character",  "characterUp", "characterLeft", "characterRight", "hammer", "sword", "shovel", "axe"];
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

        newEnemyBox.classList.add(this.#name);

        let lastEnemyBox = document.querySelector('.' + this.#name + '.enemy');

        if(lastEnemyBox){
            lastEnemyBox.classList.remove("enemy");
            lastEnemyBox.classList.remove(this.#name);
        }else{
            lastEnemyBox = document.querySelector('.' + this.#name + '.enemyUp');
            if(lastEnemyBox){
                lastEnemyBox.classList.remove("enemyUp");
                lastEnemyBox.classList.remove(this.#name);

            }else{
                lastEnemyBox = document.querySelector('.' + this.#name + '.enemyLeft');
                if(lastEnemyBox){
                    lastEnemyBox.classList.remove("enemyLeft");
                    lastEnemyBox.classList.remove(this.#name);
                }else{
                    lastEnemyBox = document.querySelector('.' + this.#name + '.enemyRight');
                    if(lastEnemyBox){
                        lastEnemyBox.classList.remove("enemyRight");
                        lastEnemyBox.classList.remove(this.#name);
                    }
                }
            }
        }
        newEnemyBox.classList.add(classChoice);
    }
}

export { Enemy };