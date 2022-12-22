/*imports*/
import React from 'react'
import './share.css'
import {GrMultimedia} from 'react-icons/gr'
import {MdNewLabel} from 'react-icons/md'
import {GrLocation} from 'react-icons/gr'
import {BsFillEmojiSmileFill} from 'react-icons/bs'

/*creating the share function*/
export default function Share() {
  return (
    <div className='share'>
        {/*making a wrapper for the share function*/}
        <div className='shareWrapper'>
            <div className='shareTop'>
                {/*makibng the user pfp and teh textbox*/}
                <img className='sharePfp' src="/assets/1.jpg" alt="" />
                <input placeholder='Whats in your mind' className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className='shareBottom'>
                <div className='shareOptions'>
                    {/*creating the photo or video button*/}
                    <div className='shareOption'>
                        <GrMultimedia className='shareIcon'/>
                        <div className='shareOptionText'>Photo or Video</div>
                    </div>
                    {/*creating the tag button*/}
                    <div className='shareOption'>
                        <MdNewLabel className='shareIcon'/>
                        <div className='shareOptionText'>Tag</div>
                    </div>
                    {/*creating the location button*/}
                    <div className='shareOption'>
                        <GrLocation className='shareIcon'/>
                        <div className='shareOptionText'>Location</div>
                    </div>
                    {/*creating the feeling button*/}
                    <div className='shareOption'>
                        <BsFillEmojiSmileFill className='shareIcon'/>
                        <div className='shareOptionText'>feelings</div>
                    </div>
                </div>
                {/*adding the share button*/}
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
