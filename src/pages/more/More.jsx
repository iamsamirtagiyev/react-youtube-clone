import React from 'react'
import './more.css'
import data from '../../data.json'
import Video from '../../components/video/Video'

const More = () => {
  return (
    <div className='video-list more'>
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

export default More
