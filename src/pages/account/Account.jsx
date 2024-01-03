import React from 'react'
import './account.css'
import Channel from '../../components/channel/Channel'



const Account = () => {
  return (
    <div className='account'>
      <div className="banner">
        <img src="./images/Samir Tagiyev.png" alt="banner" />
      </div>
      <Channel/>
    </div>
  )
}

export default Account
