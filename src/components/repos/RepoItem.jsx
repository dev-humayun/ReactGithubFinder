import React from 'react'
import {FaEye,FaInfo,FaLink,FaStar,FaUtensils} from 'react-icons/fa'

function RepoItem({repo}) {
    const {
        name,description,html_url,forks,open_issues,watchers_count,stargazers_count,
    }=repo
  return <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
    <div className="card-body">
        <div className="mb-2 text-xl font-semibold">
            <a href={html_url}>
                <FaLink className='inline mr-1'/>{name}</a>
        </div>
    </div>
  </div>

}

export default RepoItem