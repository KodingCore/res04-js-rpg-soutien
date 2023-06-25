class Character {
    #posX;
    #posY;
    #walkable;
    #godMod;
    #objects;

    constructor(posX, posY, walkable, godMod, objects){
        this.#posX = 19;
        this.#posY = 15;
        this.#walkable = true;
        this.#godMod = false;
        this.#objects = [
            {
                tool: false,
                name: "axe"
            },
            {
                tool: false,
                name: "hammer"
            },
            {
                tool: false,
                name: "shovel"
            },
            {
                tool: false,
                name: "sword"
            }
        ];
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
            }
            this.render("characterUp");
        }
    }

    moveDown(){
        if(this.#posY < 19){
            this.#posY++;
            this.testIsWalkable();
            if(!this.#walkable && !this.#godMod){
                this.#posY--;
            }
            this.render("character");
        }
    }

    moveLeft(){
        if(this.#posX > 0){
            this.#posX--;
            this.testIsWalkable();
            if(!this.#walkable && !this.#godMod){
                this.#posX++;
            }
            this.render("characterLeft");
        }
    }

    moveRight(){
        if(this.#posX < 29){
            this.#posX++;
            this.testIsWalkable();
            if(!this.#walkable && !this.#godMod){
                this.#posX--;
            }
            this.render("characterRight");
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
        for(let i = 0; i < this.#objects.length; i++){
            if(!this.#objects[i].tool){
                 let toolNode = document.getElementsByClassName(this.#objects[i].name)[0];
                 if(toolNode.classList[0] === ("col-" + this.#posX) && toolNode.classList[1] === "row-" + this.#posY){
                     toolNode.classList.remove(this.#objects[i].name);
                     this.#objects[i].tool = true;
                     this.addTool(this.#objects[i].name);
                     let tempObjects = [];
                     for(let j = 0; j < this.#objects.length; j++){
                        if(this.#objects[j] != this.#objects[i]){
                            tempObjects.push(this.#objects[j]);
                        }
                     }
                     this.#objects = tempObjects;
                 }
             }
        }
    }

    inventorySpawn(){
        const bodyNode = document.querySelector("body");
        const inventory = document.createElement("div");
        bodyNode.appendChild(inventory);
        inventory.id = "inventory";
        
        for(let i = 0; i < 5; i++){
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
        }else if(!inventory.children[3].style.backgroundImage){
            inventory.children[3].style.backgroundImage =  "url('assets/images/" + tool + ".svg')";
        }else{
            inventory.children[4].style.backgroundImage =  "url('assets/images/" + tool + ".svg')";
        }
    }

    refreshSelection(index){
        const case1 = document.getElementById("case-inventory0");
        const case2 = document.getElementById("case-inventory1");
        const case3 = document.getElementById("case-inventory2");
        const case4 = document.getElementById("case-inventory3");
        const case5 = document.getElementById("case-inventory4");
        if(index === 0 && case1.style.backgroundImage){
            case2.classList.remove("selected");
            case3.classList.remove("selected");
            case4.classList.remove("selected");
            case5.classList.remove("selected");
            case1.classList.add("selected");
        }else if(index === 1 && case2.style.backgroundImage){
            case1.classList.remove("selected");
            case3.classList.remove("selected");
            case4.classList.remove("selected");
            case5.classList.remove("selected");
            case2.classList.add("selected");
        }else if(index === 2 && case3.style.backgroundImage){
            case1.classList.remove("selected");
            case2.classList.remove("selected");
            case4.classList.remove("selected");
            case5.classList.remove("selected");
            case3.classList.add("selected");
        }else if(index === 3 && case4.style.backgroundImage){
            case1.classList.remove("selected");
            case2.classList.remove("selected");
            case3.classList.remove("selected");
            case5.classList.remove("selected");
            case4.classList.add("selected");
        }else if(index === 4 && case5.style.backgroundImage){
            case1.classList.remove("selected");
            case2.classList.remove("selected");
            case3.classList.remove("selected");
            case4.classList.remove("selected");
            case5.classList.add("selected");
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