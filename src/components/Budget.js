import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);    
    //const {newCurr, setNewCurr } = useState(curr);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {        

        if (event.target.value > 20000) {
            alert('The value cannot exceed more than 20,000');
        }
        else if(event.target.value < totalExpenses){
            alert('You cannot reduce the budget amount lower than the expenses / spending');
            //alert(totalExpenses);
        }
        else {
            setNewBudget(event.target.value);
        }

        
    }
    return (
<div className='alert alert-secondary'>
{/* <span>Budget: £{budget}</span> */}
Budget: {currency}
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
