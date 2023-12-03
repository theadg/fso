import React from 'react'

const  Total = ({parts}) => {
    const total = () => 
        parts.reduce((acc, currentItem) => 
            acc + currentItem.exercises, 0
        );
    
    return (
        <strong>total of {total()} exercises</strong>
    )
}

export default Total