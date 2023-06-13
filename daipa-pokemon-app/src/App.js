import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import Zukan from './components/Zukan/Zukan';
import Zukan_img from './components/Zukan_img/Zukan_img';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Status from './components/Status/Status';

function App() {
  const DP_URL = "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107%22";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonData_jp, setPokemonData_jp] = useState([]);
  const [selectedpokemon, setSelectedPokemon] = useState(0);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(DP_URL);
      let res_2 = await loadPokemon(res.results);
      // console.log(res_2);
      loadPokemon_jp(res_2);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        //console.log(pokemonRecord);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
    return _pokemonData;
  };

  //日本語
  const loadPokemon_jp = async (data) => {
    let _pokemonData_jp = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord_jp = getPokemon(pokemon.species.url);
        return pokemonRecord_jp;
      })
    );
    setPokemonData_jp(_pokemonData_jp);
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? (
          <h1>ロード中・・・</h1>
        ):(
          <>
          <div><Header/></div>
          <div className="main-visual">
            <div className="main-left">
              <div className="selected_img">
                <Zukan_img selected_number = {selectedpokemon} pokemon_img = {pokemonData}/>
              </div>
            </div>
            <div className="main-right">
              <div className="pokemon-lst">
                  {pokemonData_jp.map((pokemon, i) => {
                      return <Zukan key={i} pokemon_number = {i} pokemon={pokemon} pokemon_img={pokemonData} setSelectedPokemon={setSelectedPokemon}/>;
                  })}
              </div>
            </div>
          </div>
          <div><Footer/></div>
          <div><Status selected_number = {selectedpokemon} pokemon_img = {pokemonData}/></div>
        </>
        )
      }
    </div>
  );
}

export default App;
