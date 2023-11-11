import Home from 'components/layout/HomeSection';
import CustomNavbar from 'components/layout/Navbar';
import Image from 'next/image';
import HeroBackground from "public/main_cover.jpg";
import React from 'react';

const ReferFriends = () => {
    return (
        <div className="container text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Get on-demand Q&A <span className="font-normal">Homework help</span> from verified tutors.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl my-4">
                Work with thousands of tutors to help you meet your deadlines and get the grades you so sorely need!
            </p>
            <div className="btn-box">
                <a href="/howitworks" className="btn-1 rounded bg-blue-500 text-white px-4 py-2 mx-2 hidden md:inline">Learn more</a>
                <a href="" className="btn-2 rounded bg-green-500 text-white px-4 py-2 mx-2">Post Assignment</a>
            </div>
        </div>
    );
};

export default ReferFriends;
