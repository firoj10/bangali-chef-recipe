import React from 'react';
import Banner from '../Banner/Banner';
import ShefSection from '../Shef-section/ShefSection';
import FoodQuality from '../ExtraSection/FoodQuality';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ShefSection></ShefSection>
           <FoodQuality></FoodQuality>
          
        </div>
    );
};

export default Home;