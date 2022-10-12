import React, {useState} from 'react'
import Signup from './Signup'
import MainPage from '../MoviesComponents/MainPage'
import "./Form.css"


const Form = () => {
const [submitted, setSubmitted]= useState(false);

function submitForm(){
  setSubmitted(true)
}
  return (
    <div>
    {!submitted ? (<Signup submitForm={submitForm}/>) :(<MainPage/>) }
    </div>
  )
}

export default Form