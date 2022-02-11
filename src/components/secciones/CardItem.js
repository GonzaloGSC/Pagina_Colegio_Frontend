import React from 'react';

function CardItem(props) { 
  return (
    <>
      <li className='cardsitem'>
        <div className='cardsitemlink'>
          <figure className='cardsitempic_wrap' data-category={props.label}>
            <img alt="imagen_colegio" className='cardsitemimg' src={props.src} />
          </figure>
          <div className='cardsiteminfo'>
            <h5 className='cardsitemtext'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
