// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// function Github() {
//     const [followers, setFollowers] = useState(0);
//     const [avatar, setAvatar] = useState("");
//     const { username } = useParams();
//     let url = `https://api.github.com/users/${username}`

//     useEffect(() => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((response) => (
//                 setFollowers(response.followers),
//                 setAvatar(response.avatar_url)
//             ))

//     }, [username])



//     return (
//         <div>
//             <h1 className='text-3xl'>Github</h1>

//             <p className='text-xl'>Followers: {followers}</p>
//             <div>
//                 <img className='w-50' src={avatar} alt="image" />  
//             </div>

//         </div>
//     )
// }

// export default Github;


import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github(){
    // const [data, setData] = useState({});
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Naveen-Mandal")
    //     .then(response => response.json())
    //     .then(res => setData(res))
    // }, [])

    const data = useLoaderData();  //this is a hook provided by react-router-dom to access the data returned by the loader function defined in the route configuration. It allows us to fetch data before rendering the component and pass it as props to the component. In this case, we are fetching the data from the GitHub API and passing it to the Github component as props.
    return(
        <div>
            <h1 className='text-3xl'>Github followers: {data.followers}</h1>
            <img src={data.avatar_url} alt="Avatar" />
        </div>
    )
}

export const gitHubInfoLoader = async () =>{
    const response = await fetch ("https://api.github.com/users/Naveen-Mandal");
    return response.json();
}