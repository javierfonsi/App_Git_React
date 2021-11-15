import React from 'react'
import { Link } from 'react-router-dom'
import "./FollowersCard.jsx.css"

const FollowersCard = ({userName, image}) => {
    return (
        <div className="all-followers">
            <div className="card-little">
                <img src={image} alt={`${userName}`} />
                <h4>{userName}</h4>
                <Link to={`/users/${userName}`} className="link">
                    <button className="set-button">
                        See more!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default FollowersCard
