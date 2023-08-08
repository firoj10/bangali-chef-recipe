import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
// import ShefSection from '../Shef-section/ShefSection';
import FoodQuality from '../ExtraSection/FoodQuality';
import Clients from '../ExtraSection/Clients';

import ChefAlbum from '../ChefAlbum/ChefAlbum';

import PaintingGallery from '../PaintinGallery/PaintinGallery';
import TopSlider from '../TopSlider/TopSlider';


const ShefSection= React.lazy(()=> import('../Shef-section/ShefSection'));
const Home = () => {
    return (
<div className=' mx-auto' style={{background: "#854d27"}}>
          <Suspense fallback={<div class="spinner-border text-success text-center" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}>
<TopSlider></TopSlider>
<Banner></Banner>
<ChefAlbum></ChefAlbum>
<PaintingGallery></PaintingGallery>
<ShefSection></ShefSection>
<Clients></Clients>
<FoodQuality></FoodQuality>
</Suspense>

        </div>
    );
};

export default Home;


// #, #dd7230, #f4c95d