import React, { useState } from 'react'


const Checkbox = () => {

    const [checked, setChecked] = useState(false)

    // const checkboxSelect = ({label, value, onChange}) => {
    //     return(
    //         <label>
    //             <input type
    //         </label>
    //     )
    // }

    const handleChange = () => {
        setChecked(!checked)
    }

    return(
        <div>
            <label>
                <input type="checkbox"  checked={checked} onChange={handleChange}/>
                Favourite
            </label>
        </div>

    )
}





export default Checkbox