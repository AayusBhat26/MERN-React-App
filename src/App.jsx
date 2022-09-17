import React from 'react'
import './App.css'

import {StreamChat} from 'stream-chat';

import Cookies from 'universal-cookie';

import {Chat} from 'stream-chat-react';
// import ChannelListContainer from './components/ChannelListContainer';
// import ChannelContainer from './components/ChannelContainer';


import {ChannelContainer, ChannelListContainer} from './components'
const APIKEY = "5p94d3xrjd9h";

const client   = StreamChat.getInstance(APIKEY);

const App = () => {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light">

            <ChannelListContainer />
            <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App