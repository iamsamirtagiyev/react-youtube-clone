import React from 'react'
import './video.css'

const Video = (props) => {
  return (
    <div className='video'>
        <div className="thumbnail">
            <img src={props.thumbnail} alt="thumbnail" />
            <div className="duration">{props.duration}</div>
        </div>
        <div className="info">
            <div className="image">
                <img src={props.image} alt="image" />
            </div>
            <div className="other">
                <span className="title">{props.title}</span>
                <span className="channel-name">{props.channel}</span>
                <div className="desc">
                    <div className="views">{props.views}</div>
                    <div className="dot"></div>
                    <div className="date">{props.date} əvvəl</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video
