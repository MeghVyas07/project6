import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
function App() {
  const [color, setcolor] = useState("#c0c0fc")
  const [mode, setmode] = useState("white");
  const [mode2, setmode2] = useState("dark");
  const [alert, setalert] = useState(null);
  document.body.style.backgroundColor = `${color}`
  function seta(msgs, type) {
    setalert({
      msg: msgs,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  function darkmode() {
    if (mode === "dark") {
      setmode("light");
      setmode2("dark");
      setcolor("#c0c0fc");
      seta("light mode enabled", "Success! ");
    } else {
      setmode("dark");
      setmode2("light");
      setcolor("#00002e");
      seta("dark mode enabled", "Success! ");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="React" mode={mode} mode2={mode2} darkmode={darkmode} />
        <Alert alert={alert} seta={setalert} />
        {/* <About/> */}
        <Routes>
          <Route
            path="/"
            element={
              <Form
                seta={seta}
                heading="Enter Text Here"
                mode={mode}
                mode2={mode2}
                color={color}
              />
            }
          />
          <Route path="/about" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
