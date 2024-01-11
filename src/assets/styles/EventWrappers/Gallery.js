import styled from "styled-components";

const Wrapper = styled.div`
  .gallery {
    position: fixed;
    display: grid;
    background: rgba(0, 0, 0, 0.5);
    place-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
  }

  .show-gallery {
    z-index: 10;
    visibility: visible;
    opacity: 1;
    transition-property: opacity;
    transition-duration: 0.5s;
  }

  .close-gallery-btn {
    position: absolute;
    z-index: 11;
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    background: black;
    border-color: transparent;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    height: 40px;
  }
  .close-gallery-btn:hover {
    color: #ff1616;
  }
  .slider-container {
    margin: 0 auto;
    margin-top: 2rem;
    width: 90%;
    height: 80%;
    max-width: 75%;
    position: relative;
    overflow: hidden;
  }
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out all;
  }
  .image {
    object-fit: cover;
    opacity: 1;
  }
  .prev,
  .next {
    position: absolute;
    top: 45%;
    background: black;
    color: white;
    display: grid;
    place-items: center;
    border-color: transparent;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 2.5rem;
    transition: 0.3s ease-in-out all;
  }
  .prev:hover,
  .next:hover {
    background: #ff1616;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  @media only screen and (max-width: 1550px) {
    .slider-container {
      width: 95%;
    }
  }
  @media only screen and (max-width: 1100px) {
    .slider-container {
      width: 95%;
      height: 50%;
    }
  }
  @media only screen and (max-width: 700px) {
    .slider-container {
      width: 100vw;
      height: 35%;
    }
  }
`;

export default Wrapper;
