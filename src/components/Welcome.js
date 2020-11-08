import React from 'react'


function Welcome(props){
    return(
             <div className="card-body">
                <div className="row center">
                        <div className="col-12">
                            <h1 className="text-center">{props.username}</h1>
                            <p  className="text-center">{props.data}</p>
                        </div>
                    </div>
                </div>
    )
}

export default Welcome