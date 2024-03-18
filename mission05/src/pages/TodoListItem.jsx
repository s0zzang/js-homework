import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const LiStyled = styled.li`
  display: flex;
  gap: 0.6em;
  align-items: center;
  background: #deded1;
  padding: 1.2em 0.8em;
  border-radius: 0.4em;

  span {
    color: #999;
  }
  a {
    color: #333;
    padding-right: 0.6em;
  }
  .btn-delete {
    font-size: 13px;
    color: #333;
    background: #f2f2f2;
    padding: 0.2em 0.4em;
    margin-left: auto;
    border-radius: 0.3em;
  }
`;

const TodoListItem = ({ item, handleDelete }) => {
  return (
    <LiStyled key={item._id}>
      <span>{item._id}</span>
      <Link to={`/list/${item._id}`}>
        {item.done ? <s>{item.title}</s> : item.title}{" "}
      </Link>
      <button
        type="button"
        className="btn-delete"
        onClick={() => handleDelete(item._id)}
      >
        삭제
      </button>
    </LiStyled>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string,
    done: PropTypes.bool,
  }),
  handleDelete: PropTypes.func,
};

export default TodoListItem;
