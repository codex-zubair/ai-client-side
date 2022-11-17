import React from 'react';
import { NavLink } from 'react-router-dom';

const RightSideNav = ({categories}) => {




    return (
        <div className='flex flex-col'>
            {categories.map(category=> <NavLink to={`/details/${category.id}`} className='btn mt-2' key={category.id}>{category.name}</NavLink>)}
            {/* {categories.map(category=> <NavLink to={`/${category.id}`} className='btn mt-2' key={category.id}>{category.name}</NavLink>)} */}
        </div>
    );
};

export default RightSideNav;