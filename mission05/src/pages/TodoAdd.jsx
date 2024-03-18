import useAxiosInstance from "@hooks/useAxiosInstance";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BtnWr, InputWr, Title, Todo } from "../components/Style";

const TodoAdd = () => {
  const navigate = useNavigate();
  const axios = useAxiosInstance();
  const { register, handleSubmit, reset, setFocus } = useForm();

  const onSubmit = async (formData) => {
    try {
      await axios.post("/todolist", formData);
      alert("할일이 추가된?");
      setFocus("title");
      reset();
    } catch (err) {
      console.error(err);
      alert("할일 추가에 실패했슴 ...");
    }
  };

  return (
    <div id="main">
      <Title>할일 추가</Title>
      <Todo className="todo">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWr>
            <label htmlFor="title">제목 </label>
            <input
              type="text"
              id="title"
              autoFocus
              {...register("title", { request: "제목 입력 바람요" })}
            />
          </InputWr>
          <InputWr>
            <label htmlFor="content">내용 </label>
            <textarea
              id="content"
              cols="25"
              rows="8"
              {...register("content", { request: "내용 입력 바람요" })}
            />
          </InputWr>
          <BtnWr>
            <button type="submit">추가</button>
            <button type="reset" onClick={() => navigate(-1)}>
              취소
            </button>
          </BtnWr>
        </form>
      </Todo>
    </div>
  );
};

export default TodoAdd;
