import React from "react";
import { Link } from 'react-router-dom';
 
function Modal(props) {
  function closeModal() {
    props.closeModal();
  }
  
 
  
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        <h1>{props.desc.Name} 소개합니다.</h1>
        <img
          src={props.desc.detail.image}
          style={{ maxWidth: 300 }}
          alt={props.desc.menuName}
        />
        <h3 className="inText">이름 : {props.desc.Name}</h3>
        <h3 className="inText">성별 : {props.desc.gender}</h3>
        <h3 className="inText">발견장소 : {props.desc.place}</h3>
        <h3 className="inText">특징 및 성격 : {props.desc.ref}</h3><br/>
        <Link to={'../AppForm'}><button className="submitButton">입양 신청서 작성하러 가기</button></Link>
      </div>
    </div>
  );
}
 
export default Modal;
