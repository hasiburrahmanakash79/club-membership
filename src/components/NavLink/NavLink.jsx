import React from 'react';

const NavLink = ({route}) => {
    const {name, path} = route
    return (
        <li className='list-none md:mr-12 hover:underline'>
            <a href={path}>{name}</a>
        </li>
    );
};

export default NavLink;