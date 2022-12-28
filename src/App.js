import './App.css';
import Section from './Components/Section';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import { useState } from 'react';
function App() {
const [count,setCount] = useState(0);
const [add,setAdd] = useState(false);
const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="App">
      <Navigation data={{count,setCount}}/>
      <Header/>
      <Section data={{count,setCount,add,setAdd,ratingValue,setRatingValue}}/>
      <Footer/>
    </div>
  );
}
export default App;