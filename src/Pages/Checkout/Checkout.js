import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Checkout = () => {

    // Check data stage.
    const [checkOutData, setCheckOutData] = useState(null);

    // Getting value from local storage.
    const id = parseInt(localStorage.getItem('id'));







    useEffect(() => {

        
        fetch(`https://artificial-intelligenc-course-server-side.vercel.app/categories/${id}`)
            .then(res => res.json())
            .then(data => setCheckOutData(data));
    }, [id])





    return (
        <div className=" md:w-9/12 min-h-screen">

            <h1 className='md:text-5xl mt-10'></h1>
            <h1 className='md:text-xl mt-2'></h1>
            <button className='btn-success'></button>



            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{checkOutData?.name}</h2>
                    <p>{checkOutData?.into}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy NOW!</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Checkout;