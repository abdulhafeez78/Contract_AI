"use client";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    arrows: true, // Enable arrows

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
          centerPadding: "0px",
          arrows: true, // Enable arrows for this breakpoint
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
          centerPadding: "0px",
          arrows: true, // Enable arrows for this breakpoint
        },
      },
    ],
  };

  useEffect(() => {
    // Perform any necessary side effects here
  }, []);

  return (
    <section className="skill" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Features</h2>
              <p>Our platform offers a variety of fabulous features.</p>
              <Slider {...settings} className="skill-slider">
                <div className="item">
                  <img
                    src="https://i.postimg.cc/k41pQ35K/Untitled-design-1.png"
                    alt="Image"
                  />
                  <h5 className="carousel-text">
                    Automated Legal Document Analysis
                  </h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.postimg.cc/43F6wJzf/Untitled-design.png"
                    alt="Image"
                  />
                  <h5 className="carousel-text">Ask your contract yourself</h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.postimg.cc/Gp5qSPks/Untitled-design-3.png"
                    alt="Image"
                  />
                  <h5 className="carousel-text">
                    Identification of Risks and Opportunities
                  </h5>
                </div>
                <div className="item">
                  <img
                    src="https://i.postimg.cc/J0tYz6Mx/Untitled-design-2.png"
                    alt="Image"
                  />
                  <h5 className="carousel-text">Enhanced Speed and Accuracy</h5>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://i.postimg.cc/1Xz09km7/Untitled-design-3.png"
        className="background-image-left"
        alt="Image"
      />
    </section>
  );
};
