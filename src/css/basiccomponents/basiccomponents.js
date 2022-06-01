import styled from "styled-components";

export const HeaderCSS = {
  HeaderContainer: styled.div`
    background-color: #1976d2;
    border-bottom: 1px solid #e5e5e5;
    height: 76px;
    color: #ffffff;
    margin: -24px -24px 24px -24px;
    display: flex;
    align-items: center;
  `,

  CartDiv: styled.div`
    gap: 10px;
    font-size: 14px;
    align-items: center;
    position: absolute;
    right: 10%;
    font-weight: 600;
    letter-spacing: 0.16px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1400px) {
      right: 100px;

      color: #ffffff;
      border: 2px solid #ffffff;
      height: 40px;
      width: 100px;
      border-radius: 15px;
      cursor:pointer;
    }
  `,
};
