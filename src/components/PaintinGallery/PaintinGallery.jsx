import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PaintinGallery.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './../../assets/food.jpg'
import img2 from './../../assets/d1.jpg'
import img3 from './../../assets/d2.jpg'
import img4 from './../../assets/d3.jpg'
import img5 from './../../assets/d4.jpg'
import img6 from './../../assets/d5.jpg'
import { Container } from 'react-bootstrap';



const PaintinGallery = () => {
  return (
    <Container>
    <>
    <div>
      
      <h2 className='text-white  recipes '>Top Food Recipes</h2>
    </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

          <Card className='my-5' style={{ width: '18rem' }}>
            <Card.Img  className="floating-image" variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Lemon rice</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>



        </SwiperSlide>
        <SwiperSlide>

          <Card className='my-5' style={{ width: '18rem' }}>
            <Card.Img   className="floating-image" variant="top" src={img} />
            <Card.Body>
              <Card.Title>Ghee rice</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>

          <Card className='my-5' style={{ width: '18rem' }}>
            <Card.Img variant="top" className="floating-image" src={img3} />
            <Card.Body>
              <Card.Title>Coconut rice</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>

          <Card className='my-5'  style={{ width: '18rem' }}>
            <Card.Img variant="top" className="floating-image" src={img4} />
            <Card.Body>
              <Card.Title>Curd rice</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>


   

        </SwiperSlide>
        <SwiperSlide>

          <Card className='my-5'  style={{ width: '18rem' }}>
            <Card.Img variant="top" className="floating-image" src={img5} />
            <Card.Body>
              <Card.Title>Tomato rice</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>



        </SwiperSlide>
        <SwiperSlide>

          <Card className='my-5'  style={{ width: '18rem' }}>
            <Card.Img variant="top" className="floating-image" src={img6} />
            <Card.Body>
              <Card.Title>Peanut rice</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>




        </SwiperSlide>
        <SwiperSlide>

          <Card className='my-5'  style={{ width: '18rem' }}>
            <Card.Img variant="top"  className="floating-image border" src={img4} />
            <Card.Body>
              <Card.Title>Kovakkai Poriyal</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>


    
        </SwiperSlide>
        <SwiperSlide>

          <Card className='my-5'  style={{ width: '18rem' }}>
            <Card.Img variant="top" className="floating-image" src={img2} />
            <Card.Body>
              <Card.Title>Vendakkai poriyal</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>


      

        </SwiperSlide>
        <SwiperSlide>

          <Card className='my-5'  style={{ width: '18rem' }}>
            <Card.Img variant="top" className="floating-image" src={img2} />
            <Card.Body>
              <Card.Title>Paneer Biryani</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>


        </SwiperSlide>
        <SwiperSlide>

          <Card className='my-5'  style={{ width: '18rem' }}>
            <Card.Img variant="top"  className="floating-image" src={img} />
            <Card.Body>
              <Card.Title>Lucknowi Biryani</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Details</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
        
      </Swiper>
    </>
    </Container>
  );
}
export default PaintinGallery








 