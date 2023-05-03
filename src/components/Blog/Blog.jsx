
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const ref = React.createRef();



const Blog = () => {
    return (
     <Container>
       
       <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => <Button onClick={toPdf}>Generate PDF</Button>}
           </Pdf>

       <div ref={ref}>
        <h1>dfdsjfhsdjlh</h1>
       </div>
     
        
     </Container>
    );
};

export default Blog;