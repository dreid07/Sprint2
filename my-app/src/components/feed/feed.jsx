/*imports*/
import React from 'react'
import './feed.css'
import Share from '../share/share'
import Post from '../post/post'

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        {/*displaying the posts and share*/}
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
