import React from 'react'
import Navbar from '@/components/Navi'
// import Cards from '@/components/Cards';
// import Hero from '@/components/Hero';
import Newhero from '@/components/Newhero';
import Petcards from '@/components/Petcards';
import Footer from '@/components/Footer';
import Adop from '@/components/Adop';








const Home = () => {
  return (
    <div>
      <Navbar> </Navbar>

   
      <div>
       

      <Newhero></Newhero>

      
      {/* <Cards></Cards> */}
      <Petcards></Petcards>
     <Adop></Adop>
     

      <Footer></Footer>
   

     
      
    
     
   


      </div>

      
    </div>
  )
}

export default Home;