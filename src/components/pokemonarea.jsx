import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/styles";

import "./pokemonarea.css";
import Pokemoncard from "./pokemoncard";
const POKEMONAPI = "https://pokeapi.co/api/v2/pokemon/";
const POKEMONSPECIESAPI = "https://pokeapi.co/api/v2/pokemon-species/";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  margin: "20px"
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& label": {
      color: "white"
    },
    "& .MuiInputBase-input": {
      color: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "grey"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

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
    this.handleRandom = this.handleRandom.bind(this);
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

  handleRandom() {
    this.setState(
      { pokemonIdReady: true, pokemonId: Math.floor(Math.random() * 808 + 1) },
      () => {
        this.callPokemonAPI(this.state.pokemonId);
      }
    );
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
          <div className="pokemon-options">
            <CssTextField
              id="outlined-number"
              type="number"
              label="Pokemon ID"
              value={pokemonId}
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
            />

            <MyButton
              variant="contained"
              color="primary"
              onClick={this.handleRandom}
            >
              Random
            </MyButton>
          </div>
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
