import React from 'react'
import { Link } from 'react-router-dom'

const TopicList = (props) =>{
  //console.log(props)
  const { match } = props
  return (
    <div>
      <h3>
      TopicList View
      </h3>
      <ul>
        <li>
          <Link to={`${match.url}/Topic1`}>
            Topic 1
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/Topic2`}>
            Topic 2
          </Link>
          </li>
        <li>
          <Link to={`${match.url}/Topic3`}>
            Topic 3
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TopicList