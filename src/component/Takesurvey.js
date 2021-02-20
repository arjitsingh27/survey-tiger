import React from 'react'
import { Form } from 'react-bootstrap';



function Takesurvey() {

    return (
        <div>
            <p>Which of the following apps you have on your phone?</p>
            <Form.Check aria-label="option 1" inline label="Whatsapp" /><br />
            <Form.Check aria-label="option 1" inline label="Facebook" /><br />
            <Form.Check aria-label="option 1" inline label="Twitter" /><br />
            <Form.Check aria-label="option 1" inline label="Instagram" />
            <br />
            <br />
            <p>Do you have LinkedIn installed in your phone?</p>
            <Form.Check type="radio" inline label="Yes" aria-label="radio 1" />
            <Form.Check type="radio" inline label="No" aria-label="radio 1" />

            <br />
            <br />
            <button>Confirm</button>

        </div>
    )
}



export default Takesurvey
