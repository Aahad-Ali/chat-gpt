// import logo from "./logo.svg";
// import { useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [responce, setResponce] = useState("");
//   // const [prompt,setPrompt] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:5555/chat", { prompt })
//       .then((res) => {
//         setResponce(res.data);
//       })
//       .catch((err) => {
//         console.log("getting error", err);
//       });
//   };

//   return (
//     <div className="main">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={prompt}
//           placeholder="Ask anything......:)"
//           onChange={(e) => setPrompt(e.target.value)}
//         />

//         <button type="submit">Ask</button>
//       </form>
//       <p placeholder="Here will be generate responce"></p>
//     </div>
//   );
// }

// export default App;// "eject": "react-scripts eject"




import {useState} from 'react';
import axios from 'axios';
import CGLogo from './chatGPT.png';
import AppLogo from './app-logo.png';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // communicate with API
    // post input value 'prompt' to API end point 
    axios
      .post("http://localhost:5001/chat", { prompt })
      .then((res) => {
        // console.log(res.data);
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
    
  };

  return (
    <div className="wrapper">
      <img src={AppLogo} alt="" className="app-logo" />	
      <form onSubmit={handleSubmit}>
        <img src={CGLogo} alt="" className={loading ? 'cg-logo loading' : 'cg-logo'} />
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything... :)"
        />
        <button type="submit">Ask</button>
      </form>
      <p className="response-area">
        {loading ? 'loading...' : response}
      </p>
      <div className="footer">~ webstylepress ~</div>
</div>
  );
}

export default App;