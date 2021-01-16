import "./News.css";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

function News() {
    const [news, setNews] = useState();
    const [article, setArticle] = useState();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };
    return (
      <div className="news-container">
        <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://specials-images.forbesimg.com/imageserve/5e6e2adfaa5428000759e994/960x0.jpg?fit=scale"
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-50"
              src="https://cdn.cnn.com/cnnnext/dam/assets/200415000852-08-sony-world-photography-awards.jpg"
              alt="Second slide"
            />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.cnn.com/cnnnext/dam/assets/200415000520-05-sony-world-photography-awards.jpg"
              alt="Third slide"
            />
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        </Carousel>
   </div>
    );
}

export default News;