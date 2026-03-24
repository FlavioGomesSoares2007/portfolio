import styled from "styled-components";
import "../../index.css";
import profile from "../../assets/profile/profile.jpeg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const AboutMe = styled.section`
  width: 99dvw;
  height: 120dvh;

  position: absolute;
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
`;

export const Span = styled.span`
  font-size: 130%;
`;

export const Image = styled.article`
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 37dvw;
  height: 45dvh;

  position: relative;
  top: -22%;
  left: 55%;

  border-radius: 20px;

  @media (min-width: 530px) {
    height: 70dvh;
    top: -13%;
    width: 25dvw;
    left: 60%;
  }

  @media (max-width: 320px) {
    display: none;
  }
`;

export const Networks = styled.div`
  height: 20%;
  width: 50%;

  margin-left: 2%;

  position: relative;
  top: -38%;

  display: flex;
  gap: 5%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 530px) {
    top: -55%;
  }
`;

export const Button = styled.a`
  border: 2px, solid, #f2ff00;
  border-radius: 15px;

  background-color: #1f1f1f;
  color: #ffff;

  height: 5dvh;
  width: 28dvw;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  cursor: pointer;
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
