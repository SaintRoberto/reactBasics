import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Ejercicio from '../pages/Ejercicios'
import EjercicioNuevo from '../pages/EjerciciosNuevo'
import Notfound from '../pages/Notfound'

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/ejercicio" component={Ejercicio}/>
                <Route exact path="/ejercicio/new" component={EjercicioNuevo}/>
                <Route component={Notfound}/>
            </Switch>
        </BrowserRouter>
    )
}


export default App