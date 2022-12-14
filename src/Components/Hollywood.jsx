import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// import img from "../Accects/img.png"

const Hollywood = () => {
  const params= useParams()
  const [movies, setMovies] = useState([]);

  const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c';
  // const API_img = 'https://image.tmdb.org/t/p/w500'
  // const API_VEDIO = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c`
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results)
        console.log(data, "line112")
      })
  }, [])

  // const { date, explanation, media_type, service_version, title, url } = item
  console.log(movies, "line20video")

  return (
    <>
      <div className="banner">
        <div className="mt-16 lg:pt-28 py-10 container mx-auto text-white">
          <h1 className="text-2xl md:text-4xl mb-3">bollywood Super Heroes</h1>
          <p className="text-sm md:text-xl font-light">All Your Favorite Stories and More. Start Streaming Now.</p>
        </div>


      </div>
      <div className="container mx-auto xl:px-4 min-h-[75vh]">
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-20 mb-20 h-4/6">
        {/* {
          movies.map((item) => {
            return (
              <>
                <div className="h-full block mx-auto col-auto mb-3" key={item.id}>
                  <img src={API_img+item.backdrop_path} className="img-fluid" alt="" />
                  <div className="flex flex-wrap justify-between py-2 px-2 bg-button">
                    <span className="text-rose-200">Views {item.vote_count}</span><span className="text-rose-200">{item.popularity}</span>
                  </div>
                </div>
                <div>
                  <h5 className="mb-4 text-xl text-rose-600 col-span-2">{item.original_title ? item.original_title : "loding..."}</h5>
                  <h5 className="mb-4 text-rose-200">Rating {item.vote_average}</h5>
                  <div className="flex flex-wrap gap-4 items-center mb-5">
                    <p className="text-rose-600">{item.overview}</p>
                  </div>
                  <a href={`/${item.homepage}`} target="_blank" className='py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-lg bg-button rounded'  rel="noreferrer">Watch Trailer</a>
                </div>
              </>
            )
          })
        } */}


      </div>
      </div>
    </>
  )
}

export default Hollywood