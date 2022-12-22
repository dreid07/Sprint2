/*imports*/
import React from 'react'
import './post.css'
import { useState } from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineLike} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'

/*creating the function for the post*/
export default function Post() {
    const [like,setLike] = useState(1)

    /*setting the liked and faved on or off*/
    const [isLiked,setIsLiked] = useState(false)
    const [isFaved,setIsFaved] = useState(false)

    const likeFun =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
    }

    const favFun =()=>{
        setIsFaved(!isFaved)
    } 
    /*creating the post*/
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                {/*profile img username and date*/}
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/0.jpg" alt="ProfilePic"/>
                    <span className='postUsername'>Jane Doe</span>
                    <span className='postDate'>1 hour ago</span>
                </div>
                {/*adding an options button*/}
                <div className="postTopRight">
                <BsThreeDotsVertical className='postOptions'/>
                </div>
            {/*adding the post description and pic*/}
            </div>
            <div className="postCenter">
                <span className='postText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate et itaque ipsum molestiae similique dolore amet suscipit labore dicta sit ipsa, quo architecto alias reiciendis natus accusantium quaerat nobis iusto?</span>
                <img className='postImg' src="/assets/0.jpg" alt="PostPic" />
            </div>
            <div className="postBottom">
                {/*adding the post hearts and likes*/}
                <div className="postBottomLeft">
                    <AiOutlineHeart className="postHeart" onClick={favFun} style={{ color: isFaved ? "red" : "black" }}/>
                    <AiOutlineLike className="postLike" onClick={likeFun} style={{ color: isLiked ? "blue" : "black" }}/>
                    <span className='postLikeCounter'> {like}</span>
                </div>
                {/*adding the comments and counter*/}
                <div className="postBottomRight">
                    <BiCommentDetail className="postComment"/>
                    <span className='postCommentCount'>9</span>
                </div>
            </div>
        </div>
    </div>
  )
}
