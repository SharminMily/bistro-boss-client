import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular' );
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //    fetch('menu.json')
    //    .then(res => res.json())
    //    .then(data => {
    //     const popularItem = data.filter(item => item.category === 'popular' );
    //     setMenu(popularItem)
    //    })
    // }, [])
    return (
        <section className='mb-12'>
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Item"
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                   popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            {/* <button className='btn btn-outline '>View all menu</button> */}
        </section>
    );
};

export default PopularMenu;