import { map } from "../data/game-map.js";
import { objects} from "../data/game-objects.js";
import loadFloors from "./loadFloors.js";
import loadObjects from "./loadObjects.js";
export default function initMap(rows = 20, cols = 30){
    let body = null;
    let box = null;
    let id = 0;

    for(var i = 0; i < rows; ++i)
    {
        for(var j = 0; j < cols; ++j)
        {
            body = document.querySelector("body");
            box = document.createElement("section");
            box.classList.add("col-" + j);
            box.classList.add("row-" + i);
            box.setAttribute("id", id);
            body.appendChild(box);
            id++;
        }
    }

    loadFloors(map);
    loadObjects(objects);
}