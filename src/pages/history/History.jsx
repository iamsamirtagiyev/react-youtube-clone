import React from 'react'
import Video from "../../components/video/Video";
import data from '../../data.json'
import './history.css'

const History = () => {
  return (
    <div className='video-list history'>
      {
        data.videos.map((video, index) => (
          <Video
            thumbnail={video.thumbnail}
            duration={video.duration}
            title={video.title}
            image={video.image}
            views={video.views}
            date={video.date}
            channel={video.channel}
          />
        ))
      }
    </div>
  )
}

export default History
