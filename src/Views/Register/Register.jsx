import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { firebase } from '../..//Firebase/Firebase.config'
import './Register.style.css'
import ProductsContext from '../../Context/ProductsContext'

const Register = () => {
    const { dispatch } = useContext( ProductsContext )
    const [regUser, setRegUser] = useState({ email: '', password:'', repPassword: '',  name: '' })
    const navigate = useNavigate()

    const handlerRegister = async (e)=>{
        e.preventDefault()
        if( regUser.password === regUser.repPassword){
            const { email, password, name } = regUser
            try {
                const { user } = await firebase.auth().createUserWithEmailAndPassword( email, password )
                await user.updateProfile({displayName: name})
                dispatch({type: 'REGISTER', payload: user })
                alert(`Bienvenido ${name}. Ya te encuentras registrado`)
                navigate('/login')
                
            } catch (error) {
                console.log(error)
                alert(error)
            }
        } else {
            alert('Passwords dont Match')
        }
    }

    return (
        <div className="container-register">
            <h2>Crear Cuenta !</h2>
            <form 
                onSubmit={(e)=> handlerRegister(e)}
                className="sign-up">
                <input 
                    type="text" 
                    placeholder='Nombre'
                    onChange={(e)=> setRegUser({...regUser, name: e.target.value})}/>
                <input 
                    type="email" 
                    placeholder='Correo'
                    onChange={(e)=> setRegUser({...regUser, email: e.target.value})}                    
                />
                <input 
                    type="password" 
                    placeholder='Contraseña'
                    onChange={(e)=> setRegUser({...regUser, password: e.target.value})}
                />
                <input 
                    type="password" 
                    placeholder='Repetir Contraseña'
                    onChange={(e)=> setRegUser({...regUser, repPassword: e.target.value })}
                />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Register
