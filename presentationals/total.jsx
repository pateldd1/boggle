import React from 'react';
const Total = props => {
    const { total } = props;

    return (
        <div className="total-score">
            <h2>{'TOTAL'}</h2>
            <span>{total}</span>
        </div>
    );
};

export default Total;