import styled from "styled-components";

export const BasketCSS = {
  Rectangle: styled.div`
    position: absolute;
    left: 72.22%;
    background-color: #ffffff;
    flex-direction: column;
    top: 27.93%;
    width: 296px;
    border: 8px solid #1976d2;
    border-radius: 2px;
    display: flex;
  `,
  PriceContainer: styled.div`
    position: relative;
    left: 63%;
    top: 16px;
    color: #1976d2;
    width: 92px;
    height: 51px;
    font-weight: 600;
    border: 2px solid #1976d2;
    padding: 0;
    text-align: center;
    line-height: 51px;
    margin-bottom: 8px;
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
    justify-content: space-between;
  `,
  ItemInfo: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
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
    cursor:pointer;
  `,
};
