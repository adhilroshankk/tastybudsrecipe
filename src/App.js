import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Fooditems from './pages/Fooditems';
import  Simpleview  from './Simpleview';
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Fooditems/>}></Route>
        <Route path='/Simpleview/:id' element={<Simpleview/>}></Route>
      </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;