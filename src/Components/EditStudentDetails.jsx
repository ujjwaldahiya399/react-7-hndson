import React,{useState} from 'react'
// import Context from "./ContextData";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddNewStudent.css";
import { editData } from "./Slice";
function EditStudentDetails() {
  const dispatch = useDispatch();
  // const DataFromContext = useContext(Context);
  const bigData = useSelector((state) => state.dataKey);
    console.log(bigData);
  const navigation = useNavigate();
  const dataFromLink = useLocation().state.data;
  console.log(dataFromLink);
  const [currData,setCurrData] = useState(bigData.studentArr)
  const currentData = {
    name: bigData.studentArr[dataFromLink].name,
    age: bigData.studentArr[dataFromLink].age,
    course: bigData.studentArr[dataFromLink].course,
    batch: bigData.studentArr[dataFromLink].batch,
  };
  console.log(currentData);
  const changeHandler = (e) => {
    setCurrData({...currData,[e.target.name]:e.target.value});
  };
  const submitHandler = () => {
    dispatch(editData({ currData, dataFromLink }));
    // bigData[dataFromLink] = currentData;

    navigation(-1);
  };
  const cancelBtnHandler = () => {
    navigation(-1);
  };
  return (
    <div className="main">
      <div className="uprInpts">
        <input
          name="name"
          onChange={changeHandler}
          type="text"
          placeholder={currData[dataFromLink].name}
        />
        <input
          name="age"
          onChange={changeHandler}
          type="number"
          placeholder={currData[dataFromLink].age}
        />
      </div>
      <div className="lowerInpt">
        <input
          name="course"
          onChange={changeHandler}
          type="text"
          placeholder={currData[dataFromLink].course}
        />
        <input
          name="batch"
          onChange={changeHandler}
          type="text"
          placeholder={currData[dataFromLink].batch}
        />
      </div>
      <div className="buttons">
        <button onClick={cancelBtnHandler} className="cancelBtn">
          Cancel
        </button>
        <button className="submitBtn" onClick={submitHandler}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditStudentDetails;
