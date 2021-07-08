import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import { useHistory } from 'react-router'
import './Banner.css'
import Search from './Search'
import Fade from 'react-reveal/Fade';

const Banner = () => {
    const history=useHistory()
    const [showSearch,setShowSearch]=useState(false)
    return (
        <div className="banner">
            <div className="banner__search">
            {showSearch && <Search />}
                <Button onClick={()=>setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">
              {showSearch ? "Hide Date Picker" : "Show Date Picker"}
                   </Button>
            </div>
          <div className="banner__info">
              <Fade bottom>
              <h1>The Greatest Outdoors </h1>
                <h5>Wishlists curated by Airbnb.</h5>
                </Fade>
            <Button variant='outlined' onClick={()=>history.push('/search')}>Get Inspired</Button>
           
          </div>
        </div>
    )
}

export default Banner
