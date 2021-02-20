import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import Creatsurvey from './CreatSurvey'

function Singleselect() {
    return (
        <div className="singleselect">
            <Creatsurvey />
            <InputGroup className="mb-3 singleques">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">?</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Do you have LinkedIn installed in your phone?"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder="Yes" aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                    <InputGroup.Text>+</InputGroup.Text>
                    <InputGroup.Text>-</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl placeholder="No" aria-label="Amount (to the nearest dollar)" />
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

export default Singleselect


