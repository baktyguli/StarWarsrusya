import React from 'react'

const Row = ({left, right}) => {
  return (
    <div className="row mb2">
        <div className="col-md-6">
            {/* <ItemList /> */}
            {left}
            </div>
             <div className="col-md-6">
            {/* <ItemDetails /> */}
            {right}
        </div>
    </div>
  )
}

export default Row;