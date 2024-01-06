import React from 'react'
import data from '../../data.json'
import './subscribes.css'
import Video from '../../components/video/Video'

const Subscribes = () => {
  return (
    <div className='video-list subscribes'>
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

export default Subscribes
