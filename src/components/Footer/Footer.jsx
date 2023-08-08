import React from 'react';
import { Container } from 'react-bootstrap';



import { FaGoogle, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaMobile, FaMobileAlt, FaTelegram, FaFax, FaAddressBook } from "react-icons/fa";
const Footer = () => {
   
 


  return (
 
    <div style={{background: "#854d27", paddingTop:'100px'}} className='text-center text-lg-start  px-5 '>
         <Container>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-light fs-5'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-light fs-4'>
          <FaGoogle></FaGoogle> 
          </a>
          <a href='' className='me-4 text-light fs-4'>
            <FaGithub></FaGithub>
          </a>
          <a href='' className='me-4 text-light fs-4'>
           <FaInstagram></FaInstagram>
          </a>
          <a href='' className='me-4 text-light fs-4'>
            <FaLinkedin></FaLinkedin>
          </a>
          <a href='' className='me-4 text-light fs-4'>
        <FaWhatsapp></FaWhatsapp>
          </a>
        </div>
      </section>

   
        <div className=' row row-cols-1 row-cols-md-4  row-cols-lg-4 g-2 pt-5 mt-5  "'>
          <div className='col'>
          
              <h6 className='text-uppercase fw-bold mb-4 text-light'>
               
                Company name
              </h6>
              <p className='text-light fs-6 text-light'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

           < div className='col'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Best Bengali Recipes</h6>
              <p className='text-light fs-6'>
              Hari Kabab
              </p >
              <p className='text-light fs-6'>
              Pumpkin Morobba
              </p >
              <p  className='text-light fs-6'>
              Whole Spice Beef 
              </p>
              <p className='text-light fs-6'>
              Chal kumra Halwa
              </p>
            </div>


            <div className='col'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Useful links</h6>
              <p className='text-light fs-6'>Pricing</p>
              <p className='text-light fs-6'>Settings </p>
              <p className='text-light fs-6'> Orders </p>
              <p className='text-light fs-6'> Help</p>
            </div>
       

            <div className='col'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>Contact</h6>
              <p className='text-light fs-6'>
                <FaAddressBook></FaAddressBook> Dhaka, NY 10012, US
              </p>
              <p className='text-light fs-6'>
            <FaFax></FaFax> info@example.com
              </p>
              <p className='text-light fs-6'>
                <FaTelegram></FaTelegram> + 01 234 567 88
              </p>
              <p className='text-light fs-6'>
                <FaMobileAlt></FaMobileAlt> + 01 234 567 89
              </p>
            </div>
        </div>
        </Container>
</div>

    );
};

export default Footer;