
import React, { useReducer } from 'react'
import ReactDom from 'react-dom'
import Card from './components/Card' 
import Welcome from './components/Welcome'
import ImagenScr from './images/exercise.png'
import App from './components/App' 

const container = document.getElementById('root');

ReactDom.render(<App/>, container);

