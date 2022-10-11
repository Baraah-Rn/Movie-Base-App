import React from 'react';
import useForm from "../../Hooks/useForm"
import FormHandleError from './FormHandleError';
import "./Form.css"

const Signup = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(FormHandleError,submitForm);



  return (
    <div  className='form-container'>
    <form className='form' onSubmit={handleSubmit} >
      <h2>Get started! Create your account by filling out the information below.</h2>

      <div className='form-inputs'>
        <label className='form-label' for="username">Username : </label>
        <input className='form-input' type="username"
          placeholder="Enter username"
          id='username' name='username'
          value={values.username}
          onChange={handleChange}
          />
          {errors.username && <p className='error-message'>{errors.username}</p>}
      </div>

      <div className='form-inputs'>
        <label className='form-label' for="email">Email : </label>
        <input className='form-input' type="email"
          placeholder="example@gmail.com"
          id='email' name='email'
          value={values.email}
          onChange={handleChange}
         />
         {errors.email && <p className='error-message'>{errors.email}</p>}
      </div>

      <div className='form-inputs'>
        <label className='form-label' for="password">Password : </label>
        <input className='form-input' type="password"
          placeholder="*********"
          id='password' name='password'
          value={values.password}
          onChange={handleChange}
         />
      {errors.password && <p className='error-message'>{errors.password}</p>}
      </div>

      <div className='form-inputs'>
        <label className='form-label'for="password2">Confirm Password : </label>
        <input className='form-input'type="password"
          placeholder="*********"
          id='password2' name='password2'
          value={values.password2}
          onChange={handleChange}
         />
          {errors.password2 && <p className='error-message'>{errors.password2}</p>}
     </div>

      <button type='submit' className='Form-btn'>Signup</button>
      </form>
      </div>
  )
}

export default Signup