import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import img from "../Accects/img.png"
import Loader from './Loader';

const style = {
  card: `border basis-1/4 border-Neutral-200 shadow rounded-sm overflow-hidden`,
  error: `text-center font-medium text-sm`,
  text: `text-sm font-medium p-3 h-12`,
  loader: `column`
}
const ImagePerRow = 5
const Series = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [next, setNext] = useState(ImagePerRow)
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  function truncate(str) {
    return str.length > 15 ? str.substring(0, 15) + "..." : str;
  }

  const HandleMore = () => {
    setNext(next + ImagePerRow)
  }

  // const RapidApi = async (e) => {
  //   await fetch(`https://movies-app1.p.rapidapi.com/api/movies`, {
  //     headers: {
  //       'X-RapidAPI-Key': 'b16e30c9edmsh89646b21a8439a5p190f8fjsn536955941bac',
  //       'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.results))
  //     .catch((err) => console.log(err))
  // };



  const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=d0c23e9309c4c34ce21eae28c7aaeb1c';
  const API_img = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        setData(data.results)
        setLoading(false);
        console.log(data, "line112")
      })

  }, []);
  console.log(data, 'line17')
  const filterItem = !searchInput ? data : data.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))

  console.log(data, "line16");

  return (
    <>
      {/* <div className="banner">
        <div className="mt-16 lg:pt-28 py-10 container mx-auto text-white">
          <h1 className="text-2xl md:text-4xl mb-3">Series Super Heroes</h1>
          <p className="text-sm md:text-xl font-light">All Your Favorite Stories and More. Start Streaming Now.</p>
        </div>
      </div> */}
      <div className="section mt-28 mb-10">
        <div className="container mx-auto xl:px-4">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h4 className="text-xl lg:text-3xl font-semibold mb-5 uppercase">LATEST Series</h4>
            <input type="search" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} className="py-2 px-2 w-80 text-red-500 bg-neutral-50 border outline-none border-red-500 rounded" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 min-h-[75vh]">
            {loading ? (
            (<div className="Loading flex justify-center items-center h-80 w-full">
              <PulseLoader color="#c70000" />
            </div>)
            ) : 
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 h-1/2">
                {filterItem?.slice(0, next).map((item) => (
                  <Link to={`/detail/${item.id}`}>
                    <div className={style.card} key={item.id}>
                      <div className="overflow-hidden">
                        <img src={API_img + item?.backdrop_path} alt={item.title} className="object-cover h-64 w-full block img-fluid" />
                      </div>
                      <h5 className={`${style.text} bg-Neutral-500 border-t-stone-50`}>{truncate(item.title)}</h5>
                    </div>
                  </Link>
                ))
                }
              </div>
            }
          </div>
          <div className="flex justify-center items-center">
            {/* {
            Loading ? (

              next < filterItem?.length && 
              <button  className="py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-lg bg-button rounded mt-5 mb-10" onClick={HandleMore}>Load more</button>
            ): <button  className="py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-lg bg-button rounded mt-5 mb-10" onClick={HandleMore}>Load more</button>
          } */}

            {
              next < filterItem?.length &&
              <button className="py-2 px-2 lg:py-2 lg:px-4 text-sm lg:text-lg bg-button rounded mt-5 mb-10" onClick={HandleMore}>{loading ? <PulseLoader color="#c70000" />: "Load more"}</button>
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Series