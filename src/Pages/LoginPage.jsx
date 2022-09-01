import { useState } from 'react';
import { Link } from 'react-router-dom';


const LoginPage = () => {
    const [check, setCheck] = useState(false);

    // const handleChange = (e) => {
    //     setLoginState({ ...loginState, [e.target.id]: e.target.value })
    // }


    return (
        <>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 mt-10">
                        <div className="w-full  md:w-8/12 lg:w-1/3 lg:ml-20">
                        <img src={require('../Accects/Logo.svg').default}  className="block mx-auto mb-10" alt="" />
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-md font-normal text-rose-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-rose-700 focus:bg-white focus:border-rose-600 focus:outline-none"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type={check ? "text" : "password"}
                                        className="form-control block w-full px-4 py-2 text-md font-normal text-rose-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-rose-700 focus:bg-white focus:border-rose-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="flex justify-between flex-wrap items-center mb-6">
                                    <div className="form-group form-check">
                                    <label className="form-check-label inline-block text-white cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className=" h-4 w-4 border border-gray-300 rounded-sm transition duration-200 mt-1 align-top bg-no-repeat bg-center float-left mr-2 cursor-pointer"
                                            // id="exampleCheck3"
                                            // checked
                                            onClick={() => setCheck(!check)}
                                        />
                                        Remember me
                                    </label>
                                    </div>
                                    <Link
                                        to="/forgotpassword"
                                        className="text-rose-500 hover:text-rose-400 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    >Forgot password?</Link>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-button text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Login
                                </button>
                                <Link to="/signup" className="text-sm mt-5 pb-1 block text-center text-gray-200 underline">Create account</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LoginPage