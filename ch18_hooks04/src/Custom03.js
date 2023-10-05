import React from 'react';
import useFetch from './useFetch';

function Custom03() {
    const [datas] = useFetch('https://jsonplaceholder.typicode.com/photos');

    return (
        <div>
            {
                datas && datas.map(data => {
                    return <img key={data.id} src={data.url} alt={data.title} />
                })
            }
        </div>
    );
}

export default Custom03;