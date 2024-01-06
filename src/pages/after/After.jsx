import React from 'react'
import './after.css'
import Video from '../../components/video/Video'
import data from '../../data.json'

const After = () => {
  return (
    <div className='video-list after'>
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

export default After
