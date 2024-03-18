import styled from "styled-components";

const TitleStyled = styled.h2`
  margin: 1em 0;
`;

const TodoStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  background: #deded1;
  padding: 1.5em;
  border-radius: 0.6em;
`;

const BtnWrStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.4em;
  margin-top: 1em;
  margin-left: auto;

  a,
  button {
    color: var(--main-color);
    background: #fff;
    border: 1px solid;
    padding: 0.4em 0.6em;
    border-radius: 0.4em;
  }
`;

const InputWrStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6em;

  & + div {
    margin-top: 0.4em;
  }
`;

export const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

export const Todo = ({ children }) => {
  return <TodoStyled>{children}</TodoStyled>;
};

export const BtnWr = ({ children }) => {
  return <BtnWrStyled>{children}</BtnWrStyled>;
};

export const InputWr = ({ children }) => {
  return <InputWrStyled>{children}</InputWrStyled>;
};
