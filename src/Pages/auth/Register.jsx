import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'

function validate (input) {
  const errors = {}
  if (!input.name) {
    errors.name = 'First Name is required'
  } else if (input.name.trim() === '') {
    errors.name = 'Name may not be empty'
  }
  if (!input.lastName) {
    errors.lastName = 'Last Name is required'
  } else if (input.lastName.trim() === '') {
    errors.firstName = 'Name may not be empty'
  }
  if (!input.email) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = 'Email is invalid'
  }
  if (!input.username) {
    errors.username = 'El numero de documento es requerido'
  } else if (input.username.length < 3) {
    errors.username = 'El numero de documento es invalido'
  }
  if (!input.password) {
    errors.password = 'Password is required'
  } else if (input.password.length < 5) {
    errors.password = 'La contraseña debe tener al menos 5 caracteres'
  }
  if (!input.repeatPassword) {
    errors.repeatPassword = 'Debe confirmar la contraseña'
  } else if (input.password !== input.repeatPassword) {
    errors.repeatPassword = 'Las contraseñas no coinciden'
  }
  return errors
}
export default function Register () {
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    username: '',
    user_type: 'estudiante',
  })

  const [error, setError] = useState({})
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(error)
    if (Object.keys(error).length > 0) {
      return alert('Hay errores en el formulario')
    }
    axios.post('http://localhost:3001/api/auth/signup', input)
    .then(res => {
      console.log(res)
      window.location.href = '/'
    }
    )
    .catch(err => {
      console.log(err.message)
    })
  }

  const handleInputChange = (e) => {
    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }



  return (
        <>
        <div className='Principal'>
        <section className="container">
      <header>Registrate</header>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="column">
        <div className="input-box">
          <label>Nombre</label>
          <input type="text" placeholder="Ingrese un nombre" required value={input.name} name="name" onChange={handleInputChange}/>
        </div>
        <div className="input-box">
          <label>Apellido</label>
          <input type="text" placeholder="Ingrese un Apellido" required value={input.lastName} name='lastName' onChange={handleInputChange}/>
        </div>
        </div>

        <div className="input-box">
          <label>usuario</label>
          <input type="text" placeholder="Ingrese un usuario" required value={input.username} name='username' onChange={handleInputChange}/>
        </div>

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
        <div className="input-box">
          <label>Confirma la Contraseña</label>
          <div className='column'>
          <input type={'password'} placeholder="Confirme la contraseña" required value={input.repeatPassword} name="repeatPassword" onChange={handleInputChange}/>
          </div>
        </div>
        <input type="submit" value="Enviar" className='button-submit'/>
      </form>
    </section>
    </div>
        </>
  )
}
