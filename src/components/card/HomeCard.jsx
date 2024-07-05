import React from 'react'

import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "./Card.css";

const HomeCard = ({name,deadline,amount,phone,desc,paid,editAmount,id,deleteAmount,unPaidAmount,paidAmount}) => {
  return (
    <div className={` alert ${paid ? "alert-warning" : "alert-danger"} home__alert  `}>
        <div >
          <h4>{name}<span className={`badge ${paid ? "bg-success" : "bg-danger"} ms-3`}>{amount}$</span></h4>
          <p>{phone} ||<span className='badge bg-primary ms-3'>{deadline}</span></p>
        </div>
        <div className='buttons__home d-flex'>
          <div >

          {paid
          ?
          <button className='btn btn-warning me-3' onClick={()=>paidAmount(id)}>Paid</button>
          :
          <button className='btn btn-warning me-3' onClick={()=>unPaidAmount(id)}>Unpaid</button>
        }

          <Link to={`/home/${id}`} className='btn btn-secondary me-3 more__btn' >More...</Link>
          </div>
          <div >
          <button className='btn btn-primary me-3' onClick={()=>editAmount(id)}>Edit</button>
          <button className='btn btn-danger ' onClick={()=>deleteAmount(id)}>Delete</button>

          </div>
        </div>
      </div>
  )
}

HomeCard.propTypes={
  name:PropTypes.string,
  deadline:PropTypes.string,
  amount:PropTypes.number,
  phone:PropTypes.string,
  desc:PropTypes.string,
}

export default HomeCard