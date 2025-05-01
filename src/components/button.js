import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.cta ? "green" : "blue")};
  color: white;
  padding: 8px, 16px;
  font-size: 16px;
  border: none;

  &:hover {
    background-color: ${(props) => (props.cta ? "darkgreen" : "darkblue")};
  }

  ${(props) =>
    props.outlined &&
    css`
      background-color: transparent;
      border: black solid 1px;
      color: black;
    `}
`;
