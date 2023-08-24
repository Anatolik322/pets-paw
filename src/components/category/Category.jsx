import React from 'react'

function Category() {
  return (
    <div className='category'>
      <div className="category_header">
        <h1>Hi!</h1>
        <h3>Welcome to MacPaw Bootcamp 2023</h3>
      </div>

      <div className="category_cards">
        <h2>Lets start using The Cat API</h2>
        <div className="category_cards_items">
            <div className="category_item">
                <img src="" alt="" />
                <button className='card_btn'></button>
            </div>
            <div className="category_item">
                <img src="" alt="" />
                <button className='card_btn'></button>
            </div>
            <div className="category_item">
                <img src="" alt="" />
                <button className='card_btn'></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
