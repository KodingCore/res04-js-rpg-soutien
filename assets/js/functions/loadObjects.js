export default function loadObjects(objects)
{

    for(let object of objects){
        const box = document.getElementsByClassName("col-" + object.posX + " " + "row-" + object.posY)[0]; //col-0 row-0 water
        box.classList.add(object.type);
    }
}