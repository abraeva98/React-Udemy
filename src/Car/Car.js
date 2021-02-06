import React from 'react';

export default (props) => (
            <div>
                <h3>Car name: {props.cars}</h3>
                <button onClick={props.onChangeTitle}>Click</button>
            </div>
);