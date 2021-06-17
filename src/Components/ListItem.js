import React from 'react'

const ListItem = ({beer, index}) => {





    return(
        <option value={index}>
            {beer.name}
        </option>
    )


}



export default ListItem