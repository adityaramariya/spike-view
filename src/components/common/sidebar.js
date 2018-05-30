import React, { Component } from "react";
import  { Carousel } from "react-bootstrap";
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="overlay"></div>
                <a className="logo" href="/">Spike View</a>
                <div className="custom-slider">
                    <Carousel>
                        <Carousel.Item>
                            <h3>Spike View for students</h3>
                            <p className="carouselTitle">All career information at one place </p>
                            <p className="carousel-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dolore ex excepturi, facilis ipsam iusto, laborum magni molestias nam nisi nostrum omnis placeat quam saepe sit, sunt vitae voluptatem?</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>Spike View for students</h3>
                            <p className="carouselTitle">All career information at one place </p>
                            <p className="carousel-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dolore ex excepturi, facilis ipsam iusto, laborum magni molestias nam nisi nostrum omnis placeat quam saepe sit, sunt vitae voluptatem?</p>
                        </Carousel.Item>
        
                        <Carousel.Item>
                            <h3>Spike View for students</h3>
                            <p className="carouselTitle">All career information at one place </p>
                            <p className="carousel-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dolore ex excepturi, facilis ipsam iusto, laborum magni molestias nam nisi nostrum omnis placeat quam saepe sit, sunt vitae voluptatem?</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default Sidebar;