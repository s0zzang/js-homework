import { Link, useParams } from "react-router-dom";

function BoardResult() {
  const { _id } = useParams();

  return (
    <main>
      <section>
        <p>등록되었습니다.</p>
        <hr />
        <div>
          <Link to={`/boards/${_id}`}>글확인</Link>
          <Link to="/boards/">목록</Link>
        </div>
      </section>
    </main>
  );
}

export default BoardResult;
