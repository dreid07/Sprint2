/*imports*/
import './topbar.css'
import {BiSearchAlt2} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'
import useLocalStorage from "../../components/useLocalStorage";

/*creating the topbar function*/
export default function Topbar() {
  {/*making the top right username the name from local storage*/}
  let [value] = useLocalStorage('name',);
  return (
    <div className='topbarContainer'>
        {/*logo*/}
        <div className="topbarLogo">
          <span className="logo">KEEPSOCIAL</span>
        </div>
        {/*search bar*/}
        <div className="topbarSearch">
          <div className="searchbar">
            <BiSearchAlt2 className='searchIcon'/>
            <input placeholder="search" type="text" className="searchInput" />
          </div>
        </div>
        {/*profile chat and notification links*/}
        <div className="topbarLinks">
          <div className="topbarIcons">
            <div className='topbarIconItem'>
              <CgProfile/>
            </div>
            <div className='topbarIconItem'>
              <BsFillChatDotsFill/>
            </div>
            <div className='topbarIconItem'>
              <IoMdNotificationsOutline/>
            </div>
          </div>
          <div className="topbarProfile">
            {/*making the top right username the name from local storage*/}
            <span className='topbarName'>{value}</span>
            <img src="/assets/1.jpg" alt="profilePic" className='topbarPfp' />
          </div>
        </div>
    </div>
  )
}
