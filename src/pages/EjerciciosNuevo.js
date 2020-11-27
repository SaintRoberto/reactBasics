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

   handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
}

 

 

//    handleSubmit = async e => {
//        e.preventeDefault()
//        try {
//            let config = {
//                method: 'POST',
//                Headers: {
//                    'Accept': 'aplication/json',
//                    'Content-Type': 'aplication/json'
//                },
//                body: JSON.stringify(this.state.form)
//            }
//            let res = await fetch('http://localhost:8000/api/exercises', config)
//            let json =  await res.json()
//            alert(json);
//            console.log(json)

//        } catch (error) {
//          console.log(error)
//        }
//    }

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
                        onSubmit = {this.handleSubmit}
                        form = {this.state.form}
                    />
                </div>
            </div>
       )
   }
}

export default EjerciciosNuevo