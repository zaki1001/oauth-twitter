import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Body from "./components/Body";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Fragment>
       <Header />  
      <Body />
     </Fragment>
    </div>
  );
}

export default App;
