import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../layaout/Header'
import Card from '../../components/card/Card'

const SingleUser = () => {

    const {userName} = useParams()
    const [selectedUser, setSelectedUser] = useState({})
    useEffect(()=>{
        const requestApi = async () =>{
            const urlDir =`https://api.github.com/users/${userName}`
            const response = await fetch(urlDir)
            const result = await response.json()
            setSelectedUser(result)
        }
        requestApi()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 
    return (
        
        <div>
            <Header/>
            {
                selectedUser &&
                <Card
                        key={selectedUser?.id}
                        userName={selectedUser?.login}
                        image={selectedUser?.avatar_url}
                        followers={selectedUser?.followers_url}
                        following={selectedUser?.following_url}
                        repositories={selectedUser?.repos_url}
                        follower_num={selectedUser?.followers}
                        following_num={selectedUser?.following}
                        repos_num={selectedUser?.public_repos}    
                    />
            }
        </div>
    )
}

export default SingleUser
