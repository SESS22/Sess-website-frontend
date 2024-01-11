import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { nanoid } from "nanoid";
import Wrapper from "../../assets/styles/EventWrappers/Gallery";

function Gallery({ activeId, setActiveId, vaultPhotos}) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  console.log(vaultPhotos);
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
    activeId && (
      <Wrapper>
        <div className={activeId ? "gallery show-gallery" : "gallery"}>
          <section className="slider-container">
            <button
              className="close-gallery-btn"
              onClick={() => setActiveId(null)}
            >
              <FaTimes />
            </button>
            {vaultPhotos.map((url, index) => {
              return (
                <article
                  key={nanoid()}
                  className="slide"
                  style={{
                    transform: `translateX(${100 * (index - currentPhoto)}%)`,
                  }}
                >
                  <img key={index} src={url} alt="" className="image" />
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
    )
  );
}

export default Gallery;