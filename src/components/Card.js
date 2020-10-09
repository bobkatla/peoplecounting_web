import React from 'react';

const Card = (props) => {
    const {name, count, imgsrc} = props;
    return (

        <div className='tc bg-light-green dib br3 pa3 na3 grow bw2 shadow-5 ba' style={{margin: "10px"}}>
            <img alt='building pics' src={imgsrc} width="200" height="200"/>
            <div>
                <h2>{name}</h2>
                <h1>{count}</h1>
                <p>{"people inside"}</p>
            </div>
        </div>
    );
}

export default Card;