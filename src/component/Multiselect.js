import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import Creatsurvey from './CreatSurvey'

function Multiselect() {

    return (
        <div className="multiselect">
            <Creatsurvey />
            <InputGroup className="mb-3 multiques">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">?</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Which of the following apps you have on your phone?"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder="Whatsapp" aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                    <InputGroup.Text>+</InputGroup.Text>
                    <InputGroup.Text>-</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder="Facebook" aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                    <InputGroup.Text>+</InputGroup.Text>
                    <InputGroup.Text>-</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder="Twitter" aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                    <InputGroup.Text>+</InputGroup.Text>
                    <InputGroup.Text>-</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder="Instagram" aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                    <InputGroup.Text>+</InputGroup.Text>
                    <InputGroup.Text>-</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>

            <br />
            <br />
            <button>Add Question</button>{"  "} {" "}
            <button>Publish</button>

        </div>
    )
}

export default Multiselect

