import React from "react";
import Header from "./components/header/Header";
import Category from "./components/category/Category";
import Girl from "./img/girl-and-pet.png"
import { useGetByLimitQuery } from "./services/catApi";

function App() {
  const {data, isSuccess, error, isError} = useGetByLimitQuery();
  isError && console.log(error)
  isSuccess && console.log(data)
  return (
    <div className="App">
     <Category></Category>
     <div className="rigt_bcg"><img className='rigth' src={Girl}></img></div>
    </div>
  );
}

export default App;
