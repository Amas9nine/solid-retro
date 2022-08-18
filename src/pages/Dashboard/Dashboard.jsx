// import { db } from "../../firebase/Firebase";
// import { collection, addDoc } from "firebase/firestore";

import { removeUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux/es/exports";
// import { useState, useEffect } from "react";
export default function Dashboard() {
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.setItem("user", JSON.stringify({}));
    dispatch(removeUser());
  };
  // example how send and how to get data from firebase for my team
  // const [name, setTitle] = useState("");
  // const [skill, setSkill] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (name !== "") {
  //     await addDoc(collection(db, "users"), {
  //       name,
  //       position: Math.random(),
  //       skill,
  //       completed: false
  //     });
  //     setTitle("");
  //     setSkill("");
  //   }
  // };
  // //
  // const [data, setData] = useState([]);
  // const [laoader, setLoader] = useState(true);
  // function getData() {
  //   db.collection("users")
  //   .orderBy("id","asc")
  //     .get()
  //     .then((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push({
  //           ...doc.data(),
  //           id: doc.id
  //         });
  //       });
  //       setData(items);
  //       setLoader(false);
  //     });
  // }
  // useEffect(() => {
  //   getData();
  // }, [name]);
  return (
    <>
      <h1>hello user</h1>
      <button onClick={logout}>LOGOUT</button>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)} />
        <button>Add</button>
      </form>
      {laoader === false &&
        data.map((dev) => (
          <div key={dev.id}>
            <p>name: {dev.name}</p>
            <p>skill: {dev.skill}</p>
          </div>
        ))} */}
    </>
  );
}
