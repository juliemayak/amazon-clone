import React from 'react';
import Product from './Product';
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider';
import data from '../goodsData.json';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <ImageSlider slides={SliderData} />
      <div className="home__row">
        {data.map((item) => {
          return (
            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              key={item.id}
              className="home__rowProduct"
            />
          );
        })}
      </div>
      {/* <div className="home__row">
        <Product
          id="1"
          title="NETGEAR Nighthawk Smart Wi-Fi Router, R6700 - AC1750 Wireless Speed Up to 1750 Mbps | Up to 1500 Sq Ft Coverage & 25 Devices | 4 x 1G Ethernet and 1 x 3.0 USB Ports | Armor Security"
          price={129.98}
          rating={4.5}
          image="https://m.media-amazon.com/images/I/61FA9BbugzL._AC_UY218_.jpg"
        />
        <Product
          id="2"
          title="JBL Pulse 4 - Portable Bluetooth Speaker with 360 degrees LED lights, powerful sound and deep bass, IPX7 waterproof, 12 hours of playtime, JBL PartyBoost for multiple speaker pairing (White)"
          price={249.95}
          rating={4.8}
          image="https://m.media-amazon.com/images/I/519qEk4v0CL._AC_SX679_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Mid 2017 Apple MacBook Pro with Touch Bar, with 3.1GHz Intel Core i5 (13-inch, 8GB RAM, 512GB SSD) - Space Gray"
          price={795.01}
          rating={4.1}
          image="https://m.media-amazon.com/images/I/61SRQUe+LhL._AC_SX679_.jpg"
        />
        <Product
          id="4"
          title="The Body Shop Vitamin E Moisture Cream, Paraben-Free Facial Cream, 1.7 Oz"
          price={21.4}
          rating={4.4}
          image="https://m.media-amazon.com/images/I/61pxJ0z4l2L._SX679_.jpg"
        />
        <Product
          id="5"
          title="Reusable Kodak M35 35mm Film Camera Compatible with 35mm Color Negative or B/W Film"
          price={29.98}
          rating={4.2}
          image="https://m.media-amazon.com/images/I/51d5MEto4ML._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="LG 34WN80C-B UltraWide Monitor 34” 21:9 Curved WQHD (3440 x 1440) IPS Display"
          price={640.0}
          rating={4.6}
          image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SX679_.jpg"
        />
      </div> */}
    </div>
  );
}

export default Home;
