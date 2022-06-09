import { useContext, useEffect, useState } from "react";
import BasketContext from "../../context/basketcontext.js";
import { BasketCSS } from "../../css/basket/basket.js";
import BasketItem from "./basketitem.js";

export const Basket = () => {
  const {basketLocal, basket,totalAmount,mobileDisplay } = useContext(BasketContext);


  return (
    <BasketCSS.Rectangle
      mobileDisplay={mobileDisplay}
    >
      {basketLocal?.length>0 ?
      basketLocal?.map((item, index) => {
        return <BasketItem key={index} item={item} />;
      }):
      "Your basket is empty"
      }
      <BasketCSS.PriceContainer>{totalAmount}</BasketCSS.PriceContainer>
    </BasketCSS.Rectangle>
  );
};

export default Basket;
