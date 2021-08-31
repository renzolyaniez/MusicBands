import React from 'react';
import '../Inicio.css'
import {useHistory} from 'react-router-dom'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'

const Admin = () =>{
    const [{ usuario }, dispatch] = useStateValue()
    const historial = useHistory()

    if(usuario){
        return(
            <div>
           <h2 style={{'fontFamily':'fantasy'}} className='m-2'>ADMIN</h2>
            </div>
        )
    }
    else{
     historial.push('/')
    }

}
export default Admin;