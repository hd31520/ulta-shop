"use clint"

import Image from "next/image";

const CartModal = () => {
    const cartItem = true;
    return (
        <div className='w-max bg-slate-300 absolute p-4 rounded-md top-14 right-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,2)] z-20 flex flex-col gap-6'>
            {
                !cartItem ? (
                    <div>
                        Cart is Empty
                    </div>
                ) : (
                    <>
                        <h3 className="text-xl "> Shopping Cart</h3>
                        <div className="flex flex-col gap-8">
                            {/* ITEM  */}

                            <div className="flex gap-4 ">
                                <Image
                                    src="https://images.pexels.com/photos/28797618/pexels-photo-28797618/free-photo-of-historic-venetian-canal-with-iconic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                    width={72}
                                    height={96}
                                    className="object-cover rounded-md" />

                                <div className="flex flex-col justify-between w-full">
                                    {/* top */}
                                    <div className="">
                                        {/* TITLE  */}
                                        <div className="flex items-center justify-between gap-8">
                                            <h3 className="font-semibold">Product Name</h3>
                                            <div className="p-1  rounded-sm">$49</div>

                                        </div>
                                        {/* dESC */}
                                        <div className="text-sm text-gray-500">
                                            avaiable
                                        </div>
                                    </div>

                                    {/* BOTTOM  */}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 ">Qty. 2</span>
                                        <span className="text-blue-500">remove</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* BOTTOM  */}
                        <div className="">
                            <div className="flex items-center justify-between font-semibold">
                                <span>Subtotal</span>
                                <span>$49</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 mb-4">
                                Lorem ipsum dolor, sit amet consectetur .
                            </p>
                            <div className="flex justify-between text-sm">
                                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Card </button>
                                <button className="rounded-md py-3 px-4 bg-black text-white">CheckOut</button>
                            </div>
                        </div>
                    </>

                )
            }
        </div>
    );
};

export default CartModal;