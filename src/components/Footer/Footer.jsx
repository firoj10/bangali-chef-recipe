import React from 'react';



import { FaGoogle, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaMobile, FaMobileAlt, FaTelegram, FaFax, FaAddressBook } from "react-icons/fa";
const Footer = () => {
   
 


  return (
 
    <div bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
          <FaGoogle></FaGoogle> 
          </a>
          <a href='' className='me-4 text-reset'>
            <FaGithub></FaGithub>
          </a>
          <a href='' className='me-4 text-reset'>
           <FaInstagram></FaInstagram>
          </a>
          <a href='' className='me-4 text-reset'>
            <FaLinkedin></FaLinkedin>
          </a>
          <a href='' className='me-4 text-reset'>
        <FaWhatsapp></FaWhatsapp>
          </a>
        </div>
      </section>

   
        <div className=' row row-cols-1 row-cols-md-4  row-cols-lg-4 g-2 pt-5 mt-5  "'>
          <div className='col'>
          
              <h6 className='text-uppercase fw-bold mb-4'>
               
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

           < div className='col'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>


            <div className='col'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>
       

            <div className='col'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <FaAddressBook></FaAddressBook>
                New York, NY 10012, US
              </p>
              <p>
            <FaFax></FaFax>
                info@example.com
              </p>
              <p>
                <FaTelegram></FaTelegram> + 01 234 567 88
              </p>
              <p>
                <FaMobileAlt></FaMobileAlt> + 01 234 567 89
              </p>
            </div>
        </div>
          
      
 

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
      
         Firoj hasan
     
    </div>
     
    
</div>
    );
};

export default Footer;