import styled from "styled-components";
import checkBoxWhite from "../../assets/icons/check.png";
import checkBoxBlue from "../../assets/icons/checkblue.png";

export const FilterCSS = {
  SearchOptions: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0;
    float:left; 
    @media (max-width: 805px) {
      width: 100%;
      margin: auto;
      position: static;
      flex-direction: row;
    display: flex;

      justify-content: space-between;
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }
  `,
  Filters: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0;
    float:left; 
    
  `,
  FilterContainer: styled.div`
  margin-bottom: 24px;
  display:inline;
    flex-direction: column;
    width: 290px;
    position: relative;
    left: 10px;
    display: flex;
    padding:0;
    @media (max-width: 805px) {
      width: 44%;
      left: 0;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  `,
  SortButton: styled.button`
    display: none;
    color: #f2f0fd;
    padding: 10px;
    background: #1976d2;
    border: none;
    @media (max-width: 805px) {
      gap: 10px;
      display: flex;
      position: absolute;
      top:475px;
      left:140px;
      z-index:99;

    }
    @media (max-width: 600px) {
      top:785px;
      
    }
  `,

  TypeText: styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    color: #697488;
    margin-bottom: 12px;
    @media (max-width: 805px) {
      display: ${(props) => props.hide && "none"};
    }
  `,

  Rectangle: styled.div`
    max-width: 300px;
    min-width: 220px;

    max-height: 255px;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
    border-radius: 2px;
    align-items: center;
    display: flex;
    @media (max-width: 805px) {
      min-width: ${(props) => (props.absoluteOnMobile ? "250px" : "0px")};

      display: ${(props) => (props.hide ? "none" : "flex")};
      position: ${(props) => props.absoluteOnMobile && "absolute"};
      z-index: ${(props) => props.absoluteOnMobile && "9"};
      top: ${(props) => props.absoluteOnMobile && "410px"};
      border-width: ${(props) => props.absoluteOnMobile && "0px 1px 1px 1px"};
      border-style: ${(props) => props.absoluteOnMobile && "solid"};
      box-shadow: ${(props) =>
        props.absoluteOnMobile && "0px 0px 10px 0px rgba(0,0,0,0.75)"};
    }
    @media (max-width: 600px) {
      top: ${(props) => props.absoluteOnMobile && "720px"};
    }
  `,

  InputTextBox: styled.input`
    ::placeholder {
      color: #a8a8a8;
    }
    border: 2px solid #e0e0e0;
    border-radius: 2px;

    width: 87%;
    max-height: 18px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    padding: 15px;
    margin-bottom: 20px;
  `,

  ListItem: styled.li`
    padding: 0;
    display: flex;
    gap: 10px;
    min-height: 40px;
    align-items: center;
  `,
  ListItemName: styled.p`
    width: 80%;
  `,

  CheckBoxSquared: styled.input`
    :checked {
      background-color: #1976d2;
      color: white;
      background-image: url(${checkBoxWhite});
    }
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    width: 22px;
    height: 22px;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    border-radius: 2px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  `,
  CheckBoxRounded: styled.input`
    :checked {
      outline: 2px solid #1976d2;
      background-image: url(${checkBoxBlue});
      color: white;
    }
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    width: 22px;
    height: 22px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 2px solid #dfdee2;
    border-radius: 17.5px;
  `,

  ItemNumber: styled.span`
    color: #a8a8a8;
  `,

  Ul: styled.ul`
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: #e0e0e0;
      border-radius: 22px;
    }
    ::-webkit-scrollbar-track-piece:end {
      background: transparent;
      margin-bottom: 30px;
    }
    width: 100%;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
  `,
};

export default FilterCSS;
