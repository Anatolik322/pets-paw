import React from "react";
import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Girl from "./img/girl-and-pet.png"
function App() {
  return (
    <div className="App">
     <Category></Category>
     <div className="rigt_bcg"><img className='rigth' src={Girl}></img></div>
    </div>
  );
}

export default App;
