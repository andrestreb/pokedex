import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./pokemonarea.css";
import Pokemoncard from "./pokemoncard";
import { isEmptyStatement } from "@babel/types";
const POKEMONAPI = "https://pokeapi.co/api/v2/pokemon/";
const POKEMONSPECIESAPI = "https://pokeapi.co/api/v2/pokemon-species/";

class Pokemonarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: [],
      pokemonSpecies: [],
      pokemonEvolution: [],
      pokemonEvolutions: 1,
      pokemonIdReady: true,
      pokemonId: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.callPokemonAPI = this.callPokemonAPI.bind(this);
  }

  handleChange(event) {
    let pokemonIdValue = "";
    if ((event.target.value > 0) & (event.target.value < 808)) {
      pokemonIdValue = event.target.value;
      this.setState({ pokemonIdReady: true, pokemonId: pokemonIdValue }, () => {
        this.callPokemonAPI(this.state.pokemonId);
      });
    } else {
      this.setState({ pokemonIdReady: false, pokemonId: pokemonIdValue });
    }
  }

  componentDidMount() {
    console.log("Pokemon - Mounted");
    if (this.state.pokemonIdReady == true) {
      this.callPokemonAPI(this.state.pokemonId);
      console.log("Pokemon API called");
    }
    this.setState({ pokemonIdReady: false });
  }

  callEvolutionChainAPI = () => {
    console.log("Pokemon Evolution API called");
    fetch(this.state.pokemonSpecies.evolution_chain.url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          pokemonEvolution: data
        });
      });
  };

  callPokemonAPI = pokemonId => {
    let pokemonAPICall = fetch(POKEMONAPI + this.state.pokemonId);
    let pokemonSpeciesAPICall = fetch(POKEMONSPECIESAPI + this.state.pokemonId);
    Promise.all([pokemonAPICall, pokemonSpeciesAPICall])
      .then(values => Promise.all(values.map(value => value.json())))
      .then(
        data => {
          this.setState(
            {
              pokemon: data[0],
              pokemonSpecies: data[1]
            },
            () => {
              this.callEvolutionChainAPI();
            }
          );
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    const {
      error,
      isLoaded,
      pokemon,
      pokemonSpecies,
      pokemonEvolution,
      pokemonId
    } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div>PokemonId: {pokemonId}</div>
          <TextField
            id="outlined-number"
            type="text"
            label="Pokemon ID"
            value={pokemonId}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <Pokemoncard
            pokemonId={pokemonId}
            pokemon={pokemon}
            pokemonSpecies={pokemonSpecies}
            pokemonEvolution={pokemonEvolution}
          />
        </React.Fragment>
      );
    }
  }
}

export default Pokemonarea;
