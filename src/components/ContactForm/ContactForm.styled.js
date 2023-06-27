import styled from '@emotion/styled';
const Label = styled.label``;

const Button = styled.button`
  width: 200px;
  height: 30px;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-weight: 700;
`;

const css = { Label, Button, ErrorText };

export default css;
