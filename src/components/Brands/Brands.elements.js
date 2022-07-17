import styled from "styled-components";
import { Container } from "../../globalStyle";

export const BrandsSec = styled.div`
  min-height: 146px;
  background: #1b2430;
  display: flex;
  align-items: center;
`;

export const BrandsContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 890px) {
    justify-content: space-evenly;
  }
  ${Container}
`;

export const BrandsDiv = styled.div``;

export const BrandsImg = styled.img``;
