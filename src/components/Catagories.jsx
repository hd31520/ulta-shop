import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Catagories = () => {
    return (
        <div className='px-4 overflow-x-scroll scroll-m-1 scrollbar-hide'>
            <div className="flex gap-4 md:gap-8">
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 l:1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://i.ibb.co/09qWwfN/Razer-Death-Adder.jpg" fill alt='' sizes='20vh' className='object-cover'></Image>
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 l:1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://i.ibb.co/09qWwfN/Razer-Death-Adder.jpg" fill alt='' sizes='20vh' className='object-cover'></Image>
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 l:1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://i.ibb.co/09qWwfN/Razer-Death-Adder.jpg" fill alt='' sizes='20vh' className='object-cover'></Image>
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 l:1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://i.ibb.co/09qWwfN/Razer-Death-Adder.jpg" fill alt='' sizes='20vh' className='object-cover'></Image>
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 l:1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://i.ibb.co/09qWwfN/Razer-Death-Adder.jpg" fill alt='' sizes='20vh' className='object-cover'></Image>
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 l:1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://i.ibb.co/09qWwfN/Razer-Death-Adder.jpg" fill alt='' sizes='20vh' className='object-cover'></Image>
                    </div>
                    <h1 className='mt-8 font-light text-xl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 l:1/4 xl:w-1/6'>
                    <div className="relative bg-slate-100 w-full h-96">
                        <Image src="https://i.ibb.co/09qWwfN/Razer-Death-Adder.jpg" fill alt='' sizes='20vh' className='object-cover'></Image>
                    </div>
                   
                </Link>
            </div>

        </div>
    );
};

export default Catagories;