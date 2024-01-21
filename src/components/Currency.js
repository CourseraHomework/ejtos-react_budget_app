import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//import react-bootstrap from 'react-bootstrap';
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';


const Currency = () => {   

    const { title, data } = useContext(AppContext);

    const {curr} = useContext(AppContext);

    const [selectedCurrency, selectCurrencyChange] = React.useState(curr);

    const { dispatch } = useContext(AppContext);
    const increaseAllocation = (val) => {
        //alert(val);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    }


    return (
        <div className='Currency'>

            <div className='alert alert-currency' >
                Currency <select value={selectedCurrency} onChange={(event) => selectCurrencyChange(increaseAllocation(event.target.value))}>
                    <option value={'$'}>$ Dollar</option>
                    <option value={'£'}>£ Pound</option>
                    <option value={'€'}>€ Euro</option>
                    <option value={'₹'}>₹ Ruppee</option>
                </select>
            </div>
        </div>
    );
};
export default Currency;
