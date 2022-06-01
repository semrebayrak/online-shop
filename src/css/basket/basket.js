import styled from "styled-components";

export const BasketCSS = {
  Rectangle: styled.div`
    position: fixed;
    right: 48px;
    background-color: #ffffff;
    flex-direction: column;
    top: 8vw;

    width: 275px;

    border: 8px solid #1976d2;
    border-radius: 2px;
    display: flex;
    @media only screen and (max-width: 1400px) {
      top: 66px;
      width: 275px;
      right: 20px;
     
      display: ${(props) => (props.mobileDisplay ? "flex" : "none")};
    }
  `,
  PriceContainer: styled.div`
    position: relative;
    left: 60%;
    top: 16px;
    color: #1976d2;
    width: 80px;
    height: 51px;
    font-weight: 600;
    border: 2px solid #1976d2;
    padding: 0;
    text-align: center;
    line-height: 51px;
    margin-bottom: 8px;
    @media only screen and (max-width: 1050px) {
      width: 100%;
      left: 0%;
    }
  `,
};

export const BasketItemCSS = {
  ItemContainer: styled.div`
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    height: 85px;
    padding: 0;
  `,
  ItemInfo: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    width 50%;
  `,
  CountOperations: styled.div`
    display: flex;
    flex-direction: row;
    color: #1976d2;
    line-height: 32px;
    gap: 11px;
    font-size: 25px;
    font-weight: 600;
  `,
  Count: styled.div`
    font-size: 15px;
    background-color: #1976d2;
    color: #ffffff;
    font-weight: 600;
    padding: 0;
    height: 32px;
    width: 32px;
    text-align: center;
  `,

  ChangeAmount: styled.div`
    text-align: center;
    padding: 0;
    cursor: pointer;
  `,
};
