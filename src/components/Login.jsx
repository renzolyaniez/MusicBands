import React, { useState } from 'react';
import { auth } from '../FirebaseConfig';
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'

const Login = () => {
    const historial = useHistory();
    const [email, setEmail] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [msgError, setMsgError] = useState(null);
    const [{ usuario }, dispatch] = useStateValue()


    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, contrasenia)
            .then(r => {
                historial.push('/Home')
            })
            .catch(e => {
                if (e.code === 'auth/invalid-email') {
                    setMsgError('Error, formato de mail incorrecto')
                }
                if (e.code === 'auth/weak-password') {
                    setMsgError('Error, la contraseña debe tener al menos 6 caracteres')

                }
            })
    }

    const loginUsuario = () => {
        auth.signInWithEmailAndPassword(email, contrasenia)
            .then((r) => {
                historial.push('/Home')
            })
            .catch((err) => {
                //auth/wrong-password
                if (err.code == 'auth/wrong-password') {
                    setMsgError('Error, contraseña incorrecta o mail incorrecto')
                }
            })
    }

    if (usuario == null) {
        return (
            <div className='row mt-4'>
                <div className='col'></div>
                <div className='col'>
                    <h2 style={{ 'fontFamily': 'arial', 'color': '#00008B' }} className='mb-4'>Registrate o iniciá sesión</h2>
                    <form onSubmit={registrarUsuario} className='form-group'>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            className='form-control'
                            type="Email"
                            placeholder="Ingrese el Email"
                            value={email}
                        />
                        <input
                            onChange={(e) => { setContrasenia(e.target.value) }}
                            className='form-control mt-4'
                            type="password"
                            placeholder="Ingrese la contraseña"
                            value={contrasenia}
                        />
                        <input className='btn btn-dark form-control mt-4' value='Registrar usuario'
                            type="submit" />
                    </form>
                    <button onClick={loginUsuario} className='btn btn-success form-control mt-3'>
                        Iniciar sesion
                    </button>
                    {
                        msgError != null ?
                            (
                                <div>
                                    {msgError}
                                </div>
                            )
                            : (
                                <span></span>
                            )
                    }
                </div>
                <div className='col'></div>

            </div>
        )
    }
    else{
        historial.push('/Home')
    }

}

export default Login;