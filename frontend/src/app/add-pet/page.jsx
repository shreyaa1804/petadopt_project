'use client';

import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from '@/components/Navi';

const AddPet = () => {

    const router = useRouter();
    const [previewUrl, setPreviewUrl] = useState('');

    const addpetform = useFormik({
        initialValues: {
            name: "",
            breed: "",
            type: "",
            color: "",
            age: "",
            contact: "",
            image: "",
        },

        onSubmit: (values, { resetForm }) => {

            axios.post('http://localhost:5000/pet/add', values)

                .then((result) => {
                    toast.success('Pet added successfully');
                    console.log(result.data);

                    resetForm();
                    setPreviewUrl('');

                    // router.push('/viewpets');

                }).catch((err) => {
                    console.log(err);
                    toast.error(err?.response?.data?.message || 'Something went wrong');
                });
        }
    });

    const uploadfile = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const formdata = new FormData();

        formdata.append('file', file);
        formdata.append('upload_preset', 'preset18');
        formdata.append('cloud_name', 'dh97g9dke');

        axios.post(
            'https://api.cloudinary.com/v1_1/dh97g9dke/image/upload',
            formdata,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )

            .then((result) => {

                toast.success('File Uploaded Successfully');

                setPreviewUrl(result.data.url);

                addpetform.setFieldValue('image', result.data.url);

            }).catch((err) => {

                console.log(err);
                toast.error('File upload failed');

            });
    }

    return (

        <div className='min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100'>

            <Navbar />

            <div className='flex justify-center items-center px-4 py-10'>

                <div className='w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2'>

                    {/* LEFT SIDE IMAGE SECTION */}

                    <div className='hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-10'>

                        <img
                            src='https://cdn-icons-png.flaticon.com/512/616/616408.png'
                            alt='pet'
                            className='w-40 mb-6 drop-shadow-xl'
                        />

                        <h2 className='text-4xl font-bold mb-4'>
                            Add Your Lovely Pet 🐾
                        </h2>

                        <p className='text-center text-lg opacity-90'>
                            Help pets find a loving and caring home.
                        </p>

                    </div>

                    {/* FORM SECTION */}

                    <div className='p-6 sm:p-10'>

                        <h3 className='text-3xl font-bold text-center text-gray-800 mb-8'>
                            ADD PET FORM
                        </h3>

                        <form
                            onSubmit={addpetform.handleSubmit}
                            className='space-y-4'
                        >

                            {/* NAME */}

                            <div>
                                <label className='block mb-1 font-semibold text-gray-700'>
                                    Name
                                </label>

                                <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter pet name'
                                    className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    onChange={addpetform.handleChange}
                                    value={addpetform.values.name}
                                />
                            </div>

                            {/* BREED */}

                            <div>
                                <label className='block mb-1 font-semibold text-gray-700'>
                                    Breed
                                </label>

                                <input
                                    type='text'
                                    id='breed'
                                    placeholder='Enter breed'
                                    className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    onChange={addpetform.handleChange}
                                    value={addpetform.values.breed}
                                />
                            </div>

                            {/* TYPE */}

                            <div>
                                <label className='block mb-1 font-semibold text-gray-700'>
                                    Type
                                </label>

                                <input
                                    type='text'
                                    id='type'
                                    placeholder='Dog / Cat / Bird'
                                    className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    onChange={addpetform.handleChange}
                                    value={addpetform.values.type}
                                />
                            </div>

                            {/* COLOR */}

                            <div>
                                <label className='block mb-1 font-semibold text-gray-700'>
                                    Color
                                </label>

                                <input
                                    type='text'
                                    id='color'
                                    placeholder='Enter color'
                                    className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    onChange={addpetform.handleChange}
                                    value={addpetform.values.color}
                                />
                            </div>

                            {/* AGE + CONTACT */}

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                                <div>
                                    <label className='block mb-1 font-semibold text-gray-700'>
                                        Age
                                    </label>

                                    <input
                                        type='text'
                                        id='age'
                                        placeholder='Enter age'
                                        className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                                        onChange={addpetform.handleChange}
                                        value={addpetform.values.age}
                                    />
                                </div>

                                <div>
                                    <label className='block mb-1 font-semibold text-gray-700'>
                                        Contact
                                    </label>

                                    <input
                                        type='text'
                                        id='contact'
                                        placeholder='Enter contact no.'
                                        className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                                        onChange={addpetform.handleChange}
                                        value={addpetform.values.contact}
                                    />
                                </div>

                            </div>

                            {/* IMAGE */}

                            <div>

                                <label className='block mb-2 font-semibold text-gray-700'>
                                    Upload Image
                                </label>

                                <input
                                    type='file'
                                    className='w-full p-3 rounded-xl border border-gray-300 bg-gray-50'
                                    onChange={uploadfile}
                                />

                            </div>

                            {/* IMAGE PREVIEW */}

                            {
                                previewUrl && (

                                    <div className='flex justify-center mt-4'>

                                        <img
                                            src={previewUrl}
                                            alt='preview'
                                            className='w-40 h-40 object-cover rounded-2xl shadow-lg border-4 border-white'
                                        />

                                    </div>
                                )
                            }

                            {/* BUTTON */}

                            <button
                                disabled={!previewUrl}
                                type='submit'
                                className='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-[1.02] transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-4'
                            >
                                ADD PET
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddPet;