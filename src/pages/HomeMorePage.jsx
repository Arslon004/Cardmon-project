import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'

const HomeMorePage = ({ totalAmounts }) => {
  let { homeId } = useParams();
  let amount = totalAmounts.find((totalAmount) => totalAmount.id === homeId);

  if (!amount) {
    return <div>Not found</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark" style={{ height: '100vh'}}>
    <Card style={{ width: '40rem',padding:"20px" }}>
      <Card.Body>
        <Card.Title style={{fontSize:"30px",fontWeight:"700",color:"blue",marginTop:"20px",marginBottom:"20px"}}>{amount.name}</Card.Title>
        <Card.Text style={{fontWeight:500,color:"purple",fontSize:"25px",marginTop:"20px",marginBottom:"20px"}}>Phone: {amount.phone}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{fontWeight:"600", fontSize:"25px", color:"maroon", marginTop:"15px", marginBottom:"15px"}}>Amount: {amount.amount}$</ListGroup.Item>
        <ListGroup.Item style={{fontWeight:"600", fontSize:"25px", color:"maroon", marginTop:"15px", marginBottom:"15px"}}>Deadline: {amount.deadline}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight:"600", fontSize:"25px", color:"maroon", marginTop:"15px", marginBottom:"15px"}}>Description: {amount.desc}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight:"600", fontSize:"25px", color:"maroon", marginTop:"15px", marginBottom:"15px"}}>Paid: {amount.paid ? "Yes" : "No"}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to="/home" style={{textDecoration:"none", width:"100%",background:"blue",display:"block",color:"white",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",borderRadius:"40px"}}>Back to home</Link>
      </Card.Body>
    </Card>
  </div>
  );

}

export default HomeMorePage;
