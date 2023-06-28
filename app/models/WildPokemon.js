

export class WildPokemon {
  constructor(data) {
    this.name = data.name
    this.url = data.url || ''
    this.nickName = data.nickName || ""
    this.weight = data.weight
    this.height = data.height
  }

  get DetailsTemplate() {
    return `
    <div class="mt-3 ">
          <img src="${this.url}" alt="${this.name}">
          <h1>${this.name}</h1>
          <h3>${this.nickName}</h3>
          <div>
            <p>Weight: ${this.height}</p>
            <p>Height: ${this.weight}</p>
          </div>
          <button onclick='app.CaughtPokemonController.createPokemon()' class='btn btn-success'>Save to Pokedex!</button>
        </div>
    `
  }
}


