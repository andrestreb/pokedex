import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import "./pokemoncard.css";

class Pokemoncard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: [],
      pokemonSpecies: [],
      pokemonEvolution: []
    };
  }

  componentDidMount() {
    console.log("Pokemon - Mounted");
    let pokemonAPICall = fetch("https://pokeapi.co/api/v2/pokemon/1");
    let pokemonSpeciesAPICall = fetch(
      "https://pokeapi.co/api/v2/pokemon-species/1"
    );
    let pokemonEvolutionAPICall = fetch(
      "https://pokeapi.co/api/v2/evolution-chain/1"
    );
    Promise.all([
      pokemonAPICall,
      pokemonSpeciesAPICall,
      pokemonEvolutionAPICall
    ])
      .then(values => Promise.all(values.map(value => value.json())))
      .then(
        data => {
          this.setState({
            isLoaded: true,
            pokemon: data[0],
            pokemonSpecies: data[1],
            pokemonEvolution: data[2]
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    console.log(this.state.pokemon);
  }

  render() {
    const {
      error,
      isLoaded,
      pokemon,
      pokemonSpecies,
      pokemonEvolution
    } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={"product-card " + pokemonSpecies.color.name}>
          <div className="product-additional">
            <div className="product-img-card">
              <div className="product-type product-center">N°{pokemon.id}</div>
              <div className="product-img product-center">
                <img src={pokemon.sprites.front_default} />
              </div>
              <div className="product-status product-center">
                {pokemonSpecies.egg_groups[0].name}
              </div>

              <i class="fa fa-language product-center" />
            </div>
            <div className="product-more-info">
              <h1>{pokemon.name}</h1>
              <p />

              <div class="product-coords">
                <span>Evolution chain:</span>
              </div>
              <br />
              <div class="product-evolution">
                {pokemonEvolution.chain.species.name}
              </div>
              <div class="product-evolution">
                {pokemonEvolution.chain.evolves_to[0].species.name}
              </div>
              <div class="product-evolution">
                {
                  pokemonEvolution.chain.evolves_to[0].evolves_to[0].species
                    .name
                }
              </div>

              <div class="product-stats">
                <div>
                  <div class="title">Height</div>
                  <i class="fa fa-language" />
                  <div class="value">{pokemon.height / 10}m</div>
                </div>
                <div>
                  <div class="title">weight</div>
                  <i class="fa fa-desktop" />
                  <div class="value">{pokemon.weight / 10}kg</div>
                </div>
                <div>
                  <div class="title">XP</div>
                  <i class="fa fa-feed" />
                  <div class="value">{pokemon.base_experience}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-general">
            <h1>{pokemon.name}</h1>
            <p>{pokemonSpecies.flavor_text_entries[1].flavor_text}</p>
            <span class="product-more">Mouse over the card for more info</span>
          </div>
        </div>
      );
    }
  }
}

export default Pokemoncard;
