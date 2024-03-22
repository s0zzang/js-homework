import useCustomAxios from "@hooks/useCustomAxios.mjs";
import { memberState } from "@recoil/user/atoms.mjs";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

const BoardDetail = () => {
  const axios = useCustomAxios();
  const [data, setData] = useState();
  const { _id } = useParams();
  const navigate = useNavigate();
  const user = useRecoilValue(memberState);

  const fetchDetail = async () => {
    const res = await axios.get(`/posts/${_id}`);
    setData(res.data);
  };

  const handleDelete = async () => {
    await axios.delete(`/posts/${_id}`);
    navigate("/boards");
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const item = data?.item;

  return (
    <main>
      {data && (
        <section>
          <div>작성자 : {item.user.name}</div>
          <div>제목 : {item.title}</div>
          <div>
            <span>내용</span>
            <div>
              <textarea rows="15" cols="50" readOnly value={item.content} />
            </div>
            <hr />
          </div>
          <div>
            <Link to="/boards">목록</Link>
            {user?._id === item.user._id && (
              <button type="button" onClick={handleDelete}>
                삭제
              </button>
            )}
          </div>
        </section>
      )}
      <Outlet />
    </main>
  );
};

export default BoardDetail;
