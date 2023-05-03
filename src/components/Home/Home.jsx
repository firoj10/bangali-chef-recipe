import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
// import ShefSection from '../Shef-section/ShefSection';
import FoodQuality from '../ExtraSection/FoodQuality';
import Clients from '../ExtraSection/Clients';

const ShefSection= React.lazy(()=> import('../Shef-section/ShefSection'));
const Home = () => {
    return (
        <div>
          <Suspense fallback={<p>Plese wait. page is loading</p>}>
          <Banner></Banner>
<ShefSection></ShefSection>
<FoodQuality></FoodQuality>
<Clients></Clients>
          </Suspense>
     
        </div>
    );
};

export default Home;


