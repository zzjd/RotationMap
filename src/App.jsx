/* eslint-disable radix */
/* eslint-disable camelcase */
/* eslint-disable no-loop-func */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from 'antd';

const App = () => {
  const [datas, setDatas] = useState([]);

  const handleImgsChange = async () => {
    const imgs = document.getElementById('selectImgs').files;
    const tempDatas = [];
    const imgsArray = Object.values(imgs);
    for (let i = 0; i < imgsArray.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(imgsArray[i]);
      reader.onload = function (e) {
        // console.log(e.target.result, 'e.target.result');
        tempDatas.push(e.target.result);
      };
      setDatas(tempDatas);
    }
  };

  return (
    <div className="App">
      <input type="file" id="selectImgs" webkitdirectory multiple onChange={handleImgsChange} />
      <div className="wrapper">
        <div className="box">
          <ul className="imgbox">
            <li className="imgshow">
              <img src="images/1.jpg" alt="" />
            </li>
          </ul>
        </div>
        <div className="next" />
        <div className="last" />
        <div className="dot">
          <ul>
            <li style={{ listStyleType: 'none' }} />
            <li style={{ listStyleType: 'none' }} />
            <li style={{ listStyleType: 'none' }} />
            <li style={{ listStyleType: 'none' }} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
