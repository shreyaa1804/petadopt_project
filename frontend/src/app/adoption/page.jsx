"use client";

import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



const adoption = () => {
  const router=useRouter();
  const adoptionForm = useFormik({
      initialValues: {
        name:"",
        email: "",
      },
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      
  axios.post('http://localhost:5000/user/adopterdetail/',values)
  .then((result) => {
   toast.success('detail added');
    console.log(result.data);
  }
  )},
})

  return (
    <div className=" flex justify-center h-screen  items-center">
      <div className=" border-2 w-1/5  shadow-lg  rounded-lg p-8 bg-white">
        <h3 className="text-center font-bold text-2xl my-4"> ADOPTION FORM</h3>
        {/* step2: on submit event used for data handling when submit */}
        <form onSubmit={adoptionForm.handleSubmit} >
        <label htmlFor="name" className="text-black"> Name</label>
          {/* step3: */}
          <input
            className="w-full p-2 border-2 border-grey-300 rounded-md mb-5"
            type="name"
            id="name"
            onChange={adoptionForm.handleChange}
            value={adoptionForm.values.name}
            
          />
        
          <label htmlFor="email"> Email address</label>
          {/* step3: */}
          <input
            className="w-full p-2 border-2 border-grey-300 rounded-md mb-5"
            type="email"
            id="email"
            onChange={adoptionForm.handleChange}
            value={adoptionForm.values.email}
            
          
          />
       
           <label htmlFor= "number" > Contact No.</label>
          <input  type="text"
           id='contact'
            className="w-full p-2 border-2 border-grey-300 rounded-md mb-5"
           onChange={adoptionForm.handleChange}
            value={adoptionForm.values.contact}

            
           />
         
          <button type="submit" className="bg-blue-500 py-2 px-4 text-white rounded-md w-full mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default adoption;
