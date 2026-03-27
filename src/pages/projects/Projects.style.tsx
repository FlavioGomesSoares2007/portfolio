import styled from "styled-components";

export const Body = styled.section`
  width: 99dvw;
  height: 80dvh;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  margin-top: 26dvh;
  margin-bottom: 2dvh;
  margin-left: 7%;

  color: #f2ff00;
`;

export const ProjectWrapper = styled.div`
  background-color: transparent; 
  width: 92dvw;
  height: 72dvh;
  margin-left: 7%;

  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 15px;

  &::-webkit-scrollbar {
    height: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: #1f1f1f; 
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f2ff00; 
    border-radius: 10px;
    border: 2px solid #1f1f1f;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #d8e600; 
  }

  scrollbar-width: thin;
  scrollbar-color: #f2ff00 #1f1f1f;
`;

export const DisplayBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 40dvb;

  width: 50dvb;
  height: 68dvb;

  border: 2px solid #f2ff00;
  border-radius: 5%;

  margin-top: 1px;

 
`;

export const Image = styled.div<{ $ImageProps: string }>`
  background-image: url(${(props) => props.$ImageProps});
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;

  width: 30dvb;
  height: 25dvb;
  margin: 4% auto;

  border-radius: 5%;
`;

export const Detail = styled.p`
  font-family: sans-serif;

  font-size: 80%;

  margin: 5% auto;
  width: 76%;
  height: 25%;
  color: #ffffff;
`;

export const Networks = styled.div`
  height: 18dvb;
  width: 24dvb;

  position: relative;
  margin: 4% auto 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const Button = styled.a`
  border: 2px, solid, #f2ff00;
  border-radius: 15px;

  background-color: #1f1f1f;
  color: #ffff;

  height: 5dvh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  cursor: pointer;
`;
