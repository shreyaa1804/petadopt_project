"use client";
import axios from 'axios';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const ListPet = () => {

  const [petList, setPetList] = useState([]);

  // const router = useRouter();

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

  const deletepet = (id) => {
    axios.delete('http://localhost:5000/pet/deletepet/' + id)
      .then((result) => {

        toast.success('pet deleted successfully');
        fetchPets();

      }).catch((err) => {
        console.log(err);
        toast.error('something went wrong');


      });
  }


  const displaypets = () => {
    if (petList.length == 0) {
      return <p>Loading....</p>
    } else {
      return <table className='w-full'>
        <thead className='bg-emerald-800 text-white text-left'>
          <tr>
            <th className='p-2'>ID</th>
            <th className='p-2' >Name</th>
            <th className='p-2'>Breed</th>
            <th className='p-2'>Type</th>
            <th className='p-2'>Color</th>
            <th className='p-2'>Age</th>

            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody className='bg-emerald-200'>
          {
            petList.map((pet) => {
              console.log(pet.name)
              return <tr key={pet._id}>
                <td className='p-2 border-blue-400'>{pet._id}</td>
                <td className='p-2 border-blue-400'>{pet.name}</td>
                <td className='p-2 border-blue-400'>{pet.breed}</td>
                <td className='p-2 border-blue-400'>{pet.type}</td>
                <td className='p-2 border-blue-400'>{pet.color}</td>
                <td className='p-2 border-blue-400'>{pet.age}</td>
                <td className='p-2 border-blue-400'>
                  <Link
                    href={'/updatepet/' + pet._id}
                    className='bg-blue-500 rounded-full py-1 px-3 text-white'
                  >Edit</Link>
                </td>
                <td className='p-2 border-blue-400'>
                  <button onClick={() => { deletepet(pet._id) }}
                    className='bg-red-500 rounded-full py-1 px-3 text-white'>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    }
  }



  return (
    <div>
      <div className='max-w-[80%] mx-auto border mt-8 p-6 shadow rounded-lg'>
        <h1 className='text-center text-3xl font-bold'>Pet List</h1>
        {displaypets()}

      </div>
    </div>

  )
}

export default ListPet;