import React from 'react';
// components
import HomeSlider from "./HomeComp/Slider/HomeSlider";
import DatePicker from "./HomeComp/DatePicker/DatePicker"
import AboutCard from '../AboutUs/AboutComps/AboutCard';
//imageSolution
import ImageSolution from "../../assets/images/about-img-1.jpg"

const Home = () => {
    return (
        <>
            <DatePicker/>
            <HomeSlider/>
            <AboutCard keyword="Provide Solutions" title="We Provide Solutions to Grow Your Business" image={ImageSolution}/>
        </>
        
    );
}
 
export default Home;