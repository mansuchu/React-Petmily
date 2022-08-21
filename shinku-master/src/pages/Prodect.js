import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Prodect.css";
import ProdectItem from "./ProdectItem.js";
import { useNavigate } from "react-router-dom";
import Modal from "./prodectItemDetailModal";

const Prodect = () => {
  const [prodect, setProdect] = useState([]);
  const [searchProdect, setSearchProdect] = useState([]);
  const [detailModal, setDetailModal] = useState(false);
  const [currentSelect, setCurrentSelect] = useState({});
  

  useEffect(() => {
    axios.get("http://localhost:4000/menu").then((res) => {
      setProdect(res.data);
      setSearchProdect(res.data);
    });
  }, []);

  const handleChange = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);



      if (e.target.value === "") {
        setSearchProdect(prodect);
        return;
      }

      let tempList = [];



      for (let i = 0; i < prodect.length; i++) {
        if (prodect[i].place === e.target.value) {
          tempList.push(prodect[i]);
        }

      }

      setSearchProdect(tempList);

    }      



  }


  const parentsFunction = (e) => {
    setDetailModal(true);
    setCurrentSelect(e);
    
    console.log(e);
  };

  return (
    <>
      <p class="middle">
        <div>
          <input
            onKeyDown={handleChange}
            className="searchInput"
            type="text"
            placeholder="지역을 입력해주세요."
          />

        </div>
      </p>
      <div className="formProdect">
        <h1 style={{ padding: "3%", textAlign: "center" }}>
          PETMILY
          <br />
          INTRODUCE
        </h1>
        {searchProdect.map((item, idx) => (
          <ProdectItem prodect={item} key={idx} parentsFunc={parentsFunction}/>
        ))}
        
      {detailModal && (
        <Modal desc={currentSelect} closeModal={() => setDetailModal(!detailModal)} />
      )}
      </div>
    </>
  );
};

export default Prodect;
