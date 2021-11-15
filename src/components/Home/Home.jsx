import React, {useState} from 'react'
import Header from '../../layaout/Header'
import Form from './form/Form'
import Card from '../card/Card'
import "./Home.style.css"

const Home = () => {
    const [searchValue, setSearchValue] = useState(null)
    const [dataApi, setDataApi] = useState(null)

    const handlerValue = ({value}) => {
        setSearchValue(value)   
    }

    const resetValue = ()  =>{
        setSearchValue(" ")
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://api.github.com/users/${searchValue}`)
        const result = await response.json()
        setDataApi(result)
        //console.log(result)
    }

    return (
        <div>
            <Header/>
            <Form
                handlerValue={handlerValue}
                handlerSubmit={handlerSubmit}
            />
            {
                searchValue === null ?  (<h3 className="input-title">Please, type a valid user</h3>) :
                dataApi !== null ? dataApi.login ?  
                    <Card
                        key={dataApi?.id}
                        userName={dataApi?.login}
                        image={dataApi?.avatar_url}
                        followers={dataApi?.followers_url}
                        following={dataApi?.following_url}
                        repositories={dataApi?.repos_url}
                        follower_num={dataApi?.followers}
                        following_num={dataApi?.following}
                        repos_num={dataApi?.public_repos}
                        resetValue={resetValue}     
                    /> : <h4>Username not found</h4> : null
            }
        </div>
    )
}
export default Home