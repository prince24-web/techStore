import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProductShowcase.css';
import iphone from "./assets/iphone-15.png";
import cpu from "./assets/cpu.png";
import speaker from "./assets/jbl-speaker.png";
import projector from "./assets/projector.png";
import ps5 from "./assets/contoller.png";
import vr from "./assets/VR.png";
import key from "./assets/keyboard.png";
import mouse from "./assets/ipad.png";
import headphone from "./assets/jbl-headphone.png";

const ProductShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const products = [
    {
      id: 1,
      name: 'Switch Leather & Canvas Rage',
      price: 29.99,
      originalPrice: 49.99,
      image: ps5,  // Fixed: direct use of variable instead of {ps5}
      rating: 5,
      reviews: 340,
      discount: 20,
    },
    {
      id: 2,
      name: 'Level 20 RGB Cherry',
      price: 29.99,
      originalPrice: 49.99,
      image: key,  // Fixed
      rating: 0,
      reviews: 0,
      discount: 20,
    },
    {
      id: 3,
      name: 'Logitech Streamcam',
      price: 29.99,
      originalPrice: 49.99,
      image: vr,  // Fixed
      rating: 0,
      reviews: 0,
      discount: 20,
    },
    {
      id: 4,
      name: '23" wireless Twosoft',
      price: 29.99,
      originalPrice: 49.99,
      image: cpu,  // Fixed
      rating: 5,
      reviews: 340,
      discount: 20,
    },
    {
      id: 5,
      name: 'Base Hearts Clarify',
      price: 29.99,
      originalPrice: 49.99,
      image: speaker,  // Fixed
      rating: 0,
      reviews: 0,
      discount: 20,
    },
    {
      id: 6,
      name: 'More Logitech',
      price: 29.99,
      originalPrice: 49.99,
      image: mouse,  // Fixed
      rating: 0,
      reviews: 0,
      discount: 20,
    },
    {
      id: 7,
      name: 'Zone Headphones',
      price: 29.99,
      originalPrice: 49.99,
      image: headphone,  // Fixed
      rating: 5,
      reviews: 340,
      discount: 20,
    },
    {
      id: 8,
      name: '23" wireless headset',
      price: 29.99,
      originalPrice: 49.99,
      image: projector,  // Fixed
      rating: 0,
      reviews: 0,
      discount: 20,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-showcase">
      <div className="header">
        <div className="header-icon">
          <div className="circle">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L4 8h16l-8 8z" fill="currentColor" />
            </svg>
          </div>
          <span>Our Products</span>
        </div>
        <h1>Explore our Products</h1>
        <div className="navigation">
          <button className="nav-btn prev">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="nav-btn next">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="products-grid">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="product-card"
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-delay={index * 100}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.discount > 0 && (
                <div className="discount-badge">{product.discount}% OFF</div>
              )}
            </div>
            <div className="product-info">
              <div className="rating">
                {product.reviews > 0 && (
                  <>
                    <div className="stars">{renderStars(product.rating)}</div>
                    <span className="review-count">({product.reviews})</span>
                  </>
                )}
              </div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              </div>
              <div className="color-options">
                <span className="color-dot active"></span>
                <span className="color-dot"></span>
                <span className="color-dot"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-all" data-aos="fade-up">
        <button className="view-all-btn">View All Products</button>
      </div>
    </div>
  );
};

export default ProductShowcase;