import React, { Fragment } from 'react'
import DebtsCard from '../components/card/DebtsCard'

const DebtsPage = ({totalAmounts,deleteDebt,paidDebt}) => {
  let debters=totalAmounts.filter((totalAmount)=>!totalAmount.paid)
  return (
    <Fragment>
      <section>
        <div className="container">
          <h2 className='text-center my-4 text-success'>People who have not paid their debts ({debters.length})</h2>
          {debters.map((debt)=><DebtsCard deleteDebt={deleteDebt} paidDebt={paidDebt} key={debt.id} {...debt}/>)}
        </div>
      </section>
    </Fragment>
  )
}

export default DebtsPage