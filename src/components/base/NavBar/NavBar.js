import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


const NavBar = () => {
    return (
        <div>
            <div classname="logo-area">
                <Link to="/">airbnb</Link>
            </div>
            <SearchBar />
        </div>
    )
}

export default NavBar
