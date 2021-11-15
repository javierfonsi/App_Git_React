import {useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Header from '../../layaout/Header'
import FollowersCard from '../../components/followersCard/FollowersCard'

const Followers = () => {
    const {name}=useParams()
    const [followersInfo, setFollowersInfo] = useState([])
    
    useEffect (() =>{
        const requestApi = async() => {
            const urlDir = `https://api.github.com/users/${name}/followers`
            const response = await fetch(urlDir)
            const result = await response.json()
            setFollowersInfo(result)
        }
        requestApi()
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Header />
            {
                
                followersInfo?.map(info =>
                    <FollowersCard
                        key={info?.id}
                        userName={info?.login}
                        image={info?.avatar_url}
                        follower_num={info?.followers}
                        following_num={info?.following}
                        repos_num={info?.public_repos}
                        
                    />
                )
            }
        </div>
    )
}
export default Followers