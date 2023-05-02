import React from 'react';
import Banner from '../Banner/Banner';
import ShefSection from '../Shef-section/ShefSection';
import FoodQuality from '../ExtraSection/FoodQuality';
import Clients from '../ExtraSection/Clients';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ShefSection></ShefSection>
           <FoodQuality></FoodQuality>
           <Clients></Clients>
          
        </div>
    );
};

export default Home;