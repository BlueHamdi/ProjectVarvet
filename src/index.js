import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Play from './components/Play/Play';
import Practice from './components/Practice/Practice';
import Instruction from './components/Instruction/Instruction';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Quiz from './components/Quiz/Quiz';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <Routes>
  <Route exact path="/instruction" element={<Instruction/>} />
    <Route path="/quiz" element={<Quiz/>} />
    <Route exact path="/practice" element={<Practice/>} />
    <Route path="/instruction" element={<Instruction/>} />
    <Route path='/' element= {<App/>}/>
    <Route path="/play" element= {<Play/>}/>
    <Route path="/practice" element= {<Practice/>}/>
    <Route path= "contact" element= {<Contact/>}/>
    <Route path="/about" element= {<About/>}/>
  </Routes>
 </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
