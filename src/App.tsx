import React from "react";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
// <Footer/>
export default App;
