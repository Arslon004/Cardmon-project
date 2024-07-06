import React, { Fragment } from 'react'
import TransactionCard from '../components/card/TransactionCard';

const TransactionsPage = ({totalAmounts,deleteTransaction,unPaidTransaction}) => {
  let paidAmounts=totalAmounts.filter((totalAmount)=>totalAmount.paid);
  return (
    <Fragment>
      <section>
        <div className="container">
          <h2 className='text-center my-4 text-success'>People who have paid their debts ({paidAmounts.length})</h2>
          {paidAmounts.map((paidAmount)=><TransactionCard unPaidTransaction={unPaidTransaction} deleteTransaction={deleteTransaction} key={paidAmount.id} {...paidAmount}/>)}
        </div>
      </section>
    </Fragment>
  )
}

export default TransactionsPage