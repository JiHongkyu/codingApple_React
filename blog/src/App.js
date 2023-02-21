/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] } <span className='like' onClick={() => { 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } <span></span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] } <span></span></h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      
    </div>
  );
}

export default App;
