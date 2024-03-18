import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../components/Style";
import TodoListItem from "./TodoListItem";
import { ReactCsspin } from "react-csspin";
import "react-csspin/dist/style.css";

const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6em;

  a {
    font-size: 16px;
    background: #fff;
    padding: 0.2em 0.4em;
    border: 1px solid;
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
  const axios = useAxiosInstance(); // 최상단 조건 피하려고 만든거다
  const [data, setData] = useState();
  const fetchList = async () => {
    const response = await axios.get(`todolist`);
    setData(response.data);
  };

  // 마운트 되면 최초 한번 목록 조회
  useEffect(() => {
    fetchList();
  }, []);
  // const { isLoading, data, error } = useAxios({ url: "/todolist" });

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`/todolist/${_id}`);
      alert("할일이 삭제된?");
      // api에서 목록 조회
      fetchList();
    } catch (err) {
      console.error(err);
      alert("할일 삭제에 실패한..");
    }
  };

  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />
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
        {/* {isLoading && <ReactCsspin color="black" />}
        {error && <p style={{ color: "#d92020" }}>{error.message}</p>} */}
        <UlStyled className="todolist">{itemList}</UlStyled>
      </div>
    </div>
  );
};

export default TodoList;
