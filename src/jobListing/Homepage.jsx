import React from 'react'
import NavBarJobListing from '../component/NavBarJobListing'
import HomePageUI from '../component/HomePageUI'
import JobsList from '../component/JobsList'
import JobDetails from '../component/JobDetails'

const Homepage = () => {
  return (
    <div>
        <HomePageUI/>
        <JobsList/>
    </div>
  )
}

export default Homepage