import React from 'react';
import Job from '../Job';

const Jobs = (props) => {
    const jobs = props.jobs
    const jobLiList =  jobs.map((job, i) => {
        return <Job job={job} key={job.company}/>
    })  
    console.log(props)
    return (
    <ul className="jobs-list">
        {jobLiList}
    </ul>
)}

export default Jobs;