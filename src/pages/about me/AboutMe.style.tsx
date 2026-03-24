import styled from "styled-components";
import "../../index.css";
import profile from "../../assets/profile/profile.jpeg";

export const AboutMe = styled.section`
  display: flex;
  width: 100dvw;
  height: 105dvh;

  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  margin-top: 13dvh;
  margin-left: 7%;

  color: #ffffff;
`;

export const YellowTitle = styled.span`
  font-family: sans-serif;
  color: #f2ff00;
`;

export const Text = styled.p`
  font-family: sans-serif;
  margin-top: 2dvh;
  margin-left: 7%;
  color: #ffffff;

  width: 40%;
`;

export const Image = styled.div`
  background-image: url(${profile});
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover; 
  width: 37%;
  height: 40%;

  position: relative;
  top: -22%;
  left: 55%;

  border-radius:20px;
`;
