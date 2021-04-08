import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import FormatName from './jsxintro';
// import PracticeComp from './functcomp';
// import PracticeComp2 from './classcomp';
// import Subscribe from './subscribe';
// import FunctionClick from './handler';  
// import EventBind from './eventbind';
// import UserGreeting from './conditional'
import reportWebVitals from './reportWebVitals';
import NameList from './listrendering';

ReactDOM.render(
  <React.StrictMode>
    <NameList />
    {/* <UserGreeting /> */}
    {/* <EventBind /> */}
    {/* <FunctionClick /> */}
    {/* <Subscribe /> */}
    {/* <FormatName />
    <PracticeComp book="Harry Potter" author="J.K. Rowling">
      <p>It is a fictional novel.</p>
      </PracticeComp>
    <PracticeComp book="The Da Vinci Code" author="Dan Brown">
      <button>Read</button>
    </PracticeComp>
    <PracticeComp book="Norwegian Wood" author="Haruki Murakami"/>
    <PracticeComp2 book="Harry Potter" author="J.K. Rowling" />
    <PracticeComp2 book="The Da Vinci Code" author="Dan Brown" />
    <PracticeComp2 book="Norwegian Wood" author="Haruki Murakami" /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
