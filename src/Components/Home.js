import React, { useEffect } from 'react'
import Header from './Header'
import img from "../Accects/img.png"
import LatestMovies from './LatestMovies'
import PopularMovies from './PopularMovies'
import UpcommingMovies from './Upcomming'
// import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  // async function populateQuote(){
  //   const req = await fetch('http://localhost:1337/api/quote',{
  //     headers:{
  //       'x-access-token':localStorage.getItem('token')
  //     }
  //   })

  //   const data = req.json()
  //   console.log(data)

  //   if(data.status === 'ok'){
  //     navigate('/login')
  //   }
  // }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // const user = jwt.decode(token)
      const user = localStorage.setItem('token', token);
      if (!user) {
        localStorage.removeItem('token')
        // window.location.href = '/'
        navigate('/login',{ replace: true })
      }
    }
  }, [])



  return (
    <>
      <Header />
      <LatestMovies />
      <PopularMovies />
      <UpcommingMovies />
      <div className="banner">
        <div className="mt-20 lg:pt-28 py-10 container mx-auto text-white mb-10">
          <img src={img} alt="" />
          <h1 className="text-2xl md:text-4xl mb-3">A Universe of Super Heroes</h1>
          <p className="text-sm md:text-xl font-light">All Your Favorite Stories and More. Start Streaming Now.</p>
        </div>
      </div>
    </>
  )
}

export default Home