import React from 'react'

const Adop = () => {
  return (
    <div className='bg-gray-100' >
      <div >
        <h1 className='text-center text-4xl font-bold text-gray-700  py-10' >Your Pet Adoption Journey With Paws&Claws</h1>
      </div>

      <div className='grid grid-cols-12 max-w-[80%] mx-10'>

        <div className='col-span-12 md:col-span-8 my-auto order-last md:order-first  '>
          <img src="https://i.pinimg.com/564x/d5/e6/0a/d5e60a17d27a4207bfc99fedc93ef68a.jpg" alt="adoption" width={700} />
        </div>

        <div className='col-span-12 md:col-span-4 my-32'>
          {/* <img src="https://i.pinimg.com/564x/c4/9e/dc/c49edc9a312d0b318acd616f53966a55.jpg" alt="" /> */}
          <h1 className='font-bold text-xl text-gray-600'>SEARCH PET</h1>
          <p className='text-gray-500 my-4'>Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
          <br />
          <h1 className='font-bold text-xl text-gray-600'>CONNECT</h1>
          <p className='text-gray-500 my-4'>Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
         <br />
          <h1 className='font-bold text-xl text-gray-600'>ADOPT LOVE</h1>
          <p className='text-gray-500 my-4'>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
         
        </div>
      </div>

    </div>
  
  )
}
export default Adop