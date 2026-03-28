import styled from "styled-components";
import "../../index.css";
import profile from "../../assets/profile/profile.jpeg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Body = styled.section`
  width: 99dvw;
  height: 100dvh;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  margin-top: 26dvh;
  margin-bottom: 2dvh;
  margin-left: 7%;

  color: #ffffff;
`;

export const YellowTitle = styled.span`
  font-family: sans-serif;
  color: #f2ff00;
`;

export const Text = styled.p`
  font-family: sans-serif;

  margin-left: 7%;
  width: 40%;
  color: #ffffff;

  @media (max-width: 350px) {
    width: 80%;
  }
`;

export const Span = styled.span`
  font-size: 130%;
`;

export const Image = styled.article`
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 40dvw;
  height: 40dvh;

  position: relative;
  top: -22%;
  left: 55%;

  border-radius: 20px;

  @media (max-width: 350px) {
    display: none;
  }

  @media (min-width: 350px) {
    height: 60dvh;
    top: -45%;
    width: 35dvw;
    left: 60%;
  }

  @media (min-width: 450px) {
    height: 60dvh;
    top: -35%;
    width: 35dvw;
    left: 60%;
  }

  @media (min-width: 550px) {
    height: 60dvh;
    top: -29%;
    width: 35dvw;
    left: 60%;
  }

  @media (min-width: 700px) {
    height: 60dvh;
    top: -23%;
    width: 35dvw;
    left: 60%;
  }

  @media (min-width: 800px) {
    height: 60dvh;
    top: -25%;
    width: 35dvw;
    left: 60%;
  }

  @media (min-width: 950px) {
    height: 60dvh;
    top: -20%;
    width: 35dvw;
    left: 60%;
  }
`;

export const Networks = styled.div`
  height: 20%;
  width: 50%;

  margin-left: 2%;

  position: relative;
  top: -33%;

  display: flex;
  gap: 5%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 150px) {
    top: 0%;
  }

  @media (min-width: 350px) {
    top: -55%;
  }

`;

export const Button = styled.a`
  border: 2px, solid, #f2ff00;
  border-radius: 15px;

  background-color: #1f1f1f;
  color: #ffff;

  height: 5dvh;
  width: 38dvw;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  cursor: pointer;

  @media (max-width: 350px) {
    width: 48dvw;
    margin-left: 8%;
  }

  @media (min-width: 510px) {
    width: 35dvb;
    margin-left: 8%;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 150%;
  margin-right: 3%;
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 150%;
  margin-right: 3%;
`;

export const Whatsapp = styled(FaWhatsapp)`
  font-size: 150%;
  margin-right: 3%;
`;
