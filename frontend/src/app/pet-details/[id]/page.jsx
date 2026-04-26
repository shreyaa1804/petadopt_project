'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const PetDetails = () => {

  const { id } = useParams();

  const [petData, setPetData] = useState(null);


  const fetchPetData = async() => {
    const res = await axios.get('http://localhost:5000/pet/getbyid/' + id)
    console.log(res.data);
    setPetData(res.data);
  }

  useEffect(() => {
    fetchPetData(); 
  }, []);






  return (
    <div>
       <h2 className='text-center text-3xl font-bold my-10'>Update Form</h2>
      {
        petData !== null ? (
          <div className='max-w-lg mx-auto rounded-lg mt-10 p-6 border shadow-lg'>
           
            <h1 className='w-full py-1 px-3 border rounded font-bold'> Name:{petData.name}</h1>
             <h1 className='w-full py-1 px-3 border rounded'> Breed:{petData.breed}</h1> 
             <h1 className='w-full py-1 px-3 border rounded'> Type:{petData.type}</h1> 
             <h1 className='w-full py-1 px-3 border rounded'> Color:{petData.color}</h1> 
             <h1 className='w-full py-1 px-3 border rounded'>Age:{petData.age}</h1> 

             <button type='submit' className='border-2 bg-blue-300 my-5 rounded-lg p-2'>
                                            submit
                                        </button>




                  
                           
             
          </div>
        ) : (
          <h1>Loading ... </h1>
        )
      }
    </div>
  )
}

export default PetDetails;