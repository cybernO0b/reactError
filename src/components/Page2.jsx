import React from 'react';
import { RuntimeGlobals } from 'webpack';


const P2 = ({red, green, blue}) => {
    
    return (
        <div>
            <h2>Цвет в виде текста</h2>
            <p>{`rgb(${red},${green},${blue})`}</p>
        </div>
    )
}

export default P2;