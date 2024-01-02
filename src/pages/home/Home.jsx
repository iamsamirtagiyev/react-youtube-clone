import React from 'react'
import Video from '../../components/video/Video'
import './home.css'
import data from '../../data.json'

const Home = () => {
  return (
    <div className='video-list'>
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

export default Home
