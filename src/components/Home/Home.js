import React from 'react';
import Menu from '../Menu/Menu';
import Specials from '../Specials/Specials';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Welcome />
            <Specials />
            <Menu />
        </div>
    );
};

export default Home;