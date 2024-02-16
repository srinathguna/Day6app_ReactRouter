import React from 'react';
import Card from './Card';

const Career = ({data}) => {
    const career = data.filter((item, index) => item.topic === "career")
    return (
        career.map((item, index) => {
            return (     
                <>                
                    <Card item={ item} index={index}/>
                </>
            )
        })
    );
};

export default Career;