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
                <div className="value">{pokemon.height / 10}m</div>
              </div>
              <div>
                <div className="title">weight</div>
                <div className="value">{pokemon.weight / 10}kg</div>
              </div>
              <div>
                <div className="title">XP</div>
                <div className="value">{pokemon.base_experience}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-general">
          <h1>{pokemon.name}</h1>
          {this.getDescriptions()}

          {this.handleTextChangeOnScreenSize()}
        </div>
      </div>
    );
  }

  handleTextChangeOnScreenSize() {
    if (window.innerWidth < 600) {
      return (
        <span className="product-more">Click on the card for more info</span>
      );
    } else {
      return (
        <span className="product-more">Mouse over the card for more info</span>
      );
    }
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
    const { secondEvolution } = this.props.pokemonEvolution.chain.evolves_to;
    if (this.isEmpty(this.props.pokemonEvolution.chain.evolves_to[0])) {
      return (
        <React.Fragment>
          <div className="product-evolution"> - </div>
          <div className="product-evolution">I don't evolve! I'm unique! </div>
          <div className="product-evolution"> - </div>
        </React.Fragment>
      );
    } else {
      if (
        this.isEmpty(
          this.props.pokemonEvolution.chain.evolves_to[0].evolves_to[0]
        )
      ) {
        if (this.isEmpty(this.props.pokemonEvolution.chain.evolves_to[1])) {
          return (
            <React.Fragment>
              <div className="product-evolution">
                {this.props.pokemonEvolution.chain.species.name}
              </div>
              <div className="product-evolution">
                {this.props.pokemonEvolution.chain.evolves_to[0].species.name}
              </div>
              <div className="product-evolution"> - </div>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <div className="product-evolution">
                {this.props.pokemonEvolution.chain.species.name}
              </div>
              <div className="product-evolution2">
                {this.props.pokemonEvolution.chain.evolves_to.map((gh, i) => (
                  <span key={i}>{gh.species.name}, </span>
                ))}
              </div>
            </React.Fragment>
          );
        }
      } else {
        return (
          <React.Fragment>
            <div className="product-evolution">
              {this.props.pokemonEvolution.chain.species.name}
            </div>
            <div className="product-evolution">
              {this.props.pokemonEvolution.chain.evolves_to[0].species.name}
            </div>
            <div className="product-evolution">
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
