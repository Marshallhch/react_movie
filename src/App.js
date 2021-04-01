import React from "react";
import Header from "./components/Header";
import MySection from "./components/Section";
import MyFooter from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <MySection greeting='Hello World!!' code='React' />
      <MyFooter />
    </div>
  );
}

export default App;
