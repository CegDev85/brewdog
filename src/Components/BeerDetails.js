import React from 'react' 


const BeerDetails = ({beer}) => {
    console.log("I am running!")
    return(
        <div>
            <h2>Name: {beer.name}</h2>
            <h3>abv: {beer.abv}</h3>
        </div>

    )
}


export default BeerDetails