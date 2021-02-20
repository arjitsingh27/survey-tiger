import React from 'react'
import { Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Creatsurvey() {
   
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">Select Question Type</Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item><Link to="/multiselect">multi-select</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/singleselect">single-select</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Creatsurvey
