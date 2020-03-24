import React, {Component} from 'react';
import Sessions from "./Components/Sessions/Sessions";
import routes from './routes';
import './App.css';

const sessionData = {
  IHC: [
    {
      patientName: "Susan",
      sessionStartTime: new Date (),
      hospital: "IHC"
    }
  ],
  Boston: [
    {
      patientName: "Karen",
      sessionStartTime: new Date (),
      hospital: "Boston"
    }
  ]
}

function App() {

  return (
    <div className="App">
      {routes}
      {/* <Sessions data={sessionData}/> */}
    </div>
  );
}

export default App;
