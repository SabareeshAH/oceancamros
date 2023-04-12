import React from 'react'
import "./CSS/Home.css"
import Image1 from "../Images/ImgA.jpg"
import Image2 from "../Images/ImgB.jpg"
import Image3 from "../Images/ImgC.jpg"
import Image4 from "../Images/ImgD.jpg"
import Image5 from "../Images/ImgE.jpg"
import Image6 from "../Images/ImgF.jpg"
import Image7 from "../Images/ImgG.jpjg"
import Image8 from "../Images/ImgH.png"
import Image9 from "../Images/ImgI.jpg"
import Image10 from "../Images/ImgJ.jpg"
import Carousel from 'react-bootstrap/Carousel';
const Home=()=> {
  return (
    <div className="container-fluid">
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image5}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image6}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Sixth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image7}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Seventh slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image8}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Eight slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image9}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Nine slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image10}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>10 slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel><br/>
    <div className='footer'>
        Footer
    </div>
    </div>
  );
}


export default Home
