import React from 'react'

import "./Card.css"
import { Link } from 'react-router-dom'
const DebtsCard = ({ name, deadline, desc, amount, phone, paid, id, deleteDebt,paidDebt }) => {
  return (
    <div className='alert alert-danger debts__card'>
      <div>
        <h2>{name} <span className='badge bg-success'>{amount} $</span></h2>
        <p>{phone} <span className='badge bg-dark'>{deadline}</span></p>
      </div>
      <div className='debts__card--btn'>
        <button className='btn btn-warning me-3' onClick={() => paidDebt(id)}>Paid</button>
        <Link to={`/debts/${id}`} className='btn btn-primary me-3 more__btn' >More...</Link>
        <button className='btn btn-danger' onClick={() => deleteDebt(id)}>Delete</button>
      </div>
    </div>
  )
}

export default DebtsCard