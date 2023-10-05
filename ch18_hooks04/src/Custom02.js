import React from 'react';
import useFetch from './useFetch'; // 내장 Hooks가 아니므로 따로 호출

function Custom02() {
    const [datas] = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
        <div>
            {
                datas && datas.map(data => {
                    return <p key={data.id}>{data.title}</p>
                })
            }
        </div>
    );
}

export default Custom02;