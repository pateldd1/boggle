import React from 'react';

const BoggleTile = props => {
    const { letter, selected, handleClick, pos } = props;
    
    return (
        <button
            className={selected ? 'tile-selected' : 'tile'}
            onClick={() => props.handleClick(pos)}
        >
            {letter}
        </button>
    );
};

export default BoggleTile;