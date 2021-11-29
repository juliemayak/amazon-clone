import React, { useState } from 'react';
import { SliderData } from './SliderData';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevIndexHandler = () => {
    setCurrentImgIndex(currentImgIndex === 0 ? slides.length - 1 : currentImgIndex - 1);
  };
  const nextIndexHandler = () => {
    setCurrentImgIndex(currentImgIndex === slides.length - 1 ? 0 : currentImgIndex + 1);
  };

  return (
    <section className="slider">
      <NavigateBeforeRoundedIcon className="slider__beforeArrow" onClick={prevIndexHandler} />
      {SliderData.map((slide, index) => {
        return (
          <div className={index === currentImgIndex ? 'slide active' : 'slide'} key={index}>
            {index === currentImgIndex && (
              <img className="slider__image" src={slide.image} alt="slider-image" />
            )}
          </div>
        );
      })}

      <NavigateNextRoundedIcon className="slider__nextArrow" onClick={nextIndexHandler} />
    </section>
  );
};

export default ImageSlider;
