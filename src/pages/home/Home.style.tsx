import styled from "styled-components";
import photo_pc from "../../assets/home/foto_home_700_pc.jpg";
import photo_cell from "../../assets/home/foto_home_700_cell.jpg";
import "../../index.css";

export const Image = styled.section`
  background-image: url(${photo_cell});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100dvh;
  width: 100dvw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 550px) {
    background-image: url(${photo_pc});
  }
`;

export const Name = styled.span`
  color: #ffffff;
  font-size: 10dvw;
  @media (min-width: 550px) {
    font-size: 8dvw;
  }
`;

export const Detail = styled.span`
  color: #bcbcbc;
  font-size: 5dvw;
  font-family: sans-serif;

  margin-top: -1dvw;
  margin-bottom: -1dvw;

  @media (min-width: 550px) {
    font-size: 3dvw;

    margin-top: -1dvw;
    margin-bottom: -1.3dvw;
  }
`;
