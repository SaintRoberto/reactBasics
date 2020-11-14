import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import { render } from '@testing-library/react'

class EjerciciosNuevo extends React.Component {
   handleChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   render(){
       return(
           <ExerciseForm/>
       )
   }
}

export default EjerciciosNuevo