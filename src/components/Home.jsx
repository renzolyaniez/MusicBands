import React from 'react';
import '../Inicio.css'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'

const Home = () => {

    return (
        <div className="slider">
            <ul>
                <li>
                    <img src="beatles.jpg" alt="" />
                </li>
                <li>
                    <img src="queen.gif" alt="" />
                </li>
                <li>
                    <img src="metallica.jpg" alt="" />
                </li>
                <li>
                    <img src="kiss.jpg" alt="" />
                </li>
            </ul>
        </div>
    )
}

export default Home;