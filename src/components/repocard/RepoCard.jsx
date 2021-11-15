import React from 'react'
import "./RepoCard.style.css"

const RepoCard = ({repoName, owner, repoPrivate}) => {

    const repoLink = `https://github.com/${owner}/${repoName}`


    return (
        <div className="repo-card">
            <img src="https://cdn3.iconfinder.com/data/icons/flat-colourful-icons-2/512/github-512.png" alt="" />
            <h4><span className="span-black">Owner:  </span>{owner}</h4>
            <h4><span className="span-black">Private:</span> {repoPrivate? "Private": "Public"}</h4>
            <h4><span className="span-black">Name :</span> {repoName}</h4>
            <a href={repoLink} target="_blank" rel="noreferrer">See more info</a>
        </div>
    )
}

export default RepoCard

