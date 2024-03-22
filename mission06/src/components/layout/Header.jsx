import { memberState } from "@recoil/user/atoms.mjs";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

function Header() {
  const [user, setUser] = useRecoilState(memberState);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <header>
      <div>
        <h1>게시판</h1>
        {user ? (
          <p>
            {user.name}님? 안녕하세요?{" "}
            <button onClick={handleLogout}>LOGOUT</button>
          </p>
        ) : (
          <Link to="/user/login">LOGIN</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
