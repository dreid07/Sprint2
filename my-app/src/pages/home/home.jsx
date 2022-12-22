/*imports*/
import React from 'react'
import Topbar from '../../components/topbar/topbar'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import './home.css'

/*making a function that displays the three parts of the home page*/
export default function Home() {
  return (
    <>
      <Topbar/>
      <div className='homeContainer'>
        <Sidebar/>
        <Feed/>
      </div>
    </>
  )
}
