window.addEventListener("DOMContentLoaded", async function() {
  const configuration = document.getElementById("configuration")
  const game = document.getElementById("game")
  const about = document.getElementById("about")
  const addPlayerBtn = document.getElementById("addPlayerBtn")
  const addPlayerInput = document.getElementById("addPlayerInput")
  const playerList = document.getElementById("playerList")
  const addLocationBtn = document.getElementById("addLocationBtn")
  const addLocationInput = document.getElementById("addLocationInput")
  const gameDurationInput = document.getElementById("gameDurationInput")
  const locationList = document.getElementById("locationList")
  const finishConfigurationBtn = document.getElementById("finishConfigurationBtn")
  const goToConfigurationBtn = document.getElementById("goToConfigurationBtn")
  const playerDisplay = document.getElementById("player")
  const locationDisplay = document.getElementById("location")
  const roleDisplay = document.getElementById("role")
  const spyDisplay = document.getElementById("spy")
  const openInfoBtn = document.getElementById("openInfo")
  const playerInfo = document.getElementById("playerInfo")
  const nextBtn = document.getElementById("next")
  const preparation = document.getElementById("preparation")
  const inGame = document.getElementById("inGame")
  const newGame = document.getElementById("newGame")
  const locationsUl = document.getElementById("locations-ul")

  const players = []
  let gameDuration = 8


  const loadLocations = async () => {
    const response = await fetch('./pt_br.json')
    return response.json()
  }

  const locations = (await loadLocations()).map(l => {return { checked: true, name: l.name, roles: l.roles }})

  let currentLocation = {}
  let currentPlayer = {}

  locations.forEach(location => {
    locationList.innerHTML = locationList.innerHTML + `<div class="location"><input type="checkbox" class="locationCheckbox" id="${location.name}" name="${location.name}" checked>${location.name}</div>`
  })

  addPlayerBtn.onclick = function() {
    if(addPlayerInput.value !== "") {
      players.push({ name: addPlayerInput.value, role: "" })
      playerList.innerHTML = playerList.innerHTML + `<div>${addPlayerInput.value}</div>`
      addPlayerInput.value = ""
    }
  }

  addLocationBtn.onclick = function() {
    if(addLocationInput.value !== "") {
      locations.push({name: addLocationInput.value, checked: true})
      locationList.innerHTML = locationList.innerHTML + `<div class="location"><input type="checkbox" class="locationCheckbox" id="${addLocationInput.value}" name="${addLocationInput.value}" checked>${addLocationInput.value}</div>`
      addLocationInput.value = ""
    }
  }

  goToConfigurationBtn.onclick = function() {
    about.style.display = "none";
    configuration.style.display = "block"
  }

  finishConfigurationBtn.onclick = function() {
    const locationsCheckboxes = Array.from(document.getElementsByClassName("locationCheckbox"))

    locationsCheckboxes.forEach(location => {
      locations.filter(l => l.name === location.name)[0].checked = location.checked
    })

    gameDuration = gameDurationInput.value

    const availableLocations = locations.filter(l => l.checked)
    currentLocation = availableLocations[Math.floor(Math.random() * availableLocations.length)]

    players[Math.floor(Math.random() * players.length)].role = "Espião"

    players.filter(p => p.role !== "Espião").forEach(p => {
      p.role = currentLocation.roles[Math.floor(Math.random() * currentLocation.roles.length)]
    })

    currentPlayer = players[0]

    playerDisplay.innerHTML = currentPlayer.name

    if(currentPlayer.role === "Espião") {
      locationDisplay.style.display = "none"
      roleDisplay.style.display = "none"
      spyDisplay.style.display = "block"
    } else {
      locationDisplay.style.display = "block"
      roleDisplay.style.display = "block"
      spyDisplay.style.display = "none"

      locationDisplay.innerHTML = `Local: ${currentLocation.name}`
      roleDisplay.innerHTML = `Papel: ${currentPlayer.role}`
    }

    availableLocations.forEach(loc => {
      locationsUl.insertAdjacentHTML('beforeend', `<div class="location" id="${loc.name}">${loc.name}</div>`);
    })

    configuration.style.display = "none";
    game.style.display = "block"
  }

  openInfoBtn.onclick = function() {
    playerInfo.style.display = "block"
  }

  nextBtn.onclick = function() {
    playerInfo.style.display = "none"

    const playerIndex = players.indexOf(currentPlayer)

    if(playerIndex === players.length - 1) {
      preparation.style.display = "none"
      inGame.style.display = "block"
    } else {
      currentPlayer = players[playerIndex + 1]

      playerDisplay.innerHTML = currentPlayer.name

      if(currentPlayer.role === "Espião") {
        locationDisplay.style.display = "none"
        roleDisplay.style.display = "none"
        spyDisplay.style.display = "block"
      } else {
        locationDisplay.style.display = "block"
        roleDisplay.style.display = "block"
        spyDisplay.style.display = "none"

        locationDisplay.innerHTML = `Local: ${currentLocation.name}`
        roleDisplay.innerHTML = `Papel: ${currentPlayer.role}`
      }
    }
  }

  newGame.onclick = function() {
    players.forEach(p => {
      p.role = ""
    })

    const availableLocations = locations.filter(l => l.checked)
    currentLocation = availableLocations[Math.floor(Math.random() * availableLocations.length)]

    players[Math.floor(Math.random() * players.length)].role = "Espião"

    players.filter(p => p.role !== "Espião").forEach(p => {
      p.role = currentLocation.roles[Math.floor(Math.random() * currentLocation.roles.length)]
    })

    currentPlayer = players[0]

    playerDisplay.innerHTML = currentPlayer.name

    if(currentPlayer.role === "Espião") {
      locationDisplay.style.display = "none"
      roleDisplay.style.display = "none"
      spyDisplay.style.display = "block"
    } else {
      locationDisplay.style.display = "block"
      roleDisplay.style.display = "block"
      spyDisplay.style.display = "none"

      locationDisplay.innerHTML = `Local: ${currentLocation.name}`
      roleDisplay.innerHTML = `Papel: ${currentPlayer.role}`
    }

    preparation.style.display = "block"
    inGame.style.display = "none"
  }
}, false)
