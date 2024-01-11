import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { nanoid } from "nanoid";
import Wrapper from "../../assets/styles/EventWrappers/Gallery";
import image25 from "../../assets/images/EventImages/image25.jpeg";
import image26 from "../../assets/images/EventImages/image26.jpeg";
import image27 from "../../assets/images/EventImages/image27.jpeg";
import image28 from "../../assets/images/EventImages/image28.jpeg";
import image29 from "../../assets/images/EventImages/image29.jpeg";
import image30 from "../../assets/images/EventImages/image30.jpeg";

const vaultPhotos = [
  {
    id: nanoid(),
    name: "image 25",
    image: image25,
  },
  {
    id: nanoid(),
    name: "image 26",
    image: image26,
  },
  {
    id: nanoid(),
    name: "image 27",
    image: image27,
  },
  {
    id: nanoid(),
    name: "image 28",
    image: image28,
  },
  {
    id: nanoid(),
    name: "image 29",
    image: image29,
  },
  {
    id: nanoid(),
    name: "image 30",
    image: image30,
  },
];

// function Gallery({ activeId, setActiveId, vaultPhotos}) 
// vaultPhotos -> [], use index as key

function Gallery({ activeId, setActiveId }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const prevPhoto = () => {
    setCurrentPhoto((oldPhoto) => {
      const result = (oldPhoto - 1 + vaultPhotos.length) % vaultPhotos.length;
      return result;
    });
  };
  const nextPhoto = () => {
    setCurrentPhoto((oldPhoto) => {
      const result = (oldPhoto + 1) % vaultPhotos.length;
      return result;
    });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      nextPhoto();
    }, 2500);
    return () => {
      clearInterval(timeOut);
    };
  }, [currentPhoto]);
  return (
    <Wrapper>
      <div className={activeId ? "gallery show-gallery" : "gallery"}>
        <section className="slider-container">
          <button
            className="close-gallery-btn"
            onClick={() => setActiveId(null)}
          >
            <FaTimes />
          </button>
          {vaultPhotos.map((photo, index) => {
            const { id, name, image } = photo;
            return (
              <article
                key={id}
                className="slide"
                style={{
                  transform: `translateX(${100 * (index - currentPhoto)}%)`,
                }}
              >
                <img key={id} src={image} alt={name} className="image" />
              </article>
            );
          })}
          <button type="button" className="prev" onClick={() => prevPhoto()}>
            <FiChevronLeft />
          </button>
          <button type="button" className="next" onClick={() => nextPhoto()}>
            <FiChevronRight />
          </button>
        </section>
      </div>
    </Wrapper>
  );
}

export default Gallery;
