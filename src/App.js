import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

//Code to import Budget.js
import Budget from './components/Budget';

//Code to import Remaining.js
import Remaining from './components/Remaining';

//Code to import ExpenseTotal.js
import ExpenseTotal from './components/ExpenseTotal';

//Code to import ExpenseList.js
import ExpenseList from './components/ExpenseList';

//Code to import ExpenseItem.js
import ExpenseItem from './components/ExpenseItem';

//Code to import AllocationForm.js
import AllocationForm from './components/AllocationForm';


// Add code to import the other components here under
//Code to import Currency.js
import Currency from './components/Currency';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-4'>
                    {
                        /* Add Budget component here */
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    }

                    {
                        /* Add Remaining component here*/
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                    }

                    {
                        /* Add ExpenseTotal component here */
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    }

                   {
                        /* Add ExpenseItem component here */
                        <div className='col-sm'>
                            <Currency />
                        </div>
                    }



                </div>
                <div className='row mt-12'>
                {
                    
                        /* Add ExpenseList component here */
                        <div className='col-sm'>
                            <h2>Allocation</h2>
                            <ExpenseList />
                        </div>
                    }
                </div>

                <div className='row mt-12'>
                {
                        /* Add AllocationForm component here under */
                        <div className='col-sm'>
                            <h2>Change Allocation</h2>
                            <AllocationForm />
                        </div>
                    }
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
