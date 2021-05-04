import React, { useEffect, useState } from "react"
import axios from "axios"

const Pagination = () => {
   { /* dummy array helps us to iterate */}
    const items = [1,2,3,4,5];

    { /* posts state helps us to store elements fetched by the API */}
    const [posts, setPosts] = useState([])
    useEffect(() => {
       async function fetchAPI() {
            await axios.get("http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10").then(res => {
                setPosts(res.data)
            })
        }
        fetchAPI();
    },[] )

     {/* button click event handler */}
     const handleClick = async  (eventName) => {
            await axios.get(`http://jsonplaceholder.typicode.com/posts?_start=${eventName}&_limit=10`)
            .then(res => {
                setPosts(res.data)
            })
    }

    return (
    <>
{/* displaying elements that are fetched using an API */}
    {posts &&
        posts.map((post) => (
            <div key={post.id} className="post-elements-container" >
                <h5>Title: {post.title}</h5>
            </div>
        ))}

        {/* iterate through items array which helps us to remove code duplication of button element */}
        <div className="button-container"> 
            {items.map((_, index) => (
                <button key={index} name={index * 11} onClick={(e) => handleClick(e.target.name)}>{index + 1}</button>
            ))}
        </div>
    </>
    )
    
}

export default Pagination