export default function loadFloors(map)
{
    let boxId = 0;
    map.forEach(row => {
        row.forEach(value => {
            const box = document.getElementById(boxId);
            if(value === 'G'){
                box.classList.add("grass");
            }else if(value === "W"){
                box.classList.add("water");
            }else if(value === "S"){
                box.classList.add("sand");
            }else{
                box.classList.add("dirt");
            }
            boxId++;
        });
    });
}