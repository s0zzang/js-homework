import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { BtnWr, InputWr, Title, Todo } from "../components/Style";

const TodoEdit = () => {
  const { _id } = useParams();
  const navigate = useNavigate(); // 위치 이동
  const axios = useAxiosInstance();
  const { register, handleSubmit, reset } = useForm();
  const [item, setItem] = useState();

  const fetchDetail = async () => {
    const response = await axios.get(`/todolist/${_id}`);
    setItem(response.data.item);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  useEffect(() => {
    if (item) {
      console.log(reset);
      reset({ title: item.title, content: item.content, done: item.done });
    }
  }, [item]);

  const onSubmit = async (formData) => {
    try {
      await axios.patch(`/todolist/${_id}`, formData);
      alert("할일이 수정된?");
      // navigate("..", { relative: "path" }); // 상대경로 사용
      navigate(`/list/${_id}`); // 경로 사용
    } catch (err) {
      console.error(err);
      alert("할일 수정에 실패한..");
    }
  };

  return (
    <div id="main">
      <Title>할일 수정</Title>
      {item && (
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
            <InputWr>
              <label htmlFor="done">완료 </label>
              <input type="checkbox" id="done" {...register("done")} />
            </InputWr>
            <BtnWr>
              <button type="submit">수정</button>
              <button type="reset" onClick={() => navigate(-1)}>
                취소
              </button>
            </BtnWr>
          </form>
        </Todo>
      )}
    </div>
  );
};

export default TodoEdit;
