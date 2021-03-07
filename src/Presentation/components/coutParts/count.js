import React from 'react';

const Count = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <button onClick={()=>props.countUpFunc()}>ここをクリック</button>
            <p>{props.count}</p>
        </div>
    )
};

export default Count;