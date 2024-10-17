'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateUser = () => {

    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    const router= useRouter();

    const fetchUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getbyid/' + id);
        const data = res.data;
        console.log(data);
        setUserData(data);

    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const submitForm = (values) => {
        console.log(values);

        axios.put('http://localhost:5000/user/update/'+id, values)
        .then((result) => {
            router.push('/add-pet');
            toast.success('user updated successfully');
            
        }).catch((err) => {
            console.log(err);
            toast.error(err?.response?.data?.message || 'something went wrong');
        });

    }


    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Update Form</h2>
            {
                userData !== null ? (
                    <div className='max-w-lg mx-auto rounded-lg mt-10 p-6 border shadow-lg'>
                        <Formik initialValues={userData} onSubmit={submitForm}>
                            {(updateForm) => {
                                return <form onSubmit={updateForm.handleSubmit}>

                                    <div className='mb-4'>
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className='w-full py-1 px-3 border rounded'
                                            name="name"
                                            onChange={updateForm.handleChange}
                                            value={updateForm.values.name}
                                        />

                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className='w-full py-1 px-3 border rounded'
                                            name="email"
                                            onChange={updateForm.handleChange}
                                            value={updateForm.values.email}
                                        />

                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="text"
                                            className='w-full py-1 px-3 border rounded'
                                            name="password"
                                            onChange={updateForm.handleChange}
                                            value={updateForm.values.password}
                                        />
                                        
                                       

                                        <button type='submit' className='border-2 bg-blue-300 my-5'>
                                            submit
                                        </button>

                                    </div>
                                </form>
                            }}
                        </Formik>
                    </div>
                ) : (
                    <p>Loading...</p>
                )

            }
        </div>
    )
}

export default UpdateUser;