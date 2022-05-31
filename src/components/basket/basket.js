import { useContext } from "react";
import BasketContext from "../../context/basketcontext.js";
import {BasketCSS} from "../../css/basket/basket.js";
import BasketItem from "./basketitem.js";

export const Basket = () => {

  const {basket,totalAmount} = useContext(BasketContext);



  return (
    <BasketCSS.Rectangle>
      {
        basket?.map((item,index) => {
          
          return(
            <BasketItem key={index} item={item}/>
          )
        })
      }
    <BasketCSS.PriceContainer>
    {totalAmount}
    </BasketCSS.PriceContainer>

    </BasketCSS.Rectangle>
  );
};

export default Basket;
