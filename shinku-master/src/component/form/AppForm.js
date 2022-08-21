import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collRegistFormAPI } from '../../api/FormAPICalls';
import './FormModule.css';

function AppForm() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.formReducer);


  // 초기값 설정
  const [registForm, setRegistForm] = useState(
      {
          id: 0,
          userName: '',
          userBirth: '',
          userPhone: '',
          manageNumber: '',
          adoptReason: '',
          after: '',
      }
  );

  const onChangeHandler = (e) => {

      let name = e.target.name;
      let value = e.target.value;

      // json에 저장될 데이터 타입 맞추기 위한 형변환 구문
      switch(name) {
          case 'familyAgree' :
              var fobj = document.getElementsByName("familyAgree");
              fobj.value = !!fobj.value;
              break;
          case 'AdoptExperience' :
              var aobj = document.getElementsByName("AdoptExperience");
              aobj.value = !!aobj.value;
              break;
          case 'havePets' :
              var hobj = document.getElementsByName("havePets");
              hobj.value = !!hobj.value;
              break;
          case 'house' :
              var hobj = document.getElementsByName("house");
              for(let i=0; i<hobj.length; i++){
                  hobj[i].value = !!value;
              }
              break;
          case 'surgeryAgree' :
              var sobj = document.getElementsByName("surgeryAgree");
              sobj.value = !!sobj.value;
              break;
      }

      setRegistForm(
          {
              ...registForm,
              [name] : value
          }
      );
  }


  // 양식 제출 성공 시 실행
  useEffect(
      () => {
          if(result.regist){
              alert('신청이 완료되었습니다.');
              window.location.reload();   //새로고침
          } 
      },
      [result]
  );


    // 하단 주석 코드보다 조금 더 효율적인 코드
    // registForm 호출  + registForm input 누락 여부
    const onClickHdandler = () => {

        let msg = '';
        
        if(registForm.userName === ''){
            msg = '신청자명이 누락되었습니다.';
        } else if(registForm.userBirth === ''){
            msg = '생년월일이 누락되었습니다.';
        } else if(registForm.userPhone === ''){
            msg = '연락처가 누락되었습니다.';
        } else if(registForm.manageNumber === ''){
            msg = '일련(관리)번호가 누락되었습니다.';
        } else if(registForm.adoptReason === ''){
            msg = '입양사유가 누락되었습니다.';
        } else if(!registForm.familyAgree){
            msg = '가족동의 여부를 체크해주세요';
        } else if(!registForm.AdoptExperience){
            msg = '반려동물 입양 경험을 체크해주세요.';
        } else if(!registForm.havePets){
            msg = '반려동물 소유 여부를 체크해주세요.';
        } else if(!registForm.house){
            msg = '주거 형태를 체크해주세요.';
        } else if(registForm.after === ''){
            msg = '이사, 해외로 이주 시에 대한 답변이 누락되었습니다.';
        } else if(!registForm.surgeryAgree){
            msg = '중성화 수술 동의 여부에 체크해주세요.';
        }

        if(msg){
            alert(msg);
            return;
        }

        dispatch(collRegistFormAPI(registForm));

    }

 
  // registForm 호출  + registForm input 누락 여부
//   const onClickHdandler = () => {

//       if(registForm.userName === ''){
//           alert("신청자명이 누락되었습니다.");
//           return;
//       } else if(registForm.userBirth === ''){
//           alert("생년월일이 누락되었습니다.");
//           return;
//       } else if(registForm.userPhone === ''){
//           alert("연락처가 누락되었습니다.");
//           return;
//       } else if(registForm.manageNumber === ''){
//           alert("일련(관리)번호가 누락되었습니다.");
//           return;
//       } else if(registForm.adoptReason === ''){
//           alert("입양사유가 누락되었습니다.");
//           return;
//       } else if(!registForm.familyAgree){
//           alert("가족동의여부를 체크해주세요.");
//           return;
//       } else if(!registForm.AdoptExperience){
//           alert("반려동물 입양 경험을 체크해주세요");
//           return;
//       } else if(!registForm.havePets){
//           alert("반려동물 소유 여부를 체크해주세요");
//           return;
//       } else if(!registForm.house){
//           alert("주거 형태를 체크해주세요");
//           return;
//       } else if(registForm.after === ''){
//           alert("이사, 해외로 이주 시 에 대한 답변이 누락되었습니다.");
//           return;
//       } else if(!registForm.surgeryAgree){
//           alert("중성화 수술 동의 여부에 체크해주세요.");
//           return;
//       }

//       dispatch(collRegistFormAPI(registForm));
//   }

 
  

  return(

          <div class="formMain">
           
              <hr/>
              <br/>
              <div>
                  <strong>신청자&nbsp;&nbsp;&nbsp;&nbsp;</strong>&nbsp;&nbsp;&nbsp;
                  <input
                      type="text"
                      class='inputBox'
                      name="userName"
                      value={registForm.userName}
                      onChange={onChangeHandler}
                      placeholder=" 신청자를 입력하세요"
                  />
              </div>
              <br/><br/>
              <div>
                  <strong>생년월일</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                      type="text"
                      class='inputBox'
                      name="userBirth"
                      value={registForm.userBirth}
                      onChange={onChangeHandler}
                      placeholder=" Ex) 1900-10-23"
                  />
              </div>
              <br/><br/>
              <div>
                  <strong>연락처&nbsp;&nbsp;&nbsp;</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                      type="tel"
                      class='inputBox'
                      name="userPhone"
                      value={registForm.userPhone}
                      onChange={onChangeHandler}
                      placeholder=" 연락처를 입력하세요"
                  />
              </div>
              <br/><br/>
              <hr/>
              <br/>
              <div>
                  <strong>일련(관리)번호</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                      type="number"
                      class='inputBox'
                      name="manageNumber"
                      value={registForm.manageNumber}
                      onChange={onChangeHandler}
                      placeholder=" 일련번호를 입력하세요"
                  />
              </div>
              <br/><br/>
              <div>
                  <strong>입양하려는 이유</strong>&nbsp;&nbsp;
                  <input
                      type="text"
                      class='inputBox'
                      name="adoptReason"
                      value={registForm.adoptReason}
                      onChange={onChangeHandler}
                      placeholder=" 입양사유를 입력하세요"
                  />
              </div>
              <br/><br/>
              <div>
                  <strong>가족동의 여부</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="familyAgreeId"
                      name="familyAgree"
                      class="test"
                      value="yes"
                      onChange={onChangeHandler}
                  />  예
                  </label>&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="familyAgreeId"
                      name="familyAgree"
                      class="test"
                      value="no"
                      onChange={onChangeHandler}
                  />  아니오
                  </label>
              </div>
              <br/><br/>
              <div>
                  <strong>반려동물 입양 경험</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="AdoptExperienceId"
                      name="AdoptExperience"
                      class="test"
                      value="yes"
                      onChange={onChangeHandler}
                  />  예
                  </label>&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="AdoptExperienceId"
                      name="AdoptExperience"
                      class="test"
                      value="no"
                      onChange={onChangeHandler}
                  />  아니오
                  </label>
              </div>
              <br/><br/>
              <div>
                  <strong>현재 반려동물을 키우고 계십니까?</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="havePetsId"
                      name="havePets"
                      class="test"
                      value="yes"
                      onChange={onChangeHandler}
                  />  예
                  </label>&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="havePetsId"
                      name="havePets"
                      class="test"
                      value="no"
                      onChange={onChangeHandler}
                  />  아니오
                  </label>
              </div>
              <br/><br/>
              <div>
                  <strong>주거 형태</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="houseId"
                      name="house"
                      class="test"
                      value="singleFamilyHouse"
                      onChange={onChangeHandler}
                  />  단독주택
                  </label>&nbsp;&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id='houseId'
                      name="house"
                      class="test"
                      value="MultiFamilyHouse"
                      onChange={onChangeHandler}
                  />  다세대주택
                  </label>&nbsp;&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="houseId"
                      name="house"
                      class="test"
                      value="Apartment"
                      onChange={onChangeHandler}
                  />  아파트
                  </label>&nbsp;&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="houseId"
                      name="house"
                      class="test"
                      value="Others"
                      onChange={onChangeHandler}
                  />  기타
                  </label>
              </div>&nbsp;&nbsp;
              <br/><br/>
              <div>
                  <strong>이사, 또는 해외로 이주 시 입양한 반려동물은 어떻게 하시겠습니까?</strong>
                  <br/>
                  <input
                      type="text"
                      class='inputBox'
                      name="after"
                      value={registForm.after}
                      onChange={onChangeHandler}
                  />
              </div>
              <br/><br/>
              <hr/>
              <br/>
              <div>
                  <strong>중성화 수술 동의</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="surgeryAgreeId"
                      name="surgeryAgree"
                      class="test"
                      value="yes"
                      onChange={onChangeHandler}
                  />  동의
                  </label>&nbsp;&nbsp;
                  <label><input
                      type="radio"
                      id="surgeryAgreeId"
                      name="surgeryAgree"
                      class="test"
                      value="no"
                      onChange={onChangeHandler}
                  />  동의 안함
                  </label>
              </div>
              <br/><br/>

              <div className="bt-group">
                  <button
                      class="button1"
                      onClick={onClickHdandler}
                  >신청서 제출</button>
                  &nbsp;

                  <button
                      type="reset"
                      class="button1"
                      onClick={ () => window.location.reload(true) }
                  >취 소</button>
              </div>
              
          
          </div>
  );
}

export default AppForm;
