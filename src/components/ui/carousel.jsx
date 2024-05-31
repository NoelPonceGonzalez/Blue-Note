"use client";

import { useState } from 'react';

const Carousel = ({ items }) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const prevItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const nextItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative" style={{ width: '1400px' }}>
            <div className="flex overflow-hidden hidden_in_mobile">
                {[currentItemIndex, currentItemIndex + 1, currentItemIndex + 2].map((index) => {
                    const item = items[index % items.length];
                    if (item.type === 'image') {
                        return (
                            <div key={index} className="zoom-container fullwidth_phone pc_thirdwidth m-10">
                                <img
                                    src={item.src}
                                    alt={`Image ${index + 1}`}
                                    className="zoom-image w-full object-cover transition-transform transform hover:scale-110 cursor-pointer"
                                />
                            </div>
                        );
                    } else if (item.type === 'video') {
                        return (
                            <div key={index} className="zoom-container fullwidth_phone pc_thirdwidth m-10">
                                <iframe
                                    className="w-full h-full"
                                    src={item.src}
                                    title={`Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="flex overflow-hidden hidden_in_pc">
                {[currentItemIndex].map((index) => {
                    const item = items[index % items.length];
                    console.log("item:", item)
                    if (item.type === 'image') {
                        return (
                            <div key={index} className="zoom-container fullwidth_phone pc_thirdwidth m-10">
                                <img
                                    src={item.src}
                                    alt={`Image ${index + 1}`}
                                    className="zoom-image w-full object-cover transition-transform transform hover:scale-110 cursor-pointer item_gallery_phone"
                                />
                            </div>
                        );
                    } else if (item.type === 'video') {
                        return (
                            <div key={index} className="zoom-container fullwidth_phone pc_thirdwidth m-10">
                                <iframe
                                    className="w-full h-full"
                                    src={item.src}
                                    title={`Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share item_gallery_phone"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        );
                    }
                })}
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full" onClick={prevItem} style={{ left: "10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full" onClick={nextItem} style={{ right: "10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <style jsx>{`
                .zoom-container {
                    overflow: hidden;
                    position: relative;
                    height: 300px; /* Ajusta la altura según sea necesario */
                }
                .zoom-image {
                    transition: transform 0.5s ease, opacity 0.5s ease;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .zoom-container:hover .zoom-image {
                    transform: scale(1.2);
                }
                iframe.zoom-image {
                    height: 100%;
                }
            `}</style>
        </div>
    );
}

export default Carousel;
