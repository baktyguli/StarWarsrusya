import React from "react"
import {Consumer} from '../swapi-context'

function withSwapi (View) {
    const Wrapper = (props) => {
    return (
        <Consumer>
            {
                (swapi) => {
                   return <View {...props} swapi={swapi}/>
                }
            }
        </Consumer>
    )
  
    }
    return Wrapper
    
}

export default withSwapi;