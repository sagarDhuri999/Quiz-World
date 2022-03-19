import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
            <div className='Header'>
                <Link to="/" className='title' ><strong> Quiz</strong>World</Link>

            </div>
            <br />
        </>
    )
}

export default Header
