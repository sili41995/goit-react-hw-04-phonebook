import styled from '@emotion/styled';

const List = styled.ul`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.span``;

const Button = styled.button`
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

const css = { List, Item, Label, Button };

export default css;
