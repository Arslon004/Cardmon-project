import React, { Fragment } from 'react'
import TransactionCard from '../components/card/TransactionCard';

const TransactionsPage = ({totalAmounts,deleteTransaction}) => {
  let paidAmounts=totalAmounts.filter((totalAmount)=>totalAmount.paid);
  return (
    <Fragment>
      <section>
        <div className="container">
          <h2>TransactionsPage</h2>
          {paidAmounts.map((paidAmount)=><TransactionCard deleteTransaction={deleteTransaction} key={paidAmount.id} {...paidAmount}/>)}
        </div>
      </section>
    </Fragment>
  )
}

export default TransactionsPage