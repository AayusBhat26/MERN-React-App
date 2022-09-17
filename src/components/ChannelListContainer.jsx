import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react';

import {ChannelSearch, TeamChannelList, TeamChannelPreview}from './'
import College from '../assets/college.png'
import LogoutIcon from "../assets/logout.png";

import Cookies from 'universal-cookie';
const Sidebar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={College} alt="College" width={30} />
      </div>
    </div>

    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="logout" width={30} />
      </div>
    </div>
  </div>
);


const CompanyHeader =() =>(
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Chat App</p>
  </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps)=>{
          <TeamChannelList {...listProps}/>
        }}
        />
      </div>
    </>
  );
}

export default ChannelListContainer
