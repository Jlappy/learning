// import { useState } from "react";
// import "./assets/sass/App.scss";
// import WellcomeReact from "./components/WellcomeReact";
// import CssScope from "./components/CssScope";

// interface IStudent {
//   name: string;
//   class: string;
//   dob: string;
// }

// function App() {
//   const [count, setCount] = useState<number>(0);
//   const [studentInfo, setStudentInfo] = useState<IStudent>({
//     name: "Abc",
//     class: "C29",
//     dob: "2008",
//   });
//   const [nameValue, setNameValue] = useState<string>("");
//   const onChangeName = (e: any) => {
//     setNameValue(e.target.value);
//   };

//   const updateName = () => {
//     setStudentInfo({
//       ...studentInfo,
//       name: nameValue,
//     });
//     setNameValue("");
//   };
//   // const [count, setCount] = useState<number>(1000);
//   // const todoList = [
//   //   { title: "A", status: "todo" },
//   //   { title: "B", status: "done" },
//   // ];
//   // let a: number = 0;
//   // const countUp = () => {
//   //   a = a + 1;
//   //   console.log("a", a);
//   // };
//   //   console.log('re-render');

//   const countUp = () => {
//     setCount(count + 1);
//   };
//   let a: number = 0;

//   const checkEmit = (param: string) => {
//     console.log(param);
//   };

//   return (
//     // <div className="app-container">
//     //   {count}
//     //   <button onClick={countUp}>Up</button>
//     //   {/* <p>{ count % 2 === 0 ? ' event' : 'odd'}</p> */}
//     //   {count % 2 === 0 ? <p>event</p> : <p>odd</p>}
//     //   {/* {a} */}

//     //   {todoList.map((item, index) => (
//     //     <div className="list" key={index}>
//     //       <span>{item.title}: </span>
//     //       <span>{item.status}</span>
//     //     </div>
//     //   ))}
//     // </div>
//     <div className="app-container">
//       <div className="studenInfo">
//         <div className="group-input">
//           <input
//             type="text"
//             value={nameValue}
//             onChange={onChangeName}
//             placeholder="dasd"
//           />
//           <button onClick={updateName}>Update</button>
//         </div>
//         <div>
//           <p>{studentInfo.name}</p>
//           <p>{studentInfo.class}</p>
//           <p>{studentInfo.dob}</p>
//         </div>
//       </div>

//       <br />
//       {count}
//       <button onClick={countUp}>Up</button>
//       <div>
//         <p>{count % 2 === 0 ? " event" : "odd"}</p>
//       </div>
//       <WellcomeReact initNumber={a} checkEmit={checkEmit}>
//         123123fsafsda
//       </WellcomeReact>
//       <br />
//       <CssScope></CssScope>
//     </div>
//   );
// }

// export default App;
