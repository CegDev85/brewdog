import React, { useEffect, useState } from 'react'
import BeerList from '../Components/BeerList'
import BeerSelect from '../Components/BeerSelect';
import BeerDetails from '../Components/BeerDetails';


const BeerContainer = () => {

    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null)
    // const [checkedBeer, setCheckedBeer] = useState(false)
    const [favouriteBeers, setFavouriteBeers] = useState([])

    useEffect(() => {
        getBeers(); 
        console.log("TEST" + {beers})
    },[])


    const onBeerSelect = (beer) => {
        setSelectedBeer(beer)
          
    }


    const addFavouriteBeer = function(favouriteBeerName){
        console.log(favouriteBeerName)
        const copyFavourites = [...favouriteBeers]
        copyFavourites.push(favouriteBeerName)
        setFavouriteBeers(copyFavourites)
    }


    const getBeers = function () {
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    return(
        <div className="main-container">
            <BeerSelect beers={beers} onBeerSelect={onBeerSelect}/>
            {selectedBeer ? <BeerDetails beer={selectedBeer}  addFavouriteBeer={addFavouriteBeer}/> : null}
            {favouriteBeers}
        </div>
    )

}


export default BeerContainer;