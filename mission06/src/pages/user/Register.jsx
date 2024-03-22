import useCustomAxios from "@hooks/useCustomAxios.mjs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const errorStyle = { color: "red" };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post("/users", formData);
      alert(`${res.data.item.name}님, 가입이 완료되었습니다.`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "이메일 양식에 맞지 않습니다.",
            },
          })}
        />
        {<div style={errorStyle}>{errors?.email?.message}</div>}
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 입력해주세요.",
            },
          })}
        />
        {<div style={errorStyle}>{errors?.password?.message}</div>}
        <label htmlFor="name">이름</label>
        <input
          type="text"
          {...register("name", {
            required: "이름을 입력해주세요.",
          })}
        />
        {<div style={errorStyle}>{errors?.name?.message}</div>}
        <label htmlFor="type">회원 유형</label>
        <label htmlFor="user">
          <input
            type="radio"
            value="user"
            id="user"
            {...register("type", {
              required: "회원 유형을 선택해주세요.",
            })}
          />
          회원
        </label>
        <label htmlFor="seller">
          <input
            type="radio"
            value="seller"
            id="seller"
            {...register("type", {
              required: "회원 유형을 선택해주세요.",
            })}
          />
          관리자
        </label>
        {<div style={errorStyle}>{errors?.type?.message}</div>}
        <label htmlFor="phone">휴대폰 번호</label>
        <input
          type="text"
          {...register("phone", {
            required: "휴대폰 번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 입력해주세요.",
            },
          })}
        />
        {<div style={errorStyle}>{errors?.phone?.message}</div>}
        <label htmlFor="address">주소</label>
        <input
          type="text"
          {...register("address", {
            required: "주소를 입력해주세요.",
          })}
        />
        {<div style={errorStyle}>{errors?.address?.message}</div>}
        <button>가입</button>
      </form>
    </>
  );
}

export default Register;
