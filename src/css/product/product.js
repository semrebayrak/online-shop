import styled from "styled-components";

export const ProductCSS = {
  ProductsContainer: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    position: relative;
    left: 3%;
    padding: 0;
    width: 51%;
    
    @media (max-width: 1400px) {
      max-width: none;
      left: 4%;
      width: 67%;
    }
    @media (max-width: 1050px) {
      width: 55%;
    }
    @media (max-width: 860px) {
      width: 52%;
    }
    @media (max-width: 805px) {
      top: 40px;
      left: 0;
      width: 100%;
      margin: auto;
      position: relative;
    }
  `,
  ProductsList: styled.div`
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    background-color: #ffffff;
    column-gap: 5%;
    row-gap: 25px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, max(20%, 125px));

    @media (max-width: 1050px) {
      column-gap: 7%;

      grid-template-columns: repeat(auto-fit, 134px);
      min-width: 200px;
    }
    @media (max-width: 950px) {
      grid-template-columns: repeat(auto-fit, 115px);
    }
    @media (max-width: 870px) {
      grid-template-columns: repeat(auto-fit, 170px);
    }
    @media (max-width: 805px) {
      max-width: none;
      grid-template-columns: repeat(auto-fit, max(40%, 150px));
    }
    @media (max-width: 480px) {
      max-width: none;
      grid-template-columns: repeat(auto-fit, 80%);
    }
  `,
  SinlgeProductContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
  `,
  ImageContainer: styled.div`
    padding: 0;
    background: #fefefe;
    border: 1px solid #f3f0fe;
    border-radius: 12px;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    flex-direction: column;
  `,
  InfoContainer: styled.div`
    width: 100%;
    padding: 12px 0px 0px 0px;
  `,

  Price: styled.p`
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #1976d2;
  `,
  TextInfo: styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #191919;
    width: 120%;
    height: 20px;
    overflow: hidden;
  `,

  Button: styled.button`
    width: 100%;
    height: 30%;
    left: 436px;
    top: 428px;
    color: white;
    background: #1976d2;
    border-radius: 2px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
  `,
};

export const ProductTypesCSS = {
  ButtonClicked: styled.button`
    width: 61px;
    height: 30px;
    background: ${(props) => (props.active ? "#1976D2" : "#f2f0fd")};
    color: ${(props) => (props.active ? "#f2f0fd" : "#1976d2")};

    border: none;
    padding: 0;
  `,

  Container: styled.div`
    gap: 10px;
    padding-left: 0;
    display: flex;
    flex-direction: row;
  `,
};

export const ProductPaginationCSS = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 600;

    align-items: center;
    font-size: 14px;
  `,

  PageDirection: styled.div`
    align-items: center;
    display: flex;
    gap: 7px;
    :hover {
      color: #1976d2;
    }
  `,
  PageButton: styled.button`
    width: 32px;
    height: 40px;
    border: none;
    background-color: transparent;
    color: ${(props) => (props.active ? "#1976D2" : "#697488")};
    font-weight: 600;
    :hover {
      background-color: #1976d2;
      color: #ffffff;
    }
  `,
};
