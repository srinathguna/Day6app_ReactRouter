import React from 'react';

const Card = ({item, index }) => {
    return (
        <>
            <div className='card'>        
                <div className='card-box'  key={index}>
                    <img src={item.image_url} alt="" />
                    <div className='card-details'>
                        <h2>{item.heading}</h2>
                        <p>{item.description}</p>              
                    </div>
                    <div className='card-footer'>
                        <span>{item.date} . {item.comments}</span>
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default Card;