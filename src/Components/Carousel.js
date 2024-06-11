import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import firstMovie from '../video/Alpine-Milan-HomePage-1680x951-950-non-possible-v3-12072021.mp4'
import photoCarrousel from "../images/sources-homepage/A110/Alpine-A110-1.jpg"
import { Link } from 'react-router-dom';

function DarkVariantExample() {
  return (
    <div className='carrousel'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <video
          className="videocarousel d-block"
          src={firstMovie}
          autoPlay loop
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='text-white titleCaroussel'>A110 Purel</h5>
          <p className='text-white textCaroussel'>Découvrez la légende réinventée : l'Alpine A110, où l'élégance intemporelle rencontre la performance inégalée.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-130"
          src={photoCarrousel}
          alt="Second slide"
        />
        <Carousel.Caption>
          
          <h5 className='text-white titleCaroussel'>Configurateur</h5>
          <p className='text-white textCaroussel'>Accédez dès maintenant au configurateur de l'Alpine A110 et créez la voiture de vos rêves.</p>
          <Link to={"/configuratorpages"}><Button variant="outline-light font">Configurez</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;