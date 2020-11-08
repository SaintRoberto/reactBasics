import React from 'react'
import { Link } from 'react-router-dom'

function BotonLink(props){
    return(
                <div className="card-body">
                    <div className="row center">
                        <div className="col-12 ">
                            <Link to= "/ejercicio/new">
                                <img src={props.img} className="Fitness-Add"/>
                            </Link>
                        </div>
                    </div>
                </div>
    )
}


export default BotonLink