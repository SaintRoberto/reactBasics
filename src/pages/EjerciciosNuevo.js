import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import Welcome from '../components/Welcome'

import { render } from '@testing-library/react'

class EjerciciosNuevo extends React.Component {
    state = {
        form:{
            title: '', 
            img: '', 
            description: '', 
            leftColor: '', 
            rightColor: ''

        }
    }

   handleChange = e => {
       this.setState({
           form: {
            ...this.state.form,
            [e.target.name]: e.target.value
           }
           
       })
   }

   render(){
        
       return(
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form} />
                </div>           
                <div className="col-sm">
                    <Welcome 
                        username="WELCOME TO MMX"
                        data="test de react"
                    />
                    <ExerciseForm
                        onChange = {this.handleChange}
                        form = {this.state.form}
                    />
                </div>
            </div>

       )
   }
}

export default EjerciciosNuevo