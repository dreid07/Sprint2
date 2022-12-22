/*imports*/
import React from 'react'
import './sidebar.css'
import {MdRssFeed} from 'react-icons/md'
import {FaUserFriends} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'
import {BiStore} from 'react-icons/bi'
import {BsEggFried} from 'react-icons/bs'

/*creating the sidebar function*/
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          {/*creating the sidebar icons and names*/}
          <li className='sidebarListItem'>
            <MdRssFeed className='sidebarIcon'/>
            <span className='sidebarListItemText'>Feed</span>
          </li> 

          <li className='sidebarListItem'>
            <FaUserFriends className='sidebarIcon'/>
            <span className='sidebarListItemText'>Friends</span>
          </li> 

          <li className='sidebarListItem'>
            <MdGroups className='sidebarIcon'/>
            <span className='sidebarListItemText'>Groups</span>
          </li> 

          <li className='sidebarListItem'>
            <BiStore className='sidebarIcon'/>
            <span className='sidebarListItemText'>Store</span>
          </li> 

          <li className='sidebarListItem'>
            <BsEggFried className='sidebarIcon'/>
            <span className='sidebarListItemText'>Food</span>
          </li> 

        </ul> 
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendsList'>

          {/*creating a bunch of mock profiles*/}
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/2.jpg" alt="" />
            <span className='sidebarFriendName'>Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
