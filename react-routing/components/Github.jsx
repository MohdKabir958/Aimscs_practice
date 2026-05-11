import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Github() {

const [data, setData] = useState(null);
axios.get('https://api.github.com/users/MohdKabir958')
    .then(response => {
        setData(response.data);
    }
    )


    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="grid  place-items-center sm:mt-20">
                <p>Followers : {data?.followers}</p>
                <img className="sm:w-96 w-48" src={data?.avatar_url} alt="image2" />
            </div>
        </div>
    );

}

export default Github;