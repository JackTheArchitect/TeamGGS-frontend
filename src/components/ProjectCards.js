import React from 'react';
import CardItem from './items/CardItem';
import './ProjectCards.css'

export default function ProjectCards() {

    return (
        <div className='cards'>
            <div className='cards_container'>

                <ul className="cards_items">
                    <CardItem
                        page='/test'
                        src='images/totoro.jpg'
                        title= 'Todo'
                        description= 'Todo description test'
                    />
                    <CardItem
                        page='/test'
                        src='images/totoro.jpg'
                        title= 'Todo'
                        description= 'Todo description test'
                    />
                    <CardItem
                        page='/test'
                        src='images/totoro.jpg'
                        title= 'Todo'
                        description= 'Todo description test'
                    />
                    <CardItem
                        page='/test'
                        src='images/totoro.jpg'
                        title= 'Todo'
                        description= 'Todo description test'
                    />
                </ul>

            </div>
        </div>
    )

}