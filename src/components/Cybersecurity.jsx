import React from 'react';
import Card from './Card';


const Cybersecurity = ({ data }) => {
    const cybersecurity = data.filter((item, index) => item.topic === "cybersecurity")
    return (
        cybersecurity.map((item, index) => {
            return (     
                <>                
                    <Card item={item} index={index}/>
                </>
            )
        })
    );
};

export default Cybersecurity;