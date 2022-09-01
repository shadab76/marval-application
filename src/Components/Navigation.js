import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import marval from "../Accects/Logo.svg"
import "../App.css"

const Navigation = () => {
    const [navState, setNavState] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [scrolltop,setScrollTop] = useState(false)
    const navigate = useNavigate()

    const [windowWidth , setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function(){
        setWidth(this.innerWidth);
    });

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY > 50)
    });
    window.addEventListener('scroll', () => {
        setScrollTop(window.scrollY === 0)
     });


     const handlelogin=()=>{
        navigate('/login')
     }


  return (
    <>
         <nav className={`z-20 w-full fixed top-0 left-0 transition duration-150 ease-in-out ${navState ? 'navopen' : 'navclosed'} ${scroll ? "backdropcolor" : "raised"}`}>
         <div className="max-w-screen-xl px-4 sm:px-8 py-2 sm:py-2 m-auto flex justify-between">
            <div className="logo">
                <Link to="/" className="p-0">
                <img src={marval} className="img-fluid" alt="" />
                </Link>
            </div>
            <ul>
            {(windowWidth > 992) ? (
                <>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/series">Series</Link>
                </li>
                <li>
                    <Link to="/hollywood">Hollywood</Link>
                </li>
                <li>
                    <Link to="/bollywood">Latest trailor</Link>
                </li>
                <button className="border border-solid border-white text-white py-2 px-5 rounded-lg" onClick={handlelogin}>Login</button>
                </>
            ):
                ""
            }
            {(windowWidth < 992) ? (
                <>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/series">Series</Link>
                </li>
                <li>
                    <Link to="/hollywood">Hollywood</Link>
                </li>
                <li>
                    <Link to="/bollywood">Bollywood</Link>
                </li>
                <button className="border border-solid border-white text-white py-2 px-5 rounded-lg mt-5" onClick={handlelogin}>Login</button>
                </>
            ):
                ""
            }
            </ul>
            <div className="phone-menu " onClick={()=> setNavState(!navState)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* <button className='py-2 px-2 backdrop-blur bg-red-200 text-red-50 rounded'>scroll top</button> */}
         </div>
        </nav>
    </>
  )
}

export default Navigation