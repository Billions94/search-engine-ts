import { Container } from "react-bootstrap";

const Footer = () => {

    return (
      <footer style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Container className='text-light'>{`${new Date().getFullYear()} - © TribeSongs | Developed by Ejiroghene.`}</Container>
      </footer>
    );
  
}

export default Footer
