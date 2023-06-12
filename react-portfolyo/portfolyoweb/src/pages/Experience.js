import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Experience() {
  return (
    <div className='expContainer'>
      <div className='expElements'>
        <ol>
          <li>
            <SchoolIcon/>
            <h3>High School Graduation 2012</h3>
            <p>Denizli Anadolu Lisesi</p>
          </li>
          <li>
            <SchoolIcon/>
            <h3>University Graduation 2014</h3>
            <p>Anadolu Üniversitesi</p>
          </li>
          <li>
            <BusinessCenterIcon/>
            <h3>High School Graduation 2012</h3>
            <p>Denizli Anadolu Lisesi</p>
          </li>
          <li>
            <QuestionMarkIcon/>
            <h3>High School Graduation 2012</h3>
            <p>Denizli Anadolu Lisesi</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Experience