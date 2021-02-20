import React from 'react'
import { Link } from 'react-router-dom';


function SurveyBtn() {
    return (
        <div className="surveyBtn">
            <button className="btn-lg m-4 p-2">
                <Link to="/createsurvey">Create Survey</Link>
            </button>
            <button className="btn-lg m-4 p-2">
                <Link to="/takesurvey">Take Survey</Link>
            </button>
        </div>
    )
}

export default SurveyBtn
