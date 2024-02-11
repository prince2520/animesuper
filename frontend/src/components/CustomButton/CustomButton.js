import styled from "styled-components";

import "./CustomButton.css";

const CustomButton = ({ children, width, backgroundColor, onClick }) => {
  
  const Button = styled.button`
    width: ${width};
    background-color: ${backgroundColor};

    &:hover {
      background-color: var(--text);
      :is(h1, h2, h3, h4, h5, h6, p) {
        color: ${backgroundColor};
      }
    }
  `;

  return (
    <Button
      onClick={onClick}
      className="flex-center cursor-btn custom-button"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
