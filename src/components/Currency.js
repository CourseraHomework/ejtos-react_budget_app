import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//import react-bootstrap from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Currency = () => {   

    const { title, data } = useContext(AppContext);

    //const [title, setName] = useState(title);

    const handleClick = (event) => {

        const { target: { value } } = event;
alert(value);
        //setState({ someProperty: value });

    }

    return (
        <div className='Currency'>
            <DropdownButton id="dropdown-basic-button" title={title}>
                <Dropdown.Item onClick={((e) => handleClick(e))} href="#/action-1">$ Dollar</Dropdown.Item>
                <Dropdown.Item href="#/action-2">£ Pound</Dropdown.Item>
                <Dropdown.Item href="#/action-3">€ Euro</Dropdown.Item>
                <Dropdown.Item href="#/action-3">₹ Ruppee</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};
export default Currency;
