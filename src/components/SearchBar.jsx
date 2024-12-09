"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchQuery = formData.get('name');
        console.log('Search Query:', searchQuery);

        if (searchQuery) {
            router.push(`/list?name=${searchQuery}`)
        }
        // Add logic to handle the search query
    };
    return (
        <form action="" className='flex items-center w-full justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
            <input type="text" className='flex-1 bg-transparent outline-none' name='name' placeholder='Search' />
            <button className='cursor-pointer'>
                <Image src="/search.png" alt='' width={16} height={16}></Image>
            </button>
        </form>
    );
};

export default SearchBar;