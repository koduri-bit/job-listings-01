
import classes from './App.module.css';

import React from "react";
import Header from "./components/Layout/Header";
import Joblist from "./components/JobList/JobList";

function App() {



  const styles = classes['app-contianer']

  return (
    <div className={styles}>
      <Header/>
      <Joblist/>
    </div>
  );
}

export default App;
