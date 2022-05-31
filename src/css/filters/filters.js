import styled from "styled-components";
import checkBoxWhite from "../../assets/icons/check.png";
import checkBoxBlue from "../../assets/icons/checkblue.png";

export const FilterCSS = {
  FilterContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  TypeText: styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    color: #697488;
    margin-bottom: 12px;

  `,

  Rectangle: styled.div`
    width: 296px;
    max-height: 210px;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
    border-radius: 2px;
    align-items: center;
    display: flex;
  `,

  InputTextBox: styled.input`
    ::placeholder {
      color: #a8a8a8;
    }
    box-sizing: border-box;
    border: 2px solid #e0e0e0;
    border-radius: 2px;

    width: 100%;
    height: 48px;
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
   
    display: flex;
    gap: 10px;
    height: 40px;
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
