import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import RightSideNav from '../../components/RightSideNav/RightSideNav';


const Courses = () => {

    // getting API data
    const categories = useLoaderData();




    return (

   
        <div>
            <h1 className='text-6xl py-10 bg-slate-200'>Learn AI</h1>    

            <div className='md:grid md:grid-cols-3 md:gap-5 mx-2 mb-10'>
            <div className='col-span-2 grid'>{categories.map(category=> <CategoryCard key={category.id} category= {category}></CategoryCard>)}</div>
            <RightSideNav className='col-span-1' categories = {categories}></RightSideNav>
            </div>
        </div>
      
    );
};

export default Courses;