import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    studentArr : [
       { name: "Ujjwal", age: 22, course: "fullStack", batch: "EA22",id:1 },
       { name: "Vishal", age: 21, course: "backend", batch: "EA21",id:2 },
       { name: "shal", age: 21, course: "frontend", batch: "EA21",id:3 },
       { name: "vihaka", age: 21, course: "AWS", batch: "EA21",id:4 },
    ],
    // studentInfo: {
    //     name: "",
    //     age:"",
    //     course:"",
    //     batch:""
    // }
  },
//   initialState: [
//     { name: "Ujjwal", age: 22, course: "fullStack", batch: "EA22" },
//     { name: "Vishal", age: 21, course: "backend", batch: "EA21" },
//     { name: "shal", age: 21, course: "frontend", batch: "EA21" },
//     { name: "vihaka", age: 21, course: "AWS", batch: "EA21" },
//   ],
  reducers: {
    editData: (state, action) => {
      // reducer function for updating state
      console.log(action.payload.currData);
      state.studentArr[action.payload.index] = action.payload.currData;  // chk indx value    
      return state;
    },
    addData:(state, action) => {
        console.log(state.studentArr.push(action.payload.someState));
        // return state;
        console.log(action.payload.someState)
    }
  },
});
export const { editData,addData } = dataSlice.actions;
export default dataSlice.reducer;
