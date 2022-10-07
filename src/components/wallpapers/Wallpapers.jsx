import React from 'react';
import './wallpapers.css';
import img from './images/Gaming.png';
import img1 from './images/wolverine.png';
import img2 from "./images/boruto.png";
import img3 from "./images/moon.jpg";

export default function Wallpapers() {
    return (
        <>
            <section class="text-gray-600 body-font aline-item-center">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Share your interesting wallpapers :</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        If you guys have some awesome wallpapers share them with us at <b><h1 className='text-indigo-500'>foruseuse@gmail.com</h1></b>
                        </p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src={img} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Desktop</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Timepass Players</h2>
                                <a className="a" href={img} download="img">
                                    <button>Download Now</button>
                                </a>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src={img1} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Desktop</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Wolverine</h2>
                                <a className="a" href={img1} download="img">
                                    <button>Download Now</button>
                                </a>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src={img2} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Desktop</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Boruto</h2>
                                <a className="a" href={img2} download="img">
                                    <button>Download Now</button>
                                </a>
                            </div>
                        </div>
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src={img3} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Desktop</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">A Moon</h2>
                                <a className="a" href={img3} download="img">
                                    <button>Download Now</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
