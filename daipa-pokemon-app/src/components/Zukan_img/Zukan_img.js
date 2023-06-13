import React from 'react'
import './Zukan_img.css'

const Zukan_img = ({ pokemon_img, selected_number }) => {
  return (
    <div>
        <div className="selected_Img">
            <img src={pokemon_img[selected_number].sprites.other['official-artwork'].front_default} alt="" />
            {/* {console.log(pokemon_img[selected_number])} */}
        </div>
    </div>
  )
}

export default Zukan_img