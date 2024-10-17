import React from 'react'
import "../app/abc.css"

const Petcards = () => {
  return (
    <div className='p-10  mb-64'>
      <h1 className='text-6xl text-center   text-orange-400 py-8 '>PETS FOR ADOPTION?</h1>
      {/* <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[90%] mx-auto mb-20 "> */}
      <div className=' max-w-[90%] mb-20  grid grid-flow-col justify-evenly'>
        <div id='container' className="border-2 shadow rounded-lg w-80 h-4  bg-black ">
          <img
            className="w-full h-80 object-cover rounded-lg "
            src="https://i.pinimg.com/236x/85/5a/84/855a842aa4d651bd36d9c0d1a6971cbb.jpg"
            alt=""
          />
           <p>NUMBER OF DOGS WAITING:20</p>
          <p className='text-center font-bold text-2xl bg-black text-white'>DOG</p>
          </div>
          <div id='container' className="border-2 shadow rounded-lg w-80 h-4 ml-52  ">
          <img
            className="w-full h-80 object-cover rounded-lg"
            src="https://i.pinimg.com/474x/f6/2b/56/f62b565bd6cfb240eedcc7a0b7a02e73.jpg"
            alt=""
          />
              <p>NUMBER OF CATS WAITING:14</p>
          <p className='text-center font-bold text-2xl bg-black text-white'>CAT</p>
          </div>
          <div id='container'  className="border-2 shadow rounded-lg w-80 h-4 ml-64">
          <img
            className="w-full h-80 object-cover rounded-lg"
            src="https://i.pinimg.com/236x/8b/74/bf/8b74bfb7205ce5a667d738249c78fb5c.jpg"
            alt=""
          />
           <p>NUMBER OF RABBIT WAITING:4</p>
          <p className='text-center font-bold text-2xl bg-black text-white'>RABBIT</p>

        </div>
      </div>


    // </div>

    // </div>


  )
}

export default Petcards