import { useState, useEffect } from "react"
import React from 'react'
import { useChatContext } from "stream-chat-react";

import {search} from '../assets/search.svg'
const ChannelSearch = () => {
      const [query, setQuery] = useState("");
      const [loading, setLoading] = useState(false);


      // method to search the channels
      const getChannels = async (textQuery)=>{
            try{
                  // TODO: get all the channels.
            }
            catch(error){
                  setQuery('');
                  // reseting the query when any error is caught.
            }
      }

      const onSearch = (event)=>{
            event.preventDefault();
            setLoading(true);
            setQuery(event.target.value);
            getChannels(event.target.value);
      }
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <search />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="search"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}

export default ChannelSearch
