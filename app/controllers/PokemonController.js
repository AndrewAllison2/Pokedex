import { AppState } from "../AppState.js";
import { WildPokemon } from "../models/WildPokemon.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawPokemon() {
  let template = ''
  let pokemons = AppState.pokemons

  pokemons.forEach(pokemon => {
    template += `<li onclick="app.PokemonController.getPokemonDetails('${pokemon.name}')" class="mb-2 ms-3 selectable" role="button">${pokemon.name}</li>`
  })

  setHTML('pokemonList', template)
}

function _drawActivePokemon() {
  const pokemon = AppState.activePokemon
  // @ts-ignore
  setHTML('selected-pokemon-template', pokemon.DetailsTemplate)
}



export class PokemonController {
  constructor() {
    console.log('Poketroller loaded');
    this.getPokemon()

    AppState.on('pokemons', _drawPokemon)
    AppState.on('activePokemon', _drawActivePokemon)
  }

  async getPokemon() {
    try {
      await pokemonService.getPokemon()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async getPokemonDetails(pokemonName) {
    try {
      await pokemonService.getPokemonDetails(pokemonName)
    } catch (error) {
      Pop.error(error.message)
    }
  }
}

