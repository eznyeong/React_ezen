import React from 'react';
import childStyle from './test.module.css'

function Child() {
    return (
        <div>
            <h1 className={childStyle.title1}>자손 타이틀</h1>
        </div>
    );
}

export default Child;