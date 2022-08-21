import React from "react";
import "../component/components/login/Login.css";

function Main () {

  return (
      <div class='intruduce'>

          <div className="intTitle">
              <h1>The Developers of PETMILY</h1>
          </div>

          <div>
      <ul class='fixedclear'>
        <li>
          <div>
              <span>
                <img src="../../images/chu.png" alt=''/>
                <strong>HI !<br/>I AM DEVELOPER CHU</strong>
              </span>
          </div>
        </li>
        <li>
          <div>
              <span>
                  <img src="../../images/sung.png" alt='Tailoring Interior'/>
                  <strong>HI !<br/>I AM DEVELOPER SEONG</strong>
              </span>
          </div>
        </li>
        <li>
          <div>
              <span>
                <img src="../../images/park.png" alt='Pixflow Studio'/>
                <strong>HI !<br/>I AM DEVELOPER PARK</strong>
              </span>
          </div>
        </li>
        <li>
          <div>
              <span>
                <img src="../../images/shin.png" alt='Kaya Skin Care'/>
                <strong>HI !<br/>I AM DEVELOPER SHIN</strong>
              </span>
          </div>
          </li>
      </ul>
    </div>
      </div>
  );
}

export default Main;







