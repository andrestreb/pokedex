import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./pokemonarea.css";
import Pokemoncard from "./pokemoncard";
const POKEMONAPI = "https://pokeapi.co/api/v2/pokemon/";
const POKEMONSPECIESAPI = "https://pokeapi.co/api/v2/pokemon-species/";
const POKEMONEVOLUTIONAPI = "https://pokeapi.co/api/v2/evolution-chain/";

class Pokemonarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: [],
      pokemonSpecies: [],
      pokemonEvolution: [],
      pokemonId: 4
    };

    this.handleChange = this.handleChange.bind(this);
    this.callPokemonAPI = this.callPokemonAPI.bind(this);
  }

  handleChange(event) {
    this.setState({ pokemonId: event.target.value });
  }

  componentDidMount() {
    console.log("Pokemon - Mounted");
    if (this.state.pokemonId !== "") {
      this.callPokemonAPI(this.state.pokemonId);
    }
    console.log(this.state.pokemon);
  }

  callPokemonAPI = pokemonId => {
    let pokemonAPICall = fetch(POKEMONAPI + this.state.pokemonId);
    let pokemonSpeciesAPICall = fetch(POKEMONSPECIESAPI + this.state.pokemonId);
    let pokemonEvolutionAPICall = fetch(
      POKEMONEVOLUTIONAPI + this.state.pokemonId
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
    if (this.state.pokemonId !== "") {
      this.callPokemonAPI(this.state.pokemonId);
    }
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
            InputLabelProps={{
              shrink: true
            }}
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
