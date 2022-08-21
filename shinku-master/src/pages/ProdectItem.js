import React from "react";

const ProdectItem = ({prodect, parentsFunc}) => {
  return (
    <div className="menuItemHea">
      <div className="menuItem" onClick={() => parentsFunc(prodect)}>
        <img
          className="pupy"
          src={prodect.detail.image}
          alt={prodect.menuName}
        />
        <h3 className="inText">이름 : {prodect.Name}</h3>
        <h3 className="inText">발견장소 : {prodect.place}</h3>
      </div>
    </div>
  );
};

export default ProdectItem;
