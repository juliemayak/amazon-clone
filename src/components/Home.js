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
    </div>
  );
}

export default Home;
