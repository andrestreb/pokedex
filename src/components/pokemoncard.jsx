import React, { Component } from "react";
import "./pokemoncard.css";

class Pokemoncard extends Component {
  render() {
    const {
      error,
      isLoaded,
      pokemon,
      pokemonSpecies,
      pokemonEvolution
    } = this.props;
    console.log(this.props.pokemonEvolution);
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

            <i className="fa fa-language product-center" />
          </div>
          <div className="product-more-info">
            <h1>{pokemon.name}</h1>
            <p />

            <div className="product-coords">
              <span>Evolution chain:</span>
            </div>
            <br />
            <div class="product-evolution">
              {this.props.pokemonEvolution.chain.species.name}
            </div>
            <div class="product-evolution">
              {this.props.pokemonEvolution.chain.evolves_to[0].species.name}
            </div>
            <div class="product-evolution">
              {
                this.props.pokemonEvolution.chain.evolves_to[0].evolves_to[0]
                  .species.name
              }
            </div>

            <div className="product-stats">
              <div>
                <div className="title">Height</div>
                <i className="fa fa-language" />
                <div className="value">{pokemon.height / 10}m</div>
              </div>
              <div>
                <div className="title">weight</div>
                <i className="fa fa-desktop" />
                <div className="value">{pokemon.weight / 10}kg</div>
              </div>
              <div>
                <div className="title">XP</div>
                <i className="fa fa-feed" />
                <div className="value">{pokemon.base_experience}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-general">
          <h1>{pokemon.name}</h1>
          <p>{pokemonSpecies.flavor_text_entries[1].flavor_text}</p>
          <span className="product-more">
            Mouse over the card for more info
          </span>
        </div>
      </div>
    );
  }
}

export default Pokemoncard;
