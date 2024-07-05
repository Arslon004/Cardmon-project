import React from 'react'

import "./Card.css"
import { Link } from 'react-router-dom'
const TransactionCard = ({name,deadline,desc,amount,phone,paid,id,deleteTransaction}) => {
  return (
    <div className='alert alert-warning transaction__card'>
      <div>
        <h2>{name} <span className='badge bg-success'>{amount} $</span></h2>
        <p>{phone} <span className='badge bg-dark'>{deadline}</span></p>
      </div>
      <div>
        <Link to={`/transaction/${id}`} className='btn btn-primary me-3' >More...</Link>
        <button className='btn btn-danger' onClick={()=>deleteTransaction(id)}>Delete</button>
      </div>
    </div>
  )
}

export default TransactionCard