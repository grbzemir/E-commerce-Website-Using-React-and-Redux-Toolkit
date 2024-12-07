import React from 'react'
import { BsLightbulb } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div>
            <div>Logo</div>
            <div>
                <input type="text" placeholder='search'></input>
                <BsLightbulb />
                <div className='relative'>

                </div>
            </div>
        </div>
    )
}

export default Navbar
