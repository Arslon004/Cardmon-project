import React, { Fragment } from 'react'
import DebtsCard from '../components/card/DebtsCard'

const DebtsPage = ({totalAmounts,deleteDebt}) => {
  let debters=totalAmounts.filter((totalAmount)=>!totalAmount.paid)
  return (
    <Fragment>
      <section>
        <div className="container">
          <h2>DebtsPage</h2>
          {debters.map((debt)=><DebtsCard deleteDebt={deleteDebt} key={debt.id} {...debt}/>)}
        </div>
      </section>
    </Fragment>
  )
}

export default DebtsPage