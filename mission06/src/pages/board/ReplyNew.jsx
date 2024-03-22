import useCustomAxios from "@hooks/useCustomAxios.mjs";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

ReplyNew.propTypes = {
  fetchList: PropTypes.func.isRequired,
};

function ReplyNew({ fetchList }) {
  const { register, handleSubmit, reset } = useForm();
  const axios = useCustomAxios();
  const { _id } = useParams();

  const onSubmit = async (formData) => {
    await axios.post(`/posts/${_id}/replies`, formData);
    fetchList();
    reset();
  };

  return (
    <div>
      <h4>새로운 댓글을 추가하세요.</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <textarea
            name="comment"
            rows="3"
            cols="40"
            placeholder="내용을 입력하세요."
            {...register("comment", { minLength: 2 })}
          ></textarea>
        </div>
        <button type="submit">댓글 등록</button>
      </form>
    </div>
  );
}

export default ReplyNew;
