import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Welcome = () => {

    return (
        <div className='mt-10 w-10/12 mx-auto flex justify-between items-center'>
            <div>
                <img className='hidden md:block rounded-lg' src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=377&q=80" alt="" />
            </div>
            <div className='p-16 text-center'>
                <FontAwesomeIcon className='text-7xl text-red-400 mb-8' icon={faFireAlt} />
                <h2 className='text-3xl font-semibold text-blue-500'>Welcome to Madison</h2>
                <div className="divider">OR</div>
                <p className='text-sm text-gray-600 mb-12'>A chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. The word "chef" is derived from the term chef de cuisine, the director or head of a kitchen</p>
                <h3 className='text-2xl text-violet-400'>Gordon Ramsay</h3>
                <p>Head Chef</p>
            </div>
            <div>
                <img className='hidden md:block rounded-lg' src="https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="" />
            </div>
        </div>
    );
};

export default Welcome;