window.addEventListener("DOMContentLoaded", function() {
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
  const locationsUlNormal = document.getElementById("locations-ul-normal")
  const locationsUlInverted = document.getElementById("locations-ul-inverted")

  const players = []
  let gameDuration = 8
  const locations = [
    {name: "Avião", roles: [
      "Passageiro de Primeira Classe",
      "Agente Federal Disfarçado",
      "Mecânico",
      "Passageiro da Classe Econômica",
      "Comissário de Bordo",
      "Co-Piloto",
      "Piloto",
    ], checked: true},
    {name: "Banco", roles: [
      "Motorista de Carro Forte",
      "Gerente",
      "Consultor Financeiro",
      "Cliente",
      "Assaltante",
      "Guarda de Segurança",
      "Caixa",
    ], checked: true},
    {name: "Praia", roles: [
      "Garçom de Praia",
      "Surfista",
      "Salva-vidas",
      "Trombadinha",
      "Banhista",
      "Fotográfo",
      "Sorveteiro",
    ], checked: true},
    {name: "Teatro", roles: [
      "Recepcionista",
      "Assistente de Palco",
      "Caixa",
      "Espectador",
      "Diretor",
      "Ator",
      "Figurante",
    ], checked: true},
    {name: "Cassino", roles: [
      "Bartender",
      "Chefe da Segurança",
      "Gerente",
      "Malandro",
      "Mesário",
      "Apostador",
    ], checked: true},
    {name: "Catedral", roles: [
      "Padre",
      "Pedinte",
      "Pecador",
      "Beato",
      "Turista",
      "Dizimista",
      "Coralista",
    ], checked: true},
    {name: "Circo", roles: [
      "Acrobata",
      "Domador",
      "Mágico",
      "Espectador",
      "Engolidor de Espadas",
      "Palhaço",
      "Malabarista",
    ], checked: true},
    {name: "Festa da Empresa", roles: [
      "Animador de Festa",
      "Gerente",
      "Bicão",
      "Dono",
      "Secretária",
      "Contador",
      "Entregador",
    ], checked: true},
    {name: "Exército das Cruzadas", roles: [
      "Monge",
      "Prisioneiro Pagão",
      "Servo",
      "Bispo",
      "Escudeiro",
      "Arqueiro",
      "Cavaleiro",
    ], checked: true},
    {name: "SPA", roles: [
      "Cliente",
      "Estilista",
      "Massagista",
      "Manicure",
      "Maquiador",
      "Dermatologista",
      "Esteticista",
    ], checked: true},
    {name: "Embaixada", roles: [
      "Segurança",
      "Ministro",
      "Embaixador",
      "Oficial do Governo",
      "Turista",
      "Refugiado",
      "Diplomata",
    ], checked: true},
    {name: "Hospital", roles: [
      "Enfermeira",
      "Médico",
      "Anestesista",
      "Residente",
      "Paciente",
      "Terapeuta",
      "Cirurgião",
    ], checked: true},
    {name: "Hotel", roles: [
      "Recepcionista",
      "Segurança",
      "Gerente",
      "Arrumadeira",
      "Hóspede",
      "Bartender",
      "Porteiro",
    ], checked: true},
    {name: "Base Militar", roles: [
      "Desertor",
      "Coronel",
      "Médico",
      "Soldado",
      "Atirador de Elite",
      "Oficial do Exército",
      "Operador de Tanque de Guerra",
    ], checked: true},
    {name: "Estúdio de Filmagem", roles: [
      "Dublê",
      "Engenheiro de Som",
      "Câmera",
      "Diretor",
      "Figurinista",
      "Ator",
      "Produtor",
    ], checked: true},
    {name: "Cruzeiro Marítmo", roles: [
      "Passageiro Ricaço",
      "Cozinheiro",
      "Capitão",
      "Bartender",
      "Músico",
      "Garçom",
      "Mecânico",
    ], checked: true},
    {name: "Trem de Passageiros", roles: [
      "Mecânico",
      "Segurança",
      "Comissário de Bordo",
      "Passageiro",
      "Chef e Cozinha",
      "Engenheiro",
      "Maquinista",
    ], checked: true},
    {name: "Navio Pirata", roles: [
      "Cozinheiro",
      "Marinheiro",
      "Escravo",
      "Canhoneiro",
      "Prisioneiro Acorrentado",
      "Marujo",
      "Capitão",
    ], checked: true},
    {name: "Estação Polar", roles: [
      "Médico",
      "Geologista",
      "Líder da Expedição",
      "Biologista",
      "Operador de Rádio",
      "Hidrologista",
      "Meteorologista",
    ], checked: true},
    {name: "Delagacia de Polícia", roles: [
      "Detetive",
      "Advogado",
      "Jornalista",
      "Delegado",
      "Escrivão",
      "Policial",
      "Bandido",
    ], checked: true},
    {name: "Restaurante", roles: [
      "Músico",
      "Cliente",
      "Segurança (porteiro)",
      "Recepcionista",
      "Chef de Cozinha",
      "Crítico de Gastronomia",
      "Garçom",
    ], checked: true},
    {name: "Escola", roles: [
      "Professor de Ed. Física",
      "Estudante",
      "Diretor",
      "Segurança",
      "Faxineiro",
      "Tia da Merenda",
      "Zelador",
    ], checked: true},
    {name: "Oficina Mecânica", roles: [
      "Gerente",
      "Borracheiro",
      "Ciclista",
      "Motorista",
      "Operador de Lava Rápido",
      "Eletricista",
      "Mecânico",
    ], checked: true},
    {name: "Estação Espacial", roles: [
      "Engenheiro",
      "Alienígena",
      "Turista Espacial",
      "Piloto",
      "Comandante",
      "Cientista",
      "Médico",
    ], checked: true},
    {name: "Submarino", roles: [
      "Cozinheiro",
      "Comandante",
      "Operador de Sonar",
      "Técnico de Eletrônica",
      "Marujo",
      "Operador de Rádio",
      "Navegador",
    ], checked: true},
    {name: "Supermercado", roles: [
      "Cliente",
      "Caixa",
      "Açougueiro",
      "Faxineiro",
      "Segurança",
      "Demonstrador de Amostra Grátis",
      "Repositor de Mercadoria",
    ], checked: true},
    {name: "Faculdade", roles: [
      "Veterano",
      "Professor",
      "Reitor",
      "Psicólogo",
      "Zelador",
      "Calouro",
      "Faxineiro",
    ], checked: true},
  ]

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
      locationsUlNormal.insertAdjacentHTML('beforeend', `<li id="${loc.name}">${loc.name}</li>`);
      locationsUlInverted.insertAdjacentHTML('beforeend', `<li id="${loc.name}">${loc.name}</li>`);
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

    availableLocations.forEach(loc => {
      locationsUlNormal.insertAdjacentHTML('beforeend', `<li id="${loc.name}">${loc.name}</li>`);
      locationsUlInverted.insertAdjacentHTML('beforeend', `<li id="${loc.name}">${loc.name}</li>`);
    })

    preparation.style.display = "block"
    inGame.style.display = "none"
  }
}, false)
