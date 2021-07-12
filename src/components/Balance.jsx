import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
    const { transactions } = useContext(GlobalContext)
   
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((acc,curr) => (acc+= curr),0)


    
    
    return (
        <div>
            <h4> Your Balance</h4>
            <h1 > ${total}</h1>
        </div>
    )
}

export default Balance
