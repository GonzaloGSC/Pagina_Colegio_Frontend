import React from 'react';
import './banner.css';

function Banner(props) { 
  return (
        <div className='BannerContainer'>
            <div className='BannerWrapper'>
                <img src={props.src} alt="banner_colegio" className="Bannerbackground"/>
                <div className='BannerTextContainer'>
                    <div className='TextoBanner'>{props.text}</div>
                </div>
            </div>
        </div>
  );
}

export default Banner;