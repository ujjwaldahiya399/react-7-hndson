/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import Context from "./ContextData";
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import './AddNewStudent.css';
import { addData } from "./Slice";
function AddNewStudent() {
    const bigData =  useSelector((state) => state.dataKey)
    console.log(bigData);    
    const dispatch = useDispatch();                     
//   const DataFromContext = useContext(Context);
  const nav = useNavigate();
  const newObj = {
    name: "",
    age: "",
    course: "",
    batch: "",
  };
  const [someState,setSomeState] = useState(newObj)
console.log(someState);
  const changeHandler = (e) => {
    setSomeState({...someState,[e.target.name]:e.target.value});
    console.log(someState);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addData({someState}))
    // bigData.push(newObj);
    // console.log(bigData)
    nav(-1);
  };
  const cancelBtnHandler = () => {
    nav(-1);
  }
  return (
    <div className="main">
      <div className="uprInpts">
        <input
          name="name"
          onChange={changeHandler}
          type="text"
          placeholder="name"
        />
        <input
          name="age"
          onChange={changeHandler}
          type="number"
          placeholder="age"
        />
      </div>
      <div className="lowerInpt">
        <input
          name="course"
          onChange={changeHandler}
          type="text"
          placeholder="course"
        />
        <input
          name="batch"
          onChange={changeHandler}
          type="text"
          placeholder="batch"
        />
      </div>
      <div className="buttons">
        <button onClick={cancelBtnHandler} className="cancelBtn">Cancel</button>
        <button className="submitBtn" onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
}

export default AddNewStudent;
