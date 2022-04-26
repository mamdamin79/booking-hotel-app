import React from 'react';
import AboutCard from './AboutComps/AboutCard';
// styles
import styles from './AboutUs.module.css'
// images
import imageSolution from "../../assets/images/about-img-1.jpg";
import imageFeature from "../../assets/images/feature-img-1.jpg";
import LocationBar from '../LocationBar/LocationBar';
const AboutUs = () => {
    return (
        <>
            <LocationBar/>
            <AboutCard keyword="Provide Solutions" title="We Provide Solutions to Grow Your Business" image={imageSolution}/>
            <AboutCard keyword="Features" title="Our Features" image={imageFeature}/>
        </>
    );
}
 
export default AboutUs;