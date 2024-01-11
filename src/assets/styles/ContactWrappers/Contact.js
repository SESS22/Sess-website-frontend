import styled from "styled-components";

const Wrapper = styled.div`
  .left-side {
    margin-left: 15vw;
    transition: 0.2s;
  }

  display: grid;
  grid-template-columns: 50% 50%;
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
    color: rgba(0, 0, 0, 0.8);
  }
  .contact-form {
    height: 710px;
    background-color: white;
  }

  .contact-container {
    position: relative;
    width: 65%;
    height: 449px;
    top: 100px;
  }

  .form {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 48% 48%;
    grid-template-rows: 50px 151px 50px;
    gap: 20px;
  }

  .name-input,
  .email-input {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 0.25px solid #cbd5e1;
  }
  .message-input {
    grid-column: span 2;
  }

  input {
    font-family: Outfit;
    font-size: 19px;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0em;
    color: rgba(0, 0, 0, 0.7);
    padding: 0.75rem;
  }

  textarea {
    font-family: Outfit;
    font-size: 19px;
    font-weight: 300;
    line-height: 25px;
    letter-spacing: 0em;
    color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    border: 0.25px solid #cbd5e1;
    width: 100%;
    height: 151px;
    resize: none;
    padding: 0.75rem;
  }

  .button button {
    height: 37px;
    width: 136px;
    background-color: rgba(237, 39, 39, 1);
    border: 0px;
    border-radius: 5px;
    color: rgba(255, 255, 255, 1);

    font-family: "Archivo";
    font-size: 16px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
  }

  .link-form {
    height: 710px;
    background: rgba(0, 0, 0, 0.03);
  }
  .link-container {
    position: relative;
    width: 285px;
    height: auto;
    top: 100px;
    left: 10%;
    border-radius: 4px;
    background: rgba(255, 255, 255, 1);
  }

  .toggle-link {
    height: 88px;
    position: relative;
    align-items: center;
    border-radius: 4px;
    transition: 0.3s;
  }
  .toggle-link:hover {
    margin-left: 10px;
  }
  .toggle-link a {
    position: relative;
    left: 11px;
    bottom: 8px;
    font-family: Archivo;
    font-size: 20px;
    font-weight: 550;
    line-height: 22px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
  }
  .link-line {
    position: relative;
    left: 30px;
    width: 222px;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
    margin: 6px 0;
    transition: 0.5s;
  }
  .toggle-link button {
    background-color: transparent;
    margin-top: 25px;
    border: 0;
  }
  .toggle-icon {
    border-radius: 9px;
    height: 33px;
    width: 33px;
    margin-left: 10px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    background: red;
  }

  @media only screen and (max-width: 1550px) {
    grid-template-columns: 60% 40%;
  }
  @media only screen and (max-width: 1100px) {
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
  }
  @media only screen and (max-width: 700px) {
    .left-side {
      margin-left: 0 15vw 0 15vw;
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
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    .form {
      grid-template-columns: 50% 50%;
    }
    .link-container {
      width: 80%;
    }
    .link-line {
      width: 80%;
    }
    .toggle-link {
      margin-left: 40px;
    }
    .toggle-link:hover {
      margin-left: 50px;
    }
  }
`;

export default Wrapper;
