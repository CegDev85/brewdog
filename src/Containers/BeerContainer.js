import React, { useEffect, useState } from 'react'
import BeerList from '../Components/BeerList'
import BeerSelect from '../Components/BeerSelect';
import BeerDetails from '../Components/BeerDetails';


const BeerContainer = () => {

    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null)

    useEffect(() => {
        getBeers();
        console.log("TEST" + {beers})
    },[])


    const onBeerSelect = (beer) => {
        setSelectedBeer(beer)
        console.log("I am running")      
    }



    const getBeers = function () {
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    return(
        <div className="main-container">
            <BeerSelect beers={beers} onBeerSelect={onBeerSelect}/>
            {selectedBeer ? <BeerDetails beer={selectedBeer}/> : null}
        </div>
    )

}


export default BeerContainer;