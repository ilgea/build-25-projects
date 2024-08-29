import React, { useEffect, useState, useRef, useCallback } from "react";
import "./styler.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, page = 1, limit = 4 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const timeoutRef = useRef(null);

  const getImages = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") getImages(url);
  }, [url]);

  const nextSlide = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [images]);

  const prevSlide = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  }, [images]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.transform = `translateX(-${
        (currentIndex + 1) * 100
      }%)`;

      timeoutRef.current = setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.3s ease-in-out";
        sliderRef.current.style.transform = `translateX(-${
          (currentIndex + 1) * 100
        }%)`;
      }, 10);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  if (loading) return <h2>Loading...</h2>;

  const extendedImages = [...images, ...images, ...images];

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {extendedImages.map((image, index) => (
          <div key={`${image?.id}-${index}`} className="slide">
            <img src={image?.download_url} alt={image?.author} />
          </div>
        ))}
      </div>
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
