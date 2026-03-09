import React, { useState } from "react";
import Page_1 from "./Page_1";
import Page_2 from "./Page_2";
import { data, Navigate, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [Mes, setMes] = useState("");
  const [Data, setData] =useState("");

  function submit() {
fetch("http://localhost:5000/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: Mes,
  }),
})
  .then((res) => res.json())
  .then((data) => {
      setData(data)

    navigate("/output");
  });
  }
  return (
   <>
    <Routes>
      <Route path="/" element={<Navigate to ="/input"/> } />
      <Route path="/input" element={<Page_1 Mes={Mes} setMes={setMes} onClick={submit}/>} />
      <Route path="/output" element={<Page_2 Mes={Mes} Data={Data}/>}/>
    </Routes>
   </>
  );
};

export default App;
//  <div>
//       <Page_1 Mes={Mes} setMes={setMes} onClick={submit} />
//       <Page_2 />
//     </div>