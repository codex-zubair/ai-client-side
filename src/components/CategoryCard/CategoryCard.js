import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({category}) => {

    const {name, into, image,id} = category;

    return (
       
            <Link to={`/details/${id}`} className='xl:grid xl:grid-cols-7  border text-center gap-2 mt-2 rounded-md'>
            <div className='xl:col-span-3'><img width='100%' src={image} alt="" /></div>
            <div className=' xl:col-span-4 bg-base-200 hover:bg-base-300 w-full p-5'><h1 className='text-4xl text-center'>{name}</h1>
            <p className='text-2xl mt-5'>{into}</p>
            </div>

         
           
        </Link>
    );
};

export default CategoryCard;