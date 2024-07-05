import React from 'react'

import "./Card.css"
const TransactionCard = ({name,deadline,desc,amount,phone,paid,id,deleteTransaction}) => {
  return (
    <div className='alert alert-success transaction__card'>
      <div>
        <h2>{name} <span className='badge bg-success'>{amount} $</span></h2>
        <p>{phone} <span className='badge bg-dark'>{deadline}</span></p>
      </div>
      <div>
        {/* <button className='btn btn-primary me-3' >Unpaid</button> */}
        <button className='btn btn-danger' onClick={()=>deleteTransaction(id)}>Delete</button>
      </div>
    </div>
  )
}

export default TransactionCard