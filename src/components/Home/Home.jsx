import React from 'react';
// components
import HomeSlider from "./HomeComp/Slider/HomeSlider";
import DatePicker from "./HomeComp/DatePicker/DatePicker"
import AboutCard from '../AboutUs/AboutComps/AboutCard';
//imageSolution
import ImageSolution from "../../assets/images/about-img-1.jpg"
import MostPopular from './HomeComp/MostPopulur/MostPopular';
import Download from './HomeComp/Download/Download';
import Work from './HomeComp/Works/Work';

const Home = ({hotels}) => {
    return (
        <>
            <DatePicker/>
            <HomeSlider/>
            <AboutCard keyword="Provide Solutions" title="We Provide Solutions to Grow Your Business" image={ImageSolution}/>
            <MostPopular hotels={hotels}/>
            <Download/>
            <Work/>
        </>
        
    );
}
 
export default Home;