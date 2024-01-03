import React from 'react'
import './channel.css'
import Avatar from 'react-avatar'

const Channel = () => {
  return (
    <div className='my-channel'>
      <div className="image">
        <Avatar src='https://yt3.googleusercontent.com/ytc/AIf8zZRQ-ArefxOIoCzi2KwlJRqDtP8iLxjLdDIrXbzKAA=s176-c-k-c0x00ffffff-no-rj' round='100px' size='150'/>
      </div>
      <div className="title">
        <div className="name">Samir Tagiyev</div>
        <div className="info">
            <span>@iamsamirtagiyev</span>
            <div className="dot"></div>
            <span>251 abonə</span>
        </div>
        <div className="buttons">
            <button>Kanalı fərdiləşdirin</button>
            <button>Videoları idarə edin</button>
        </div>
      </div>
    </div>
  )
}

export default Channel
