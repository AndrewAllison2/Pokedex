import { Pop } from "../utils/Pop.js";

export class CaughtPokemonController {
  async createPokemon() {
    try {
      console.log('button clicked');
    } catch (error) {
      Pop.error(error)
    }
  }
}