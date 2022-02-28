const submit = ()=>{
    document.getElementById("player-container").innerHTML = "";
    document.getElementById("playerInfo").innerHTML = "";
    const inputField = document.getElementById('input-field').value;
    const url =`
    https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputField}`;
    // console.log(url);git 
    fetch(url)
    .then(response=>response.json())
    .then(data=>showDisplay(data.player))

    // console.log(inputField);
    document.getElementById('input-field').value= "";
}

const showDisplay = (players) =>{
    for(const player of players){
        const parent = document.getElementById('player-container');
    const div = document.createElement("div");
    div.innerHTML= `
    <div class="card mb-3" style="width: 18rem;">
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p>${player.strNationality}</p>
            <div class="allButton">
                <button class="btn btn-danger">Delete</button>
                <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
            </div>
        </div>
    </div>`
    parent.appendChild(div);
    }
};

const details= (id)=>{
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setDetails(data.players[0]));
};

const setDetails = (info)=>{
    document.getElementById("playerInfo").innerHTML = "";
    const playerInfo = document.getElementById('playerInfo');
    const div = document.createElement("div");
    div.innerHTML=`
    <div class="card mb-3" style="width: 18rem;">
    <img src="${info.strThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${info.strPlayer}</h5>
        <p>${info.strNationality}</p>
        <p>${info.dateBorn}</p>
        <p>Position:Position: ${info.strPosition}</p>
        <p>${info.strNationality}</p>
    </div>
    </div>
    `
    playerInfo.appendChild(div);
};