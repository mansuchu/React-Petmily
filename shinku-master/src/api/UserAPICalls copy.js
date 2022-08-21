
// import { request } from "./Api";
// import { getUserlist, registUser,login } from "../modules/UserModules";

// export function callGetUserListApi() {
//   console.log("getUserlist api calls...");

//   //미들웨어를 통한 비동기 처리
//   return async (dispatch, getState) => {
//     const result = await request("GET", "/User");
//     console.log("getUserList result : ", result);

//     // action 생성 함수에 결과 전달하며 dispatch 호출
//     dispatch(getUserlist(result));
//   };
// }

// export function callRegistUserAPI(user) {
//   console.log("registUser api calls...");

//   return async (dispatch, getState) => {
//     const result = await request("POST", "/user/", user);

//     dispatch(registUser(result));
//   };
// }

// // --------------구분선 위 현기, 아래 천웅 -----------------

// export function callLoginAPI(loginInfo) {
    
//   console.log('login api calls...');

//   /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
//   return async (dispatch, getState) => {
      
//       /* Api의 axios 처리 참조  */
//       const userList = await request('GET', '/user');

//       /* id와 password 일치 여부 확인 - 서버에서 이루어져야 하는 로직 */
//       const result = await userList.find(user => user.id === loginInfo.id && user.password === loginInfo.password);

//       console.log('login result : ', result);

//       /* action 생성 함수에 결과 전달하며 dispatch 호출 */
//       dispatch(login(result));

//   }
// }

