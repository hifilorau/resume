import React from 'react'
import { Link } from 'react-router-dom'
import ResumeHeader from '../../components/ResumeHeader'
import Job from '../../components/Job'
import Jobs from '../../components/Jobs'

const jobList = [
    {
      jobTitle: 'Human',
      company: 'Code the Dream',
      dateStart: 'July 1, 2008',
      dateEnd: 'July 9, 2008',
    },
    {
      jobTitle: ' Super Human',
      company: 'Humans Co.',
      dateStart: 'July 10, 2008',
      dateEnd: 'July 17, 2008',
    }
  ]



const Resume = () => (
    <div className="resume-page">
        <ResumeHeader />
        <Jobs jobs={jobList} />
    </div>
)

export default Resume;