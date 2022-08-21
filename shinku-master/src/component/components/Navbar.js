// import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
//import "../../../src/App.css";
import '../form/FormModule.css';
import { resetLoginUser } from "../../modules/UserModule";

function Navbar() {
  
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /* 로그아웃 호출 시 localStorage 저장 값 삭제, userReducer 값 리셋, 루트로 이동  */
    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        dispatch(resetLoginUser());
        navigate('/prodect');
    }
  return (
    <div class="nav-wrap">
      <div className="nav-left">
          <ul>
              <li><a href="/">PETMILY</a></li>
          </ul>
      </div>
      
      <div className="nav-right">
        <ul>
          <li>
            <NavLink to="/Prodect">
              <img
                src="https://www.karma.or.kr/images_new/common/icon_quickmenu01.png"
                alt="동물아이콘"
              />
              유실유기동물
            </NavLink>
          </li>
          <li>
            <NavLink to="/MyPage">
              <img
                src="https://www.karma.or.kr/images_new/common/icon_quickmenu02.png"
                alt="홈아이콘"
              />
              마이페이지
            </NavLink>
          </li>
           <li>
            { !loginStatus ? (
                        <li><NavLink to='/login'>
                          <img src="https://www.karma.or.kr/images_new/common/icon_quickmenu03.png"
                        alt="로그인아이콘"/>로그인</NavLink></li>
                    ) : (
                        <li onClick={ logoutHandler }><a href=""><img src="https://www.karma.or.kr/images_new/common/icon_quickmenu03.png"/>로그아웃</a></li>
                    )
                }
          </li>
          <li>
            <NavLink to="/SingUp">
              <img
                src="https://www.karma.or.kr/images_new/common/icon_quickmenu03.png"
                alt="회원가입아이콘"
              />
              회원가입
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
