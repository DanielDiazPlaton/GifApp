import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    // const categories = ['One punch', 'Drago ball'];
    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () => {

    //     // setCategories( [...categories, 'HunterXhunter'] );
    //     setCategories( cate => [ ...cate, 'Hunter' ] );

    // }

    return (
        <>

            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>


            <ol>
                { 
                    categories.map( category => {
                    return <GifGrid key={ category } category={ category } />
                    }) 
                }
            </ol>
        
        </>
    );

}

export default GifExpertApp;

