import { faBurger, faFish, faFrancSign, faPizzaSlice, faPodcast, faPoop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuHeader = () => {
    return (
        <div className='flex justify-between mt-16 text-center text-2xl text-orange-500 cursor-pointer'>
            <article>
                <Link to='/fish'>
                    <FontAwesomeIcon icon={faFish} />
                    <p>Fish</p>
                </Link>
            </article>
            <article>
                <Link to='/pot'>
                    <FontAwesomeIcon icon={faPodcast} />
                    <p>Pot Food</p>
                </Link>
            </article>
            <article>
                <FontAwesomeIcon icon={faBurger} />
                <p>Burger</p>
            </article>
            <article>
                <FontAwesomeIcon icon={faPizzaSlice} />
                <p>Pizza</p>
            </article>
            <article>
                <FontAwesomeIcon icon={faFrancSign} />
                <p>French Sign</p>
            </article>
        </div>
    );
};

export default MenuHeader;