import './App.css';
import Sample from './Sample';
import Bestseller from './components/Bestseller';
import Burger from './components/Burger';
import Cardsproduct from './components/Cardsproduct';
import Feturepost from './components/Feturepost';
import Footer from './components/Footer';
import Furniture from './components/Furniture';
import Header from './components/Header';
import Popular from './components/Popular';
import Productitem from './components/Productitem';
import Slider from './components/Slider';




function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <div className='container-fluid'>
        <Productitem/>
        <Furniture/>
        <Popular/>
        <Bestseller/>
        <Burger/>
        <Cardsproduct/>
        <Feturepost/>
        </div>

        <Footer/>
        {/* <Sample/> */}


    </div>
  );
}

export default App;
