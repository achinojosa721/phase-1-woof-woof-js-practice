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
    } else {
        dogsArr.forEach(addOneDogToBar)
    }
}

function addOneDogToBar(dogObj){
    const dogSpan = document.createElement('span')
    dogSpan.innerText = dogObj.name
    dogSpan.addEventListener('click', handleSpanClick)
    bar.append(dogSpan)
}

function showOneDog(dogObj){
    //console.log(dogObj)
    details.innerHTML = ''
    const dogDiv = document.createElement('div')
    dogDiv.innerHTML = `
        <img src =${dogObj.image}>
        <h2>${dogObj.name}<h2>`
    const pupButton = document.createElement('button')

    pupButton.textContent = ((dogObj.isGoodDog) ? "Good Dog" : "Bad Dog")
    pupButton.addEventListener('click', () => togglePupButton(pupButton))
    details.append(dogDiv, pupButton)
}

    function handleSpanClick(event){
        const id = event.target.dataset.id
        getOneDog(id).then(showOneDog)
    }

    function toggleFilter(){
        if (filterButton.innerText.includes('OFF')){
            filterButton.innerText = 'Filter good dogs: ON'
            //renderAllInBar(goodDogsArr)
            getAllDogs().then(dogArr => renderAllInBar(dogArr, true))
        } else {
            filterButton.innerText = "Filter good dogs: OFF"
            //renderAllInBar(allDogsArr)
            getAllDogs().then(renderAllInBar)
        }
    }
getAllDogs().then(renderAllInBar)











getAllDogs().then(renderAllInBar)