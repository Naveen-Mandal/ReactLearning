import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function Github() {
    const [followers, setFollowers] = useState(0);
    const [avatar, setAvatar] = useState("");
    const { username } = useParams();
    let url = `https://api.github.com/users/${username}`

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => (
                setFollowers(response.followers),
                setAvatar(response.avatar_url)
            ))

    }, [username])



    return (
        <div>
            <h1 className='text-3xl'>Github</h1>

            <p className='text-xl'>Followers: {followers}</p>
            <div>
                <img className='w-50' src={avatar} alt="image" />  
            </div>

        </div>
    )
}

export default Github;