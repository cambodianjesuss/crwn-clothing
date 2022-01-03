import React from "react";
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (

  <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
    <div 
      className="background-image" 
      style={{
        backgroundImage: `url(${imageUrl})`
      }} >
    </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem); // With router to avoice prop tunneling /drilling

// Instead of passing  down history from the main app component as props all the way down, for use of props (history, match) -- we included withRouter functionality 
// size prop will only show class value when passed, otherwise undefined
