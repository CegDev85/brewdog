import React from 'react' 


const BeerDetails = ({beer, addFavouriteBeer}) => {

    const handleCheck = (event) => {
        const favouriteBeerName = event.target.value
        // console.log(favouriteBeer)
        // const favouriteBeer = "hiedhfh"
        addFavouriteBeer(favouriteBeerName)}

        
    // console.log("I am running!")
    return(
        <div>
            <h2>Name: {beer.name}</h2>
            <h3>abv: {beer.abv}</h3>
            <input type="checkbox" value ={beer.name} onChange={handleCheck} />
        </div>

    )
}


export default BeerDetails