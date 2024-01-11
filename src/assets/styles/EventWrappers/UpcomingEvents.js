import styled from "styled-components";

const Wrapper = styled.div`
  .title {
    margin-top: 100px;
  }

  .title hr {
    width: 153px;
    margin-top: 26px;
    margin-bottom: 16px;
    border-top: 1px solid #ff1616;
  }

  .title p {
    font-family: "Archivo";
    font-size: 36px;
    font-weight: 500;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
    color: #ff1616;
  }
  .title a {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: #9e9898;
  }
  .content-container {
    background-color: rgba(255, 255, 255, 1);
    height: auto;
    width: 100%;
    border-radius: 5px;
    box-shadow: -1px -1px 10px 2px rgba(0, 0, 0, 0.12);
    margin-top: 46px;
    margin-bottom: 26px;

    display: grid;
    grid-template-columns: 344px auto;
    gap: 30px;
  }

  .picture img {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    width: 100%;
    height: 100%;
  }

  .content {
    width: 20rem;
  }

  .content h1 {
    font-size: 24px;
    font-weight: 400;
    line-height: 26px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .content-div {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  /* .content-div p {
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    color: rgba(158, 152, 152, 1);
  } */
  .time-div {
    display: flex;
    min-width: 150px;
  }
  .time-div img {
    height: 1.38rem;
    width: 1.38rem;
    margin-right: 10px;
    fill: #9e9898;
  }
  .time-div p {
    font-family: "Archivo", sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    color: #9e9898;
    margin-bottom: 20px;
    padding: 4px 0px 0px 0px;
  }

  .button button {
    height: 37px;
    width: 136px;
    background-color: rgba(237, 39, 39, 1);
    border: 0px;
    border-radius: 5px;
    color: rgba(255, 255, 255, 1);

    font-family: "Archivo";
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
  }
  .description {
    transform: translateY(0);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    box-shadow: -1px -1px 10px 2px rgba(0, 0, 0, 0.12);
    margin-top: -20px;
    margin-bottom: 26px;
  }
  .description div {
    padding: 20px;
  }
  @media only screen and (max-width: 1550px) {
    /* below is style section for event page */
    .content-container {
      background-color: rgba(255, 255, 255, 1);
      height: auto;
      width: 100%;
      top: 649px;
      border-radius: 5px;
      box-shadow: -1px -1px 10px 2px rgba(0, 0, 0, 0.12);
      margin-top: 46px;
      margin-bottom: 26px;

      display: grid;
      grid-template-columns: 344px auto;
      gap: 30px;
    }
    /* above is style section for event page */
  }
  @media only screen and (max-width: 1100px) {
    .content-container {
      background-color: rgba(255, 255, 255, 1);
      width: 450px;
      height: auto;
      border-radius: 5px;
      box-shadow: -1px -1px 10px 2px rgba(0, 0, 0, 0.12);
      margin-top: 46px;
      margin-bottom: 26px;

      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 283px auto;
      gap: 10px;

      margin-left: auto;
      margin-right: auto;
    }

    .picture img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 0px;
      width: 100%;
      height: 100%;
    }

    .title {
      text-align: center;
    }

    .title p {
      text-align: center;
    }

    .title hr {
      margin-left: auto;
      margin-right: auto;
    }

    .content {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
    }

    .content-div {
      justify-content: center;
    }

    .picture img {
      width: 100%;
      height: auto;
    }
    .description {
      transition: 0.2s;
    }
  }
  @media only screen and (max-width: 700px) {
    .content-grid {
      margin: 0 15vw 0 15vw;
      transition: 0.2s;
    }

    .title {
      margin-top: 30px;
    }

    .title p {
      font-size: 28px;
      text-align: center;
    }

    .title hr {
      margin-top: 16px;
      margin-left: auto;
      margin-right: auto;
    }
    .content-container {
      width: 300px;
      height: 100%;
      grid-template-columns: 100%;
      grid-template-rows: 188px 50%;
      gap: 4px;
    }
    .content {
      width: 18.5rem;
    }
    .content h1 {
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;
    }

    .time-div p {
      font-family: "Archivo", sans-serif;
      margin-top: 16px;
      font-size: 13px;

      line-height: 15px;
      color: #9e9898;
    }
    .time-div img {
      height: 1.38rem;
      width: 1.38rem;
      margin-right: 10px;
      margin-top: 15px;

      fill: #9e9898;
    }
  }
`;

export default Wrapper;
