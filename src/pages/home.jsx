import { useState, useEffect } from "react";
const url = "http://localhost:3000/products";
import "../index.css";
import Carousel from "react-bootstrap/Carousel";

import Card from "react-bootstrap/Card";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://eadn-wc01-5033995.nxedge.io/cdn/media/magiccart/magicslider/s/l/slider03_1_.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://eadn-wc01-5033995.nxedge.io/cdn/media/magiccart/magicslider/s/l/slider04.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://eadn-wc01-5033995.nxedge.io/cdn/media/magiccart/magicslider/s/l/slider-coexist-vs10.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
      <ul className="card_produto row">
        {products.map((product) => (
          <li key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.nome}</Card.Title>
                <Card.Text>R$ {product.price}</Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
