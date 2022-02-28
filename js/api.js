const submit = ()=>{
    const inputField = document.getElementById('input-field').value;
    const url =`
    https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputField}`;
    // console.log(url);git 
    fetch(url)
    .then(response=>response.json())
    .then(data=>console.log(data))

    // console.log(inputField);
    document.getElementById('input-field').value= "";
}