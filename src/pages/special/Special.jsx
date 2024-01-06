import React from 'react'
import './special.css'
import Video from '../../components/video/Video'
import data from '../../data.json'
import Channel from '../../components/channel/Channel'

const Special = () => {
  return (
    <div className='wrapper'>
      <Channel/>
      <div className='video-list special'>
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
    </div>
  )
}

export default Special
