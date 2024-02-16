import React from 'react';
import Card from './Card';

const Fullstackdev = ({data}) => {
    const fullstack = data.filter((item, index) => item.topic === "FullStackDevelopment")
    return (
        fullstack.map((item, index) => {
            return (     
                <>                
                    <Card item={item} index={index}/>
                </>
            )
        })
    );
};

export default Fullstackdev;