import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Register.css'


export default function Login () {

  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/auth/signin', input).then((res) => {
        console.log(res)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        window.location.href = '/home'
        }
    ).catch((err) => {
        console.log(err)
    }
    )
}

const handleInputChange = (e) => {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
}

  return (
        <>
        <div className='Principal'>
        <section className="container">
      <header>Iniciar Sesión</header>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="input-box">
          <label>Correo electronico</label>
          <input type="text" placeholder="Ingrese una dirección de correo" required value={input.email} name="email" onChange={handleInputChange}/>
        </div>
        <div className="input-box">
          <label>Contraseña</label>
          <div className='column'>
          <input type={'password'} placeholder="Ingrese una contraseña" required value={input.password} name="password" onChange={handleInputChange}/>
        </div>
        </div>
        <div>
          <Link to='/register'>
          <p>Registrate</p>
          </Link>
          </div>
        <input type="submit" value="Enviar" className='button-submit'/>
      </form>
    </section>
    </div>
        </>
  )
}