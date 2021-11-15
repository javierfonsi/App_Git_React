import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Repocard from '../../components/repocard/RepoCard'
import Header from '../../layaout/Header'


const Repo = () => {

    const {name} = useParams()
    const [repoData, setRepoData] = useState([])

    useEffect(()=>{
        const requestApi = async () =>{
        const urlDir =`https://api.github.com/users/${name}/repos`
        const response = await fetch(urlDir)
        const result = await response.json()
        setRepoData(result)
    }
    requestApi()
}, [name])

    return (
        <div>
            <Header/>
            {
                repoData?.map(data=>
                <Repocard
                    key={data.id}
                    repoName={data.name}
                    owner={name}
                    repoPrivate={data.private}
                />
                )
            }
        </div>
    )
}
export default Repo

