import React from "react";
import image from "../../assets/image 16.png";
import styled from "styled-components";
function Hero({heroImage, title, content}) {
  return (
    <Wrapper>
      <div className="event-header">
        <img src={heroImage} />
        <div className="title content-grid">
          <div className="header">
            <h1>{title}</h1>
          </div>
          <div className="content">
            <p>
              {content}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.div`
  .event-header {
    width: 100%;
    height: 293px;
    background: rgb(255, 0, 0);
  }

  .event-header img {
    opacity: 0.8;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .title {
    position: absolute;
    top: 180px;
    width: 360px;
    height: 136px;
  }

  .title > .header {
    background: #ff1616;
    width: 298px;
    height: 61px;
  }

  .title > .header h1 {
    margin-left: 36px;
    font-size: 36px;
    line-height: 39px;
    color: #ffffff;
  }
  .title > .content {
    width: 360;
    height: 75px;
  }
  .content p {
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
  }
`;
