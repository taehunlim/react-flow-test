import React from 'react';
import {Handle, Position} from 'reactflow';

const Node = () => {
    return (
       <React.Fragment>

        <Handle type='target' position={Position.Right}/>
        <Handle type='target' position={Position.Bottom}/>
        <div>
            <h1>title</h1>
            <div>
                <input/>
            </div>
        </div>
       </React.Fragment>
    );
};

export default Node;