import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing * 4}px;
  margin-top: ${({ theme }) => theme.spacing * 4}px;
  margin-bottom: ${({ theme }) => theme.spacing * 4}px;
  border: 1px solid black;
  display: inline-block;
  width: 300px;
  & div {
    margin-bottom: ${({ theme }) => theme.spacing * 3}px;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const Error = styled.p`
  color: red;
`;

export const Input = styled.input`
  display: block;
`;
