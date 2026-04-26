'use client';
import React, { useEffect, useState } from 'react'
// import Data from './dummydata'
import axios from 'axios';
import Link from 'next/link';
import Navbar from '@/components/Navi'

const cardspet = () => {

  const [petList, setPetList] = useState([]);

  const fetchPets = () => {

    axios.get('http://localhost:5000/pet/getall')

      .then((res) => {
        console.log(res.data);
        setPetList(res.data);

      }).catch((err) => {
        console.log(err);

      });

  }

  useEffect(() => {
    fetchPets();

  }, []);

  const displayCards = () => {
    return petList.map((obj) => (
      <div className='w-2/3 md:w-1/4  mb-6 ml-20 '>
        < div className={`rounded-lg border-2 border-black ml-5 shadow-lg p-1 `} >
          <img className='w-full h-[35vh] object-cover rounded-lg' src={obj.image} alt="" />
          < div className='p-2 h-[30vh] w-full'>
          <div className='h-[20vh] p-2 '>
            <p className='font-bold'>{obj.type}</p>
            <h3 className='text-2xl font-semibold text-gray-800 font-bold'>{obj.name}</h3>
            <h3 className='text-s font-semibold text-gray-800 font-bold'> Contact:{obj.contact}</h3>
            <hr className='my-2' />
            <h5 className='text-base font-semibold text-gray-600'>Breed: {obj.breed}</h5>
            <h5 className='text-base font-semibold text-gray-600'>Color: {obj.color}</h5>
            <h5 className='text-base font-semibold text-gray-600'>Age: {obj.age}</h5>
            {/* <h5 className='text-base font-semibold text-gray-600'>Contact: {obj.contact}</h5> */}
          
            <Link href={"/pet-details/" + obj._id} className='mt-4 text-blue-500 border-2 p-2 border-black rounded-lg ml-20 '>ADOPT</Link>
            <a href="/adoption"  className='mt- 6 text-blue-500 border-2 p-2 border-black rounded-lg mr-10 '>Enter Details</a>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <Navbar></Navbar>
    <div>
      <section >
      <header className="bg-orange-600 to-purple-600 text-white py-12 shadow-lg mb-8">
        <h1 className="text-center text-5xl font-extrabold tracking-tight">
       <span className="text-yellow-300"> Adopt a pet </span>!
        </h1>
        <p className="text-center mt-3 text-lg font-medium text-yellow-100">
         Why Shop?When you can  ADOPT..
       
        </p>
      </header>

        {/* <h1 className='text-center text-5xl font-bold mb-8'>ADOPT A PET</h1> */}
        <div className='container mx-auto ' >
          <div className='flex flex-wrap gap-4 justify-normal'>
            {displayCards()}
          </div>
        </div>

      </section>



    </div>
    </div>
  )
}

export default cardspet
//context rendering and conditional rendering