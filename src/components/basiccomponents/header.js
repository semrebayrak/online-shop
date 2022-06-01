import { useContext } from "react";
import BasketContext from "../../context/basketcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { HeaderCSS } from "../../css/basiccomponents/basiccomponents";





const Header = () => {
  const { totalAmount,mobileDisplay,setMobileDisplay } = useContext(BasketContext);
  return (
    <HeaderCSS.HeaderContainer>
      <HeaderCSS.CartDiv onClick={() => setMobileDisplay(!mobileDisplay)}>
        <FontAwesomeIcon icon={faShoppingBag} />
        {totalAmount}
      </HeaderCSS.CartDiv>
    </HeaderCSS.HeaderContainer>
  );
};

export default Header;
