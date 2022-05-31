import styled from "styled-components";


export const ProductCSS = {
  ProductsContainer: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    position: absolute;
    left: 416px;
    top: 203px;
  `,
  ProductsList: styled.div`
    display: grid;
    background-color: #ffffff;
    grid-gap: 24px;
    grid-template-columns: 200px 200px 200px 200px;
  `,
  SinlgeProductContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
  `,
  ImageContainer: styled.div`
    background: #fefefe;
    border: 1.17666px solid #f3f0fe;
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
  `,

  Button: styled.button`
    width: 100%;
    height: 40%;
    left: 436px;
    top: 428px;
    color: white;
    background: #1976d2;
    border-radius: 2px;
    border: none;
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
