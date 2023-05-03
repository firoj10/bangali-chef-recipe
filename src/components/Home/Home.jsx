import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
// import ShefSection from '../Shef-section/ShefSection';
import FoodQuality from '../ExtraSection/FoodQuality';
import Clients from '../ExtraSection/Clients';

const ShefSection= React.lazy(()=> import('../Shef-section/ShefSection'));
const Home = () => {
    return (
<div className='bg-light mx-auto'>
          <Suspense fallback={<div class="spinner-border text-success text-center" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}>
<Banner></Banner>
<ShefSection></ShefSection>
<FoodQuality></FoodQuality>
<Clients></Clients>
</Suspense>
        </div>
    );
};

export default Home;


