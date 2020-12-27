import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [imgsArray, setImgsArray] = useState([]);
  const [timer, setTimer] = useState(null);
  const [curIndex, setCurIndex] = useState(0);
  const [curImg, setCurImg] = useState(null);

  const handleImgsChange = async () => {
    // 解决“如果curIndex为4，而新选择的图片小于4，就会出错”的问题
    setCurIndex(0);
    const imgs = document.getElementById('selectImgs').files;
    const tempDatas = [];
    for (let i = 0; i < Object.values(imgs).length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(Object.values(imgs)[i]);
      reader.onload = function (e) {
        tempDatas.push(e.target.result);
        setImgsArray(tempDatas);
      };
    }
  };

  const display = () => {
    if (imgsArray.length === 0 || curIndex === imgsArray.length - 1) {
      setCurIndex(0);
    } else {
      setCurIndex(curIndex + 1);
    }
  };

  const nextPlay = () => {
    if (imgsArray.length === 0 || curIndex === imgsArray.length - 1) {
      setCurIndex(0);
    } else {
      setCurIndex(curIndex + 1);
    }
  };

  const lastPlay = () => {
    if (curIndex === 0) {
      setCurIndex(imgsArray.length - 1);
    } else {
      setCurIndex(curIndex - 1);
    }
  };

  useEffect(() => {
    if (imgsArray.length !== 0) {
      clearTimeout(timer);
      setTimer(setTimeout(display, 1500));
      setCurImg(imgsArray[curIndex]);
    }
  }, [curIndex, imgsArray]);

  return (
    <div className="App">
      <input type="file" id="selectImgs" webkitdirectory multiple onChange={handleImgsChange} />
      {imgsArray.length === 0 ? null : (
        <div className="wrapper">
          <div className="box">
            <ul className="imgbox">
              <li className="imgshow">
                <img src={curImg} alt="" />
              </li>
            </ul>
          </div>
          <div className="next" onClick={nextPlay} />
          <div className="last" onClick={lastPlay} />
          <div className="dot" id="dot">
            <ul>
              {imgsArray.map((item, index) => (
                <li
                  key={item}
                  className={curIndex === index ? 'act' : ''}
                  style={{ listStyleType: 'none' }}
                  onClick={() => setCurIndex(index)}
                >
                  <a href="#" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
