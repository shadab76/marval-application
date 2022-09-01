import React from 'react'
import Footer from './Footer'
import Header from './Header'
import img from "../Accects/img.png"
import LatestMovies from './LatestMovies'
import PopularMovies from './PopularMovies'
import UpcommingMovies from './Upcomming'

const Home = () => {
  return (
    <>
        <Header/>
        <LatestMovies/>
        <PopularMovies/>
        <UpcommingMovies/>
        {/* <LatestMovies/>
        <PopularMovies/> */}
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