import React from "react"
import { Consumer } from '../swapi-context'

function withSwapi (View) {
      const Wrapper = (props) => {
        return (
          <Consumer>
            {
              (swapi) => {
                 return <View {...props} swapi={swapi} />
              }
            }
          </Consumer>
        )
      }
      return Wrapper;
  }
console.log('Function withSwapi rendered;');
export default withSwapi;