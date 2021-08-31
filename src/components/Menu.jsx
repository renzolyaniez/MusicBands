import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../FirebaseConfig'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'

const Menu = () => {
    const [{ usuario }, dispatch] = useStateValue()
    const historial = useHistory()

    useEffect(() => {
        //metodo para ver si el usuario cambio en algun momoento
        auth.onAuthStateChanged(authUser => {
            console.log(authUser)
            if (authUser) {
                dispatch({
                    type: actionTypes.SET_USUARIO,
                    usuario: authUser.email
                })
            }
        })


    }, [])
    const cerrarSesion = () => {
        auth.signOut();
        dispatch({
            type: actionTypes.SET_USUARIO,
            usuario: null
        })
        historial.push('/');
    }
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item mr-3'>
                        <Link className='nav-link' to='/Home'>Home</Link>
                    </li>

                    <li className='nav-item mr-3'>
                        {
                            !usuario ?
                                (
                                    <Link className='nav-link' to='/'>Login</Link>
                                )
                                :
                                (
                                    <span></span>
                                )
                        }

                    </li>
                    <li className='nav-item mr-3'>
                        {
                            usuario ?
                                (
                                    <Link className='nav-link' to='/MusicBands'>Music Bands</Link>
                                )
                                :
                                (
                                    <span></span>
                                )
                        }
                    </li>
                    <li className='nav-item mr-3'>
                        {
                            usuario ?
                                (
                                    <Link className='nav-link' to='/admin'>Admin</Link>
                                )
                                :
                                (
                                    <span></span>
                                )
                        }
                    </li>
                </ul>
                {
                    usuario ?
                        (
                            <button

                                onClick={cerrarSesion}
                                className='btn btn-danger btn-sm'
                            > Cerrar sesion</button>
                        )
                        :
                        (
                            <span></span>
                        )
                }
            </nav>
        </div>
    )
}

export default Menu;