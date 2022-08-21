import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { callLoginAPI } from '../../api/UserAPICalls';
import { resetLoginUser } from "../../modules/UserModule";
// import SingUp from '../../pages/SignUp';
import '../../component/components/login/Login.css';

function LoginForm() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userReducer);
    const loginStatus = !!localStorage.getItem('isLogin');

    /* input 태그 입력 값 state 관리 */
    const [loginInfo, setLoginInfo] = useState(
        {
            name : '',
            password : ''
        }
    );

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.name] : e.target.value
            }
        );
    }

    /* 로그인 버튼 클릭 시 동작 */
    const onClickHandler = () => {

        /* loginInfo에 대한 유효성 검사 후 호출 */
        dispatch(callLoginAPI(loginInfo));

    }

    /* 로그인 후 성공 실패 동작 */
    useEffect(
        () => {
            
            if(result?.message) {
                alert('아이디와 비밀번호를 확인해주세요');
                setLoginInfo(
                    {
                        name : '',
                        password : ''
                    }
                );
                dispatch(resetLoginUser());    
            } else if(loginStatus){
                navigate('/prodect');
            } 
        }, 
        [result]
    );
  return (
    <>
      
      <section>
        <article>
          <label for="name" className="LLabel">
            아이디&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              id="name"
              name="name"
              value={loginInfo.id}
              placeholder="아이디를 입력해주세요"            
             onChange={ onChangeHandler }
            />
          </label>
          <br />
          <label for="password" className="LLabel">
            비밀번호&nbsp;&nbsp;&nbsp;
            <input
              type="password"
              id="password"
              name="password"
              value={loginInfo.password}
              placeholder="비밀번호를 입력해주세요."        
              onChange={ onChangeHandler }
            />
          </label>
          <br />
          <button
           className='button'
           onClick={ onClickHandler }
          >
            로그인
          </button>
          <NavLink className="toSignup" to="../SingUp">
            회원이 아니신가요?
          </NavLink>
        </article>
      </section>
    </>
  );
}

export default LoginForm;
