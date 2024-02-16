import React from 'react';
import Card from './Card';

const Datascience = ({data}) => {
    const datascience = data.filter((item, index) => item.topic === "datascience")
    return (
        datascience.map((item, index) => {
            return (     
                <>                
                    <Card item={item} index={index}/>
                </>
            )
        })
    );
};

export default Datascience;