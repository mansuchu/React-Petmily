import React from "react";
import "../component/components/signup/SignUp.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { callRegistUserAPI } from "../api/FormAPICalls";
import { resetLoginUser } from "../modules/UserModule";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const result = useSelector((state) => state.userReducer);

  // 초기값 저장
  const [registUser, setRegistUser] = useState({
    name: "",
    password: "",
    pwcheck: "",
    email: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    setRegistUser({
      ...registUser,
      [e.target.name]: e.target.value,
    });
  };

  // 양식 제출 성공 시 실행
  useEffect(() => {
    // 등록 완료 확인 후 마이페이지로 이동 할건지???
    if (result.regist) {
      alert("회원가입이 완료되었습니다.");
      dispatch(resetLoginUser());
      navigate("/login");
    }
  }, [result]);

  // registUser 호출
  const onClickHandler = () => {
    // 입력값 유효성 검사

    if (registUser.password !== registUser.pwcheck) {
      alert("비밀번호 확인");
      return;
    }

    dispatch(callRegistUserAPI(registUser));
  };



  return (
    <section>
      <article>
        <div className="infoBox">
          <label htmlFor="name" className="SLabel">
            아이디&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              id="name"
              name="name"
              placeholder="사용하실 아이디를 작성하세요."
              value={registUser.name}
              onChange={onChangeHandler}
            />
          </label>
          <br />
          <label htmlFor="password" className="SLabel">
            비밀번호&nbsp;&nbsp;&nbsp;
            <input
              type="password"
              id="password"
              name="password"
              placeholder="사용하실 비밀번호를 작성하세요."
              value={registUser.password}
              onChange={onChangeHandler}
            />
          </label>
          <br />
          <label htmlFor="pwcheck" className="SLabel">
            비밀번호확인&nbsp;&nbsp;&nbsp;
            <input
              type="password"
              id="pwcheck"
              name="pwcheck"
              placeholder="비밀번호를 다시 한 번 작성하세요."
              value={registUser.pwcheck}
              onChange={onChangeHandler}
            />
          </label>
          <br />
          <label htmlFor="email" className="SLabel">
            이메일&nbsp;&nbsp;&nbsp;
            <input
              type="email"
              id="email"
              name="email"
              placeholder="사용하시는 이메일을 작성하세요."
              value={registUser.email}
              onChange={onChangeHandler}
            />
          </label>
          <br />
          <label htmlFor="phone" className="SLabel">
            전화번호&nbsp;&nbsp;&nbsp;
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="사용하시는 전화번호를 작성하세요."
              value={registUser.phone}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <br />
        <div className="buttonBox">
          <button className="completeBtn" onClick={onClickHandler}>
            작성완료&nbsp;&nbsp;&nbsp;
          </button>
          <button>
            <NavLink className="toLogin" to="/login">
              취소
            </NavLink>
          </button>
        </div>
      </article>
    </section>
  );
}
export default SignUp;
