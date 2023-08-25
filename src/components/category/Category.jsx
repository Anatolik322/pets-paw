import React from 'react'
import './category.scss'
import Calendar from '../../img/calendar.png'
import Header from '../header/Header'
function Category() {
  return (
    <div className='category'>
      <Header></Header>
      <div className="category_header">
        <h1>Hi!</h1>
        <h3>Welcome to MacPaw Bootcamp 2023</h3>
      </div>

      <div className="category_cards">
        <h2>Lets start using The Cat API</h2>
        <div className="category_items">
            <div className="category_item">
                <img src={Calendar} alt="" />
                <button className='card_btn'>VOTING</button>
            </div>
            <div className="category_item">
                <img src={Calendar} alt="" />
                <button className='card_btn'>BREEDS</button>
            </div>
            <div className="category_item">
                <img src={Calendar} alt="" />
                <button className='card_btn'>GALLERY</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
