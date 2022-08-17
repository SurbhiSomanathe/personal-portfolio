import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from '../assests/img/react (1).svg';
import javaScript from '../assests/img/javascript (2).svg';
import aws from '../assests/img/aws.svg';
import bootstrap from '../assests/img/bootstrap.svg';
import css from '../assests/img/css.svg';
import mongodb from '../assests/img/mongodb.svg';
import nodejs from '../assests/img/nodejs.svg';
import html from '../assests/img/html.svg';
import express from '../assests/img/express.svg';
import postman from '../assests/img/postman.svg';
import heroku from '../assests/img/heroku.svg';
import netlify from '../assests/img/netlify.svg';
import colorSharp from "../assests/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={javaScript} alt="Image" />                             
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={aws} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={postman} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={heroku} alt="Image" />                                
                            </div>
                            <div className="item">
                                <img src={netlify} alt="Image" />                                
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}