import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Hammad324")
    //     .then(response => response.json())
    //     .then(data => {
    //       //console.log(data)
    //         setData(data) // we can do data.followers here aswell.
    //     })
    // }, [])
  return (
    <div className='text-center bg-slate-200 text-3xl p-6 mt-1 mb-1 font-mono font-bold'>Github followers: {data.followers} </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Hammad324");
  return response.json(); // this is a promise currently.
}