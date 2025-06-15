import React from 'react'

const Footer = () => {
  return (
    <div className='relative'>
      <div className="absolute h-[20vmin] blur-[120px]  bottom-28  start-20 w-[50vmin] bg-cyan-400     rounded-full"></div>
      <div className="absolute h-[30vmin]  blur-[120px] top-36 end-20  w-[50vmin] bg-fuchsia-400   rounded-full"></div>
    <footer className=" flex flex-col relative z-10 bg-white bg-opacity-10">
        <div>
          <h1 className='lg:text-[11.5vw] text-6xl text-center'>We<span className='text-fuchsia-300'>invent</span></h1>
        </div>

        <div className=''>
          <p className='text-xl  text-center  font-semibold mt-4'>Search A-Z All Services</p>
          <div className='mt-5 '>
            <ul className='border-2 border-neutral-200 px-3 py-2 rounded-lg flex flex-wrap justify-center gap-5 text-sm'>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>I</li>
              <li>J</li>
              <li>K</li>
              <li>L</li>
              <li>M</li>
              <li>N</li>
              <li>O</li>
              <li>P</li>
              <li>Q</li>
              <li>R</li>
              <li>S</li>
              <li>T</li>
              <li>U</li>
              <li>V</li>
              <li>W</li>
              <li>X</li>
              <li>Y</li>
              <li>Z</li>

            </ul>
          </div>
        </div>
        
        <div className='w-[90vw] mx-auto grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-10 py-10 justify-evenly'>
          <div>
            <h3 className=' font-semibold mb-3 text-xl'>Categories</h3>
            <ul className='text-neutral-800  gap-2 flex flex-col'>
              <li>Law Firms</li>
              <li>Solo Practitioners</li>
              <li>Legal Consultancy</li>
              <li>Mediators</li>
              <li>Arbitrators</li>
              <li>Notaries</li>
              <li>Document Preparation</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-3'>Categories</h3>
            <ul className='text-neutral-800  gap-2 flex flex-col'>
              <li>Law Firms</li>
              <li>Solo Practitioners</li>
              <li>Legal Consultancy</li>
              <li>Mediators</li>
              <li>Arbitrators</li>
              <li>Notaries</li>
              <li>Document Preparation</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-3'>Categories</h3>
            <ul className='text-neutral-800  gap-2 flex flex-col'>
              <li>Law Firms</li>
              <li>Solo Practitioners</li>
              <li>Legal Consultancy</li>
              <li>Mediators</li>
              <li>Arbitrators</li>
              <li>Notaries</li>
              <li>Document Preparation</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-3'>Categories</h3>
            <ul className='text-neutral-800  gap-2 flex flex-col'>
              <li>Law Firms</li>
              <li>Solo Practitioners</li>
              <li>Legal Consultancy</li>
              <li>Mediators</li>
              <li>Arbitrators</li>
              <li>Notaries</li>
              <li>Document Preparation</li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-3'>Categories</h3>
            <ul className='text-neutral-800  gap-2 flex flex-col'>
              <li>Law Firms</li>
              <li>Solo Practitioners</li>
              <li>Legal Consultancy</li>
              <li>Mediators</li>
              <li>Arbitrators</li>
              <li>Notaries</li>
              <li>Document Preparation</li>
            </ul>
          </div>
        </div>
        <div className='text-center border-neutral-200 border-t-2 py-5'>
          <p>Copyright © 2024 WeInvent </p>
        </div>

       
        
      
    </footer>
    </div>
  )
}

export default Footer
