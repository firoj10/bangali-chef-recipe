import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShefCategory from '../ShefCategory/ShefCategory';

const ShefSection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(' http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <Container>
            <div class="row row-cols-1 row-cols-md-3  row-cols-lg-3 g-2 pt-5 mt-5 ">
 
                {
                    categories.map(category => <ShefCategory key={category.id} category={category}></ShefCategory>)
                }
          
   </div>
            </Container>
        </div>
    );
};

export default ShefSection;







