import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='px-4 py-24 md:px-8  lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24'>
            {/* TOP  */}
            <div className="md:flex  justify-between gap-24">
                {/* LEFT  */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/">
                        <div className='text-2xl tracing-wide '>
                            Ulta SHOP
                        </div>
                    </Link>
                    <p>kanaipur , Faridpur sadar , Faridpur , Dhaka , Bangladesh</p>
                    <p className='font-semibold'>mdhridoy3240@gmail.com</p>
                    <p className='font-semibold'>+880 17411-65673</p>
                    <div className='flex gap-6'>
                        <Image src="/facebook.png" alt='' width={16} height={16} />
                        <Image src="/instagram.png" alt='' width={16} height={16} />
                        <Image src="/youtube.png" alt='' width={16} height={16} />
                        <Image src="/pinterest.png" alt='' width={16} height={16} />
                        <Image src="/x.png" alt='' width={16} height={16} />
                    </div>


                </div>
                {/* CENTER */}
                <div className="hidden  lg:flex  w-1/2">
                  
                  
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
                    <p>Be the first to get the latest news about trends , promotions, and so much more  !</p>
                    <div className="flex flex-col gap-10 justify-between">
                        <div>
                            <input type="text" name="" placeholder='Email address' className='p-4 w-3/4 ' id="" />
                            <button className="w-1/4 p-4  bg-lama text-white">JOIN</button>
                        </div>
                        <p className='font-semibold'>Secure Payments</p>
                        <div className="flex justify-between">
                            <Image src="/discover.png" alt='' width={40} height={20} />
                            <Image src="/skrill.png" alt='' width={40} height={20} />
                            <Image src="/paypal.png" alt='' width={40} height={20} />
                            <Image src="/mastercard.png" alt='' width={40} height={20} />
                            <Image src="/visa.png" alt='' width={40} height={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* footer  */}

        </div>
    );
};

export default Footer;