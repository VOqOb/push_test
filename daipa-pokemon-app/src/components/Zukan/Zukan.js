import React from 'react';
import "./Zukan.css";

const Zukan = ({ pokemon, pokemon_img, pokemon_number, setSelectedPokemon }) => {
    const name = pokemon.names.find((v) => v.language.name == "ja");
    const genera = pokemon.genera.find((v) => v.language.name == "ja");
    let flavorText = pokemon.flavor_text_entries.filter(function(v){
        return (v.language.name == "ja") && (v.version.name == "sword");
    });

    if (flavorText == 0){
        flavorText = pokemon.flavor_text_entries.filter(function(v){
            return (v.language.name == "ja") && (v.version.name == "x");
        });
    }
    if (flavorText == 0){
        flavorText = pokemon.flavor_text_entries.filter(function(v){
            return (v.language.name == "ja") && (v.version.name == "sun");
        });
    }
    const number = ('000' + (pokemon_number+1)).slice(-3);
    const selected_number_change = (pokemon_number)=> {
        setSelectedPokemon(pokemon_number);
    };
    
    return (
        <div>
            <div className="pokemon_Box" onClick={()=>selected_number_change(pokemon_number)}>
                <div className="pokemon_Img pokemon_space"><img src={pokemon_img[pokemon_number].sprites.front_default} alt="" /></div>
                <p className="pokemon_Number pokemon_space">{"No."+number}</p>
                <p className="pokemon_Name pokemon_space">{name.name}</p>
            </div>
        </div>
    )
}

export default Zukan