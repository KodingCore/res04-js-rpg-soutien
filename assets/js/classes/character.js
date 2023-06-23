
class Character {
    #posX;
    #posY;
    #walkable;
    #godMod;
    #axe;
    #hammer;
    #shovel;
    #selection;

    constructor(posX, posY, walkable, godMod, axe, hammer, shovel, selection){
        this.#posX = 19;
        this.#posY = 15;
        this.#walkable = true;
        this.#godMod = false;
        this.#axe = false;
        this.#hammer = false;
        this.#shovel = false;
        this.#selection = "robot-hand";
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
                this.addTool("axe");
            }
        }
        if(!this.#hammer){
            const hammerNode = document.getElementsByClassName("hammer")[0];
            if(hammerNode.classList[0] === ("col-" + this.#posX) && hammerNode.classList[1] === "row-" + this.#posY){
                hammerNode.classList.remove("hammer");
                this.#hammer = true;
                this.addTool("hammer");
            }
        }
        if(!this.#shovel){
            const shovelNode = document.getElementsByClassName("shovel")[0];
            if(shovelNode.classList[0] === ("col-" + this.#posX) && shovelNode.classList[1] === "row-" + this.#posY){
                shovelNode.classList.remove("shovel");
                this.#shovel = true;
                this.addTool("shovel");
            }
        }
    }

    inventorySpawn(){
        const bodyNode = document.querySelector("body");
        const inventory = document.createElement("div");
        bodyNode.appendChild(inventory);
        inventory.id = "inventory";
        
        for(let i = 0; i < 4; i++){
            const caseInventory = document.createElement("div");
            inventory.appendChild(caseInventory);
            caseInventory.id = "case-inventory" + i;
            if(i === 0){
                caseInventory.style.backgroundImage = "url('assets/images/robot-hand.svg')";
                caseInventory.classList.add("selected");
            }
        }
    }

    addTool(tool){
        const inventory = document.getElementById("inventory");
        if(tool === "axe"){
            if(!inventory.children[1].style.backgroundImage){
                inventory.children[1].style.backgroundImage =  "url('assets/images/axe.svg')";
            }else if(!inventory.children[2].style.backgroundImage){
                inventory.children[2].style.backgroundImage =  "url('assets/images/axe.svg')";
            }else{
                inventory.children[3].style.backgroundImage =  "url('assets/images/axe.svg')";
            }
        }
        if(tool === "hammer"){
            if(!inventory.children[1].style.backgroundImage){
                inventory.children[1].style.backgroundImage =  "url('assets/images/hammer.svg')";
            }else if(!inventory.children[2].style.backgroundImage){
                inventory.children[2].style.backgroundImage =  "url('assets/images/hammer.svg')";
            }else{
                inventory.children[3].style.backgroundImage =  "url('assets/images/hammer.svg')";
            }
        }
        if(tool === "shovel"){
            if(!inventory.children[1].style.backgroundImage){
                inventory.children[1].style.backgroundImage =  "url('assets/images/shovel.svg')";
            }else if(!inventory.children[2].style.backgroundImage){
                inventory.children[2].style.backgroundImage =  "url('assets/images/shovel.svg')";
            }else{
                inventory.children[3].style.backgroundImage =  "url('assets/images/shovel.svg')";
            }
        }
    }

    refreshSelection(index){
        const case1 = document.getElementById("case-inventory0");
        const case2 = document.getElementById("case-inventory1");
        const case3 = document.getElementById("case-inventory2");
        const case4 = document.getElementById("case-inventory3");
        if(index === 0 && case1.style.backgroundImage){
            case2.classList.remove("selected");
            case3.classList.remove("selected");
            case4.classList.remove("selected");
            case1.classList.add("selected");
        }else if(index === 1 && case2.style.backgroundImage){
            case1.classList.remove("selected");
            case3.classList.remove("selected");
            case4.classList.remove("selected");
            case2.classList.add("selected");
        }else if(index === 2 && case3.style.backgroundImage){
            case1.classList.remove("selected");
            case2.classList.remove("selected");
            case4.classList.remove("selected");
            case3.classList.add("selected");
        }else if(index === 3 && case4.style.backgroundImage){
            case1.classList.remove("selected");
            case2.classList.remove("selected");
            case3.classList.remove("selected");
            case4.classList.add("selected");
        }
    }

    render(){

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