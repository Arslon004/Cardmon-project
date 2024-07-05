import React, { Fragment } from 'react'
import HomeCard from '../components/card/HomeCard'
import { Button, Form, Modal } from 'react-bootstrap';

const HomePage = ({ totalAmounts,validated,show,handleClose,handleShow,handleSubmit,totalAmount,handleAmount,editAmount,selected,deleteAmount,handleSearch,search,unPaidAmount,paidAmount}) => {

  let filteredAmounts=totalAmounts.filter((totalAmount)=>totalAmount.name.toLowerCase().includes(search))
  return (
    <Fragment>
      <section>
        <div className="container">
          <h2 className='text-center my-3 text-success'>HomePage</h2>

          <div className="input-group my-4">
            <input value={search} onChange={handleSearch} type="text" className="form-control " placeholder="Searching..." />
            <button className="btn btn-outline-secondary" onClick={handleShow} type="button">Add</button>
          </div>

          {filteredAmounts.length >0 ? filteredAmounts.map((totalAmount) => <HomeCard key={totalAmount.id} {...totalAmount } paidAmount={paidAmount} unPaidAmount={unPaidAmount} deleteAmount={deleteAmount} editAmount={editAmount} />)
          :
          <h2 className='text-center py-5'>Sorry, no person with that name was found</h2>
          }

          {/* modal start */}
          <Modal show={show} onHide={handleClose}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Total amount</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                   onChange={handleAmount}
                  value={totalAmount.name}
                    required
                    type="text"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                   onChange={handleAmount}
                  value={totalAmount.phone}
                    required
                    type="tel"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                   onChange={handleAmount}
                  value={totalAmount.amount}
                    required
                    type="number"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="deadline">
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control
                   onChange={handleAmount}
                  value={totalAmount.deadline}
                    required
                    type="date"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="desc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                   onChange={handleAmount}
                  value={totalAmount.desc}
                    required
                    as="textarea"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type='invalid'>Please fill!</Form.Control.Feedback>
                </Form.Group>


            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type='submit' variant="primary" >
                {selected === null ? "Add" : "Save"} data
              </Button>
            </Modal.Footer>
              </Form>
          </Modal>
          {/* modal end */}
        </div>
      </section>
    </Fragment>
  )
}

export default HomePage