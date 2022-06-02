import React from 'react';
import BannerData from '../../Components/Banner/BannerData';
import Books from '../../Components/books/Books';
import Courses from '../../Components/Courses/Courses';
import Footer from '../../Components/footer/Footer';
import Header from '../../Components/Header/Header';
import Skilled from '../../Components/Skilled/Skilled';
import Video from '../../Components/video/Video';
import Welcome from '../../Components/Welcome/Welcome';
import "./Home.css"

function Home() {
    return (
        <div className="">
            <Header />
            <BannerData />
            <Welcome />
            <Courses />
            <Skilled />
            <Video />
            <Books />
            <Footer />
        </div>

    )
}

export default Home