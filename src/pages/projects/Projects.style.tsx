import styled from "styled-components";

export const Body = styled.section`
  width: 100%;
  min-height: 100dvh;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: clamp(2.5rem, 10vw, 4.5rem);
  margin-top: 80px;
  margin-bottom: 20px;
  margin-left: 7%;
  color: #f2ff00;
`;

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 1.2rem;
  margin-left: 7%;
  margin-bottom: 40px;
  width: 85%;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 1.1rem;
    width: 90%;
  }
`;

export const ProjectWrapper = styled.div`
  width: 93%;
  margin-left: 7%;
  display: flex;
  gap: 25px;
  overflow-x: auto;
  padding-bottom: 30px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 8px;
    display: block;
  }
  &::-webkit-scrollbar-track {
    background: #1f1f1f;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f2ff00;
    border-radius: 10px;
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }

  scrollbar-width: thin;
  scrollbar-color: #f2ff00 #1f1f1f;
`;

export const DisplayBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 320px;
  height: 520px;
  border: 2px solid #f2ff00;
  border-radius: 20px;
  scroll-snap-align: start;
  background-color: #1f1f1f;
  transition: transform 0.3s;


  @media (max-width: 400px) {
    flex: 0 0 280px;
  }
`;

export const Image = styled.div<{ $ImageProps: string }>`
  background-image: url(${(props) => props.$ImageProps});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 92%;
  height: 200px;
  margin: 15px auto;
  border-radius: 12px;
`;

export const Detail = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
  margin: 10px auto;
  width: 85%;
  height: 100px;
  overflow-y: auto;
  color: #ffffff;
  line-height: 1.4;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f2ff00;
    border-radius: 10px;
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
`;

export const Networks = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  margin-bottom: 10px;
`;

export const Button = styled.a`
  border: 2px solid #f2ff00;
  border-radius: 12px;
  background-color: transparent;
  color: #ffff;
  height: 45px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;


`;