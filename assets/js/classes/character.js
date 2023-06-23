
class Character {
    #posX;
    #posY;
    #walkable;
    #godMod;
    #axe;
    #hammer;

    constructor(posX, posY, walkable, godMod, axe, hammer){
        this.#posX = 19;
        this.#posY = 15;
        this.#walkable = true;
        this.#godMod = false;
        this.#axe = false;
        this.#hammer = false;
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
        let newCharacterBox = document.getElementsByClassName("col-" + this.#posX + " row-" + this.#posY)[0];
        if(newCharacterBox.classList.contains("water") || newCharacterBox.classList.contains("stump") || newCharacterBox.classList.contains("tree") || newCharacterBox.classList.contains("rock")){
            this.#walkable = false;
        }else{
            this.#walkable = true;
        }
    }

    testOnTools(){
        if(!this.#axe){
            const axeNode = document.getElementsByClassName("axe")[0];
            if(axeNode.classList[0] === ("col-" + this.#posX) && axeNode.classList[1] === "row-" + this.#posY){
                axeNode.classList.remove("axe");
                this.#axe = true;
                // this.displayAth();
            }
        }
        
    }

    inventorySpawn(){
        const bodyNode = document.querySelector("body");
        const inventory = document.createElement("div");
        bodyNode.appendChild(inventory);
        inventory.id = "inventory";
        
        for(let i = 0; i < 3; i++){
            const caseInventory = document.createElement("div");
            inventory.appendChild(caseInventory);
            caseInventory.id = "case-inventory" + i;
        }
    }

    displayAth(){
        const bodyNode = document.querySelector("body");
        if(this.#axe){
            const myAxe = document.createElement("div");
            bodyNode.appendChild(myAxe);
            myAxe.style.backgroundColor = "rgb(255,255,255)";
            myAxe.style.backgroundImage = "url('assets/images/axe.svg')";
            myAxe.style.position = "fixed";
            myAxe.style.width = "70px";
            myAxe.style.height = "70px";
            myAxe.style.bottom = "0";
            myAxe.style.left = "0";
            myAxe.style.zIndex = "5";
        }
        if(this.#hammer){

        }
    }

    render(){
        // if(newCharacterBox.classList.contains("water") || newCharacterBox.classList.contains("stump") || newCharacterBox.classList.contains("tree") || newCharacterBox.classList.contains("rock"))


        let lastCharacterBox = document.getElementsByClassName("character");
        let newCharacterBox = document.getElementsByClassName("col-" + this.#posX + " row-" + this.#posY)[0];

        if(lastCharacterBox.length > 0){
            lastCharacterBox[0].classList.remove("character");
        }
        
        newCharacterBox.classList.add("character");

        this.testOnTools();
    }
}

export { Character };