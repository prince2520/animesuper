import styled from "styled-components";

import "./CustomButton.css";


const Button = styled.button`
  width: ${(props) => props.$width};
  background-color: ${(props) => props.$backgroundColor};

  &:hover {
    background-color: var(--text);

    :is(h1, h2, h3, h4, h5, h6, p) {
      color: ${(props) => props.$backgroundColor};
    }
  }
`;



const CustomButton = ({ children, width, backgroundColor, onClick }) => {


  return (
    <Button
      $width={width}
      $backgroundColor={backgroundColor}
      onClick={onClick}
      className="flex-center cursor-btn custom-button"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
