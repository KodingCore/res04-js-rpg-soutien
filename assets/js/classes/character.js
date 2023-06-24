class Character {
    #posX;
    #posY;
    #walkable;
    #godMod;
    #axe;
    #hammer;
    #shovel;

    constructor(posX, posY, walkable, godMod, axe, hammer, shovel){
        this.#posX = 19;
        this.#posY = 15;
        this.#walkable = true;
        this.#godMod = false;
        this.#axe = false;
        this.#hammer = false;
        this.#shovel = false;
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
                this.render("characterUp");
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
                this.render("character");
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
                this.render("characterLeft");
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
                this.render("characterRight");
            }
        }
    }
    
    testIsWalkable(){
        let newCharacterBox = document.getElementsByClassName("col-" + this.#posX + " row-" + this.#posY)[0];
        let listObjectsUnwalkable = ["water", "stump", "chest", "tree", "rock", "enemy", "enemyUp", "enemyLeft", "enemyRight"];
        for(let object of listObjectsUnwalkable){
            if(newCharacterBox.classList.contains(object)){
                this.#walkable = false;
                break;
            }else{
                this.#walkable = true;
            }
        };
        
    }

    testOnTools(){
        // let objects = [
        //     {
        //         tool: this.#axe,
        //         name: "axe"
        //     },
        //     {
        //         tool: this.#hammer,
        //         name: "hammer"
        //     },
        //     {
        //         tool: this.#shovel,
        //         name: "shovel"
        //     }
        // ];

        // for(let object of objects){
            
        // }
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
        if(!inventory.children[1].style.backgroundImage){
            inventory.children[1].style.backgroundImage =  "url('assets/images/" + tool + ".svg')";
        }else if(!inventory.children[2].style.backgroundImage){
            inventory.children[2].style.backgroundImage =  "url('assets/images/" + tool + ".svg')";
        }else{
            inventory.children[3].style.backgroundImage =  "url('assets/images/" + tool + ".svg')";
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

    render(classChoice){

        
        let newCharacterBox = document.getElementsByClassName("col-" + this.#posX + " row-" + this.#posY)[0];

        let lastCharacterBox = document.getElementsByClassName("character");
        if(lastCharacterBox.length > 0){
            lastCharacterBox[0].classList.remove("character");
        }else{
            lastCharacterBox = document.getElementsByClassName("characterUp");
            if(lastCharacterBox.length > 0){
                lastCharacterBox[0].classList.remove("characterUp");
            }else{
                lastCharacterBox = document.getElementsByClassName("characterLeft");
                if(lastCharacterBox.length > 0){
                    lastCharacterBox[0].classList.remove("characterLeft");
                }else{
                    lastCharacterBox = document.getElementsByClassName("characterRight");
                    if(lastCharacterBox.length > 0){
                        lastCharacterBox[0].classList.remove("characterRight");
                    }
                }
            }
        }
        
        newCharacterBox.classList.add(classChoice);

        this.testOnTools();
    }
}

export { Character };