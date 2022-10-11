import React from 'react'
import '../ProjectCards.css'

export default function CardItem(props) {
    return (
        <>
            <li className="cards_item">
            <div className="cards_item_link" >
                <figure className='cards_item_img_wrap'>
                    <a href={props.page}>
                    <img
                    src={props.src} 
                    alt="Project Image" 
                    className="cards_item_img"/>
                  </a>
                </figure>
                <div className="cards_item_info">
                  <h5 className="cards_item_title">{props.title}</h5>
                  <p className="cards__item__description">{props.description}</p>
                  <br/>
              </div>
              </div>
            </li>
        </>
    )
}