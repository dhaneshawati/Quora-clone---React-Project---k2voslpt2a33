import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Post.css'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'

const Post = () => {
    var r = document.querySelector(':root');
  return (
    <div className='post'>
        <div className="post_info">
            <Avatar/>
            <h5>UserName</h5>
            <div className="right">
                <MoreHorizOutlinedIcon/>
                <CloseOutlinedIcon/>
            </div>
        </div>
        <div className="post_body">
            <div className="post_question">
                <p>Question</p>
                <button className='post_btnAnswer'>Answer</button>
            </div>
            <div className="post_answer">
                <p></p>
            </div>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-91007522b3798e4e73e79092adc9cf60-lq" alt="TCS-Digital" />
        </div>
        <div className="post_footer">
            <div className="post_footerAction">
                <ArrowUpwardOutlinedIcon />
                <ArrowDownwardOutlinedIcon />
            </div>
            <RepeatOutlinedIcon/>
            <ChatBubbleOutlineOutlinedIcon/>
        </div>
    </div>
  )
}

export default Post
