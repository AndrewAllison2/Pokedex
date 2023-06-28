import { AppState } from "../AppState.js";
import { WildPokemon } from "../models/WildPokemon.js";
import { pokeApi } from "./AxiosService.js"

class PokemonService {
  async getPokemonDetails(pokemonName) {
    const res = await pokeApi.get(`/pokemon/${pokemonName}`)
    console.log('got pokedetails', res.data);

    const newPokemon = new WildPokemon(res.data)

    AppState.activePokemon = newPokemon


  }


  async getPokemon() {
    const res = await pokeApi.get('/pokemon')
    console.log('got pokemon', res.data);

    let wildPokemon = res.data.results.map(pojo => new WildPokemon(pojo))

    AppState.pokemons = wildPokemon
    console.log('appstate pokemon', AppState.pokemons);


  }


}

export const pokemonService = new PokemonService()