import styled from "styled-components";
import profile from "../../assets/profile/profile.jpeg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Body = styled.section`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #1f1f1f;
  overflow: hidden;
  padding: 0 7%;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  z-index: 2;
`;

export const YellowTitle = styled.span`
  color: #f2ff00;
`;

export const Text = styled.p`
  font-family: sans-serif;
  width: 45%;
  color: #ffffff;
  line-height: 1.5;
  z-index: 2;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;

export const Image = styled.article`
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 30vw;
  height: 50vh;
  border-radius: 20px;
  
  position: absolute;
  right: 7%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Networks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  width: fit-content;
  z-index: 2;
`;

export const Button = styled.a`
  border: 2px solid #f2ff00;
  border-radius: 12px;
  background-color: transparent;
  color: #ffffff;
  height: 45px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #f2ff00;
    color: #1f1f1f;
  }

  @media (max-width: 480px) {
    width: 180px;
  }
`;

export const Github = styled(FaGithub)`
  font-size: 1.2rem;
  margin-right: 8px;
`;

export const Linkedin = styled(FaLinkedin)`
  font-size: 1.2rem;
  margin-right: 8px;
`;

export const Whatsapp = styled(FaWhatsapp)`
  font-size: 1.2rem;
  margin-right: 8px;
`;