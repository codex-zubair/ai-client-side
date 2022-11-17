import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {FaDownload,FaArrowRight} from 'react-icons/fa';




const CourseDetails = () => {

    const category = useLoaderData();





    // Data destructuring...
    const { name, id, details, image, into } = category;

    // store the id into local storage.
    localStorage.setItem('id',id);


    return (

         <div>
            <div className='py-7 bg-slate-100 flex justify-around'>
                   <div className='flex flex-col md:flex-row'>
                   <h1 className=' text-2xl md:text-5xl mx-10'>{name}</h1>
                    {/* Download PDF FILE */}
                    <Link target="_blank" to={`/pdf/${name}.pdf`} download className='btn'>Download PDF <FaDownload/></Link>

                   </div>
                   
                </div>
        <div className='md:grid grid-cols-6 mt-10 mb-6 gap-3 w-11/12 mx-auto'>
            <div className='card bg-slate-200 col-span-4'>
                <img src={image} alt="" />
                <p className='text-xl font-semibold p-5'>{into}</p>
                <Link  to={`/checkout/${id}`} className='btn'>Get premium access <FaArrowRight/></Link>
                <p className='text-lg p-5'>{details}</p>
            </div>

            <div className='col-span-2'>
                <h1 className='text-2xl font-semibold'>Frequently Asking Question</h1>

                {/* Accordion */}<div tabIndex={0} className="mt-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is {name}?
                    </div>
                    <div className="collapse-content">
                        <p tabIndex={0}>{into}</p>
                    </div>
                </div>
                
            </div>

        </div>
         </div>
    );
};

export default CourseDetails;