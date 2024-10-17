'use client';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';


const addpet = () => {
    const router = useRouter();

    const addpetform = useFormik({
        initialValues: {
            name: "",
            breed: "",
            type: "",
            color: "",
            age: "",
            image: "",
        },
        onSubmit: (values, { resetForm }) => {

            console.log(values);
            axios.post('http://localhost:5000/pet/add', values)
                .then((result) => {
                    toast.success('Pet added successfully');
                }).catch((err) => {
                    console.log(err);
                    toast.error(err?.response?.data?.message || 'Something went wrong');
                });

            resetForm();
        }

    });

    const [previewUrl, setPreviewUrl] = useState('');

    const uploadfile = (e) => {
        const file = e.target.files[0];

        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('upload_preset', 'preset18');
        formdata.append('cloud_name', 'dh97g9dke');

        axios.post('https://api.cloudinary.com/v1_1/dh97g9dke/image/upload', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((result) => {
                toast.success('File Uploaded Successfully');
                console.log(result.data);
                setPreviewUrl(result.data.url);
                addpetform.setFieldValue('image', result.data.url);

            }).catch((err) => {
                console.log(err);
                toast.error('file upload fail')
            });
    }

    return (
     
        <div className='flex justify-center mt-10 mb-10 h-screen items-center' style={{backgroundImage:`url(https://i.pinimg.com/236x/6b/6d/3a/6b6d3a29fd5d1b6d741a1014dd1259b3.jpg)`, backgroundPosition:`left`, backgroundRepeat:`no-repeat`}}>
            <div className=' border-2 w-1/4  shadow-lg  rounded-lg p-8 bg-white'>
                <h3 className="text-center font-bold text-2xl my-4"> ADD-PET FORM</h3>
                <form onSubmit={addpetform.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                        className='w-full p-2 border-2 border-grey-300 rounded-md mb-5'
                        id="name"
                        onChange={addpetform.handleChange}
                        value={addpetform.values.name}
                    />

                    <label htmlFor="breed">BREED:</label>
                    <input
                        className='w-full p-2 border-2 border-grey-300 rounded-md mb-5'
                        type="text"
                        id='breed'
                        onChange={addpetform.handleChange}
                        value={addpetform.values.breed}
                    />

                    <label htmlFor="type">TYPE:</label>
                    <input type="text"
                        id='type'
                        className='w-full p-2 border-2 border-grey-300 rounded-md mb-5'
                        onChange={addpetform.handleChange}
                        value={addpetform.values.type}
                    />

                    <label htmlFor="color">COLOR:</label>
                    <input type="text"
                        id='color'
                        className='w-full p-2 border-2 border-grey-300 rounded-md mb-5'
                        onChange={addpetform.handleChange}
                        value={addpetform.values.color}
                    />

                    <label htmlFor="age">AGE:</label>
                    <input type="text"
                        id='age'
                        className='w-full p-2 border-2 border-grey-300 rounded-md mb-5'
                        onChange={addpetform.handleChange}
                        value={addpetform.values.age} />
                          <label htmlFor="number">CONTACT No.:</label>
                    <input type="text"
                        id='contact'
                        className='w-full p-2 border-2 border-grey-300 rounded-md mb-5'
                        onChange={addpetform.handleChange}
                        value={addpetform.values.contact} />

                    {/* <label htmlFor="price">PRICE:</label>
                    <input type="text"
                        id='price'
                        className='w-full p-2 border-2 border-grey-300 rounded-md mb-5'
                        onChange={addpetform.handleChange}
                        value={addpetform.values.price}
                    /> */}

                    <label htmlFor="image">IMAGE:</label>
                    <input type="file"
                        className='w-full p-2 border-2 border-grey-300 rounded-md mb-5'
                        onChange={uploadfile}
                    />

                    <button disabled={!previewUrl} type='submit' className='bg-blue-500 disabled:bg-blue-300 py-2 px-4 text-white rounded-md w-full mt-5'>SUBMIT</button>
                </form>
            </div>
        </div>

    )
}

export default addpet;