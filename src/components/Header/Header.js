import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faCalendar, faCocktail, faCoffee, faFire, faInbox, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='relative text-center'>
            <img className='w-full h-[600px] object-cover blur-sm brightness-50' src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <div className='absolute inset-0 w-8/12 mx-auto mt-8'>
                <FontAwesomeIcon className='text-slate-500 mb-6 text-6xl' icon={faCoffee} />
                <h1 className='text-white text-6xl'>Eleven Madison Park</h1>
                <p className='text-slate-300 mt-4 hidden lg:block'>We believe independent restaurants occupy a distinctive position in the world of business. They are visible, important and integral parts of the communities they serve. Unlike their chain counterparts, people often have a personal connection to one or more of their home grown restaurants. Independents have a local identity and are often one of the most tangible representations of an area's heritage, history and unique character.</p>
                <button className="btn btn-outline btn-info mt-8">Check Our Restaurant</button>
                <div className='flex justify-between cursor-pointer'>
                    <article>
                        <Link to='/'>
                            <FontAwesomeIcon className='justify-between text-3xl md:text-5xl mt-16 text-orange-600' icon={faFire} />
                        </Link>
                        <p className='text-orange-400 mt-2 text-lg hidden md:block'>Home</p>
                    </article>
                    <article>
                        <Link to='/specials'>
                            <FontAwesomeIcon className='justify-between text-3xl md:text-5xl mt-16 text-orange-600' icon={faCocktail} />
                            <p className='text-orange-400 mt-2 text-lg hidden md:block'>Specials</p></Link>
                    </article>
                    <article>
                        <Link to="/menu">
                            <FontAwesomeIcon className='justify-between text-3xl md:text-5xl mt-16 text-orange-600' icon={faMessage} />
                            <p className='text-orange-400 mt-2 text-lg hidden md:block'>Our Menu</p>
                        </Link>
                    </article>
                    <article>
                        <FontAwesomeIcon className='justify-between text-3xl md:text-5xl mt-16 text-orange-600' icon={faPen} />
                        <p className='text-orange-400 mt-2 text-lg hidden md:block'>Testimonials</p>
                    </article>
                    <article>
                        <FontAwesomeIcon className='justify-between text-3xl md:text-5xl mt-16 text-orange-600' icon={faCalendar} />
                        <p className='text-orange-400 mt-2 text-lg hidden md:block'>Calender</p>
                    </article>
                    <article>
                        <FontAwesomeIcon className='justify-between text-3xl md:text-5xl mt-16 text-orange-600' icon={faInbox} />
                        <p className='text-orange-400 mt-2 text-lg hidden md:block'>Message</p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Header;