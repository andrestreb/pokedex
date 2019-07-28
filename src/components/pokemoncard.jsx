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
            {this.getEvolutions()}

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
          {this.getDescriptions()}
          <span className="product-more">
            Mouse over the card for more info
          </span>
        </div>
      </div>
    );
  }

  getDescriptions() {
    let nbrDesc = 0;
    let nbrDescEnFound = 0;
    while (nbrDescEnFound == 0) {
      if (
        this.props.pokemonSpecies.flavor_text_entries[nbrDesc].language.name ===
        "en"
      ) {
        nbrDescEnFound = 1;
      } else {
        nbrDesc = nbrDesc + 1;
      }
    }
    return (
      <p>
        {this.props.pokemonSpecies.flavor_text_entries[nbrDesc].flavor_text}
      </p>
    );
  }

  getEvolutions() {
    if (this.isEmpty(this.props.pokemonEvolution.chain.evolves_to[0])) {
      return (
        <React.Fragment>
          <div class="product-evolution"> - </div>
          <div class="product-evolution">I don't evolve! I'm unique! </div>
          <div class="product-evolution"> - </div>
        </React.Fragment>
      );
    } else {
      if (
        this.isEmpty(
          this.props.pokemonEvolution.chain.evolves_to[0].evolves_to[0]
        )
      ) {
        return (
          <React.Fragment>
            <div class="product-evolution">
              {this.props.pokemonEvolution.chain.species.name}
            </div>
            <div class="product-evolution">
              {this.props.pokemonEvolution.chain.evolves_to[0].species.name}
            </div>
            <div class="product-evolution"> - </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
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
          </React.Fragment>
        );
      }
    }
  }

  isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
}

export default Pokemoncard;
