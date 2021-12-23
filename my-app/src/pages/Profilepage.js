import React from 'react'
import { useNavigate } from 'react-router-dom'


function Profilepage() {
  return (
    <div class='form-container'>
      <form class='register-form'>
        
        <input
          id='first-name'
          class='form-field'
          type='text'
          placeholder='First Name'
          name='firstName'
        />
        
        <input
          id='last-name'
          class='form-field'
          type='text'
          placeholder='Last Name'
          name='lastName'
        />
       
        <input
          id='email'
          class='form-field'
          type='text'
          placeholder='Email'
          name='email'
        />
       
        <button class='form-field' type='submit'>
          Register
        </button>
      </form>
    </div>
  )
}
export default Profilepage
