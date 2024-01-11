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

const vaultPhotos1 = [
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
const o =  [
  "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_162801240_iOS.jpg?alt=media&token=37bd4e5d-cb84-4a0b-8b17-0dba7e2fb5e5",
  "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163014211_iOS%201.heic?alt=media&token=aae330b5-93ac-42bc-ad7b-3bc343ee748e",
  "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163027787_iOS.heic?alt=media&token=5d348a5a-ff06-49dc-b073-aea18eb39132",
  "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163039088_iOS.heic?alt=media&token=fbe773cb-3642-4558-ba64-08ebe94d9424",
  "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163356795_iOS.heic?alt=media&token=d6a7491d-929d-4ff4-8613-e477df04a059",
  "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163404760_iOS.heic?alt=media&token=d1ee2e1f-6ee0-43dc-8f54-83f596b363f1",
  "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163405962_iOS.heic?alt=media&token=ba54d039-536c-4bb7-9dbe-75f87b0fb80d",
  "https://firebasestorage.googleapis.com/v0/b/sess-website.appspot.com/o/images%2FEventImages%2FNEM2022_event%2F20230328_163422292_iOS.heic?alt=media&token=696fec5f-9e3f-42d2-9fe3-237a89fd1da4",
]

// function Gallery({ activeId, setActiveId, vaultPhotos})
// vaultPhotos -> [], use index as key

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
