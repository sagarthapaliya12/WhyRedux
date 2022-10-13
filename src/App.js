import {React,useState} from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';


const App = () => {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <>
      <Header setToggle={setToggle} />
      <MainContent toggle={toggle} />
    </>
  );
};

export default App;
