const baseURL = " http://localhost:3000/pups"

const bar = document.querySelector("#dog-bar")
const details = document.querySelector("#dog-info")
const filterButton = document.querySelector("#good-dog-filter")

filterButton.addEventListener('click', toggleFilter)

function getAllDogs(){
    return fetch(baseURL)
    .then (response => response.json())
    .then(renderAllInBar)
}

function getOneDog(id){
    return fetch(baseURL + `/${id}`)
    .then(response => response.json())
}

function renderAllInBar(dogsArr, filter = false){
    bar.innerHTML = ''
    if (filter){
        dogsArr.filter(dogObj => dogObj.isGoodDog).forEach(addOneDogToBar)
    }
}








getAllDogs().then(renderAllInBar)