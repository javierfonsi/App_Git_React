import React  from 'react'
import "./Card.styles.css"
import { Link } from 'react-router-dom';

const Card = ({userName, image, follower_num, following_num, repos_num }) => {
   /*setTimeout(() => {
    resetValue()     
   }, 3000);*/

    return (
        <div className="card-container">
           <img src={image} alt={`${userName}`}/>
           <h2>{userName}</h2>
           <ul>
                <Link to={`/users/${userName}/followers`}> <li>Followers: {follower_num}</li> </Link>
                <Link to={`/users/${userName}/following`}> <li>Following: {following_num}</li> </Link>
                <Link to={`/users/${userName}/repos`}> <li>Repositories: {repos_num}</li> </Link>                
           </ul>            
        </div>
    )
}

export default Card
