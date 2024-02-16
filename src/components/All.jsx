import React from 'react';
import Card from './Card';

const All = ({data}) => {
    
    return (
        <>
            {data.map((item, index) => {
                    return (
                        <Card item={item} index={index} />
                    )
                })
            }
        </>
    );
};

export default All;