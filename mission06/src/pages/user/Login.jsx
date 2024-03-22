import useCustomAxios from "@hooks/useCustomAxios.mjs";
import { memberState } from "@recoil/user/atoms.mjs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

function Login() {
  const setUser = useSetRecoilState(memberState);
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "c@c.com",
      password: 12345678,
    },
  });

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post("/users/login", formData);
      setUser({
        _id: res.data.item._id,
        name: res.data.item.name,
        token: res.data.item.token,
      });
      alert(`${res.data.item.name}님 로그인에 성공하였습니다.`);
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">이메일</label>{" "}
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "이메일 양식에 맞지 않습니다.",
            },
          })}
        />
        {<div style={{ color: "red" }}>{errors?.email?.message}</div>}
        <label htmlFor="password">비밀번호</label>{" "}
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요???",
            minLength: {
              value: 8,
              message: "8자리 이상 입력해주세요.",
            },
          })}
        />
        {<div style={{ color: "red" }}>{errors?.password?.message}</div>}
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

export default Login;
