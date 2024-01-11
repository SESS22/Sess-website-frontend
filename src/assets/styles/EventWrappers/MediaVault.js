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

  .vault-container {
    background-color: #ffffff;
    height: 700px;
    width: 100%;
    display: grid;
    grid-template-columns: 49% 49%;
    grid-template-rows: 43% 43%;
    gap: 20px;
    margin-top: 41px;
    margin-bottom: 139px;
  }
  .vault-container > .container {
    background-color: rgb(0, 0, 0);
  }

  .container{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .image {
    height: 100%;
    width: 100%;
    opacity: 0.6;
  }

  .middle {
    position: relative;
    top: -60%;
    left: 30%;
    width: 218px;
    height: 66px;
  }

  .text p {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;

    color: #ffffff;
  }
  .container:hover .image {
    opacity: 1;
  }
  .container:hover .middle {
    opacity: 0;
  }
  @media only screen and (max-width: 1100px) {
    .vault-container {
      background-color: #ffffff;
      width: auto;
      height: 1500px;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 25% 25% 25% 25%;
      gap: 20px;
      margin-top: 41px;
      margin-bottom: 139px;

      margin-left: auto;
      margin-right: auto;
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

    .content div {
      margin-top: 5px;
      margin-bottom: 20px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 700px) {
    .vault-container {
      background-color: #ffffff;
      width: auto;
      height: 1250px;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 22% 22% 22% 22%;
      gap: 20px;
      margin-top: 16px;
      margin-bottom: 139px;

      margin-left: auto;
      margin-right: auto;
    }

    .middle {
      position: relative;
      top: -60%;
      left: 20%;
      width: 218px;
      height: 66px;
    }
  }
  @media only screen and (max-width: 440px) {
    .vault-container {
      width: auto;
      height: 950px;
    }
  }
`;

export default Wrapper;