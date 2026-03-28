import styled from "styled-components";
import photo_pc from "../../assets/home/foto_home_700_pc.jpg";
import photo_cell from "../../assets/home/foto_home_700_cell.jpg";

export const Image = styled.section`
  background-image: url(${photo_cell});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  min-height: 100dvh;

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
  font-family: sans-serif;
  font-weight: bold;
  font-size: clamp(2.5rem, 10vw, 6rem);
  text-align: center;
`;

export const Detail = styled.span`
  color: #bcbcbc;
  font-family: sans-serif;
  font-size: clamp(1rem, 4vw, 2.5rem);
  text-align: center;
  margin-top: 5px;
`;