import React, { useState } from 'react'
import ItemList from '../item-list';
import ItemDetails from '../../components/item-details/item-details';
import Row from '../row/row';
// import {Consumer} from '../swapi-context'
// import { Component } from 'react/cjs/react.production.min';
import withSwapi from '../hoc';


// function withSwapi (View) {
//     const Wrapper = (props) => {
//     return (
//         <Consumer>
//             {
//                 (swapi) => {
//                     <View {...props} swapi={swapi}/>
//                 }
//             }
//         </Consumer>
//     )

//     }
//     return Wrapper

// }



const PeoplePage = () => {
  const [state, setState] = useState({ itemId: 1 })

  const NewItemList = withSwapi(ItemList)
  const NewItemDetails = withSwapi(ItemDetails)

  // const leftElement= (
  //     <Consumer>
  //         {
  //             (swapi) => {
  //                 return <ItemList swapi={swapi} setItemId={(id) => setState({itemId: id})}/>
  //             }
  //         }
  //     </Consumer>
  // )

  // const rightElement = (
  //     <Consumer>
  //         {
  //             (swapi) => {
  //                 return <ItemDetails swapi={swapi}  itemId={state.itemId}/>
  //             }
  //         }
  //     </Consumer>
  // )

  const leftElement = <NewItemList setItemId={(id) => setState({ itemId: id })} />
  const rightElement = <NewItemDetails itemId={state.itemId} />

  return (
    <Row left={leftElement} right={rightElement} />
  )
}

export default PeoplePage;