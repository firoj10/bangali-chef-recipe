import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './ChefAlbum.css'
import { Container } from "react-bootstrap"


const images = [
    "https://i.ibb.co/sg78fdm/q7.webp",
    "https://i.ibb.co/fYG9Xbc/b1.webp",
    "https://i.ibb.co/wpLRfv4/q6.webp",
    "https://i.ibb.co/FskJ2cg/q5.webp",
    "https://i.ibb.co/cvKg1Xc/b1.webp",
    "https://i.ibb.co/5vzgPHn/b3.webp",
    "https://i.ibb.co/6P3fs77/m2.jpg",
    "https://i.ibb.co/KNq84cs/m9.webp",
    "https://i.ibb.co/CmHc6rC/n.webp",
    "https://i.ibb.co/9ZmGG5R/m1.webp"
]

const ChefAlbum = () => {
    return (
   <Container  style={{paddingTop: "50px"}}>
    <div>
        <h2 className=" recipes text-white">Chef Personal Albums</h2>
    </div>
    
    <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 3, 900: 5}}
        >
            <Masonry>
           
             {images.map((image, i) => (
                    <img
                    className="floating-image"
                        key={i}
                        src={image}
                        style={{width: "100%", height: '250px', padding: '5px', display: "block"}}
                        alt=""
                    />
                ))}
               
           
            </Masonry>
        </ResponsiveMasonry>
   </Container>
   
    )
}



export default ChefAlbum;