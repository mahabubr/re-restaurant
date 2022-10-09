import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MenuHeader from '../MenuHeader/MenuHeader';

const Menu = () => {

    const menu = useLoaderData()

    return (
        <div className='mt-24 w-8/12 mx-auto'>
            <div className='text-center'>
                <FontAwesomeIcon className='text-7xl text-green-600' icon={faUtensils} />
                <h2 className='text-4xl mt-7 font-semibold text-yellow-500'>Our Menu</h2>
            </div>
            <div>
                <MenuHeader />
            </div>
        </div>
    );
};

export default Menu;