import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Menu from '../Menu/Menu';

const Fish = () => {

    const menus = useLoaderData()

    return (
        <div>
            <Menu />
            <div className='grid grid-cols-3 gap-6 mt-12 w-7/12 mx-auto'>
                {
                    menus.map(menu => <div key={menu.id} className='flex justify-center items-center '>
                        <div>
                            <img className='rounded-full w-24 h-24' src={menu.img} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl ml-8'>{menu.name}</h1>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Fish;