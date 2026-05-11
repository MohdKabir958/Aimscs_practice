import axios from "axios";
import { useEffect, useState } from "react";


function Github() {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://api.github.com/users/MohdKabir958")
            .then((response) => {
                setData(response.data);
            });
    }, []);


    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-10">Github Page</h1>
            <p className="text-center mt-4 text-gray-600">
                This is the Github page. You can find my projects and repositories here.
            </p>

            <p>
                {data ? (
                    <div className="max-w-sm mx-auto mt-10  rounded-lg shadow-md overflow-hidden">
                        <img className="w-full h-48 object-cover" src={data.avatar_url} alt="Avatar" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">FOllowers : {data.followers}</h2>
                            <p className="text-gray-700 mb-4">{data.login}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-center mt-10 text-gray-600">Loading...</p>
                )}
                

            </p>

        </>
    )
}

export default Github