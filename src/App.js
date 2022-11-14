import React from 'react';
import './App.css';
import { increment, decrement } from './store/countSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, getPost } from './store/postSlice';
import axios from 'axios';


function App() {
  const dispatch = useDispatch()
  const countValue = useSelector((state) => state.count);
  const postData = useSelector((state) =>state.post);



  // console.log("postData", postData)

  const getData = () => {

    dispatch(fetchPost())
  }
 
  return (
    <div className="App">

      <h1>{countValue}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>

      <hr />

      <button onClick={() => getData()}>getData</button>
      {
        postData?.map((post)=>{
        console.log("post", post)
          return <h6>{post.title}</h6>
        })
      }
     
    </div>
  );
}

export default App;
