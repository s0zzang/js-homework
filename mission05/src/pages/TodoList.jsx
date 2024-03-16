import { Link } from "react-router-dom";
import useAxios from "@hooks/useAxios";
import TodoListItem from "./TodoListItem";
import { ReactCsspin } from "react-csspin";
import "react-csspin/dist/style.css";
import styled from "styled-components";
import Title from "../components/Title";

const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  a {
    font-size: 16px;
    background: #fff;
    padding: 0.4em 0.6em;
    border: 1px solid #ccc;
    border-radius: 0.3em;
  }
`;
const SearchStyled = styled.div`
  display: flex;
  gap: 0.4em;
  margin: 10px 0 20px;

  button {
    padding: 0 1em;
    background-color: var(--main-color);
    color: #fff;
    border: none;
  }
`;
const UlStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1em;
  margin-top: 1em;
`;

const TodoList = () => {
  const { isLoading, data, error } = useAxios({ url: "/todolist?delay=1000" });
  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} />
  ));

  return (
    <div id="main">
      <TitleStyled className="title">
        <Title>할일 목록</Title>
        <Link to="/add">추가</Link>
      </TitleStyled>
      <div className="todo">
        <SearchStyled className="search">
          <input type="text" autoFocus />
          <button type="button">검색</button>
        </SearchStyled>
        {isLoading && <ReactCsspin color="black" />}
        {error && <p style={{ color: "#d92020" }}>{error.message}</p>}
        <UlStyled className="todolist">{itemList}</UlStyled>
      </div>
    </div>
  );
};

export default TodoList;
