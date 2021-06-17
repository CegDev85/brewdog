import React from 'react'
import ListItem from './ListItem'

const BeerList = ({beers}) => {



    const beerItems = beers.map((beer, index) => {
        return(
        <ListItem beer={beer} key={index} />)
    })

    return (
        <div>
            <ul>
                {beerItems}
            </ul>
        </div>
    )

}




export default BeerList