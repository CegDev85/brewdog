import React from 'react'
import ListItem from './ListItem'

const BeerSelect = ({beers, onBeerSelect}) => {

    const beerItems = beers.map((beer, index) => {
        return <option value={index} key={index}>{beer.name}</option>    
    })


    const handleChange = (event) => {
        const selectedBeer = beers[event.target.value]
        onBeerSelect(selectedBeer)
    }


    

    return(
        <div>
            <select onChange={handleChange}>
                {beerItems}
            </select>
        </div>
    )

}


export default BeerSelect;