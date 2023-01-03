import React, { useState } from 'react';
import ItemList from '../item-list/item-list';
import Row from '../row';
import ItemDetails from './../item-details/index';

const PeoplePage = () => {
    const [state, setState] = useState({itemId: 1})

    const leftElement = <ItemList setItemId={(id) => setState({itemId: id})}/>
    const rightElement = <ItemDetails itemId={state.itemId}/>

  return (
    <Row left={leftElement} right={rightElement}/>
  )
}

export default PeoplePage;