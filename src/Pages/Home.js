import React from 'react'
import "./CSS/Home.css"
import Image1 from "../Images/ImgA.jpg"
import Image2 from "../Images/ImgB.jpg"
import Image3 from "../Images/ImgC.jpg"
import Image4 from "../Images/ImgD.jpg"
import Image5 from "../Images/ImgE.jpg"
import Image6 from "../Images/ImgF.jpg"
import Image7 from "../Images/ImgG.jpg"
import Image8 from "../Images/ImgH.png"
import Image9 from "../Images/ImgI.jpg"
import Image10 from "../Images/ImgJ.jpg"
import Gif1 from "../Gif/gif1.gif"
import Gif2 from "../Gif/gif2.gif"
import Gif3 from "../Gif/gif3.gif"
import Gif4 from "../Gif/gif4.gif"
import Gif5 from "../Gif/gif5.gif"
import Gif6 from "../Gif/gif6.gif"
import Carousel from 'react-bootstrap/Carousel';
const Home=()=> {
  return (
    <div className="container-fluid">
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Know About Port</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Ships Available at Port</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image5}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Loading and Unloading Details</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image6}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Ship Information</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image7}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Ship Location</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image8}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Ships Departed Port</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image9}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Upcoming Ships To Port</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image10}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Ship, Port, Logistics all Information Up to Date</h3>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel><br/>
    <section id="card">
        <div className="row">
          <div className='col'>
          <div class="card shadow p-3 mb-5 bg-white rounded">
                <img src={Gif2} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Loading Details</h3>
                  <a href="#" className="btn btn-primary">Get Details</a>
                </div>
              </div>
          </div>

          <div className='col'>
          <div class="card shadow p-3 mb-5 bg-white rounded">
                <img src={Gif1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Ship Details</h3>
                  <a href="#" className="btn btn-primary">Get Details</a>
                </div>
              </div>
          </div>

          <div className='col'>
          <div class="card shadow p-3 mb-5 bg-white rounded">
                <img src={Gif5} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Ship Location</h3>
                  <a href="#" className="btn btn-primary">Get Details</a>
                </div>
              </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <div class="card shadow p-3 mb-5 bg-white rounded">
                <img src={Gif6} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Port Information</h3>
                  <a href="#" className="btn btn-primary">Get Details</a>
                </div>
              </div>
          </div>

          <div className='col'>
          <div class="card shadow p-3 mb-5 bg-white rounded">
                <img src={Gif3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Logistics</h3>
                  <a href="#" className="btn btn-primary">Get Details</a>
                </div>
              </div>
          </div>

          <div className='col'>
          <div class="card shadow p-3 mb-5 bg-white rounded">
                <img src={Gif4} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h3 className="card-title">Unloading Details</h3>
                  <a href="#" className="btn btn-primary">Get Details</a>
                </div>
              </div>
          </div>

        </div>
    </section>
    <div className='footer'>
        Footer
    </div>
    </div>
  );
}


export default Home
