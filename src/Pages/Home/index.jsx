import React, { useEffect, useState } from "react";
import {Grid} from "@mui/material";
import {Container} from "@mui/system";
import NavBar from "../../Componentes/NavBar";
import CardPokemon from "../../Componentes/Card";
import axios from "axios";

export const Home = ()=>{
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
      getPokemons();
    }, []);

    const getPokemons = ()=>{
      let endPoints = []
      
      for (var i = 1; i<50; i ++){
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      }
      axios.all(endPoints.map((endPoint) =>axios.get(endPoint))).then((res)=>setPokemons(res))
      
    }

    const pokemonFilter = (name)=>{
      let filteredPokemons = []
      if(name === ""){
        getPokemons()
      }
      for (let i in pokemons){
        if(pokemons[i].data.name.includes(name)){
          filteredPokemons.push(pokemons[i])
        }
      }

      setPokemons(filteredPokemons);
    }

    return (
      <>
        <NavBar pokemonFilter={pokemonFilter} />
        <Container maxWidth = "xg">
          <Grid container spacing = {3}>
            {pokemons.map((pokemon, key)=>(
              <Grid item xs={12} sm={6} md={4} lg={2}key = {key}>
                <CardPokemon name = {pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
              </Grid>
            ))}
            
          </Grid>
        </Container>
      </>
    )
  }

export default Home