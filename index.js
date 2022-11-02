let homeBtnEl = document.getElementById('home')
let addScenarioBtnEl = document.getElementById('add-scenario')
let allScenariosBtnEl = document.getElementById('all-scenarios')
let addVehicleBtnEl = document.getElementById('add-vehicle')
let addScenarioContainerEl = document.getElementById('scenario-add')
let scenariosTableEl = document.getElementById('scenarios-table')
let vehiceDatailsEl = document.getElementById('vehicle-details')
let homeContainerEl = document.getElementById('home-container')
let homeSelectEl = document.getElementById('select-scenario-home')
let startBtnEl = document.getElementById('start')
let stopBtnEl = document.getElementById('stop')
let addScenarioInputBtnEl = document.getElementById('add-btn-scenario')
let resetScenarioBtnEl = document.getElementById('reset-btn-scenario')
let goBackScenarioBtnEl = document.getElementById('goback-btn-scenario')
let addScenarioInputBtnEl1 = document.getElementById('add-scenario-btn1')
let selectScenario1 = document.getElementById('select-scenario1')
let addVehicleBtnEl1 = document.getElementById('add-v1')
let deleteBtnEl1 = document.getElementById('delete1')
let selectScenario = document.getElementById('select-scenario')
let addVehicle = document.getElementById('add-v')
let resetVehicleBtnEl = document.getElementById('reset-v')
let goBackVehicleBtnEl = document.getElementById('goback-v')
let homeTableBodyEl = document.getElementById('table-body-home')
let scenariosTableBodyEl = document.getElementById('scenario-table-body')
let scenarioResetBtnEl1 = document.getElementById('reset-scenario-btn1')
let updateBtnEl = document.getElementById('updateBtnEl')
let updateBtnEl1 = document.getElementById('update1')
let resetVehicleBtnEl1 = document.getElementById('reset-v1')
let graphEl = document.getElementById('graph')

//Setting for Tabs
homeBtnEl.onclick = function () {
    homeContainerEl.classList.remove('d-none')
    addScenarioContainerEl.classList.add('d-none')
    addScenarioBtnEl.classList.remove('button-style')
    scenariosTableEl.classList.add('d-none')
    allScenariosBtnEl.classList.remove('button-style')
    homeBtnEl.classList.add('button-style')
    vehiceDatailsEl.classList.add('d-none')
    addVehicleBtnEl.classList.remove('button-style')
}

addScenarioBtnEl.onclick = function () {
    homeContainerEl.classList.add('d-none')
    addScenarioContainerEl.classList.remove('d-none')
    addScenarioBtnEl.classList.add('button-style')
    homeBtnEl.classList.remove('button-style')
    allScenariosBtnEl.classList.remove('button-style')
    vehiceDatailsEl.classList.add('d-none')
    addVehicleBtnEl.classList.remove('button-style')
    scenariosTableEl.classList.add('d-none')
}

allScenariosBtnEl.onclick = function () {
    addScenarioContainerEl.classList.add('d-none')
    scenariosTableEl.classList.remove('d-none')
    allScenariosBtnEl.classList.add('button-style')
    addScenarioBtnEl.classList.remove('button-style')
    homeBtnEl.classList.remove('button-style')
    addVehicleBtnEl.classList.remove('button-style')
    addVehicleBtnEl.classList.remove('button-style')
    vehiceDatailsEl.classList.add('d-none')
    homeContainerEl.classList.add('d-none')
}
addVehicleBtnEl.onclick = function () {
    homeBtnEl.classList.remove('button-style')
    addScenarioBtnEl.classList.remove('button-style')
    allScenariosBtnEl.classList.remove('button-style')
    addVehicleBtnEl.classList.add('button-style')
    homeContainerEl.classList.add('d-none')
    addScenarioContainerEl.classList.add('d-none')
    scenariosTableEl.classList.add('d-none')
    vehiceDatailsEl.classList.remove('d-none')
}

goBackVehicleBtnEl.onclick = function () {
    addVehicleBtnEl.classList.remove('button-style')
    homeBtnEl.classList.add('button-style')
    vehiceDatailsEl.classList.add('d-none')
    homeContainerEl.classList.remove('d-none')
    addScenarioBtnEl.classList.remove('button-style')
}

goBackScenarioBtnEl.onclick = function () {
    addScenarioBtnEl.classList.remove('button-style')
    addVehicleBtnEl.classList.remove('button-style')
    homeBtnEl.classList.add('button-style')
    homeContainerEl.classList.remove('d-none')
    addScenarioContainerEl.classList.add('d-none')
}
//Setting for Tabs


//Getting Data From Local Storage
function getScenarioVehicleListFromLocalStorage() {
    let stringifiedScenarioList = localStorage.getItem('carParking')
    let parsedScenarioList = JSON.parse(stringifiedScenarioList)
    if (parsedScenarioList === null) {
        return []
    } else {
        return parsedScenarioList
    }
}
let carParking = getScenarioVehicleListFromLocalStorage()

//Delete Vehicle List From its Own Index
function onDeleteVehicleList(homeListId, vehicleId, vehicleNameId, positionXId, positionYId, speedId, directionId) {
    let x = confirm('Are you sure want to delete vehicle?')
    if (x === true) {
        let vehicleListEl = document.getElementById(homeListId)
        homeTableBodyEl.removeChild(vehicleListEl)

        let deleteVehicleIndex = carParking.findIndex(function (eachScenarioList) {
            let eachScenarioId = 'list' + eachScenarioList.uniqueNo
            if (eachScenarioId === homeListId) {
                return true
            } else {
                return false
            }
        })
        let deleteVehicle = carParking[deleteVehicleIndex].vehicle.findIndex(function (eachDeleteVehicle) {
            let saveVehicleNameElId = 'vehicle' + eachDeleteVehicle.uniqueNo
            let savePositionXElId = 'x' + eachDeleteVehicle.uniqueNo
            let savePositionYElId = 'y' + eachDeleteVehicle.uniqueNo
            let saveSpeedElId = 'speed' + eachDeleteVehicle.uniqueNo
            let saveDirectionElId = 'direction' + eachDeleteVehicle.uniqueNo
            if ((saveVehicleNameElId === vehicleNameId) && (savePositionXElId === positionXId) && (savePositionYElId === positionYId) && (saveSpeedElId === speedId) && (saveDirectionElId === directionId)) {
                return true
            } else {
                return false
            }
        })
        console.log(carParking[deleteVehicleIndex].vehicle.splice(deleteVehicle, 1))
        swal("Good job!", "You have deleted successfully!", "success");
    }
}

//Delete Scenario From its Own Index
function onDeleteScenario(scenarioId, scenarioId1, scenarioId2, scenarioId3) {
    let x = confirm('Are you sure want to delete vehicle?')
    if (x === true) {
        let scenarioListEl1 = document.getElementById(scenarioId)
        scenariosTableBodyEl.removeChild(scenarioListEl1)

        let scenarioOptionHomeEl = document.getElementById(scenarioId1)
        homeSelectEl.removeChild(scenarioOptionHomeEl)

        let addVehicleSelect = document.getElementById(scenarioId2)
        selectScenario.removeChild(addVehicleSelect)

        let addVehicleSelect1 = document.getElementById(scenarioId3)
        selectScenario1.removeChild(addVehicleSelect1)

        let deleteVehicleIndex = carParking.findIndex(function (eachScenarioList) {
            let eachScenarioId = 'list' + eachScenarioList.uniqueNo
            if (eachScenarioId === scenarioId) {
                return true
            } else {
                return false
            }
        })
        carParking.splice(deleteVehicleIndex, 1)
        localStorage.setItem('carParking', JSON.stringify(carParking))
        swal("Good job!", "You have deleted successfully!", "success");
    }

}

//Edit Vehicle List From its Own Index
function onEditVehicleList(vehicleNameId, positionXId, positionYId, speedId, directionId) {
    let vehicleNameInputEl = document.getElementById(vehicleNameId)
    vehicleNameInputEl.removeAttribute('readonly', 'readonly')
    vehicleNameInputEl.focus()

    let positionXEditEl = document.getElementById(positionXId)
    positionXEditEl.removeAttribute('readonly', 'readonly')

    let positionYEditEl = document.getElementById(positionYId)
    positionYEditEl.removeAttribute('readonly', 'readonly')

    let speedEditEl = document.getElementById(speedId)
    speedEditEl.removeAttribute('readonly', 'readonly')

    let directionEditEl = document.getElementById(directionId)
    directionEditEl.removeAttribute('readonly', 'readonly')
}

//Edit Scenario From its Own Index
function onScenarioEdit(scenarioNameEditId, scenarioTimeEditId) {
    let scenarioNameEditEl = document.getElementById(scenarioNameEditId)
    scenarioNameEditEl.removeAttribute('readonly', 'readonly')
    scenarioNameEditEl.focus()

    let scenarioTimeEditEl = document.getElementById(scenarioTimeEditId)
    scenarioTimeEditEl.removeAttribute('readonly', 'readonly')
}

//Save Edited Vehicle Details and its updates in the local storage data
function onSaveVehicle(homeListId, vehicleNameId, positionXId, positionYId, speedId, directionId) {
    let vehicleListEl = document.getElementById(homeListId)
    let saveVehicleNameEl = document.getElementById(vehicleNameId)
    saveVehicleNameEl.setAttribute('readonly', 'readonly')

    let savePositionXEl = document.getElementById(positionXId)
    savePositionXEl.setAttribute('readonly', 'readonly')

    let savePositionYEl = document.getElementById(positionYId)
    savePositionYEl.setAttribute('readonly', 'readonly')

    let saveSpeedEl = document.getElementById(speedId)
    saveSpeedEl.setAttribute('readonly', 'readonly')

    let saveDirectionEl = document.getElementById(directionId)
    saveDirectionEl.setAttribute('readonly', 'readonly')

    if (saveVehicleNameEl.value === '') {
        swal("Oops", "Please Enter the Vehicle Name!", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
    } else if (!isNaN(saveVehicleNameEl.value)) {
        swal("Oops", "Please Enter the Valid Vehicle Name!", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
        saveVehicleNameEl.value = ''
    } else if (savePositionXEl.value === '') {
        swal("Oops", "Please Enter the Position X Value!", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
    } else if (isNaN(savePositionXEl.value)) {
        swal("Oops", "Please Enter the Valid Position X Value!", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.value = ''
    } else if ((parseInt(savePositionXEl.value) <= 0) || (parseInt(savePositionXEl.value) > 1100)) {
        swal("Oops", "Please Enter the Value > 0 and <= 1100 !", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.value = ''
    } else if (savePositionYEl.value === '') {
        swal("Oops", "Please Enter the Position Y Value!", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
    } else if (isNaN(savePositionYEl.value)) {
        swal("Oops", "Please Enter the Valid Position X Value!", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.value = ''
    } else if ((parseInt(savePositionYEl.value) <= 0) || (parseInt(savePositionYEl.value) > 400)) {
        swal("Oops", "Please Enter the Value > 0 and <= 400 !", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.value = ''
    } else if (isNaN(saveSpeedEl.value)) {
        swal("Oops", "Please Enter the Valid Value!", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.value = ''
    } else if (saveSpeedEl.value === '') {
        swal("Oops", "Please Enter the Speed!", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
    } else if (saveDirectionEl.value === '') {
        swal("Oops", "Please Enter the Direction", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
    } else if (!isNaN(saveDirectionEl.value)) {
        swal("Oops", "Please Enter the Valid Direction", "error")
        saveVehicleNameEl.removeAttribute('readonly', 'readonly')
        savePositionXEl.removeAttribute('readonly', 'readonly')
        savePositionYEl.removeAttribute('readonly', 'readonly')
        saveSpeedEl.removeAttribute('readonly', 'readonly')
        saveDirectionEl.removeAttribute('readonly', 'readonly')
    } else {
        swal("Good job!", "You have saved successfully!", "success");
    }
    let saveIndex = carParking.findIndex(function (eachListVehicle) {
        let eachScenarioId = 'list' + eachListVehicle.uniqueNo

        if (eachScenarioId === homeListId) {
            return true
        } else {
            return false
        }

    })
    let vehicleIndex = carParking[saveIndex].vehicle.findIndex(function (eachVehicle) {
        let saveVehicleNameElId = 'vehicle' + eachVehicle.uniqueNo
        let savePositionXElId = 'x' + eachVehicle.uniqueNo
        let savePositionYElId = 'y' + eachVehicle.uniqueNo
        let saveSpeedElId = 'speed' + eachVehicle.uniqueNo
        let saveDirectionElId = 'direction' + eachVehicle.uniqueNo

        if ((saveVehicleNameElId === vehicleNameId) && (savePositionXElId === positionXId) && (savePositionYElId === positionYId) && (saveSpeedElId === speedId) && (saveDirectionElId === directionId)) {
            return true
        } else {
            return false
        }
    })
    carParking[saveIndex].vehicle[vehicleIndex].name = saveVehicleNameEl.value
    carParking[saveIndex].vehicle[vehicleIndex].positionX = savePositionXEl.value
    carParking[saveIndex].vehicle[vehicleIndex].positionY = savePositionYEl.value
    carParking[saveIndex].vehicle[vehicleIndex].speed = saveSpeedEl.value
    carParking[saveIndex].vehicle[vehicleIndex].direction = saveDirectionEl.value
    localStorage.setItem('carParking', JSON.stringify(carParking))
}


//Save Scenario Details and it updates in Local Storage Data
function onSaveScenario(scenarioNameEditId, scenarioTimeEditId) {
    let scenarioNameEditEl = document.getElementById(scenarioNameEditId)
    scenarioNameEditEl.setAttribute('readonly', 'readonly')
    scenarioNameEditEl.focus()

    let scenarioTimeEditEl = document.getElementById(scenarioTimeEditId)
    scenarioTimeEditEl.setAttribute('readonly', 'readonly')
    if (scenarioNameEditEl.value === '') {
        swal("Oops", "Please Enter the Scenario Name!", "error")
        scenarioNameEditEl.removeAttribute('readonly', 'readonly')
        scenarioTimeEditEl.removeAttribute('readonly', 'readonly')
    } else if (!isNaN(scenarioNameEditEl.value)) {
        swal("Oops", "Please Enter the Valid Scenario Name!", "error")
        scenarioNameEditEl.removeAttribute('readonly', 'readonly')
        scenarioTimeEditEl.removeAttribute('readonly', 'readonly')
        scenarioNameEditEl.value = ''
    } else if (scenarioTimeEditEl.value === '') {
        swal("Oops", "Please Enter the Scenario Time!", "error")
        scenarioNameEditEl.removeAttribute('readonly', 'readonly')
        scenarioTimeEditEl.removeAttribute('readonly', 'readonly')
    } else if (isNaN(scenarioTimeEditEl.value)) {
        swal("Oops", "Please Enter the Valid Scenario Name!", "error")
        scenarioNameEditEl.removeAttribute('readonly', 'readonly')
        scenarioTimeEditEl.removeAttribute('readonly', 'readonly')
        scenarioTimeEditEl.value = ''
    } else {
        swal("Good job!", "You have saved successfully!", "success");
    }

    let saveScenarioIndex = carParking.findIndex(function (eachScenarioList) {
        let saveScenarioNameId = 'scenarioNameEdit' + eachScenarioList.uniqueNo
        let saveScenarioTimeId = 'scenarioTimeEdit' + eachScenarioList.uniqueNo

        if ((saveScenarioNameId === scenarioNameEditId) && (saveScenarioTimeId === scenarioTimeEditId)) {
            return true
        } else {
            return false
        }
    })
    carParking[saveScenarioIndex].scenarioName = scenarioNameEditEl.value
    carParking[saveScenarioIndex].time = scenarioTimeEditEl.value
}

//Updates all Data in Local Storage in Home page
updateBtnEl.onclick = function () {
    localStorage.setItem('carParking', JSON.stringify(carParking))
    swal("Good job!", "You have updated successfully!", "success");
}

//Updates all Deleted Data and it removes all Data in Local Storage in All Scenario Page
updateBtnEl1.onclick = function () {
    localStorage.setItem('carParking', JSON.stringify(carParking))
    swal("Good job!", "You have updated successfully!", "success");
}

//Selection Added Scenarios in Add New Scenario Button in All Scenarios Page 
selectScenario1.addEventListener('change', function (event) {
    addVehicleBtnEl1.onclick = function () {
        onAddVehicleList1(event)
    }
})

//Adding New Scenario in Add Scenario Page
addScenarioInputBtnEl.onclick = function () {
    onAddScenarioList()
}

//Adding New Scenario in All Scenario Page
addScenarioInputBtnEl1.onclick = function () {
    onAddScenarioList1()
}

//Selecting Added Scenarios in Add Vehicle Page
selectScenario.addEventListener('change', function (event) {
    addVehicle.onclick = function () {
        onAddVehicleList(event)
    }

})

//Create and Append to the Frontend Page
function createAndAppendCarsScenarios(scenario, vehicleArray) {
    let homeListId = 'list' + scenario.uniqueNo
    let vehicleId = 's' + vehicleArray.uniqueNo
    let vehicleNameId = 'vehicle' + vehicleArray.uniqueNo
    let positionXId = 'x' + vehicleArray.uniqueNo
    let positionYId = 'y' + vehicleArray.uniqueNo
    let speedId = 'speed' + vehicleArray.uniqueNo
    let directionId = 'direction' + vehicleArray.uniqueNo
    let scenarioId1 = 'scenarioHome' + scenario.uniqueNo
    let scenarioId = 'scenario' + scenario.uniqueNo
    let scenarioId2 = 'scenarioVewhicle' + scenario.uniqueNo
    let scenarioId3 = 'scenarioVewhicleModel' + scenario.uniqueNo
    let scenarioTableId = 'scenarioTable' + scenario.uniqueNo
    let scenarioNameEditId = 'scenarioNameEdit' + scenario.uniqueNo
    let scenarioTimeEditId = 'scenarioTimeEdit' + scenario.uniqueNo
    let vehicleSymbol = document.createElement('div')

    let vehicleTableRowEl = document.createElement('tr')
    vehicleTableRowEl.id = homeListId
    homeTableBodyEl.appendChild(vehicleTableRowEl)

    let homeOptionEl = document.createElement('option')
    homeOptionEl.id = scenarioId1
    homeOptionEl.textContent = scenario.scenarioName
    homeSelectEl.appendChild(homeOptionEl)

    let addVehicleSelectEl = document.createElement('option')
    addVehicleSelectEl.id = scenarioId2
    addVehicleSelectEl.textContent = scenario.scenarioName
    selectScenario.appendChild(addVehicleSelectEl)

    let addVehicleSelectEl1 = document.createElement('option')
    addVehicleSelectEl1.id = scenarioId3
    addVehicleSelectEl1.textContent = scenario.scenarioName
    selectScenario1.appendChild(addVehicleSelectEl1)

    homeSelectEl.addEventListener('change', function (event) {
        let scenarioIndexEl = carParking.findIndex(function (eachScenarioId) {
            let scenarioListId = 'list' + eachScenarioId.uniqueNo
            if (homeListId === scenarioListId) {
                return true
            } else {
                return false
            }
        })

        let vehicleIndexEl = carParking[scenarioIndexEl].vehicle.findIndex(function (eachVehicleId) {
            let vehicleNameElId = 'vehicle' + eachVehicleId.uniqueNo
            let positionXElId = 'x' + eachVehicleId.uniqueNo
            let positionYElId = 'y' + eachVehicleId.uniqueNo
            let speedElId = 'speed' + eachVehicleId.uniqueNo
            let directionElId = 'direction' + eachVehicleId.uniqueNo

            if ((vehicleNameElId === vehicleNameId) && (positionXElId === positionXId) && (positionYElId === positionYId) && (speedElId === speedId) && (directionElId === directionId)) {
                return true
            } else {
                return false
            }

        })

        if (event.target.value === carParking[scenarioIndexEl].scenarioName) {
            let vIdEl = document.createElement('td')
            vIdEl.id = vehicleId
            vIdEl.textContent = carParking[scenarioIndexEl].vehicle[vehicleIndexEl].uniqueNo
            vIdEl.classList.add('unique-no')
            vehicleTableRowEl.appendChild(vIdEl)

            let vNameEl = document.createElement('td')
            vehicleTableRowEl.appendChild(vNameEl)

            let vNameInputEl = document.createElement('input')
            vNameInputEl.type = 'text'
            vNameInputEl.id = vehicleNameId
            vNameInputEl.setAttribute('readonly', 'readonly')
            vNameInputEl.value = vehicleArray.name
            vNameInputEl.classList.add('input-table')
            vNameInputEl.classList.add('form-control')
            vNameEl.appendChild(vNameInputEl)

            let pxEl = document.createElement('td')
            vehicleTableRowEl.appendChild(pxEl)

            let pxInputEl = document.createElement('input')
            pxInputEl.type = 'text'
            pxInputEl.id = positionXId
            pxInputEl.value = carParking[scenarioIndexEl].vehicle[vehicleIndexEl].positionX
            pxInputEl.setAttribute('readonly', 'readonly')
            pxInputEl.classList.add('input-table')
            pxInputEl.classList.add('form-control')
            pxEl.appendChild(pxInputEl)

            let pyEl = document.createElement('td')
            vehicleTableRowEl.appendChild(pyEl)

            let pyInputEl = document.createElement('input')
            pyInputEl.type = 'text'
            pyInputEl.id = positionYId
            pyInputEl.value = carParking[scenarioIndexEl].vehicle[vehicleIndexEl].positionY
            pyInputEl.setAttribute('readonly', 'readonly')
            pyInputEl.classList.add('input-table')
            pyInputEl.classList.add('form-control')
            pyEl.appendChild(pyInputEl)

            let speedDataEl = document.createElement('td')
            vehicleTableRowEl.appendChild(speedDataEl)

            let speedDataInputEl = document.createElement('input')
            speedDataInputEl.type = 'text'
            speedDataInputEl.id = speedId
            speedDataInputEl.value = carParking[scenarioIndexEl].vehicle[vehicleIndexEl].speed
            speedDataInputEl.setAttribute('readonly', 'readonly')
            speedDataInputEl.classList.add('input-table')
            speedDataInputEl.classList.add('form-control')
            speedDataEl.appendChild(speedDataInputEl)

            let directionDataEl = document.createElement('td')
            vehicleTableRowEl.appendChild(directionDataEl)

            let directionDataInputEl = document.createElement('input')
            directionDataInputEl.type = 'text'
            directionDataInputEl.id = directionId
            directionDataInputEl.value = carParking[scenarioIndexEl].vehicle[vehicleIndexEl].direction
            directionDataInputEl.setAttribute('readonly', 'readonly')
            directionDataInputEl.classList.add('input-table')
            directionDataInputEl.classList.add('form-control')
            directionDataEl.appendChild(directionDataInputEl)

            let vEditDataEl = document.createElement('td')
            vehicleTableRowEl.appendChild(vEditDataEl)

            let vEditEl = document.createElement('i')
            vEditEl.classList.add('fa-solid', 'fa-pen-to-square', 'icon')

            vEditEl.onclick = function () {
                onEditVehicleList(vehicleNameId, positionXId, positionYId, speedId, directionId)
            }
            vEditDataEl.appendChild(vEditEl)

            let vDeleteDataEl = document.createElement('td')
            vehicleTableRowEl.appendChild(vDeleteDataEl)

            let vDeleteEl = document.createElement('i')
            vDeleteEl.classList.add('fa-solid', 'fa-trash', 'icon')

            vDeleteEl.onclick = function () {
                onDeleteVehicleList(homeListId, vehicleId, vehicleNameId, positionXId, positionYId, speedId, directionId)
            }

            vDeleteDataEl.appendChild(vDeleteEl)

            let saveDataEl = document.createElement('td')
            vehicleTableRowEl.appendChild(saveDataEl)

            let saveVehicleBtnEl = document.createElement('i')
            saveVehicleBtnEl.classList.add('fa-solid', 'fa-file-arrow-up', 'icon')

            saveVehicleBtnEl.onclick = function () {
                onSaveVehicle(homeListId, vehicleNameId, positionXId, positionYId, speedId, directionId)
            }
            saveDataEl.appendChild(saveVehicleBtnEl)


            vehicleSymbol.classList.add('vehicle')
            vehicleSymbol.textContent = vehicleArray.uniqueNo
            graphEl.appendChild(vehicleSymbol)

            startBtnEl.onclick = function () {
                let intervalId = setInterval(() => {
                    vehicleSymbol.style.transform = `translate(${parseInt(vehicleArray.positionX)}px, ${parseInt(vehicleArray.positionY)}px)`
                    vehicleSymbol.style.transition = `transform .${parseInt(vehicleArray.speed)}s`
                }, parseInt(scenario.time) * 1000)

                stopBtnEl.onclick = function () {
                    clearInterval(intervalId)
                }
            }

        }
    })

    let scenarioTableRowEl = document.createElement('tr')
    scenarioTableRowEl.id = scenarioTableId
    scenarioTableRowEl.id = scenarioId
    scenariosTableBodyEl.appendChild(scenarioTableRowEl)

    let scenarioDataSn = document.createElement('td')
    scenarioDataSn.textContent = scenario.uniqueNo
    scenarioDataSn.classList.add('unique-no')
    scenarioTableRowEl.appendChild(scenarioDataSn)

    let scenarioNameDataEl = document.createElement('td')
    scenarioTableRowEl.appendChild(scenarioNameDataEl)

    let scenarioNameInputEl = document.createElement('input')
    scenarioNameInputEl.type = 'text'
    scenarioNameInputEl.id = scenarioNameEditId
    scenarioNameInputEl.value = scenario.scenarioName
    scenarioNameInputEl.setAttribute('readonly', 'readonly')
    scenarioNameInputEl.classList.add('input-table')
    scenarioNameInputEl.classList.add('form-control')
    scenarioNameDataEl.appendChild(scenarioNameInputEl)

    let scenarioTimeDataEl = document.createElement('td')
    scenarioTableRowEl.appendChild(scenarioTimeDataEl)

    let scenarioTimeInputEl = document.createElement('input')
    scenarioTimeInputEl.type = 'text'
    scenarioTimeInputEl.id = scenarioTimeEditId
    scenarioTimeInputEl.value = scenario.time
    scenarioTimeInputEl.setAttribute('readonly', 'readonly')
    scenarioTimeInputEl.classList.add('input-table')
    scenarioTimeInputEl.classList.add('form-control')
    scenarioTimeDataEl.appendChild(scenarioTimeInputEl)

    let noOfVehiclesDataEl = document.createElement('td')
    noOfVehiclesDataEl.textContent = scenario.vehicle.length
    noOfVehiclesDataEl.classList.add('unique-no')
    scenarioTableRowEl.appendChild(noOfVehiclesDataEl)

    let addVehicleBtnIconEl = document.createElement('td')
    scenarioTableRowEl.appendChild(addVehicleBtnIconEl)

    let addVehicleBtnIconEl1 = document.createElement('i')
    addVehicleBtnIconEl1.classList.add('fa-solid', 'fa-square-plus', 'icon2')
    addVehicleBtnIconEl.appendChild(addVehicleBtnIconEl1)

    let sEditDataEl = document.createElement('td')
    scenarioTableRowEl.appendChild(sEditDataEl)

    let sEditIconEl = document.createElement('i')
    sEditIconEl.classList.add('fa-solid', 'fa-pen-to-square', 'icon')
    sEditIconEl.onclick = function () {
        onScenarioEdit(scenarioNameEditId, scenarioTimeEditId)
    }
    sEditDataEl.appendChild(sEditIconEl)

    let sDeleteDataEl = document.createElement('td')
    scenarioTableRowEl.appendChild(sDeleteDataEl)

    let sDeleteIcon = document.createElement('i')
    sDeleteIcon.classList.add('fa-solid', 'fa-trash', 'icon')
    sDeleteIcon.onclick = function () {
        onDeleteScenario(scenarioId, scenarioId1, scenarioId2, scenarioId3)
    }
    sDeleteDataEl.appendChild(sDeleteIcon)

    let sSaveDataEl = document.createElement('td')
    scenarioTableRowEl.appendChild(sSaveDataEl)

    let sSaveIcon = document.createElement('i')
    sSaveIcon.classList.add('fa-solid', 'fa-file-arrow-up', 'icon')
    sSaveIcon.onclick = function () {
        onSaveScenario(scenarioNameEditId, scenarioTimeEditId)
    }
    sSaveDataEl.appendChild(sSaveIcon)

}


function onAddScenarioList() {
    let scenarioCount = carParking.length
    scenarioCount = scenarioCount + 1

    let scenarioNameEl = document.getElementById('scenario-name')
    let scenarioNameElValue = scenarioNameEl.value

    let scenarioTimeEl = document.getElementById('scenario-time')
    let scenarioTimeElValue = scenarioTimeEl.value

    if (scenarioNameEl.value === '') {
        swal("Oops", "Please Enter the Scenario Name!", "error")
        return
    }
    if (!isNaN(scenarioNameEl.value)) {
        swal("Oops", "Please Enter the Valid Scenario Name!", "error")
        scenarioNameEl.value = ''
        return
    }
    if (scenarioTimeEl.value === '') {
        swal("Oops", "Please Enter the Scenario Time!", "error")
        scenarioNameEl.value = ''
        return
    }
    if (isNaN(scenarioTimeEl.value)) {
        swal("Oops", "Please Enter the Valid Scenario Time!", "error")
        scenarioNameEl.value = ''
        scenarioTimeEl.value = ''
        return
    }
    swal("Good job!", "You have added successfully!", "success");

    let newScenarioList = {
        scenarioName: scenarioNameElValue,
        time: scenarioTimeElValue,
        vehicle: [],
        uniqueNo: scenarioCount
    }
    carParking.push(newScenarioList)
    scenarioNameEl.value = ''
    scenarioTimeEl.value = ''
    createAndAppendCarsScenarios(newScenarioList, '')
    localStorage.setItem('carParking', JSON.stringify(carParking))

}

function onAddScenarioList1() {
    let scenarioCount1 = carParking.length
    scenarioCount1 = scenarioCount1 + 1

    let scenarioNameEl1 = document.getElementById('scenario-name1')
    let scenarioNameEl1Value = scenarioNameEl1.value

    let scenarioTimeEl1 = document.getElementById('scenario-time1')
    let scenarioTimeEl1Value = scenarioTimeEl1.value

    if (scenarioNameEl1.value === '') {
        swal("Oops", "Please Enter the Scenario Name!", "error")
        scenariosTableBodyEl = ''
        return
    }
    if (!isNaN(scenarioNameEl1.value)) {
        swal("Oops", "Please Enter the Valid Scenario Name!", "error")
        scenariosTableBodyEl = ''
        scenarioNameEl1.value = ''
        return
    }
    if (scenarioTimeEl1.value === '') {
        swal("Oops", "Please Enter the Scenario Time!", "error")
        scenariosTableBodyEl = ''
        scenarioNameEl1.value = ''
        return
    }
    if (isNaN(scenarioTimeEl1.value)) {
        swal("Oops", "Please Enter the Valid Scenario Time!", "error")
        scenariosTableBodyEl = ''
        scenarioNameEl1.value = ''
        scenarioTimeEl1.value = ''
        return
    }
    swal("Good job!", "You have added successfully!", "success");
    let newScenarioList = {
        scenarioName: scenarioNameEl1Value,
        time: scenarioTimeEl1Value,
        vehicle: [],
        uniqueNo: scenarioCount1
    }
    carParking.push(newScenarioList)
    scenarioNameEl1.value = ''
    scenarioTimeEl1.value = ''
    createAndAppendCarsScenarios(newScenarioList, '')
    localStorage.setItem('carParking', JSON.stringify(carParking))
}
function onAddVehicleList(event) {

    let vehicleNameEl = document.getElementById('v-name')
    let vehicleNameElValue = vehicleNameEl.value

    let positionXEl = document.getElementById('px')
    let positionXElValue = positionXEl.value

    let positionYEl = document.getElementById('py')
    let positionYElValue = positionYEl.value

    let speedEl = document.getElementById('speed')
    let speedElValue = speedEl.value

    let directionEl = document.getElementById('direction')
    let directionElValue = directionEl.value

    if (vehicleNameEl.value === '') {
        swal("Oops", "Please Enter the Vehicle Name!", "error")
        return
    }
    if (!isNaN(vehicleNameEl.value)) {
        swal("Oops", "Please Enter the Valid Vehicle Name!", "error")
        vehicleNameEl.value = ''
        return
    }
    if (speedEl.value === '') {
        swal("Oops", "Please Enter the Speed Value", "error")
        vehicleNameEl.value = ''
        positionXEl.value = ''
        positionYEl.value = ''
        return
    }
    if (isNaN(speedEl.value)) {
        swal("Oops", "Please Enter the Valid Speed Value", "error")
        vehicleNameEl.value = ''
        positionXEl.value = ''
        positionYEl.value = ''
        speedEl.value = ''
        return
    }
    if (positionXEl.value === '') {
        swal("Oops", "Please Enter the Position X Value!", "error")
        vehicleNameEl.value = ''
        speedEl.value = ''
        return
    }
    if (isNaN(positionXEl.value)) {
        swal("Oops", "Please Enter the Valid Position X Value!", "error")
        vehicleNameEl.value = ''
        positionXEl.value = ''
        speedEl.value = ''
        return
    }
    if ((parseInt(positionXEl.value) <= 0) || (parseInt(positionXEl.value) > 1070)) {
        swal("Oops", "Please Enter the Value > 0 and <= 1070 !", "error")
        vehicleNameEl.value = ''
        positionXEl.value = ''
        speedEl.value = ''
        return
    }
    if (positionYEl.value === '') {
        swal("Oops", "Please Enter the Position Y Value!", "error")
        vehicleNameEl.value = ''
        positionXEl.value = ''
        speedEl.value = ''
        return
    }
    if (isNaN(positionYEl.value)) {
        swal("Oops", "Please Enter the Valid Position Y Value!", "error")
        vehicleNameEl.value = ''
        positionXEl.value = ''
        positionYEl.value = ''
        speedEl.value = ''
        return
    }
    if ((parseInt(positionYEl.value) <= 0) || (parseInt(positionYEl.value) > 400)) {
        swal("Oops", "Please Enter the Value > 0 and <= 400 !", "error")
        vehicleNameEl.value = ''
        positionXEl.value = ''
        positionYEl.value = ''
        speedEl.value = ''
        return
    }
    swal("Good job!", "You have added successfully!", "success");


    let newVehicleList = {
        name: vehicleNameElValue,
        positionX: positionXElValue,
        positionY: positionYElValue,
        speed: speedElValue,
        direction: directionElValue,
        uniqueNo: ''
    }

    let vehicleList = carParking.findIndex(function (eachVehicleList) {
        if (event.target.value === eachVehicleList.scenarioName) {
            let vehicleCount = eachVehicleList.vehicle.length
            vehicleCount = vehicleCount + 1
            newVehicleList.uniqueNo = vehicleCount
            eachVehicleList.vehicle.push(newVehicleList)
        }
    })
    vehicleNameEl.value = ''
    positionXEl.value = ''
    positionYEl.value = ''
    speedEl.value = ''
    localStorage.setItem('carParking', JSON.stringify(carParking))

}

function onAddVehicleList1(event) {
    let vehicleNameEl1 = document.getElementById('v-name1')
    let vehicleNameEl1Value = vehicleNameEl1.value

    let positionXEl1 = document.getElementById('px1')
    let positionXEl1Value = positionXEl1.value

    let positionYEl1 = document.getElementById('py1')
    let positionYEl1Value = positionYEl1.value

    let speedEl1 = document.getElementById('speed1')
    let speedEl1Value = speedEl1.value

    let directionEl1 = document.getElementById('direction1')
    let directionEl1Value = directionEl1.value

    if (vehicleNameEl1.value === '') {
        swal("Oops", "Please Enter the Vehicle Name!", "error")
        return
    }
    if (!isNaN(vehicleNameEl1.value)) {
        swal("Oops", "Please Enter the Valid Vehicle Name!", "error")
        vehicleNameEl1.value = ''
        return
    }
    if (speedEl1.value === '') {
        swal("Oops", "Please Enter the Speed Value", "error")
        vehicleNameEl1.value = ''
        positionXEl1.value = ''
        positionYEl1.value = ''
        return
    }
    if (isNaN(speedEl1.value)) {
        swal("Oops", "Please Enter the Valid Speed Value", "error")
        vehicleNameEl1.value = ''
        positionXEl1.value = ''
        positionYEl1.value = ''
        speedEl1.value = ''
        return
    }
    if (positionXEl1.value === '') {
        swal("Oops", "Please Enter the Position X Value!", "error")
        vehicleNameEl1.value = ''
        speedEl1.value = ''
        return
    }
    if (isNaN(positionXEl1.value)) {
        swal("Oops", "Please Enter the Valid Position X Value!", "error")
        vehicleNameEl1.value = ''
        positionXEl1.value = ''
        speedEl1.value = ''
        return
    }
    if ((parseInt(positionXEl1.value) <= 0) || (parseInt(positionXEl1.value) > 1100)) {
        swal("Oops", "Please Enter the Value > 0 and <= 1070 !", "error")
        vehicleNameEl1.value = ''
        positionXEl1.value = ''
        speedEl1.value = ''
    }
    if (positionYEl1.value === '') {
        swal("Oops", "Please Enter the Position Y Value!", "error")
        vehicleNameEl1.value = ''
        positionXEl1.value = ''
        speedEl1.value = ''
        return
    }
    if (isNaN(positionYEl1.value)) {
        swal("Oops", "Please Enter the Valid Position Y Value!", "error")
        vehicleNameEl1.value = ''
        positionXEl1.value = ''
        positionYEl1.value = ''
        speedEl1.value = ''
        return
    }
    if ((parseInt(positionYEl1.value) <= 0) || (parseInt(positionYEl1.value) > 400)) {
        swal("Oops", "Please Enter the Value > 0 and <= 400 !", "error")
        vehicleNameEl1.value = ''
        positionXEl1.value = ''
        positionYEl1.value = ''
        speedEl1.value = ''
    }
    swal("Good job!", "You have added successfully!", "success");

    let newVehicleList = {
        name: vehicleNameEl1Value,
        positionX: positionXEl1Value,
        positionY: positionYEl1Value,
        speed: speedEl1Value,
        direction: directionEl1Value,
        uniqueNo: ''
    }

    let vehicleList = carParking.findIndex(function (eachVehicleList) {
        if (event.target.value === eachVehicleList.scenarioName) {
            let vehicleCount = eachVehicleList.vehicle.length
            vehicleCount = vehicleCount + 1
            newVehicleList.uniqueNo = vehicleCount
            eachVehicleList.vehicle.push(newVehicleList)
        }
    })
    vehicleNameEl1.value = ''
    positionXEl1.value = ''
    positionYEl1.value = ''
    speedEl1.value = ''
    localStorage.setItem('carParking', JSON.stringify(carParking))

}

deleteBtnEl1.onclick = function () {
    carParking.length = 0
    scenariosTableBodyEl.classList.add('d-none')
    localStorage.setItem('carParking', JSON.stringify(carParking))
    swal("Good job!", "You have deleted successfully!", "success");
}
resetScenarioBtnEl.onclick = function () {
    let scenarioNameEl = document.getElementById('scenario-name')
    scenarioNameEl.value = ''

    let scenarioTimeEl = document.getElementById('scenario-time')
    scenarioTimeEl.value = ''
}

scenarioResetBtnEl1.onclick = function () {
    let scenarioNameEl1 = document.getElementById('scenario-name1')
    scenarioNameEl1.value = ''

    let scenarioTimeEl1 = document.getElementById('scenario-time1')
    scenarioTimeEl1.value = ''
}

resetVehicleBtnEl.onclick = function () {
    let vehicleNameEl = document.getElementById('v-name')
    vehicleNameEl.value = ''

    let positionXEl = document.getElementById('px')
    positionXEl.value = ''

    let positionYEl = document.getElementById('py')
    positionYEl.value = ''

    let speedEl = document.getElementById('speed')
    speedEl.value = ''

    let directionEl = document.getElementById('direction')
    directionEl.value = ''

    selectScenario.value = ''
}

resetVehicleBtnEl1.onclick = function () {
    let vehicleNameEl1 = document.getElementById('v-name1')
    vehicleNameEl1.value = ''

    let positionXEl1 = document.getElementById('px1')
    positionXEl1.value = ''

    let positionYEl1 = document.getElementById('py1')
    positionYEl1.value = ''

    let speedEl1 = document.getElementById('speed1')
    speedEl1.value = ''

    let directionEl1 = document.getElementById('direction1')
    directionEl1.value = ''

    selectScenario1.value = ''

}

for (let eachScenario of carParking) {
    for (let each of eachScenario.vehicle) {
        createAndAppendCarsScenarios(eachScenario, each)
    }
}