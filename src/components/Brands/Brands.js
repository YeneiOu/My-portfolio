import React from "react";
import { BrandsData } from "../Data/BrandsData";

import {
  BrandsSec,
  BrandsContainer,
  BrandsDiv,
  BrandsImg,
} from "./Brands.elements";

const Brands = () => {
  return (
    <>
      <BrandsSec>
        <BrandsContainer>
          {BrandsData.map((BrandsData, index) => {
            return (
              <BrandsDiv key={index}>
                <BrandsImg src={BrandsData.img} />
              </BrandsDiv>
            );
          })}
        </BrandsContainer>
      </BrandsSec>
    </>
  );
};

export default Brands;
