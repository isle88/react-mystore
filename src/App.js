import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home />} />
     </Routes>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
