import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from 'aos';
import crown from './assets/images/crown.png'

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    // Fetching data from the API
    axios.get("https://office3i.com/api/public/api/webproduct_list")
      .then(response => {
        console.log("setProducts----->", response.data.data);

        // Directly accessing the products array from response.data.data
        if (Array.isArray(response.data.data)) {
          const sortedProducts = response.data.data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          setProducts(sortedProducts);
        } else {
          console.error("Unexpected response structure", response.data);
          setError("Unexpected response structure");
        }
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
        setError("Failed to load products. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const handleFreeTrial = (id) => {
    navigate(`/freetrial/${id}`);
  };

  const handleBuynow = (id) => {
    navigate(`/buynow/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section id="ProductsSection" className="py-5 bg-light-product">
      <div className="container mt-5 mb-5">
        <div className='sec__head-container'>
          <h2 className="text-center sec__head mb-5">Products</h2>
        </div>
        <Row>
          {products.map((product, index) => (
            <Col md={3} sm={6} className="mb-4" key={index}>
              <Card className="text-center product_card" style={{ padding: '0px' }} data-aos="zoom-in-up">
                <Card.Title>{product.name}
                  {product.name === 'Office Management System' && (
                    <div className="most__popular">
                      Most Popular
                    </div>
                  )}
                </Card.Title>

                <Card.Body className="product-card-body">
                  {/* <div> {product.name === 'Office Management System' && (
                    <img src={crown} alt="crown" />
                  )}</div> */}
                  <div>

                    <Card.Text>

                      <span className="product__price">
                        Rs.{product.price}</span>/month</Card.Text>
                    <Card.Text className="members">Upto {product.member} members</Card.Text>
                    <Card.Text className="additional__members">
                      To include additional members<br />
                      <strong>Rs.{product.monthly_member}/member/month</strong>
                    </Card.Text>

                    <ul className="list-unstyled">
                      {product.features && product.features.map((feature, idx) => (
                        <li key={idx}>
                          <FontAwesomeIcon icon={faCheck} style={{ color: '#0BC307', marginRight: '5px' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="foot__btn">
                    <Button variant="primary" onClick={() => handleBuynow(product.id)} className="buy__btn">
                      <span>Buy Now</span>
                    </Button>
                    <Button variant="outline-primary" className="mt-2 freetrial__btn" onClick={() => handleFreeTrial(product.id)}>
                      Start Free Trial
                    </Button>
                    <p className="mt-3 one__time__install">One Time Installation</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Products;
