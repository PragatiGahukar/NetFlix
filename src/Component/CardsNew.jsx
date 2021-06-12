import React from 'react';
/* import '/netflix/src/index.css'; */
import './index.css';


function Card(props){
    const {title,sname,link,imgsrc} = props
    return(
    <>
    
    <div className="cards" >
      <div className="card">
        <img 
          src={imgsrc}
          alt="mypic" 
          className="card_img"
        />
        
        <div className="card_info">
          <span className="card_category">{title}</span>
          <h3 className="card_title">{sname}</h3>
          <a href={link} target="_button">
            <button>
              Watch Now
            </button>
          </a>
        </div>
      </div>
    </div>
    </>
    )
  }

  export default Card;