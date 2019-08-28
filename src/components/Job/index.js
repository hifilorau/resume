import React from 'react';

const Job = (props) => {
    console.log(props)
    return (
    <li className="job-component">
        <div className="job-company">{props.company}</div>
        <div className="job-title">{props.jobTitle}</div>
        <span className="job-start">{props.dateStart}</span>
        <span className="job-end">{props.dateEnd}</span>
        <ul className="responsibilties">
            <li>Teaching React</li>
            <li>Managing Components</li>
        </ul>
        <div className="job-description">Was responsbile for teaching and mentoring front-end developers and also managing client projects</div>
    </li>
)}

export default Job;