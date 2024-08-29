import { useEffect, useState } from "react";
import "./styles.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, page = 1, limit = 4 }) {
  //   console.log(url, page, limit);
  //   https://picsum.photos/v2/list?page=1&limit=5

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

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
  const handleLeftClick = () => {
    setDirection(-1);
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleRightClick = () => {
    setDirection(1);
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url !== "") getImages(url);
  }, [url]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <h2>Image Slider</h2>
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handleLeftClick}
        />
        {images && images.length
          ? images.map((image, index) => (
              <img
                key={image.id}
                src={image.download_url}
                alt={image.author}
                className={
                  currentSlide === index
                    ? direction > 0
                      ? "current-image slide-right"
                      : "current-image slide-left"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}

        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleRightClick}
        />
        <span className="dots">
          {images && images.length
            ? images.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={
                      currentSlide === index ? "dot" : "dot inactive-dot"
                    }
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                );
              })
            : null}
        </span>
      </div>
    </>
  );
}
