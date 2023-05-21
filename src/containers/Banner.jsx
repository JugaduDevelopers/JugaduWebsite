import React from 'react'

const Banner = () => {
  return (
    <section className="bg-black  ">
    <div className="container mx-auto px-5 py-14 sm:py-36 lg:py-60 flex items-center justify-center ">
      <div className="text-white ">
        <h1 className="text-4xl font-bold sm:text-6xl mb-5">
          Custom software development <span className='line-through'>company</span>
        </h1>
        <p className="text-lg sm:text-2xl mb-5 ">
        We are a leading developers group who has to specialize in web & app development, blockchain development, and AI/ML services
        </p>
        <a href="#contact">
          <button className="bg-[#fdda4a] py-4 min-w-[250px] sm:min-w-[300px] text-black font-semibold rounded-md">
            Get in touch
          </button>
        </a>
      </div>
    </div>
  </section>
  )
}

export default Banner