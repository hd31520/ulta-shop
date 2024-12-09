"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const sliders = [
    {
        id: 1,
        title: "Sony WH-1000XM4 Wireless Headphones",
        description: "Industry-leading noise-canceling wireless headphones with Alexa voice control.",
        price: 349.99,
        category: "Electronics",
        image_url: "https://i.ibb.co/sKnTQCk/R.jpg",
    },
    {
        id: 2,
        title: "Apple Watch Series 9",
        description: "The ultimate health companion with advanced health and fitness tracking.",
        price: 399.99,
        category: "Wearables",
        image_url: "https://i.ibb.co/BwTZBdB/Apple-Watch-S9-hero.jpg",
    },
    {
        id: 3,
        title: "Herman Miller Aeron Chair",
        description: "Ergonomic office chair designed for comfort and productivity.",
        price: 1449.0,
        category: "Furniture",
        image_url: "https://i.ibb.co/pKspKHL/Aeron-Chair.jpg",
    },
    {
        id: 4,
        title: "Razer DeathAdder V3 Pro",
        description: "High-performance gaming mouse with ultra-lightweight and ergonomic design.",
        price: 149.99,
        category: "Gaming Accessories",
        image_url: "https://i.ibb.co/09qWwfN/Razer-Death-Adder.jpg",
    },
    {
        id: 5,
        title: "UNIQLO Men's Supima Cotton T-Shirt",
        description: "Premium Supima cotton t-shirt offering superior softness and comfort.",
        price: 14.9,
        category: "Clothing",
        image_url: "https://images.pexels.com/photos/29678354/pexels-photo-29678354.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === sliders.length - 1 ? 0 : prev + 1))
        }, 3000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>
                {sliders.map((slide) => (
                    <div className="w-screen h-full bg-gray-200 flex flex-col lg:gap-16 xl:flex-row" key={slide.id}>
                        {/* TEXT CONTAINER */}
                        <div className="h-1/2 py-6  md:h-full xl:w-1/2 flex flex-col items-center justify-center  2xl:gap-12">
                            <h2 className="text-xl text-center px-3 lg:px-10 lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h2 className="text-center text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h2>
                            <Link href={`/product/${slide.id}`} className="py-6" >
                                <button className="rounded-md text-white bg-black py-3 px-4">SHOP NOW</button>
                            </Link>
                        </div>
                        {/* IMAGE CONTAINER */}
                        <div className="h-1/2 md:h-full xl:w-1/2  relative">
                            {/* Define width and height in the parent container */}
                            <Image src={slide.image_url} alt={slide.title} fill sizes="100%" className="object-cover" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {
                    sliders.map((slide, idx) => (
                        <div
                            className={` w-3 h-3 rounded-full ring-1 ring-black-600 cursor-pointer flex items-center justify-center ${current === idx ? "scale-150" : ""}`}
                            key={slide.id}
                            onClick={() => setCurrent(idx)}
                        >
                            {
                                current === idx && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>)
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Slider;
