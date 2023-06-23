
class Character {
    #posX;
    #posY;
    #walkable;
    #godMod;

    constructor(posX, posY, walkable, godMod){
        this.#posX = 19;
        this.#posY = 15;
        this.#walkable = true;
        this.#godMod = false;
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

    set godMod(godMod){
        this.#godMod = godMod;
    }

    moveUp(){
        
        if(this.#posY > 0){
            this.#posY--;
            this.testIsWalkable();
            if(!this.#walkable && !this.#godMod){
                this.#posY++;
            }else{
                this.render();
            }

        }
        
    }

    moveDown(){
        if(this.#posY < 19){
            this.#posY++;
            this.testIsWalkable();
            if(!this.#walkable && !this.#godMod){
                this.#posY--;
            }else{
                this.render();
            }
        }
    }

    moveLeft(){
        if(this.#posX > 0){
            this.#posX--;
            this.testIsWalkable();
            if(!this.#walkable && !this.#godMod){
                this.#posX++;
            }else{
                this.render();
            }
        }
    }

    moveRight(){
        if(this.#posX < 29){
            this.#posX++;
            this.testIsWalkable();
            if(!this.#walkable && !this.#godMod){
                this.#posX--;
            }else{
                this.render();
            }
        }
    }
    
    testIsWalkable(){
        let newCharacterBox = document.getElementsByClassName("col-" + this.#posX + " " + "row-" + this.#posY)[0];
        if(newCharacterBox.classList.contains("water") || newCharacterBox.classList.contains("stump") || newCharacterBox.classList.contains("tree") || newCharacterBox.classList.contains("rock")){
            this.#walkable = false;
        }else{
            this.#walkable = true;
        }
    }

    render(){
        // if(newCharacterBox.classList.contains("water") || newCharacterBox.classList.contains("stump") || newCharacterBox.classList.contains("tree") || newCharacterBox.classList.contains("rock"))


        let lastCharacterBox = document.getElementsByClassName("character");
        let newCharacterBox = document.getElementsByClassName("col-" + this.#posX + " " + "row-" + this.#posY)[0];

        if(lastCharacterBox.length > 0){
            lastCharacterBox[0].classList.remove("character");
        }
        
        newCharacterBox.classList.add("character");
    }
}

export { Character };